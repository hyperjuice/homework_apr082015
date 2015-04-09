var bcrypt = require("bcrypt");
var salt = bcrypt.genSaltSync(10);

module.exports = function (sequelize, DataTypes){
  var User = sequelize.define('User', { // like a constructor
    email: {                  // an attribute
      type: DataTypes.STRING, 
      unique: true, 
      validate: {
        len: [6, 30],
      }
    },
    passwordDigest: {         // an attribute
      type:DataTypes.STRING,
      validate: {
        notEmpty: true
      }
    }
  },

// order of instance and class methods doesn't matter
// db.User.xxxxx --> whenever u see this, it's a class method bc it acts on the whole database (capital U)

  {
    instanceMethods: {
      checkPassword: function(password) {
        return bcrypt.compareSync(password, this.passwordDigest);
      }                                     // ^ this is the password currently stored in the dbase 
    },                                      //   so the 'password' b4 it is the password that is typed in by user
    classMethods: {                         //   and this is for each instance of a user (ie, a row in the dbase).
      encryptPassword: function(password) {           // the class methods: do something to the entire class or
        var hash = bcrypt.hashSync(password, salt);   // to find one thing in the class.
        return hash;
      },
      createSecure: function(email, password) {
        if(password.length < 6) {
          throw new Error("Password too short");
        }
        return this.create({
          email: email,
          passwordDigest: this.encryptPassword(password)  //encryptPassword is called from above
        });

      },
      authenticate: function(email, password) {
        // find a user in the DB by email, first, which is why we have Line 8
        return this.find({
          where: {
            email: email
          }
        }) 
        .then(function(user){
          if (user === null){
            throw new Error("Username does not exist");
          }
          else if (user.checkPassword(password)){       // once it finds the user/email, then it runs checkPassword
            return user;  // this is the user instance  // user is the user that has just been retrieved from the dbase
          }                                             // and therefore we are on an instance, bc it's one user

        });
      }

    } // close classMethods
  }); // close define user
  return User;
}; // close User function
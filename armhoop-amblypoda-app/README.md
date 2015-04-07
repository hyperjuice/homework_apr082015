# Making Headlines
## ExpressJS

### Background

<img src="daily_planet.jpg">

Weclome to the daily planet, we need your superhuman developer skills to help us share news with the world. We've seen that you have some express knowledge and need you to make us a mock website as soon as possible.

### App Set Up

First, you'll need to fork and clone this repository.
```bash
git clone https://<path_to_forked_repo_on_github>
```

### DB Set Up

After you clone the repo, you'll want to cd into the repo directory (`cd express_labs/baalshem-adrenotropic-app`) and then run the following commands at a bash prompt (you may want to copy and paste to make sure you get it right:

```bash
createdb baalshem-adrenotropic-app && psql -d baalshem-adrenotropic-app -a -f baalshem-adrenotropic-db.sql
```

This command will initialize the database and put some starter data in for you.

### What You Will Be Responsible For:

If you wish, you can start with your weekend lab instead of starting with this repo, but you may find its easier to start with what I've prepared rather than copying and pasting all the views over.

#### Creating the Models

You'll have to create the two models we need using the `sequelize` command line tools. The models we'll need are:

  - Article
      + Attributes: title, content
  - Author
      + Attributes: first_name, last_name

Figure out how to generate these models using `sequelize model:create` and then continue to the associations (explained next).

The relationship we're going to be creating between them is a One-to-many relationship. That is, an *Author* `hasMany` *Articles*, and an *Article* `belongsTo` an *Author*.

To set up the relationship, you'll need to edit the models that `sequelize` creates for you.

#### Routes

You'll need the following `article` routes:

* `get`  `/articles` to display a summary of each article.
* `get` `/articles/new` to get a form to save a new article
    - Note that I've already created the views and the `articles/new.ejs` view includes a form that allows the user to select the author for each new article using a drop-down menu.
* `post` `/articles` to save an article
* `get` `/articles/:id` to find an article by id and displaya it
* `get` `/articles/:id/edit` to edit a specific article
    - This is bonus work to some degree, but you'll want to take a look out how I built `articles/new.ejs` to discover how to create an edit form that allows you to change the author who wrote an article.
    - Note: If you do this part, you'll also need an update route:
    `put` `/articles/:id`

You'll need the following `author` routes:

  - `get` `/authors` to display all authors in db
  - `get` `/authors/new` to render the form to add a new author
  - `post` `/authors` to save a new author
  - `get` `/authors/:id` to find an author by id in the database

You'll need the following `site` related routes:

* `get` `/` serve the homepage of your site.
  - This route should point to `views/site/index.ejs` and I'd like to see everyone generate some basic navigational links to help people get to the following URLs:
    + `/articles`
    + `/authors`


* `get` `/about` serve a static about daily planet page.
* `get` `/contact` serve a static `contact` page.

#### Views

Note that I have already created the views for you including the forms and layouts.

All your article related views are in an `views/articles` folder. Each article should utilize `ejs` to render the page. Your author views are in the `views/authors` folder. Your `site` related views `index`, `about`, and `contact` are in the folder `views/site`. 

You'll want to review the EJS files that go with each route to figure out what query you want to build with `sequelize` and what variables to pass through using `res.render()`.


#### Bonus

Include some navigation links on each page to help the user navigate the site.

### Note
Please [let me know](mailto:brett.levenson@ga.co) if there are any issues with the set up instructions or you have questions about the lab. I'll be on Slack for a while.

> Last updated by Brett Levenson on April 6, 2015.
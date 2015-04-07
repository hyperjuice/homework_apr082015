#!/bin/bash
# Generate a random name from the /usr/share/dict/words dictionary that combined
# two words to make an app name

# To use this script do:
# sh app_creator.sh - runs generator and prints result
# sh app_creator.sh 1 - runs generator, prints result, and auto-creates a directory with the new app name

# or if you want to run this without having to type 'sh', you can:
# chmod +x app_creator.sh - sets execution permissions on the script, so you can then just do
# ./app_creator.sh

a=() # set up an array to store the words
i=0

while read line
do
	a[i]=$line
	i=$(($i+1))
done < "/usr/share/dict/words"


# Now select something random

# Seed random generator
RANDOM=$$$(date +%s)

# Get random expression...
selectedexpression=${a[$RANDOM % ${#a[@]} ]}

# Add selected expression to string
randomstring="${selectedexpression}-"

# # Wait an half hour
# sleep 1 # It's one second for debugging, dear SOers

# Now add one more word

selectedexpression=${a[$RANDOM % ${#a[@]} ]}
randomstring="${randomstring}${selectedexpression}"

# now convert to lowercase and then store the entire thing in app_name 
app_name=$(echo "${randomstring}-app" | tr '[:upper:]' '[:lower:]')

# output the random string we're going to use
echo "$app_name"

# Now if the $1 parameter = "1" then add a directory with that name
if [ "$1" = "1" ]; then
	mkdir "$app_name"
fi










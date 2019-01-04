## Introduction
Basic template for a node.js project prepared to be deployed on [Heroku](https://heroku.com). 

As a demo setup this project also includes a folder for static files - `resources/` folder, currently hosting a single `css/` sub-folder whose contents (css files...) are run through a gulp task for minifacation (see `gulpfile.js` in the root folder) and copied over to `public/css` folder. In a similar manner JavaScript files and image files can be added to extend the application.

## Getting started

**Prerequisites**
- An account on [Heroku](https://heroku.com) platform.

**Installation**
 1. Clone / Fork this repository.
 2. Move into the directory.
 3. ```heroku create``` to create a Heroku application (this might ask you to log in).
 4. ```git push heroku master``` to deploy to Heroku.
 5. ```heroku open``` to see the webpage working in a browser.
 6. ???
 7. Profit.

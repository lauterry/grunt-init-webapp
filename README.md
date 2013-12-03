grunt-init-webapp
==================

Scaffold a Web Application project fitted to your needs using modern Front End tooling.

<img height="300" align="left" src="http://bower.io/img/bower-logo.png">

<img height="300" align="left" src="http://gruntjs.com/img/grunt-logo.svg">

## Why is grunt-init-webapp awesome ?
* Interactive way to scaffold your web app project to fit your needs. You need to lint your CSS ? Just answer a few questions asked to you by `grunt-init-webapp`
* You assets dependencies are handled by [bower](http://www.bower.io)
* Do not handle manually one index.html for development and one index.html for production thanks to [grunt-usemin](https://github.com/yeoman/grunt-usemin)
  Automatically replace your scripts and stylesheets declaration by the minified version when packaging your app for production.
* Watch for you assets changes to automatically run `jshint` or `csslint` on your code
* Livereload is out of the box. No more F5
* Automatically output a hash in your assets file name for caching purpose.

## Prerequisites
1. Install [node and npm](http://www.nodejs.org)
2. Install **Grunt** running `npm install -g grunt-cli`
3. Install **Bower** running `npm install -g bower`
4. Install **grunt-init** running `npm install -g grunt-init`
5. Install this template in your `~/.grunt-init/` directory (`%USERPROFILE%\.grunt-init\` on Windows)
   by running `git clone https://github.com/lauterry/grunt-init-webapp.git ~/.grunt-init/webapp`

## Generate your Angular project
1. Create a new folder for your project
2. Open a terminal and run `grunt-init webapp` in your project folder
3. Answer the questions prompted to you to scaffold your project to your needs
4. Run npm `npm install && bower install && grunt bower-install` to download your projet dependencies
5. Run `grunt connect` to serve your static assets and open [http://localhost:8888](http://localhost:8888)
6. Your should see **2** displayed in your browser
7.  Voilà ! Your Angular project is ready !

## Developement
1. Run `grunt connect` to start a static web server. Open [http://localhost:8888](http://localhost:8888).
   Livereload will be automatically active meaning that you can see your modification on the browser without hitting F5.
2. Run `grunt watch` to run `jshint` and `csslint` on your file when they change

## Package for Production
* Run `grunt` to prepare your static assets for production. Your package will be generated in a `dist` folder
   Your javascripts and stylesheets will be concatenated, minified and versionned.

/*
 * grunt-init-angular
 *
 * Copyright (c) 2013 Thierry LAU
 * Licensed under the MIT license.
 */

'use strict';

// Basic template description.
exports.description = 'Create an Web App project, including tests, with Grunt and Bower';

// Template-specific notes to be displayed before question prompts.
exports.notes = 'Note that most templates generate their files in the current directory, so be sure to change to a new directory first if you don\'t want to overwrite existing files.'.cyan;

// Template-specific notes to be displayed after question prompts.
exports.after = 'You should now install project dependencies with _npm '.cyan +
    'install_ and _bower install_. After that, you may execute project tasks with _grunt_. For '.cyan +
    'more information about installing and configuring Grunt, please see '.cyan +
    'the Getting Started guide:'.cyan +
    '\n\n' +
    'http://gruntjs.com/getting-started'.cyan;

// Any existing file or directory matching this wildcard will cause a warning.
exports.warnOn = '';

// The actual init template.
exports.template = function(grunt, init, done) {

    init.process({}, [
        init.prompt('name', 'MyWebApp'),
        init.prompt('title', 'My Web App'),
        init.prompt('version', '0.0.1'),
        init.prompt('description', 'The best web app ever'),
        {
            name : 'gitignore',
            message : 'Add .gitignore ?'.blue,
            default : 'y/N'
        },
        {
            name : 'csslint',
            message : 'Lint your CSS ?'.blue,
            default : 'y/N'
        },
        {
            name : 'revision',
            message : 'Add revision hash in your assets name for caching purpose ?  app.js becomes 8664d46sf64.app.js'.blue,
            default : 'y/N'
        }
    ], function(err, props) {

        var bowerContent,
            packageContent,
            files = init.filesToCopy(props);

        /***************************
         * PROCESS AND COPY FILES  *
         ***************************/

        if(/n/i.test(props.gitignore)){
            delete files['.gitignore'];
        }

        props['csslint'] = !/n/i.test(props.csslint);

        props['revision'] = !/n/i.test(props.revision);

        init.copyAndProcess(files, props, {noProcess: '.gitignore'});

        /**************************
         *  GENERATE PACKAGE.JSON *
         **************************/

        packageContent = {
            name: props.name,
            version: props.version,
            description: props.description,
            devDependencies: {
                "grunt-usemin": "~2.0.0",
                "grunt-contrib-clean": "~0.5.0",
                "grunt-contrib-concat": "~0.3.0",
                "grunt-contrib-uglify": "~0.2.7",
                "grunt-contrib-cssmin": "~0.7.0",
                "grunt-contrib-watch": "~0.5.3",
                "grunt-bower-task": "~0.3.4",
                "grunt-contrib-copy": "~0.4.1",
                "grunt-contrib-jshint": "~0.7.2",
                "grunt-contrib-connect": "~0.5.0",
                "load-grunt-tasks": "~0.2.0",
                "grunt-bower-install": "~0.6.1",
                "grunt-rev": "~0.1.0"
            }
        };

        init.writePackageJSON('package.json', packageContent);


        /***********************
         * GENERATE BOWER.JSON *
         ***********************/

        bowerContent =  {
            name: props.name,
            version: props.version,
            description: props.description
        };

        init.writePackageJSON('bower.json', bowerContent);

        done();
    });

};

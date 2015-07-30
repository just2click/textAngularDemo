/* Exports a function which returns an object that overrides the default &
 *   plugin file patterns (used widely through the app configuration)
 *
 * To see the default definitions for Lineman's file paths and globs, see:
 *
 *   - https://github.com/linemanjs/lineman/blob/master/config/files.coffee
 */
module.exports = function(lineman) {
  //Override file patterns here
  return {
    js: {
      vendor: [
        "node_modules/auill/dist/quill.js",
        "vendor/js/jquery.js",
        "vendor/js/angular.js",
        "node_modules/angular-animate/angular-animate.js",
        "node_modules/angular-bootstrap/ui-bootstrap.js",
        "node_modules/angular-bootstrap/ui-bootstrap-tpls.js",
        "node_modules/angular-sanitize/angular-sanitize.js",
        "node_modules/angular-strap/dist/angular-strap.js",
        "vendor/bower/angular-minieditor/angular-minieditor.js",
        "vendor/bower/textAngular/dist/textAngular-rangy.min.js",
        "vendor/bower/textAngular/dist/textAngular-sanitize.min.js",
        "vendor/bower/textAngular/dist/textAngular.min.js",
        "vendor/bower/textAngular/dist/textAngularSetup.js",
        "vendor/js/**/*.js"
      ],
      app: [
        "app/js/app.js",
        "app/js/**/*.js"
      ]
    },    
    less: {
      compile: {
        options: {
          paths: [
            "vendor/css/normalize.css",
            "vendor/css/**/*.css", 
            "app/css/**/*.less"
            ]
        }
      }
    },
     webfonts: {
      vendor: "vendor/bower/font-awesome/fonts/*.*",
      root: "webfonts"
     }
  };
};

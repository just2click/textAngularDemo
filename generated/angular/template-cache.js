angular.module("app").run(["$templateCache", function($templateCache) {

  $templateCache.put("about.html",
    "<div class=\"smaller-jumbotron\">\n" +
    "    <h2>Rich Text Editor Squire sampler</h2>\n" +
    "    This is a sample Angular.JS based web application for testing the Squire Rich Text Editor\n" +
    "    <hr />\n" +
    "</div>"
  );

  $templateCache.put("home.html",
    "<div>\n" +
    "\t<div id=\"home\" >\n" +
    "\t\tHome, select an RTE to preview\n" +
    "\t</div>\n" +
    "</div>\n"
  );

  $templateCache.put("minieditor.html",
    "<div>\n" +
    "\t<div id=\"minieditor-container\" class=\"preview-text-container\">\n" +
    "\t\t<minieditor options=\"{id: 'minieditor', class: 'minieditor', height: '200', menus: menus}\" ng-model=\"content\"></minieditor>\n" +
    "\t</div>\n" +
    "\t<br/>\n" +
    "\t\n" +
    "\t<label>Output:</label>\n" +
    "\t<div id=\"output\" class=\"preview-text-container\">\n" +
    "\t\t<textarea ng-model=\"content\"></textarea>\t\n" +
    "\t</div>\n" +
    "</div>\n"
  );

  $templateCache.put("quill.html",
    "<div style=\"width: 500px; height: 300px;\">\n" +
    "\t<ng-quill-editor ng-model=\"message\" toolbar=\"true\" link-tooltip=\"true\" image-tooltip=\"true\" toolbar-entries=\"font size bold list bullet italic underline strike align color background link image\" editor-required=\"true\" required=\"\" error-class=\"input-error\"></ng-quill-editor>\n" +
    "</div>"
  );

  $templateCache.put("settings.html",
    "Settings"
  );

  $templateCache.put("textangular.html",
    "<div>\n" +
    "\t<div class=\"preview-text-container\">\n" +
    "\t\t<text-angular ng-model=\"content\"></text-angular>\n" +
    "\t</div>\n" +
    "\t<br/>\n" +
    "\t\n" +
    "\t<label>Output:</label>\n" +
    "\t<div class=\"preview-text-container\">\n" +
    "\t\t<textarea ng-model=\"content\"></textarea>\t\n" +
    "\t</div>\n" +
    "</div>\n"
  );

}]);

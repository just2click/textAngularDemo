angular.module('app')
  .controller('TextangularController',
      function($scope) {
        $scope.content = 'This a test!';        
      }
    ).filter(
      'html', ['$sce', function ($sce) {
        return function (text) {
          return $sce.trustAsHtml(text);
        };
      }]
    )
    .config(function($provide) {
      // this demonstrates changing the classes of the icons for the tools for font-awesome v3.x
      // $provide.decorator('taTools', ['$delegate', function(taTools){
      //     taTools.bold.iconclass = 'icon-bold';
      //     taTools.italics.iconclass = 'icon-italic';
      //     taTools.underline.iconclass = 'icon-underline';
      //     taTools.ul.iconclass = 'icon-list-ul';
      //     taTools.ol.iconclass = 'icon-list-ol';
      //     taTools.undo.iconclass = 'icon-undo';
      //     taTools.redo.iconclass = 'icon-repeat';
      //     taTools.justifyLeft.iconclass = 'icon-align-left';
      //     taTools.justifyRight.iconclass = 'icon-align-right';
      //     taTools.justifyCenter.iconclass = 'icon-align-center';
      //     taTools.clear.iconclass = 'icon-ban-circle';
      //     taTools.insertLink.iconclass = 'icon-link';
      //     taTools.insertImage.iconclass = 'icon-picture';
      //     // there is no quote icon in old font-awesome so we change to text as follows
      //     delete taTools.quote.iconclass;
      //     taTools.quote.buttontext = 'quote';
      //     return taTools;
      // }]);      
      
      $provide.decorator('taOptions', ['taRegisterTool', '$delegate', function(taRegisterTool, taOptions){        
        taOptions.classes = {
            focussed: 'focussed',
            toolbar: 'btn-toolbar',
            toolbarGroup: 'btn-group',
            toolbarButton: 'btn btn-default',
            toolbarButtonActive: 'active',
            disabled: 'disabled',
            textEditor: 'form-control',
            htmlEditor: 'form-control'
        };

    taRegisterTool('fontName', {
        display: '<span dropdown style="border: 1px; margin-top: 0; padding: 0;">' + 
          '<button class="btn btn-default dropdown-toggle" dropdown-toggle type="button" ng-disabled="showHtml()">' +
          '   <span><i class="fa fa-font"></i> ▾</span>' +
          '</button>' +
          '<ul class="dropdown-menu">' +
          '   <li ng-repeat="o in options">' +
          '       <a style="font-family: {{o.css}}; width: 100%" ng-click="action($event, o.css)">' +
          '       <i ng-if="o.active" class="fa fa-check"></i>{{o.name}}</a>' +
          '   </li>' +
          '</ul>' +
          '</span>',
        action: function (event, font) {
            return this.$editor().wrapSelection('fontName', font);
        },
        options: [
            { name: 'Sans-Serif', css: 'Arial, Helvetica, sans-serif' },
            { name: 'Serif', css: "'times new roman', serif" },
            { name: 'Wide', css: "'arial black', sans-serif" },
            { name: 'Narrow', css: "'arial narrow', sans-serif" },
            { name: 'Comic Sans MS', css: "'comic sans ms', sans-serif" },
            { name: 'Courier New', css: "'courier new', monospace" },
            { name: 'Garamond', css: 'garamond, serif' },
            { name: 'Georgia', css: 'georgia, serif' },
            { name: 'Tahoma', css: 'tahoma, sans-serif' },
            { name: 'Trebuchet MS', css: "'trebuchet ms', sans-serif" },
            { name: "Helvetica", css: "'Helvetica Neue', Helvetica, Arial, sans-serif" },
            { name: 'Verdana', css: 'verdana, sans-serif' },
            { name: 'Proxima Nova', css: 'proxima_nova_rgregular' }
        ]
    });

    taRegisterTool('fontSize', {
        display: '<span dropdown style="border: 1px; margin-top: 0; padding: 0;">' + 
          '<button class="btn btn-default dropdown-toggle" dropdown-toggle type="button" ng-disabled="showHtml()">' +
          '   <span><i class="fa fa-text-height"></i> ▾</span>' +
          '</button>' +
          '<ul class="dropdown-menu">' +
          '   <li ng-repeat="o in options">' +
          '       <a class="checked-dropdown" style="font-size: {{o.css}}; width: 100%" ng-click="action($event, o.value)">' +
          '       <i ng-if="o.active" class="fa fa-check"></i>{{o.name}}</a>' +
          '   </li>' +
          '</ul>' +
          '</span>',      
        action: function (event, size) {
            return this.$editor().wrapSelection('fontSize', parseInt(size));
        },
        options: [
            { name: 'xx-Small', css: 'xx-small', value: 1 },
            { name: 'x-Small', css: 'x-small', value: 2 },
            { name: 'Small', css: 'small', value: 3 },
            { name: 'Megium', css: 'medium', value: 4 },
            { name: 'Large', css: 'large', value: 5 },
            { name: 'x-Large', css: 'x-large', value: 6 }
        ]
    });
                
        taRegisterTool('insertBoardLink', {
            tooltiptext: 'Add a link to your board with your title',
            buttontext: 'Insert board link',
            action: function(){
        			var description;
        			description = window.prompt('Add a link to your board with your title', 'Click Here!');
        			if (description && description !== '') {
        				var embed = '<span>{!boardLink:' + description + '}<sapn>'; 
        				this.$editor().wrapSelection('insertHTML', embed, true);
        			}
            }
        });
        
        taRegisterTool('insertPredefinedField', {
            tooltiptext: 'Add a pre-defined field',
            buttontext: '',
            display: '<span dropdown style="border: 1px; margin-top: 0; padding: 0; ">' + 
              '<button class="btn btn-default dropdown-toggle" dropdown-toggle type="button" ng-disabled="showHtml()">' +
              '   <span>Insert field ▾</span>' +
              '</button>' +
              '<ul class="dropdown-menu">' +
              '   <li ng-repeat="o in options">' +
              '       <a ng-click="action(o)">{{o.name}}</a>' +
              '   </li>' +
              '</ul>' +
              '</span>',
            options: [
              { name: 'First name', value: 'FName' },
              { name: 'Last name', value: 'LName' },
              { name: 'Company', value: 'Company' }
            ],            
            action: function(option) {
              if (option.name) {
        				var embed = ' <span class="link">[' + option.value + ']</sapn> '; 
        				this.$editor().wrapSelection('insertHTML', embed, true);
              }
            }
        });        
        taOptions.toolbar[1].push('fontName', 'fontSize', 'insertBoardLink', 'insertPredefinedField');
        
        taOptions.toolbar = [
          ['fontName'], ['fontSize'],
          ['bold', 'italics', 'underline'],
      		['ul', 'ol', 'clear'],
      		['indent','outdent'],
      		['html', 'insertLink'],
          ['insertBoardLink'],
          ['insertPredefinedField']
        ];
        
        return taOptions;
    }]);
});
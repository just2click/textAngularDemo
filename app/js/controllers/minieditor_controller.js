angular.module('app')
  .controller('MiniEditorController',
      function($scope) {
        $scope.content = 'This a test!';
                       
        $scope.menus = [
          ['bold', 'italic', 'underline'],
          [' '],
          ['justifyleft', 'justifycenter', 'justifyright'],
          ['insertunorderedlist', 'insertorderedlist'],
          ['indent', 'outdent'],
          ['removeformat', 'createlink']
        ];        
      }
    ).filter(
      'html', ['$sce', function ($sce) {
        return function (text) {
          return $sce.trustAsHtml(text);
        };
      }]
    );
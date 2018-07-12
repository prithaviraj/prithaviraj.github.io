var app = angular.module('dashboard').controller('dashboardCtrl',function($scope,$state){
    $scope.mytodoObj = {};
    $scope.mytodoObj.name = '';
    $scope.mytodoObj.description = '';
    $scope.mytodoObj.checked = false;
    $scope.list=[];

    $scope.show = "false";
    $scope.addData=function(){
        // $scope.obj={};
        // $scope.obj.name=$scope.name;
        //   $scope.obj.Description= angular.copy($scope.Description);
        //   $scope.list.push($scope.obj);
        $scope.list.push(angular.copy($scope.mytodoObj));
        $scope.mytodoObj = {};

      };
      $scope.delete=function($index)
      {
      $scope.list.splice($index,1);
      };
});
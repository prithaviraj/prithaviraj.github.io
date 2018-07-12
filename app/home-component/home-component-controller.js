var app = angular.module('genesisApp').controller('homeCtrl',function($scope,$state){
    $scope.gotoHome = function(){
        $state.go('home');
    };
    $scope.gotoDashboard = function(){
        $state.go('home.dashboard');
    };
    $scope.gotoTeam = function(){
        $state.go('home.team');
    };
    $scope.logout = function(){
        $state.go('login');
    };
    $scope.username=localStorage.username.split('')[0];
    $scope.fusername=localStorage.username;
   
});
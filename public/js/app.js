(function(){
  var myapp = angular.module('sortableApp', ['ui.sortable']);


  myapp.controller('sortableController',['$scope','$http',function ($scope,$http) {

    $scope.list = [];
    $scope.creatingPerf = {};
    $scope.creatingMembers = "";

    ($scope.getPerfs = function(){
      $http.get('/perfs').success(function(data){
        if(data){
          console.log("get");
          $scope.list = data;
          let size = $scope.list.length;
          $scope.calculate();
        }
        else
          $scope.list = [];
      });
    })();

    $scope.addPerf = function(){
      let memberArray = $scope.creatingMembers.split(" ");
      $scope.creatingPerf.members = memberArray;
      $http.post('/perfs', {perf:$scope.creatingPerf}).then(
        setTimeout(function(){$scope.getPerfs();},500));
      $scope.creatingPerf = {};
      $scope.creatingMembers = "";
    }
    
    $scope.removePerf = function(p){
      let index = $scope.list.indexOf(p);
      //$http.del('/perfs', )
      $scope.list.splice(index,1);
      $scope.calculate();
    }

    $scope.calculate = function(){
      let size = $scope.list.length;

      for(var from=0; from<size ; from++){
              $('li:nth-child('+(from+1)+')').addClass($scope.list[from].genre);
          }

      for(var from=0; from<size ; from++){
        for(var fIdx = 0; fIdx<$scope.list[from].members.length ; fIdx++){
          $('li:nth-child('+(from+1)+') div:nth-child('+(fIdx+2)+')')
          .removeClass("down1 down2 up1 up2");
        }
      }

      for(var from=0; from<size ; from++){
        for(var to=from+1 ; to<from+3 ; to++){
          if(to<size && from != to){
            var offset = Math.abs(to-from);
            for(var fIdx = 0; fIdx<$scope.list[from].members.length ; fIdx++){
              for(var tIdx = 0; tIdx<$scope.list[to].members.length ; tIdx++){                
                if($scope.list[from].members[fIdx] == $scope.list[to].members[tIdx]){           
                  $('li:nth-child('+(from+1)+') div:nth-child('+(fIdx+2)+')')
                  .addClass("down"+offset);
                  $('li:nth-child('+(to+1)+') div:nth-child('+(tIdx+2)+')')
                  .addClass("up"+offset);
                }
              }
            }
          }
        }
      }
    };
    setTimeout(function(){$scope.calculate()},500);
    //$scope.calculate();
    
    $scope.sortingLog = [];
    
    $scope.sortableOptions = {
      activate: function() {
          
      },
      beforeStop: function() {
          
      },
      change: function() {
          
      },
      create: function() {
          
      },
      deactivate: function() {
          
      },
      out: function() {
          
      },
      over: function() {
          
      },
      receive: function() {
          
      },
      remove: function() {
          
      },
      sort: function() {
          
      },
      start: function() {
          
      },
      update: function(e, ui) {
        
        

      },
      stop: function(e, ui) {

        $scope.calculate();
      
      }
    };
  }]);

})();
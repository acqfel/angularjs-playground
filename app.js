(function () {
'use strict';

angular.module('myApp', [])

.controller('HeroNamePower', function ($scope) {
  $scope.name = "";
  $scope.totalValue = 0;

  $scope.displayPower = function () {
    $scope.totalValue = calculateNumericForString($scope.name);
  };

  function calculateNumericForString(string) {
    var totalStringValue = 0;
    for (var i = 0; i < string.length; i++) {
      totalStringValue += string.charCodeAt(i);
    }

    return totalStringValue;
  }
})
.controller('CurrencyValue', function($scope, $filter) {

  $scope.value = 0;
  $scope.currency = 0;

  $scope.numToMoney = function() {
    $scope.currency = $filter('currency')($scope.value, "USD$", 2);
  }
})
.controller('LikeCtrl', function($scope) {

  $scope.choice = "";

  $scope.message = function() {
    var answer;
    if ($scope.choice === "") {
      answer = "";
      return answer;
    } else {
      answer = $scope.choice === "up" ? "like" : "dislike";
      return "You choose: " + answer + "  ";
    }
  }

  $scope.like = function() {
    $scope.choice = "up";
  };

  $scope.dislike = function() {
    $scope.choice = "down";
  };
})
.controller('BindingCtrl', BindingCtrl);

BindingCtrl.$inject = ['$scope'];
function BindingCtrl($scope) {
  $scope.fixedValue = "I am fixed";
  $scope.btn = true;
  $scope.bind2 = "write a any word";

  $scope.change1w = function() {
    $scope.btn = $scope.btn === true ? false : true;
  }

}

})();

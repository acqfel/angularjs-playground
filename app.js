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
  };
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
  };

  $scope.like = function() {
    $scope.choice = "up";
  };

  $scope.dislike = function() {
    $scope.choice = "down";
  };
})
.controller('BindingCtrl', BindingCtrl)
.controller('CityListCtrl', CityListCtrl)
.controller('PersonListCtrl', PersonListCtrl);

BindingCtrl.$inject = ['$scope'];
function BindingCtrl($scope) {
  $scope.fixedValue = "I am fixed";
  $scope.btn = true;
  $scope.bind2 = "write a any word";

  $scope.change1w = function() {
    $scope.btn = $scope.btn === true ? false : true;
  };

}

// source mockaroo.com
var cityList = [{
  "country": "Indonesia",
  "code": "ID",
  "lat": -2.389643,
  "lng": 112.907402,
  "city": "Kandang Timur",
  "timezone": "Asia/Jakarta"
}, {
  "country": "United States",
  "code": "US",
  "lat": 41.0285407,
  "lng": -81.4633516,
  "city": "Akron",
  "timezone": "America/New_York"
}, {
  "country": "Indonesia",
  "code": "ID",
  "lat": -7.3856497,
  "lng": 107.7991545,
  "city": "Cikajang",
  "timezone": "Asia/Jakarta"
}, {
  "country": "France",
  "code": "FR",
  "lat": 48.6843964,
  "lng": 2.2924369,
  "city": "Longjumeau",
  "timezone": "Europe/Paris"
}, {
  "country": "China",
  "code": "CN",
  "lat": 34.542308,
  "lng": 118.752842,
  "city": "Donghai",
  "timezone": "Asia/Shanghai"
}];

CityListCtrl.$inject = ['$scope'];
function CityListCtrl($scope){
  $scope.cityList = cityList;
}

var personList = [{
  "name": "Addy"
}, {
  "name": "Hashim"
}, {
  "name": "Ray"
}, {
  "name": "Torre"
}, {
  "name": "Fax"
}, {
  "name": "Olivette"
}, {
  "name": "Cicely"
}, {
  "name": "Kent"
}, {
  "name": "Noel"
}, {
  "name": "Nolie"
}];

PersonListCtrl.$inject = ['$scope'];
function PersonListCtrl($scope){
  $scope.personList = personList;
}

})();

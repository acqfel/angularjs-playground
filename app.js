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
.controller('PersonListCtrl', PersonListCtrl)
.controller('ShopCartAddCtrl', ShopCartAddCtrl)
.controller('ShopCartShowCtrl', ShopCartShowCtrl)
.service('ShopCartService', ShopCartService)
.controller('TimerCtrl', TimerCtrl);

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

ShopCartAddCtrl.$inject = ['ShopCartService'];
function ShopCartAddCtrl(ShopCartService) {
  var addItem = this;

  addItem.itemName = "";
  addItem.itemQuantity = "";
  console.log(addItem);
  addItem.addItem = function () {
    ShopCartService.addItem(addItem.itemName, addItem.itemQuantity);
  }
}

ShopCartShowCtrl.$inject = ['ShopCartService'];
function ShopCartShowCtrl(ShopCartService) {
  var showItem = this;

  showItem.items = ShopCartService.getItems();

  showItem.removeItem = function (itemIndex) {
    ShopCartService.removeItem(itemIndex);
  };
}

function ShopCartService() {
  var service = this;

  // List of shop cart items
  var items = [];

  service.addItem = function (itemName, quantity) {
    console.log("addItem in service: "+itemName);
    var item = {
      name: itemName,
      quantity: quantity
    };
    items.push(item);
  };

  service.removeItem = function (itemIdex) {
    items.splice(itemIdex, 1);
  };

  service.getItems = function () {
    return items;
  };
}

TimerCtrl.$inject = ['$scope', '$interval'];
function TimerCtrl($scope, $interval){
  var promise;

  $scope.displayStart = false;

  $scope.time = 0;

  $scope.addSecond = function() {
    $scope.time += 1;
  }

  $scope.start = function() {
    $scope.stop();

    promise = $interval( function(){ $scope.addSecond(); }, 1000);

    $scope.displayStart = false;
  }

  $scope.stop = function() {
    $interval.cancel(promise);

    $scope.displayStart = true;
  }

  $scope.reset = function() {
    $scope.time = 0;

    $scope.displayStart = true;
  }

  promise = $interval( function(){ $scope.addSecond(); }, 1000);
}

})();

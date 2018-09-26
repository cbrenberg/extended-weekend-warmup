console.log('Trick or Treat');

const app = angular.module("HalloweenApp", []);

app.controller('HalloweenController', ['$http', function ($http) {
  console.log('HalloweenController loaded');

  let vm = this;
  vm.message = "angular loaded!";
  vm.costumes = [];

  vm.getCostumes = function () {
    $http.get('/costumes')
    .then(function (response) {
      console.log('Back from /costumes with:', response);
      vm.costumes = response.data;
    })
    .catch(function (error) {
      console.log("error retrieving costumes", error);
    });
  }

  vm.getCostumes();
}]);

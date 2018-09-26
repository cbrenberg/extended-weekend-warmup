console.log('Trick or Treat');

const app = angular.module("HalloweenApp", []);

app.controller('HalloweenController', function () {
  let vm = this;
  vm.message = "angular loaded!"
})

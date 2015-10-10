var behindTheCurtain = angular.module('behindTheCurtain', ['ui.router']);

behindTheCurtain.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider.state('home', {
    url:"",
    templateUrl: "partials/home.html"
  });
});

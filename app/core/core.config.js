;(function () {
    angular
        .module('app')
        .config(mainConfig);

    mainConfig.$inject = ['$stateProvider', '$urlRouterProvider'];

    function mainConfig($stateProvider, $urlRouterProvider) {


        $urlRouterProvider.otherwise('/home');

        $stateProvider

            .state('home', {
                url: '/home',
                templateUrl: 'templates/homepage/homepage.html',
                controller: 'HomepageController',
                controllerAs: 'vm'

            }).state('e-commerce', {
                url: '/e-commerce',
                templateUrl: 'templates/e-commerce/e-commerce.html',
                controller: 'ECommerceController',
                controllerAs: 'vm'
            })



    }


})();


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

            })
            .state('e-commerce', {
                url: '/e-commerce',
                templateUrl: 'templates/e-commerce/e-commerce.html',
                controller: 'ECommerceController',
                controllerAs: 'vm'
            })
            .state('merchant_account', {
                url: '/merchant_account',
                templateUrl: 'templates/merchant_account/merchant_account.html',
                controller: 'MerchantAccountController',
                controllerAs: 'vm'
            })
            .state('merchant_acquiring', {
                url: '/merchant_acquiring',
                templateUrl: 'templates/merchant_acquiring/merchant_acquiring.html',
                controller: 'MerchantAcquiringController',
                controllerAs: 'vm'
            })
            .state('payment_processing', {
                url: '/payment_processing',
                templateUrl: 'templates/payment_processing/payment_processing.html',
                controller: 'PaymentProcessingController',
                controllerAs: 'vm'
            })
            .state('card_issuing', {
                url: '/card_issuing',
                templateUrl: 'templates/card_issuing/card_issuing.html',
                controller: 'CardIssuingController',
                controllerAs: 'vm'
            })



    }


})();


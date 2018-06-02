;(function () {
    angular
        .module('app')
        .config(mainConfig);

    mainConfig.$inject = ['$stateProvider', '$urlRouterProvider', '$translateProvider'];

    function mainConfig($stateProvider, $urlRouterProvider, $translateProvider) {


        $urlRouterProvider.otherwise('/home');

        $stateProvider

            .state('home', {
                url: '/home',
                templateUrl: 'templates/homepage/homepage.html',
                controller: 'HomepageController',
                controllerAs: 'vm'

            })
            .state('technology', {
                url: '/technology',
                templateUrl: 'templates/technology/technology.html',
                controller: 'TechnologyController',
                controllerAs: 'vm'

            })
            .state('about', {
                url: '/about',
                templateUrl: 'templates/about/about.html',
                controller: 'AboutController',
                controllerAs: 'vm'

            })
            .state('contact', {
                url: '/contact',
                templateUrl: 'templates/contact/contact.html',
                controller: 'ContactController',
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
            .state('terms', {
                url: '/terms',
                templateUrl: 'templates/terms/terms.html',
                controller: 'TermsController',
                controllerAs: 'vm'
            })
            .state('cookie', {
                url: '/cookie',
                templateUrl: 'templates/cookie/cookie.html',
                controller: 'CookieController',
                controllerAs: 'vm'
            })
            .state('privacy', {
                url: '/privacy',
                templateUrl: 'templates/privacy/privacy.html',
                controller: 'PrivacyController',
                controllerAs: 'vm'
            })
            .state('prices', {
                url: '/prices',
                templateUrl: 'templates/prices/prices.html',
                controller: 'PricesController',
                controllerAs: 'vm'
            })
            .state('login', {
                url: '/login',
                templateUrl: 'templates/login/login.html',
                controller: 'LoginController',
                controllerAs: 'vm'
            }),




        $translateProvider.registerAvailableLanguageKeys(['en', 'ru'], {
            'en-*': 'en',
            'ru-*': 'ru'
        });

        $translateProvider.useStaticFilesLoader({
            prefix: 'language/',
            suffix: '.json'
        });

        $translateProvider.preferredLanguage('en');
        $translateProvider.useSanitizeValueStrategy(null);
    }



})();


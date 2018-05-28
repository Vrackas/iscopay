;(function () {
    'use strict';

    angular.module('app')
        .controller('ECommerceController', ECommerceController);


    ECommerceController.$inject = [];

    function ECommerceController() {
        var vm = this;
        vm.solutions = [
            {
                subTitle: 'iscopay core',
                title: 'merchant-account',
                link: 'merchant_account',
                text1: 'Start accepting online payments with our essential Merchant Solution.',
                text2: 'Essential and cost-effective payment solution for different e-commerce businesses. Start accepting online payments with our simple starter solution that offer flexibility to expand with your business’ growing requirements.'
            },{
                subTitle: 'iscopay expert',
                title: 'Online Acquiring',
                link: 'merchant_acquiring',
                text1: 'Get on board our flexible and modular Acquiring Solution and manage your online payments more efficiently.',
                text2: 'Comprehensive and flexible acquiring solution that delivers broad functionality tailored to iPSPs` e-commerce needs. Our modular solution can be customised and adapted to each individual customer and delivered via scalable API.'
            },
            // {
            //     subTitle: 'iscopay stream',
            //     title: 'Payment Processing',
            //     link: 'payment_processing',
            //     text1: 'Empower your business with our comprehensive Payment Processing Solution for issuers and acquirers.',
            //     text2: 'Optimised and adaptable payment processing solution for issuers and acquirers. Our innovative suite of services and advanced technologies offers secure end-to-end authorisation platform to help you successfully compete in today’s highly competitive financial environment. '
            // },{
            //     subTitle: 'iscopay smart',
            //     title: 'Card Issuing',
            //     link: 'card_issuing',
            //     text1: 'Expand your offering with our white-label Card Issuing Solution and launch your own card programme.',
            //     text2: 'White-label solution for branded card issuing and management. Our advanced card issuing solution provides excellent opportunities to increase market competitiveness and launch personalised card programmes quickly and efficiently.'
            // }
        ]


    }
})();
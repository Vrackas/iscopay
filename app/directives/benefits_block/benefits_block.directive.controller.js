;(function () {

    'use strict';

    angular
        .module('app')
        .controller('BenefitsBlockController', BenefitsBlockController);

    BenefitsBlockController.$inject = ['$state'];

    function BenefitsBlockController($state) {
        let vm = this;

        vm.benefits = [
            {
                link: 'content/img/benefits/1E.svg',
                text: 'Advanced fraud and risk management'
            },
            {
                link: 'content/img/benefits/2E.svg',
                text: 'Chargeback consulting'
            },
            {
                link: 'content/img/benefits/3E.svg',
                text: 'Multicurrency processing and payments'
            },
            {
                link: 'content/img/benefits/4E.svg',
                text: 'Flexible payment schedule'
            },
            {
                link: 'content/img/benefits/5E.svg',
                text: 'Dedicated Account Manager'
            },
            {
                link: 'content/img/benefits/Expert_support.svg',
                text: '24h customer service'
            },
            {
                link: 'content/img/benefits/7E.svg',
                text: 'Uninterrupted service'
            },
            {
                link: 'content/img/benefits/8E.svg',
                text: 'Fast onbording process'
            },
            {
                link: 'content/img/benefits/3_p.svg',
                text: 'Scalable platform to meet your business needs'
            }
        ]

    }
})();

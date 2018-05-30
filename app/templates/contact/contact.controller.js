;(function () {
    'use strict';

    angular.module('app')
        .controller('ContactController', ContactController);


    ContactController.$inject = [];

    function ContactController() {
        var vm = this;

        vm.items =[
            {
                title:'contact_pay_item1_title',
                contact:'merchants@decta.com'
            },
            {
                title:'contact_pay_item2_title',
                contact:'pro@decta.com'
            },
            {
                title:'contact_pay_item3_title',
                contact:'cards@decta.com'
            },
            {
                title:'contact_pay_item4_title',
                contact:'partners@decta.com'
            }
        ]
    }


})();
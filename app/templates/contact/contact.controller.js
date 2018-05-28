;(function () {
    'use strict';

    angular.module('app')
        .controller('ContactController', ContactController);


    ContactController.$inject = [];

    function ContactController() {
        var vm = this;

        vm.items =[
            {
                title:'Интернет-эквайринг',
                contact:'merchants@decta.com'
            },
            {
                title:'Процессинг платежей',
                contact:'pro@decta.com'
            },
            {
                title:'Эмиссия карт',
                contact:'cards@decta.com'
            },
            {
                title:'Партнерская программа',
                contact:'partners@decta.com'
            }
        ]
    }


})();
;(function () {
    'use strict';

    angular.module('app')
        .controller('HomepageController', HomepageController);


    HomepageController.$inject = [];

    function HomepageController() {
        var vm = this;


        vm.proactiveAnim = proactiveAnim;
        vm.proactiveAnimOff = proactiveAnimOff;

        vm.proactive = [
            {text: 'Uninterrupted service'},
            {text: 'Flexible to adapt to customer'},
            {text: 'Fast merchant onboarding'},
            {text: 'Bespoke solutions'},
            {text: 'Motivated to innovate'},
            {text: 'Dedicated account manager'},
            {text: 'Own processing centre'},
            {text: '24/7 customer support'}
        ];


        function proactiveAnim(index) {
            for (var i = index-1; i > -1; i--) {
                $(String('.proactive_' + i + '')).css({
                    'opacity': '0.2',
                    'margin-bottom': '50px'
                })
            }
        }

        function proactiveAnimOff(index) {
            for (var i = index-1; i > -1; i--) {
                $(String('.proactive_' + i + '')).css({
                    'opacity': '1',
                    'margin-bottom': '20px'
                })
            }

        }
    }
})();
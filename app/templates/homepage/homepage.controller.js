;(function () {
    'use strict';

    angular.module('app')
        .controller('HomepageController', HomepageController);


    HomepageController.$inject = [];

    function HomepageController() {
        var vm = this;

        vm.myInterval = 3000;
        vm.slides = [
            {image: 'http://lorempixel.com/400/200/'},
            {image: 'http://lorempixel.com/400/200/food'},
            {image: 'http://lorempixel.com/400/200/sports'},
            {image: 'http://lorempixel.com/400/200/people'}
        ]
    }
})();
;(function () {
    'use strict';

    angular.module('app')
        .controller('AboutController', AboutController);


    AboutController.$inject = [];

    function AboutController() {
        var vm = this;
        vm.values = [
            {
                image:'content/img/about/1 (1).svg',
                title:'Опыт',
                text:'команды, превосходящий ожидания клиентов'
            },
            {
                image:'content/img/about/2 (1).svg',
                title:'Гибкость',
                text:'решений для удовлетворения требований клиентов'
            },
            {
                image:'content/img/about/3 (1).svg',
                title:'Инновации',
                text:'и лидерство в сфере платёжных технологий'
            },
            {
                image:'content/img/about/4 (1).svg',
                title:'Доверие',
                text:'клиентов, как ключевой принцип нашей деятельности'
            }
        ]

    }
})();


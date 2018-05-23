;(function () {

    'use strict';

    angular
        .module('app')
        .controller('HeaderBlockController', HeaderBlockController);

    HeaderBlockController.$inject = ['$state', '$timeout'];

    function HeaderBlockController($state, $timeout) {
        let vm = this;

        vm.contentActive = false;

        vm.langOpen = langOpen;
        vm.headerWrapperOpen = headerWrapperOpen;
        vm.headerWrapperClose = headerWrapperClose;
        vm.redirect = redirect;

        function langOpen(style) {
            console.log($(style));
            $(style).addClass('active');

            $(document).mouseup(function (e) {
                let container = $(style);
                if (container.has(e.target).length === 0){
                    container.removeClass('active');
                }
            });
        }


        function headerWrapperOpen() {
            $('.header_wrapper').addClass('active');
            $(document).mouseup(function (e) {
                let container = $('.header_wrapper');
                if (container.has(e.target).length === 0){
                    container.removeClass('active');
                }
            });
        }
        function headerWrapperClose() {
            $('.header_wrapper').removeClass('active');
        }


        function redirect(link){
            console.log(String(link));
            $state.go(String(link))

        }
    }
})();

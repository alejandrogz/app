(function () {
    'use strict';
    
    angular
        .module('oktyBlog')
        .controller('HomeController', HomeController);

    HomeController.$inject = ['$state'];
    
    function HomeController($state) {
        var vm = this;
        vm.tiles = [
            {
                id: 'ux_ui1',
                background_position: '0px -125px',
                height: '236px',
                type: 'salesforce'
            },
            {
                id: 'mobile1',
                background_position: '0px -370px',
                height: '105px',
                type: 'mobile'
            },
            {
                id: 'ux_ui2',
                background_position: '0px -475px',
                height: '240px',
                type: 'salesforce'
            },
            {
                id: 'heroku',
                background_position: '0px -720px',
                height: '237px',
                type: 'heroku'
            },
            {
                id: 'mobile2',
                background_position: '0px -960px',
                height: '248px',
                type: 'mobile'
            },
            {
                id: 'salesforce1',
                background_position: '0px -1210px',
                height: '124px',
                type: 'salesforce'
            },
            {
                id: 'salesforce2',
                background_position: '0px -1335px',
                height: '124px',
                type: 'salesforce'
            },
            {
                id: 'mobile3',
                background_position: '0px -1715px',
                height: '109px',
                type: 'mobile'
            },
            {
                id: 'mobile4',
                background_position: '0px -1827px',
                height: '109px',
                type: 'mobile'
            },
            {
                id: 'ux_ui3',
                background_position: '0px -1470px',
                height: '239px',
                type: 'salesforce'
            }
        ];
        vm.gotoSalesforce = gotoSalesforce;

        function gotoSalesforce(tile) {
            angular.element('li.active').removeClass('active');
            angular.element('li a[href="#' + tile.type + '"]').parent().addClass('active');
            $state.go(tile.type, {tile_id: tile.id});
        }
    }
})();
(function () {
    'use strict';

    angular
        .module('oktyBlog')
        .config(stateConfig);

    stateConfig.$inject = ['$stateProvider'];

    function stateConfig($stateProvider) {
        $stateProvider.state('home', {
            parent: 'app',
            url: "/home",
            views: {
                'content@': {
                    templateUrl: 'home/home.html',
                    controller: 'HomeController',
                    controllerAs: 'vm'
                }
            }
        })
    }
})();
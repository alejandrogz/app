(function () {
    'use strict';

    angular
        .module('oktyBlog')
        .config(stateConfig);

    stateConfig.$inject = ['$stateProvider', '$urlRouterProvider'];

    function stateConfig($stateProvider, $urlRouterProvider) {

        $urlRouterProvider.otherwise("/home");

        $stateProvider.state('app', {
                abstract: true,
                views: {
                    "header@": {
                        templateUrl: "layout/header/header.html"
                    }
                }
            }
        );
    }

})();
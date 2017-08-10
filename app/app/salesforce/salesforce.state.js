(function () {
    'use strict';

    angular
        .module('oktyBlog')
        .config(stateConfig);

    stateConfig.$inject = ['$stateProvider'];

    function stateConfig($stateProvider) {
        $stateProvider.state('salesforce', {
            parent: 'app',
            url: "/salesforce",
            params: {
                id: null
            },
            views: {
                'content@': {
                    templateUrl: 'salesforce/salesforce.html',
                }
            }
        })
    }
})();
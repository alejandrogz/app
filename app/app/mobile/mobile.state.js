(function () {
    'use strict';

    angular
        .module('oktyBlog')
        .config(stateConfig);

    stateConfig.$inject = ['$stateProvider'];

    function stateConfig($stateProvider) {
        $stateProvider.state('mobile', {
            parent: 'app',
            url: "/mobile",
            params: {
                id: null
            },
            views: {
                'content@': {
                    templateUrl: 'mobile/mobile.html',
                }
            }
        })
    }
})();
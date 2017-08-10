(function () {
    'use strict';

    angular
        .module('oktyBlog')
        .config(stateConfig);

    stateConfig.$inject = ['$stateProvider'];

    function stateConfig($stateProvider) {
        $stateProvider.state('ux_ui', {
            parent: 'app',
            url: "/ux_ui",
            params: {
                id: null
            },
            views: {
                'content@': {
                    templateUrl: 'ux_ui/ux_ui.html',
                }
            }
        })
    }
})();
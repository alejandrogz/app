(function () {
    'use strict';

    angular
        .module('oktyBlog')
        .config(stateConfig);

    stateConfig.$inject = ['$stateProvider'];

    function stateConfig($stateProvider) {
        $stateProvider.state('heroku', {
            parent: 'app',
            url: "/heroku",
            params: {
                id: null
            },
            views: {
                'content@': {
                    templateUrl: 'heroku/heroku.html',
                }
            }
        })
    }
})();
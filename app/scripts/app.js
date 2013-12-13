(function () {
    'use strict';

    angular.module('mrMundialApp', [
        'ngRoute',
        'ui.bootstrap'
    ])
        .config(function ($routeProvider) {
            $routeProvider
                .when('/', {
                    templateUrl: 'views/main.html',
                    controller: 'FaseGruposCtrl'
                })
                .otherwise({
                    redirectTo: '/'
                });
        });
}());
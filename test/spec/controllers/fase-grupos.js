'use strict';

describe('Controller: FaseGruposCtrl', function () {

    // load the controller's module
    beforeEach(module('mrMundialApp'));

    var FaseGruposCtrl,
        scope;

    // Initialize the controller and a mock scope
    beforeEach(inject(function ($controller, $rootScope) {
        scope = $rootScope.$new();
        FaseGruposCtrl = $controller('FaseGruposCtrl', {
            $scope: scope
        });
    }));

    it('deberia tener los 6 partidos del grupo A', function () {
        expect(scope.partidos.A.length).toBe(6);
    });

    it('deberia tener los 6 partidos del grupo B', function () {
        expect(scope.partidos.B.length).toBe(6);
    });
});
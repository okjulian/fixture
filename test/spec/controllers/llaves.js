'use strict';

describe('Controller: LlavesCtrl', function () {

    // load the controller's module
    beforeEach(module('mrMundialApp'));

    var LlavesCtrl,
        scope;

    // Initialize the controller and a mock scope
    beforeEach(inject(function ($controller, $rootScope) {
        scope = $rootScope.$new();
        LlavesCtrl = $controller('LlavesCtrl', {
            $scope: scope
        });
    }));

    describe('Octavos', function () {
        it('deberia obtener los partidos del servicio Llaves', function () {
            expect(scope.partidos).toBeDefined();
        });
    });
});
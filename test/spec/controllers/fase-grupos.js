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

    it('deberia tener los 6 partidos del grupo C', function () {
        expect(scope.partidos.C.length).toBe(6);
    });

    describe('autocompletar', function () {
        it('deberia autocompletar los resultados de un grupo', function () {
            scope.autoCompletarGrupo('A');
            scope.partidos.A.forEach(function (element, index, array) {
                expect(element.resultado[0]).not.toBe(null);
                expect(element.resultado[1]).not.toBe(null);
            });
        });

        it('deberia autocompletar los resultados de todos los grupos', function () {
            scope.autoCompletarGrupos();
            scope.partidos.A.forEach(function (element, index, array) {
                expect(element.resultado[0]).not.toBe(null);
                expect(element.resultado[1]).not.toBe(null);
            });
            scope.partidos.B.forEach(function (element, index, array) {
                expect(element.resultado[0]).not.toBe(null);
                expect(element.resultado[1]).not.toBe(null);
            });
        });

        it('no deberia sobreescribir resultados ya asignados', function () {
            scope.partidos.A[0].resultado[0] = 4;
            scope.partidos.A[0].resultado[1] = 0;
            scope.autoCompletarGrupo('A');
            expect(scope.partidos.A[0].resultado[0]).toBe(4);
            expect(scope.partidos.A[0].resultado[1]).toBe(0);
        });
    });
});

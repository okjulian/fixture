'use strict';

describe('Service: FaseGrupos', function () {

    // load the service's module
    beforeEach(module('mrMundialApp', function ($provide) {
        GrupoMock = jasmine.createSpyObj('GrupoMock', ['equipos', 'partidos']);
        $provide.value('Grupo', GrupoMock);
    }));

    beforeEach(function () {

    });

    // instantiate service
    var FaseGrupos,
        GrupoMock;

    beforeEach(inject(function (_FaseGrupos_) {
        FaseGrupos = _FaseGrupos_;
    }));

    describe('obtenerEquiposGrupo', function () {
        it('deberia estar definida', function () {
            expect( !! FaseGrupos.obtenerEquiposGrupo).toBe(true);
        });
        it('deberia devolver los equipos de un grupo', function () {
            FaseGrupos.obtenerEquiposGrupo('A');
            expect(GrupoMock.equipos).toHaveBeenCalledWith('A');
        });
    });

    describe('obtenerPartidosGrupo', function () {
        it('deberia estar definida', function () {
            expect( !! FaseGrupos.obtenerPartidosGrupo).toBe(true);
        });
        it('deberia devolver los equipos de un grupo', function () {
            FaseGrupos.obtenerPartidosGrupo('A');
            expect(GrupoMock.partidos).toHaveBeenCalledWith('A');
        });
    });

});
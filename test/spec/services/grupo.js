'use strict';

describe('Service: Grupo', function () {

    // load the service's module
    beforeEach(module('mrMundialApp'));

    // instantiate service
    var Grupo;
    beforeEach(inject(function (_Grupo_) {
        Grupo = _Grupo_;
    }));

    it('deberia estar definido', function () {
        expect( !! Grupo).toBe(true);
    });

    describe('Partidos', function () {
        it('uno deberia enfrentar al equipo 1 contra el equipo 2', function () {
            var partido1 = Grupo.partidos.A[0];
            var equiposA = Grupo.equipos('A');
            expect(partido1.equipos[0]).toBe(equiposA[0]);
            expect(partido1.equipos[1]).toBe(equiposA[1]);
        });

        it('dos deberia enfrentar al equipo 3 contra el equipo 4', function () {
            var partido2 = Grupo.partidos.A[1];
            var equiposA = Grupo.equipos('A');
            expect(partido2.equipos[0]).toBe(equiposA[2]);
            expect(partido2.equipos[1]).toBe(equiposA[3]);
        });

        it('tres deberia enfrentar al equipo 1 contra el equipo 3', function () {
            var partido3 = Grupo.partidos.A[2];
            var equiposA = Grupo.equipos('A');
            expect(partido3.equipos[0]).toBe(equiposA[0]);
            expect(partido3.equipos[1]).toBe(equiposA[2]);
        });

        it('cuatro deberia enfrentar al equipo 3 contra el equipo 1', function () {
            var partido4 = Grupo.partidos.A[3];
            var equiposA = Grupo.equipos('A');
            expect(partido4.equipos[0]).toBe(equiposA[3]);
            expect(partido4.equipos[1]).toBe(equiposA[1]);
        });

        it('cinco deberia enfrentar al equipo 4 contra el equipo 1', function () {
            var partido5 = Grupo.partidos.A[4];
            var equiposA = Grupo.equipos('A');
            expect(partido5.equipos[0]).toBe(equiposA[3]);
            expect(partido5.equipos[1]).toBe(equiposA[0]);
        });

        it('seis deberia enfrentar al equipo 2 contra el equipo 3', function () {
            var partido6 = Grupo.partidos.A[5];
            var equiposA = Grupo.equipos('A');
            expect(partido6.equipos[0]).toBe(equiposA[1]);
            expect(partido6.equipos[1]).toBe(equiposA[2]);
        });

    });

    describe('Grupo A', function () {
        var equipos,
            partidos;

        beforeEach(function () {
            equipos = Grupo.equipos('A');
            partidos = Grupo.partidos.A;
        });

        it('deberia tener a Brasil, Croacia, Mexico y Camerún', function () {
            expect(equipos.length).toBe(4);
            expect(equipos[0].nombre).toBe('Brasil');
            expect(equipos[1].nombre).toBe('Croacia');
            expect(equipos[2].nombre).toBe('Mexico');
            expect(equipos[3].nombre).toBe('Camerún');
        });

        describe('partidos', function () {
            it('primero se enfrentan Brasil y Croacia', function () {
                expect(partidos[0].equipos[0].nombre).toBe('Brasil');
                expect(partidos[0].equipos[1].nombre).toBe('Croacia');
            });

            it('segundo se enfrentan Mexico y Camerún', function () {
                expect(partidos[1].equipos[0].nombre).toBe('Mexico');
                expect(partidos[1].equipos[1].nombre).toBe('Camerún');
            });

            it('tercero se enfrentan Brasil y Mexico', function () {
                expect(partidos[2].equipos[0].nombre).toBe('Brasil');
                expect(partidos[2].equipos[1].nombre).toBe('Mexico');
            });

            it('cuarto se enfrentan Camerún y Croacia', function () {
                expect(partidos[3].equipos[0].nombre).toBe('Camerún');
                expect(partidos[3].equipos[1].nombre).toBe('Croacia');
            });

            it('quinto se enfrentan Camerún y Brasil', function () {
                expect(partidos[4].equipos[0].nombre).toBe('Camerún');
                expect(partidos[4].equipos[1].nombre).toBe('Brasil');
            });

            it('sexto se enfrentan Croacia y Mexico', function () {
                expect(partidos[5].equipos[0].nombre).toBe('Croacia');
                expect(partidos[5].equipos[1].nombre).toBe('Mexico');
            });

        });
    });

    describe('Grupo B', function () {
        var equipos,
            partidos;

        beforeEach(function () {
            equipos = Grupo.equipos('B');
            partidos = Grupo.partidos.B;
        });

        it('deberia tener a España, Holanda, Chile y Australia', function () {
            expect(equipos.length).toBe(4);
            expect(equipos[0].nombre).toBe('España');
            expect(equipos[1].nombre).toBe('Holanda');
            expect(equipos[2].nombre).toBe('Chile');
            expect(equipos[3].nombre).toBe('Australia');
        });

        describe('partidos', function () {
            it('primero', function () {
                expect(partidos[0].equipos[0].nombre).toBe('España');
                expect(partidos[0].equipos[1].nombre).toBe('Holanda');
            });

            it('segundo', function () {
                expect(partidos[1].equipos[0].nombre).toBe('Chile');
                expect(partidos[1].equipos[1].nombre).toBe('Australia');
            });

            it('tercero', function () {
                expect(partidos[2].equipos[0].nombre).toBe('España');
                expect(partidos[2].equipos[1].nombre).toBe('Chile');
            });

            it('cuarto', function () {
                expect(partidos[3].equipos[0].nombre).toBe('Australia');
                expect(partidos[3].equipos[1].nombre).toBe('Holanda');
            });

            it('quinto', function () {
                expect(partidos[4].equipos[0].nombre).toBe('Australia');
                expect(partidos[4].equipos[1].nombre).toBe('España');
            });

            it('sexto', function () {
                expect(partidos[5].equipos[0].nombre).toBe('Holanda');
                expect(partidos[5].equipos[1].nombre).toBe('Chile');
            });

        });
    });

    describe('Grupo C', function () {
        var equipos,
            partidos;

        beforeEach(function () {
            equipos = Grupo.equipos('C');
            partidos = Grupo.partidos.C;
        });

        it('deberia tener a Colombia, Grecia, Costa de Marfil y Japón', function () {
            expect(equipos.length).toBe(4);
            expect(equipos[0].nombre).toBe('Colombia');
            expect(equipos[1].nombre).toBe('Grecia');
            expect(equipos[2].nombre).toBe('Costa de Marfil');
            expect(equipos[3].nombre).toBe('Japón');
        });
    });

    describe('Grupo D', function () {
        var equipos,
            partidos;

        beforeEach(function () {
            equipos = Grupo.equipos('D');
            partidos = Grupo.partidos.D;
        });

        it('deberia tener a Uruguay, Costa Rica, Inglaterra e Italia', function () {
            expect(equipos.length).toBe(4);
            expect(equipos[0].nombre).toBe('Uruguay');
            expect(equipos[1].nombre).toBe('Costa Rica');
            expect(equipos[2].nombre).toBe('Inglaterra');
            expect(equipos[3].nombre).toBe('Italia');
        });
    });

    describe('Grupo E', function () {
        var equipos,
            partidos;

        beforeEach(function () {
            equipos = Grupo.equipos('E');
            partidos = Grupo.partidos.E;
        });

        it('deberia tener a Suiza, Ecuador, Francia y Honduras', function () {
            expect(equipos.length).toBe(4);
            expect(equipos[0].nombre).toBe('Suiza');
            expect(equipos[1].nombre).toBe('Ecuador');
            expect(equipos[2].nombre).toBe('Francia');
            expect(equipos[3].nombre).toBe('Honduras');
        });
    });

    describe('Grupo F', function () {
        var equipos,
            partidos;

        beforeEach(function () {
            equipos = Grupo.equipos('F');
            partidos = Grupo.partidos.F;
        });

        it('deberia tener a Argentina, Bosnia, Iran y Nigeria', function () {
            expect(equipos.length).toBe(4);
            expect(equipos[0].nombre).toBe('Argentina');
            expect(equipos[1].nombre).toBe('Bosnia');
            expect(equipos[2].nombre).toBe('Iran');
            expect(equipos[3].nombre).toBe('Nigeria');
        });
    });

    describe('Grupo G', function () {
        var equipos,
            partidos;

        beforeEach(function () {
            equipos = Grupo.equipos('G');
            partidos = Grupo.partidos.G;
        });

        it('deberia tener a Alemania, Portugal, Ghana y USA', function () {
            expect(equipos.length).toBe(4);
            expect(equipos[0].nombre).toBe('Alemania');
            expect(equipos[1].nombre).toBe('Portugal');
            expect(equipos[2].nombre).toBe('Ghana');
            expect(equipos[3].nombre).toBe('USA');
        });
    });

    describe('Grupo H', function () {
        var equipos,
            partidos;

        beforeEach(function () {
            equipos = Grupo.equipos('H');
            partidos = Grupo.partidos.H;
        });

        it('deberia tener a Bélgica, Algeria, Rusia y Corea', function () {
            expect(equipos.length).toBe(4);
            expect(equipos[0].nombre).toBe('Bélgica');
            expect(equipos[1].nombre).toBe('Algeria');
            expect(equipos[2].nombre).toBe('Rusia');
            expect(equipos[3].nombre).toBe('Corea');
        });
    });

    describe('autocompletar', function () {
        it('deberia autocompletar los resultados de un grupo', function () {
            var partidos = Grupo.partidos.A;

            Grupo.autoCompletar('A');

            partidos.forEach(function (element) {
                expect(element.resultado[0]).not.toBe(null);
                expect(element.resultado[1]).not.toBe(null);
            });
        });

        it('deberia autocompletar los resultados de todos los grupos', function () {
            var partidosA = Grupo.partidos.A;
            var partidosB = Grupo.partidos.B;

            Grupo.autoCompletarTodos();

            partidosA.forEach(function (element) {
                expect(element.resultado[0]).not.toBe(null);
                expect(element.resultado[1]).not.toBe(null);
            });
            partidosB.forEach(function (element) {
                expect(element.resultado[0]).not.toBe(null);
                expect(element.resultado[1]).not.toBe(null);
            });
        });

        it('no deberia sobreescribir resultados ya asignados', function () {
            var partidos = Grupo.partidos.A;

            partidos[0].resultado[0] = 4;
            partidos[0].resultado[1] = 0;

            Grupo.autoCompletar('A');

            expect(partidos[0].resultado[0]).toBe(4);
            expect(partidos[0].resultado[1]).toBe(0);
        });
    });

    describe('obtenerPosiciones', function () {
        it('deberia devolverme el primero y segundo por grupo', function () {
            var listaEquipos = Grupo.obtenerPosiciones();
            expect(listaEquipos.A.length).toBe(2);
            expect(listaEquipos.B.length).toBe(2);
            expect(listaEquipos.C.length).toBe(2);
            expect(listaEquipos.D.length).toBe(2);
            expect(listaEquipos.E.length).toBe(2);
            expect(listaEquipos.F.length).toBe(2);
            expect(listaEquipos.G.length).toBe(2);
            expect(listaEquipos.H.length).toBe(2);
        });
        it('deberia devolver objetos temporales si aun no estan definidos los ganadores de los grupos', function () {
            var listaEquipos = Grupo.obtenerPosiciones();
            expect(listaEquipos.A[0].nombre).toBe(null);
            expect(listaEquipos.A[1].nombre).toBe(null);
            expect(listaEquipos.B[0].nombre).toBe(null);
        });
        it('deberia calcular primero y segundo correctamente', function () {
            Grupo.ponerResultado('A', 0, 0, 0);
			Grupo.ponerResultado('A', 0, 1, 0);
            Grupo.ponerResultado('A', 1, 0, 0);
			Grupo.ponerResultado('A', 1, 1, 0);
            Grupo.ponerResultado('A', 2, 0, 3);
			Grupo.ponerResultado('A', 2, 1, 0);
            Grupo.ponerResultado('A', 3, 0, 0);
			Grupo.ponerResultado('A', 3, 1, 0);
            Grupo.ponerResultado('A', 4, 0, 0);
			Grupo.ponerResultado('A', 4, 1, 3);
            Grupo.ponerResultado('A', 5, 0, 3);
			Grupo.ponerResultado('A', 5, 1, 0);

            var listaEquipos = Grupo.obtenerPosiciones();

            expect(listaEquipos.A[0].nombre).toBe('Brasil');
            expect(listaEquipos.A[1].nombre).toBe('Croacia');
        });
        it('deberia determinar al ganador por diferencia de goles', function () {
            Grupo.ponerResultado('A', 0, 0, 0);
			Grupo.ponerResultado('A', 0, 1, 0);
            Grupo.ponerResultado('A', 1, 0, 0);
			Grupo.ponerResultado('A', 1, 1, 0);
            Grupo.ponerResultado('A', 2, 0, 0);
			Grupo.ponerResultado('A', 2, 1, 0);
            Grupo.ponerResultado('A', 3, 0, 0);
			Grupo.ponerResultado('A', 3, 1, 0);
            Grupo.ponerResultado('A', 4, 0, 0);
			Grupo.ponerResultado('A', 4, 1, 1);
            Grupo.ponerResultado('A', 5, 0, 2);
			Grupo.ponerResultado('A', 5, 1, 0);

            var listaEquipos = Grupo.obtenerPosiciones();

            /*console.log(Grupo.partidos('A')[0].equipos); // Bra - Cro
            console.log(Grupo.partidos('A')[1].equipos); // Mex - Cam
            console.log(Grupo.partidos('A')[2].equipos); // Bra - Mex
            console.log(Grupo.partidos('A')[3].equipos); // Cam - Cro
            console.log(Grupo.partidos('A')[4].equipos); // Cam - Bra
            console.log(Grupo.partidos('A')[5].equipos); // Cro - Mex*/

            //console.log(Grupo.obtenerPosiciones('A').A);

            expect(listaEquipos.A[0].nombre).toBe('Croacia');
            expect(listaEquipos.A[1].nombre).toBe('Brasil');
        });
		it('deberia determinar al ganador al azar', function () {
            Grupo.ponerResultado('A', 0, 0, 1);
			Grupo.ponerResultado('A', 0, 1, 1);
            Grupo.ponerResultado('A', 1, 0, 1);
			Grupo.ponerResultado('A', 1, 1, 1);
            Grupo.ponerResultado('A', 2, 0, 1);
			Grupo.ponerResultado('A', 2, 1, 1);
            Grupo.ponerResultado('A', 3, 0, 1);
			Grupo.ponerResultado('A', 3, 1, 1);
            Grupo.ponerResultado('A', 4, 0, 1);
			Grupo.ponerResultado('A', 4, 1, 1);
            Grupo.ponerResultado('A', 5, 0, 1);
			Grupo.ponerResultado('A', 5, 1, 1);
			
			spyOn(Math, "random");
			
            var listaEquipos = Grupo.obtenerPosiciones();
            expect(Math.random).toHaveBeenCalled();
			//expect(listaEquipos.A[0].nombre).not.toBe(undefined);
            //expect(listaEquipos.A[1].nombre).not.toBe(undefined);
        });
    });

});
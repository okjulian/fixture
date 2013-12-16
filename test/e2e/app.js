(function () {
    'use strict';

    describe('App', function () {
        beforeEach(function () {
            browser().navigateTo('/');
        });

        it('no deberia redireccionar', function () {
            expect(browser().location().url()).toBe('/');
        });

        it('deberia empezar mostrando los 6 partidos del grupo A', function () {
            expect(claseDeTabDelGrupo('A')).toContain('active');
            expect(cantidadDePartidosDelGrupo('A')).toBe(6);
        });

        it('deberia mostrar los 6 partidos del grupo B', function () {
            tabDelGrupo('B').click();
            expect(claseDeTabDelGrupo('B')).toContain('active');
            expect(cantidadDePartidosDelGrupo('B')).toBe(6);
        });

        describe('Autocompletar', function () {

            it('deberia poder generar los resultados del grupo A', function () {
                botonCompletarGrupo('A').click();
                expect(resultadosGrupo('A')).not().toBe('');
            });

            it('deberia poder generar los resultados del grupo B', function () {
                tabDelGrupo('B').click();
                botonCompletarGrupo('B').click();
                expect(resultadosGrupo('B')).not().toBe('');
            });

            it('deberia poder generar los resultados del grupo C', function () {
                tabDelGrupo('C').click();
                botonCompletarGrupo('C').click();
                expect(resultadosGrupo('C')).not().toBe('');
            });

            it('deberia poder generar los resultados del grupo D', function () {
                tabDelGrupo('D').click();
                botonCompletarGrupo('D').click();
                expect(resultadosGrupo('D')).not().toBe('');
                expect(resultadosGrupo('D')).not().toBe('');
            });

            it('deberia poder generar los resultados de todos los grupos desde el grupo A', function () {
                botonCompletarGruposDelGrupo('A').click();
                expect(resultadosGrupo('A')).not().toBe('');
                expect(resultadosGrupo('B')).not().toBe('');
            });

            it('deberia poder generar los resultados de todos los grupos desde el grupo B', function () {
                tabDelGrupo('B').click();
                botonCompletarGruposDelGrupo('B').click();
                expect(resultadosGrupo('A')).not().toBe('');
                expect(resultadosGrupo('B')).not().toBe('');
            });

            it('no deberia completar el resultado de un partido ya asignado manualmente en el grupo A', function () {
                ponerResultado('A', 1, 1, 2);
                ponerResultado('A', 1, 2, 3);
                botonCompletarGrupo('A').click();
                expect(obtenerResultado('A', 1, 1)).toBe('2');
                expect(obtenerResultado('A', 1, 2)).toBe('3');
            });

            it('no deberia completar el resultado de un partido ya asignado manualmente en el grupo B', function () {
                tabDelGrupo('B').click();
                ponerResultado('B', 2, 1, 1);
                ponerResultado('B', 2, 2, 1);
                botonCompletarGrupo('B').click();
                expect(obtenerResultado('B', 2, 1)).toBe('1');
                expect(obtenerResultado('B', 2, 2)).toBe('1');
            });
        });

    });

    function claseDeTabDelGrupo(letra) {
        return element('#partidos li:eq(' + letraANumero(letra) + ')').attr('class');
    }

    function cantidadDePartidosDelGrupo(letra) {
        return element('.tab-pane:eq(' + letraANumero(letra) + ') .partido').count();
    }

    function tabDelGrupo(letra) {
        return element('#partidos li:eq(' + letraANumero(letra) + ') a');
    }

    function botonCompletarGrupo(letra) {
        return element('.tab-pane:eq(' + letraANumero(letra) + ') .completar-grupo');
    }

    function resultadosGrupo(letra) {
        return element('.tab-pane:eq(' + letraANumero(letra) + ') .resultado:eq(0)').val();
    }

    function botonCompletarGruposDelGrupo(letra) {
        return element('.tab-pane:eq(' + letraANumero(letra) + ') .completar-grupos');
    }

    function obtenerResultado(grupo, partido, equipo) {
        return element('.tab-pane:eq(' + letraANumero(grupo) + ') .partido:eq(' + (partido - 1) + ') .resultado:eq(' + (equipo - 1) + ')').val();
    }

    function ponerResultado(grupo, partido, equipo, resultado) {
        using('.tab-pane:eq(' + letraANumero(grupo) + ') .partido:eq(' + (partido - 1) + ')').input('partidos.' + grupo + '[$index].resultado[' + (equipo - 1) + ']').enter(resultado);
    }

    function letraANumero(letra) {
        letra = letra.toUpperCase();
        var numero = letra.charCodeAt(0) - 65;
        return numero;
    }

}());
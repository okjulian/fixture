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
            expect(element('#partidos li:eq(0)').attr('class')).toContain('active');
            expect(element('.tab-pane:eq(0) .partido').count()).toBe(6);
        });

        it('deberia mostrar los 6 partidos del grupo B', function () {
            element('#partidos li:eq(1) a').click();
            expect(element('#partidos li:eq(1)').attr('class')).toContain('active');
            expect(element('.tab-pane:eq(1) .partido').count()).toBe(6);
        });

        describe('Autocompletar', function () {

            it('deberia poder generar los resultados del grupo A', function () {
                element('.tab-pane:eq(0) .completar-grupo').click();
                expect(element('.tab-pane:eq(0) .resultado:eq(0)').val()).not().toBe('');
            });

            it('deberia poder generar los resultados del grupo B', function () {
                element('#partidos li:eq(1) a').click();
                element('.tab-pane:eq(1) .completar-grupo').click();
                expect(element('.tab-pane:eq(1) .resultado:eq(0)').val()).not().toBe('');
            });

            it('deberia poder generar los resultados de todos los grupos desde el grupo A', function () {
                element('.tab-pane:eq(0) .completar-grupos').click();
                expect(element('.tab-pane:eq(0) .resultado:eq(0)').val()).not().toBe('');
                expect(element('.tab-pane:eq(1) .resultado:eq(0)').val()).not().toBe('');
            });

            it('deberia poder generar los resultados de todos los grupos desde el grupo B', function () {
                element('#partidos li:eq(1) a').click();
                element('.tab-pane:eq(1) .completar-grupos').click();
                expect(element('.tab-pane:eq(0) .resultado:eq(0)').val()).not().toBe('');
                expect(element('.tab-pane:eq(1) .resultado:eq(0)').val()).not().toBe('');
            });

            it('no deberia completar el resultado de un partido ya asignado manualmente', function () {
                using('.partido:eq(0)').input('partidos.A[$index].resultado[0]').enter(2);
                using('.partido:eq(0)').input('partidos.A[$index].resultado[1]').enter(3);
                element('.tab-pane:eq(0) .completar-grupo').click();
                expect(element('.tab-pane:eq(0) .resultado:eq(0)').val()).toBe('2');
                expect(element('.tab-pane:eq(0) .resultado:eq(1)').val()).toBe('3');
            });
        });

    });

}());
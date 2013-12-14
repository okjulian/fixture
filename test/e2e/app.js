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
    });

}());
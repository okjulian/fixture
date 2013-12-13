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
            expect(element('.partido').count()).toBe(6);
        });
    });

}());
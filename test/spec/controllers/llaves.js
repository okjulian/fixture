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

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});

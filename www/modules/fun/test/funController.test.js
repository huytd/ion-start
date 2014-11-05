/**
 * Created by tdhuy on 11/4/14.
 */
'use strict';

describe('Unit: FunController', function(){
    // Init test - DO NOT TOUCH!
    var scope;
    beforeEach(angular.mock.module('pcs'));
    var ctrl, scope;
    beforeEach(inject(function($controller, $rootScope) {
        // Create a new scope that's a child of the $rootScope
        scope = $rootScope.$new();
        ctrl = $controller('funController', {
            $scope: scope
        });
    }));
    // End of Init test

    // Test cases

    // This test will SUCCESS
    it ('should set the value of hello to "YEAH!"', function(){
        expect(scope.hello).toBe('YEAH!');
    });

    it ('should set the value of hello to true', function(){
        expect(scope.hello).toBe(true);
    });
});
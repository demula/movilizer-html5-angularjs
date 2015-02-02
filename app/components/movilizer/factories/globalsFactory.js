(function() {
    "use strict";
    /**
     * @ngdoc function
     * @name MovilizerModule.factory:GlobalsFactory
     * @description
     * # GlobalsFactory
     * Factory to read and write globals
     */
angular
    .module('MovilizerModule')
    .factory('GlobalsFactory', function($q) {
        return {
            read: function (name, namespace) {
                var deferred = $q.defer();
                if (undefined == namespace) {
                    movilizer.readGlobalVariableWithNamespace(name,
                        function (result) {
                            if ("OK" == result) deferred.reject(result);
                            deferred.resolve(result);
                        },
                        function (result) {
                            deferred.reject(result);
                        },
                        namespace
                    );
                } else {
                    movilizer.readGlobalVariable(name,
                        function (result) {
                            if ("OK" == result) deferred.reject(result);
                            deferred.resolve(result);
                        },
                        function (result) {
                            deferred.reject(result);
                        }
                    );
                }
                return deferred.promise;
            },
            write: function (name, value, namespace) {
                if (undefined == namespace) {
                    movilizer.writeGlobalVariableWithNamespace(name, value, namespace);
                } else {
                    movilizer.writeGlobalVariable(name, value);
                }
            }
        };
    });
})();

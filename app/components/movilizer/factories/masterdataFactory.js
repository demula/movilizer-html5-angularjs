(function() {
    "use strict";
    /**
     * @ngdoc function
     * @name MovilizerModule.factory:MasterdataFactory
     * @description
     * # MasterdataFactory
     * Factory to query masterdata
     */
angular
    .module('MovilizerModule')
    .factory('MasterdataFactory', function($q) {
        return {
            queryMasterData: function(pool, group, filter, returnSpec) {
                var deferred = $q.defer();
                movilizer.queryMasterData(pool, group, filter, returnSpec,
                    function (result) {
                        if ("OK" == result) deferred.reject(result);
                        deferred.resolve(result);
                    },
                    function (result) {
                        deferred.reject(result);
                    }
                );
                return deferred.promise;
            }
        }
    });
})();

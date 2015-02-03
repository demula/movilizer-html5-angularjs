(function() {
    "use strict";
    /**
     * @ngdoc function
     * @name MovilizerModule.factory:MasterdataFactory
     * @description
     * # MasterdataFactory
     * Factory to query masterdata
     *
     * https://devtools.movilizer.com/confluence/display/DEV21/HTML5+queryMasterData
     * https://devtools.movilizer.com/confluence/display/DOC21/queryMasterData+method
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
                    function (error) {
                        deferred.reject(error);
                    }
                );
                return deferred.promise;
            }
        }
    });
})();

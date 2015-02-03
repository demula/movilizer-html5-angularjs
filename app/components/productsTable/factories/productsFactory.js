(function() {
    "use strict";

    var Product = function (key, description, code, name, productionDate, vendor) {
        this.key = key;
        this.description = description;
        this.code = code;
        this.name = name;
        this.productionDate = productionDate;
        this.vendor = vendor;
    };

    Product.prototype.setFromMasterdata = function(masterdataRecord) {
        this.key = masterdataRecord.key;
        this.description = masterdataRecord.description;
        this.code = masterdataRecord.data[this.key].code;
        this.name = masterdataRecord.data[this.key].name;
        this.productionDate = new Date(masterdataRecord.data[this.key].productionDate);
        this.vendor = masterdataRecord.data[this.key].vendor;
    };

    Product.getMasterdataField = function(objectFieldName) {
        switch (objectFieldName) {
            case "key" : return "key";
            case "description" : return "description";
            case "code" : return "filter1";
            case "name" : return "filter2";
            case "productionDate" : return "filter4";
            case "vendor" : return "filter3";
            default: return "";
        }
    };

    Product.prototype.prettyPrintDate = function() {
        return this.productionDate;
    };

    /**
     * @ngdoc function
     * @name ProductsTableModule.factory:MasterdataFactory
     * @description
     * # MasterdataFactory
     * Factory to query masterdata
     */
    angular
        .module('ProductsTableModule')
        .factory('ProductsFactory', function($q, MasterdataFactory) {
            var getResultSpec = function(resultsPerPage, page, sortingColumns, sortingDirections) {
                var resultSpec = {
                    "result": "all",
                    "order": [],
                    "limit": resultsPerPage,
                    "offset": resultsPerPage * page
                };
                var len = sortingColumns.length;
                var sortEntry;
                var sortDirection;
                for (var i = 0; i < len; i++) {
                    sortEntry = {};
                    sortDirection = "A";
                    if (undefined != sortingDirections && sortingDirections.length > i) {
                        sortDirection = sortingDirections[i] == "DESC"? "D":"A";
                    }
                    sortEntry[Product.getMasterdataField(sortingColumns[i])] = sortDirection;
                    resultSpec.order.push(sortEntry);
                }
                if (resultSpec.order.length == 0) {
                    resultSpec.order.push({"key":"A"});
                }
            };

            return {
                newProductInstance: function(key, description, code, name, productionDate, vendor) {
                    return new Product(key, description, code, name, productionDate, vendor);
                },
                getProducts: function(resultsPerPage, page, sortingColumns, sortingDirections) {
                    var deferred = $q.defer();
                    MasterdataFactory
                        .queryMasterData(1111, "ALL", {}, getResultSpec(resultsPerPage,page, sortingColumns, sortingDirections))
                        .then(function(masterdataRecords) {
                            var products = [];
                            var product;
                            for(var key in masterdataRecords) {
                                product = new Product();
                                product.setFromMasterdata(masterdataRecords[key]);
                                products.push(product);
                            }
                            deferred.resolve(products);
                        },
                        function(error) {
                            deferred.reject(error);
                        });
                    return deferred.promise;
                }
            }
        });
})();

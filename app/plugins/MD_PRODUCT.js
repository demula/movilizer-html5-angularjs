
var MD_PRODUCT = (function () {
    "use strict";
    var productsFunc = function (result) {
        MD_PRODUCT_00001(result);
        return result;
    };

    function MD_PRODUCT_00001(result) {
        result['00001'] = {
            'key': '00001',
            'group': 'ALL',
            'filter1': 'MOV2015-0001',
            'filter2': 'Product number 1',
            'filter3': 'Movilizer',
            'filter4': '1422835200000',
            'filter5': '0',
            'filter6': '0',
            'description': 'Detailed description of product number 1',
            'data': {
                '00001': {
                    'code': 'MOV2015-0001',
                    'name': 'Product number 1',
                    'productionDate': '1422835200000', //'2015-02-02',
                    'vendor': 'Movilizer'
                }
            }
        };
    }

    return productsFunc;
}());

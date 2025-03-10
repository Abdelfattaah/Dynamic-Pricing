odoo.define('dynamic_pricing.ProductScreenExtend', function(require) {
    'use strict';

    const ProductScreen = require('point_of_sale.ProductScreen');
    const Registries = require('point_of_sale.Registries');
    const rpc = require('web.rpc');

    const ProductScreenExtend = (ProductScreen) =>
        class extends ProductScreen {
            async _clickProduct(event) {
                const product = event.detail;

                const realTimePrice = await rpc.query({
                    model: 'product.product',
                    method: 'get_real_time_price',
                    args: [product.id],
                });

                if (realTimePrice !== undefined) {
                    product.lst_price = realTimePrice;
                }

                await super._clickProduct(event);

            }


            async _barcodeProductAction(code) {
                const product = this.env.pos.db.get_product_by_barcode(code.base_code);

                if (product) {

                    const realTimePrice = await this.rpc({
                        model: 'product.product',
                        method: 'get_real_time_price',
                        args: [product.id],
                    });

                    if (realTimePrice) {
                        product.lst_price = realTimePrice;
                    }

                    await super._barcodeProductAction(code);

                }
                else {
                    await super._barcodeProductAction(code);
                }
            }

        };

    Registries.Component.extend(ProductScreen, ProductScreenExtend);
});
# -*- coding: utf-8 -*-
from odoo import models, api


class PosSession(models.Model):
    _inherit = 'product.product'

    @api.model
    def get_real_time_price(self, product_id):
        product = self.browse(product_id)

        pricelist_item = self.env['product.pricelist.item'].search([
            ('product_id', '=', product_id)
        ], limit=1)

        if pricelist_item:
            return pricelist_item.fixed_price
        else:
            return product.lst_price

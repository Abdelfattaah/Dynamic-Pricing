# -*- coding: utf-8 -*-
{
    'name': "dynamic_pricing",

    'summary': """
    Modify the Odoo Point of Sale (POS) system so that when a product is scanned,
     its price is automatically updated based on the latest backend pricing rules.
    """,

    'author': "Abdelfattah Mohamed",
    'website': "https://abdelfattaah.github.io/",

    'category': 'Uncategorized',
    'version': '0.1',

    'depends': ['base','point_of_sale','stock'],


    'assets': {
        'point_of_sale.assets': [
            'dynamic_pricing/static/src/js/product_screen_extend.js',
        ],
    },

    'application': True,
}

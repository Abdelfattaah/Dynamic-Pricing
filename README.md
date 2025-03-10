### Dynamic Pricing for POS in Odoo

Modifying the Odoo Point of Sale (POS) system so that when a product is scanned, its price is automatically updated based on the latest backend pricing rules.


### Demo

A 50-second demo video of the functionality is available here:  
[![Watch the demo](https://img.youtube.com/vi/lBt46ZRkHys/0.jpg)](https://youtu.be/lBt46ZRkHys)


### Features
- Dynamically updates the product price before adding it to the basket.
- Supports both click-based product selection and barcode scanning.
- Uses the latest price from the associated pricelist, if available.
- Falls back to the default product price if no pricelist is defined.

### Possible Improvement for the UI

An additional enhancement could be to introduce a button to fetch the new prices for all the products at once or to periodically auto-fetch the latest prices.

### Possible Improvements for the offline session:

We can periodically fetch and cache updated prices in the background during online sessions to be able to use the cached prices when offline.

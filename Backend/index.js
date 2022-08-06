const express = require('express');
const cors = require('cors');
const port = 3002;
const app = express()
const sr_routes = require('./routes/admin/shop_registration/shop_registration.routes');
const of_routes = require('./routes/admin/offer/offer.routes');
const category_routes = require('./routes/admin/product_category/category.routes');
const categorysub_routes = require('./routes/admin/product_subcategory/categorysub.routes');
const inventory_routes = require('./routes/customer/product_inventory/inventory.routes');
const customer_routes = require('./routes/customer/customer_registration/customer_registration.routes');
const addtocart_routes = require('./routes/customer/addtocart/addtocart.routes');
const review_routes = require('./routes/customer/review/review.routes');
const specification = require('./routes/shop/product_specification/product_specification.rotues');
const addtowishlist_routes = require('./routes/customer/addtowishlist/addtowishlist.routes');
const uploadreg_routes = require('./routes/admin/upload_registration/upload_registration.routes');
const shipping_routes = require('./routes/shipping/shipping.routes');
const shops = require('./routes/shop/shops/shops.routes');
const make_payment = require('./routes/customer/make_payment/make_payment.routes');
const make_payment_routes = require('./routes/customer/make_payment/make_payment.routes');
const user_routes = require('./routes/admin/user_management/user_management.routes');

app.use(express.json())
app.use(cors());

//admin side routes
app.use('/admin', sr_routes)
app.use('/admin', of_routes)
app.use('/admin', category_routes)
app.use('/admin', categorysub_routes)
app.use('/admin', uploadreg_routes)
app.use('/admin', user_routes);

// customer side routes
app.use('/customer', inventory_routes)
app.use('/customer', customer_routes)
app.use('/customer', addtocart_routes)
app.use('/customer', review_routes)
app.use('/customer', addtowishlist_routes)
app.use('/customer', make_payment_routes)

//shop side routes
app.use('/shop', specification)

//shipping side routes
app.use('/cheak', shipping_routes)

//login side routes
app.use('/login', shops)

//create connection::::::::::::::
app.listen(port, (err) => {
    if (err) {
        console.log(err.message)
    }
    else {
        console.log(`sever is start at::${port}`)
    }
})
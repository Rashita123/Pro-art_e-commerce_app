require("dotenv").config();
require('./database/database.config').connect();
console.log("hi")
const express = require('express');
const app = express();
const cors = require('cors');


app.use(express.json({strict:true}))

const productsRouter = require('./routers/products.router');
// const cartRouter = require('./routers/cart.router');
// const wishListRouter = require('./routers/wishlist.router');
// const addressRouter = require('./routers/address.router');
const usersRouter = require('./routers/users.router');
// const router404 = require('./middlewares/router404');
// const errorHandler = require('./middlewares/errorHandler');

app.use(cors());
app.use('/products',productsRouter);
// app.use('/cart', cartRouter);
// app.use('/wishlist', wishListRouter);
// app.use('/address', addressRouter);
app.use('/users', usersRouter);
app.get('/', (req, res) => {
  res.send('Hello Express app!')
});


// app.use(router404);
// app.use(errorHandler);
app.listen(4000, () => {
  console.log('server started');
});
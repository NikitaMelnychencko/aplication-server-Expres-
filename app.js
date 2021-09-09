// npm run dev

//Loads the express module
const express = require('express')
//Loads the handlebars module
const exhbs = require('express-handlebars');
const products = require('./products.json');

const PORT = process.env.PORT || 4444;

//Creates our express server
const app = express();

//Serves static files (we need it to import a css file)
app.use(express.static('public'))

//Sets our app to use the handlebars engine
app.set('view engine', 'hbs');

//Sets handlebars configurations (we will go through them later on)
app.engine(
  'hbs', exhbs({
    extname: 'hbs',
  }),
);
//================================================

//http://localhost:4444
app.get('/', (req, res) => {
  res.render('home', {cssFileName: 'home', title:'Главная'});
})
//http://localhost:4444/about
app.get('/about', (req, res) => {
  res.render('about',{cssFileName: 'about', title:'О нас'} );
})
//http://localhost:4444/products
app.get('/products', (req, res) => {
  res.render('products', { products, cssFileName: 'products', title:'Продукты'});
})
// product/id
app.get('/product/:productId', (req, res) => {
  console.log(req.params);
  const product = products.find(p => p.id === req.params.productId)
  res.render('product',{product})
})
//=============================================
app.listen(PORT, () => {
  console.log(`Application server is running on port ${4444}`);
})
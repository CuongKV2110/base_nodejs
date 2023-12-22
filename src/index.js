var path = require('path');
const express = require('express');
const morgan = require('morgan');
const handlebars = require('express-handlebars');
const app = express();
const port = 3000;
const users = require('./resources/models/users');
const list_menu = require('./resources/models/menu_item');
const route = require('./routes');

app.use(express.static(path.join(__dirname, 'public')));
app.use(
    express.urlencoded({
        extended: true,
    }),
);

app.use(express.json());
// app.use(morgan('combined'))

app.engine('hbs', handlebars.engine({ extname: '.hbs' }));

app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources/views'));

app.get('/users', (request, response) => {
    response.send(users);
});

app.get('/list_menu', (request, response) => {
    response.send(list_menu);
});
//Route init
route(app);

app.listen(port, () => {
    console.log(`Example app listening on port http://localhost:${port}`);
});

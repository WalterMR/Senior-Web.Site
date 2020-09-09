const express = require('express');
const exphbs = require('express-handlebars');

const path = require('path');

const morgan = require('morgan');

// intialiaztions
const app = express();

// settings
app.set('port', process.env.PORT || 4000);
app.set('views', path.join(__dirname, 'views')); // here are views
app.engine(
	'.hbs',
	exphbs({
		defaultLayout: 'main',
		layoutsDir: path.join(app.get('views'), 'layouts'),
		partialsDir: path.join(app.get('views'), 'partials'),
		extname: '.hbs', // files' extentions
	})
);
app.set('view engine', '.hbs');

// middlewares

app.use(morgan('dev'));
app.use(express.urlencoded({ extended: false })); // accept only simple data
app.use(express.json());

// routes
app.use(require('./routes/index'));
app.use('/services', require('./routes/services'));

// public files
app.use(express.static(path.join(__dirname, 'public')));

// starting server
app.listen(app.get('port'));
console.log(`Server on port ${app.get('port')}`);

module.exports = {
	port: process.env.PORT || 3000,
	db: process.env.MONGODB_URI || 'mongodb://heroku_xnbmxsjx:ijgmdbctsaqqgimf2bodn0qgl8@ds243728.mlab.com:43728/heroku_xnbmxsjx',
	SECRET_TOKEN: 'miclavesecreta'
};
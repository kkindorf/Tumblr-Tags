exports.DATABASE_URL = process.env.DATABASE_URL ||
                       global.DATABASE_URL ||
                       (process.env.NODE_ENV === 'production' ?
                            'mongodb://kkindorf:Soccer88@ds046549.mlab.com:46549/tumblr-tags' :
                            'mongodb://localhost/node-movie-dev');
exports.PORT = process.env.PORT || 8080;
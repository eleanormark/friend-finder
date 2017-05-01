var path = require("path");

function loadHTMLStaticPages(app) {

    app.get('/survey', function (request, response) {
        response.sendFile(path.join(__dirname, '../public/survey.html'));
    });

    //use home.html when other link paths are not available
    app.use(function (request, response) {
        response.sendFile(path.join(__dirname, '../public/home.html'));
    });
}

module.exports = loadHTMLStaticPages;
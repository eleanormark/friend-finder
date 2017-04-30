
function loadAPIRoutes(app, friendsDB) {

    app.get("/api/friends", function(req, res) {
        return res.json(friendsDB.friends);
    });

}

module.exports = loadAPIRoutes;
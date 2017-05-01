
function loadAPIRoutes(app, friendsDBobj) {

    app.get("/api/friends", function(request, response) {
        return response.json(friendsDBobj.friends);
    });

    app.post("/api/friends", function(request, response) {
        var newFriend = request.body;
        friendsDBobj.friends.push(newfriend);
        return response.json(friendsDBobj.friends.getBestMatch(newFriend));
    });
}

module.exports = loadAPIRoutes
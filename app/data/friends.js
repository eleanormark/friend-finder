function Friend() {

    if (!(this instanceof Friend)) {
        return new Friend();
    }
}

Friend.prototype.friends = [
    {
        name: "Tester Ones",
        photo: "https://www.drupal.org/files/user-pictures/picture-2783135-1450510078.png",
        scores: ["1","1","1","1","1","1","1","1","1","1"]
    },
    {
        name: "Tester Threes",
        photo: "https://www.drupal.org/files/user-pictures/picture-2783135-1450510078.png",
        scores: ["3","3","3","3","3","3","3","3","3","3"]
    },
    {
        name: "Tester Fives",
        photo: "https://www.drupal.org/files/user-pictures/picture-2783135-1450510078.png",
        scores: ["5","5","5","5","5","5","5","5","5","5"]
    }
];

Friend.prototype.getBestMatch = function (newFriend) {
    var newFriendSum = newFriend.scores.reduce(getSum,0);
    var difFriendsArr = [];

    // use Friend.prototype.friends - 1 to exclude newFriend value
    for(var i = 0; i < Friend.prototype.friends.length - 1; i++){
       var sum = Friend.prototype.friends[i].scores.reduce(getSum,0);
       difFriendsArr.push(Math.abs(sum - newFriendSum));
    }

    var minDiff = Math.min.apply(null, difFriendsArr);
    var bestMatchIndex = difFriendsArr.indexOf(minDiff);

    return Friend.prototype.friends[bestMatchIndex];
}

function getSum(total, num) {
    return parseInt(total) + parseInt(num);
}

module.exports = Friend;
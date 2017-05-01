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

    
}


module.exports = Friend;
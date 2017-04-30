function Friend(name, photo, scores) {

    if (!(this instanceof Friend)) {
        return new Friend(name, photo, scores);
    }

    this.name = name;
    this.photo = photo;
    this.scores =  scores;
}

Friend.prototype.friends = [
    {
        name: "Tester Ones1",
        photo: "https://www.drupal.org/files/user-pictures/picture-2783135-1450510078.png",
        scores: ["1","1","1","1","1","1","1","1","1","1"]
    },
    {
        name: "Tester Ones2",
        photo: "https://www.drupal.org/files/user-pictures/picture-2783135-1450510078.png",
        scores: ["1","1","1","1","1","1","1","1","1","1"]
    },
    {
        name: "Tester Twos1",
        photo: "https://www.drupal.org/files/user-pictures/picture-2783135-1450510078.png",
        scores: ["2","2","2","2","2","2","2","2","2","2"]
    },
    {
        name: "Tester Fives1",
        photo: "https://www.drupal.org/files/user-pictures/picture-2783135-1450510078.png",
        scores: ["5","5","5","5","5","5","5","5","5","5"]
    }
];

Friend.prototype.getBestMatch = function () {
    
}


module.exports = Friend;
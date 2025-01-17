var header = new Vue({
    el: '#header',
    data: {
        yourName: 'Lindsay Bui',
        description: "I am a third-year Computer Science student concentrating in Software Design.",
        linkOne: "Introduction",
        link2: "My Portfolio",
        link3: "About Me",
        link4: "Contact",
        avatar: "images/avatar.JPG"
    }
});

var portfolio = new Vue({
    el: '#portfolio',
    data: {
        portfolioTitle: "My Portfolio",
        image1: "images/one.jpg",
        imgText1: "Image One",
        image2: "images/two.jpg",
        imgText2: "Image Two",
        image3: "images/three.jpg",
        imgText3: "Image Three",
        image4: "images/four.jpg",
        imgText4: "Image Four",
        image5: "images/five.jpg",
        imgText5: "Image Five",
        image6: "images/six.jpg",
        imgText6: "Image Six"
    }
});


var intro = new Vue({
    el: '#top',
    data: {
        title: "Hi! I'm Lindsay Bui",
        tagline: "I am a third year computer science student interested in web, game, and mobile development.",
        buttonText: "View My Work (not my work)"
    }
});

var aboutMe = new Vue({
    el: '#about',
    data: {
        aboutTitle: "About Me",
        // just used a predownloaded img from the folder
        aboutImage: "images/horizon.jpg",
        aboutDescription: "(^not my picture) I am a huge foodie, so I love exploring new food and dessert places that open up."
    }
});

var contact = new Vue({
    el: '#contact',
    data: {
        contactTitle: "Contact Me",
        contactDescription: "Feel free to reach out!!",
    }
});


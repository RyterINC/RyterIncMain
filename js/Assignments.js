
// twitter feed starts here

!function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0],p=/^http:/.test(d.location)?'http':'https';
    if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src=p+"://platform.twitter.com/widgets.js";fjs.parentNode.insertBefore(js,fjs);}}(document,"script","twitter-wjs");














// assign 9 function starts here ------------------------------------------------------------------

var canvas = {
    element: document.getElementById('canvas'),
    width: 600,
    height: 400,
    initialize: function () {
        this.element.style.width = this.width + 'px';
        this.element.style.height = this.height + 'px';
        document.body.appendChild(this.element);
    }
};

var ball = {
    element: document.createElement('div'),
    width: 40,
    height: 40,
    dx: 3,
    dy: 3,
    initialize: function () {
        this.element.className += ' ball';
        this.element.style.width = this.width + 'px';
        this.element.style.height = this.height + 'px';
        canvas.element.appendChild(this.element);
    },
    moveTo: function (x, y) {
        this.element.style.left = x + 'px';
        this.element.style.top = y + 'px';
    },
    changeDirectionIfNecessary: function (x, y) {
        if (x < 0 || x > canvas.width - ball.width) {
            this.dx = -this.dx;
        }
        if (y < 0 || y > canvas.height - ball.height) {
            this.dy = -this.dy;
        }
    },
    draw: function (x, y) {
        this.moveTo(x, y);
        var ball = this;
        setTimeout(function () {
            ball.changeDirectionIfNecessary(x, y);
            ball.draw(x + ball.dx, y + ball.dy);
        }, 1000 / 60);
    },



    
};

  //  function changeBallSize() {
       // ball.moveTo(1, 6);
   

  //  };



     
ball.element.onclick = function () {
    
    
};

canvas.initialize();
ball.initialize();
ball.draw(0, 0);



//Assignment 7 funcions start here --------------------------------------------------


var deck = new Array();
for (i = 0; i <= 51; i++) {
    var ImgPath = 'http://www.ryterinc.com/img/PokerCards/' + 'card' + i + '.png';
    deck[i] = ImgPath;
};






function dealHand() {
    
    if (deck.length !== 0) {

        for (n = 0; n <= 4; n++) {
            var randomNum = Math.floor(Math.random() * deck.length);
            var randomCard = deck[randomNum];
            var img = document.createElement("img");
            img.src = randomCard;
            img.height = 100;
            img.width = 100;
            img.draggable = true;
            img.id = 'card' + randomNum + '.png';
            document.body.appendChild(img);
            removeCard(randomCard);
            var fullCardName = 'card' + randomNum + '.png';
            
            dragCards(fullCardName, img);

        }
    }
};


function removeCard(randomCard) {
    var index = deck.indexOf(randomCard);
    deck.splice(index, 1);

};



function dragCards(fullCardName, img) {
    cardToDrag = document.getElementById(fullCardName);
    cardToDrag.addEventListener("dragstart", startDrag, false);
    discardZone = document.getElementById('discardZone');
    discardZone.addEventListener("dragenter", function (e) { e.preventDefault();}, false);
    discardZone.addEventListener("dragover", function (e) { e.preventDefault();}, false);
    discardZone.addEventListener("drop", dropped, false);

};

function startDrag(e, img) {
    e.dataTransfer.setData('Text', e.target.id);

};

function dropped(e) {

    e.preventDefault();
    var data = e.dataTransfer.getData("text");
    e.target.appendChild(document.getElementById(data));
    


};
















/// <reference path="../assign6_KML.html" />


function display_kmlmap() {
    // A map needs 2 things - a place to put it and map options
    var map_options = {};
    var map = new google.maps.Map(document.getElementById("map_canvas"), map_options);

    // OK - now we have a map, now let's display some kml - for this you need
    // to create a kmlLayer. You can add multple of these to a map in the kmlOptions

    // A kml layer needs 2 things - a kml file and a set of options
    // I selected a random kml file - but since I did not give a location for the
    // map in map options - the kml file better do this

    var kmlUrl = 'https://s3.amazonaws.com/ryterinc.com/statueOfZeus.kml';
    var kmlOptions = { map: map };

    // Create the kmlLayer - and you are done
    var kmlLayer = new google.maps.KmlLayer(kmlUrl, kmlOptions);
}


//***********************************************************************************************
// Assignment 3 form validation

function ValidateForm() {
    var fname = document.forms["myForm"]["fname"].value;
    var lname = document.forms["myForm"]["lname"].value;
    var Sname = document.forms["myForm"]["Sname"].value;
    var City = document.forms["myForm"]["City"].value;
    var Zcode = document.forms["myForm"]["Zcode"].value;
    var usrtel = document.forms["myForm"]["usrtel"].value;
    var email = document.forms["myForm"]["email"].value;
    var state = document.forms["myForm"]["state"].value;
    var day = document.forms["myForm"]["day"].value;
    var month = document.forms["myForm"]["month"].value;
    var year = document.forms["myForm"]["year"].value;
    var message = document.forms["myForm"]["message"].value;

    var confirm = document.forms["myForm"]["confirm"].value;

    var cityIsValid = /^[a-zA-Z]+(?:[\s-][a-zA-Z]+)*$/;
    var onlyLetters = /^[a-zA-Z]+$/;
    var noSpecialCharacters = /[A-Za-z0-9'\.\-\s\,]/;
    var isValidZip = /(^\d{5}$)|(^\d{5}-\d{4}$)/;
    var isValidPhone = /^(?:(?:\+?1\s*(?:[.-]\s*)?)?(?:\(\s*([2-9]1[02-9]|[2-9][02-8]1|[2-9][02-8][02-9])\s*\)|([2-9]1[02-9]|[2-9][02-8]1|[2-9][02-8][02-9]))\s*(?:[.-]\s*)?)?([2-9]1[02-9]|[2-9][02-9]1|[2-9][02-9]{2})\s*(?:[.-]\s*)?([0-9]{4})(?:\s*(?:#|x\.?|ext\.?|extension)\s*(\d+))?$/;

    if (onlyLetters.test(fname) == false) {
        alert("Please enter only letters for you first name");
        return false;
    }


    if (onlyLetters.test(lname) == false) {
        alert("Please enter only letters for you last name");
        return false;
    }

    if (noSpecialCharacters.test(Sname) == false) {
        alert("Special characters not valid for street");
        return false;
    }
    if (cityIsValid.test(City) == false || noSpecialCharacters.test(City) == false) {
        alert("Please enter only letters for your City");
        return false;
    }
    if (isValidZip.test(Zcode) == false) {
        alert("Please enter a valid zip code");
        return false;
    }
    if (isValidPhone.test(usrtel) == false) {
        alert("Please enter a valid 10 digit phone number");
        return false;
    }
    if (confirm != 10) {
        alert("You are a robot! be gone with you!");
        return false;
    }

    var confirmText = "first Name: " + fname + "\n" + "last name: " + lname + "\n" + "Address: " + Sname + " " + City + " " + state + " " + Zcode + "\n" + "Telephone number: " + usrtel + "\n" + "E-mail Address: " + email + "\n" + "Date of birth: " + month + "/" + day + "/" + year + "\n" + "Message: " + message
    var mailMessage = "first Name: " + fname + "%0D%0A" + "last name: " + lname + "%0D%0A" + "Address: " + Sname + " " + City + " " + state + " " + Zcode + "%0D%0A" + "Telephone number: " + usrtel + "%0D%0A" + "E-mail Address: " + email + "%0D%0A" + "Date of birth: " + month + "/" + day + "/" + year + "%0D%0A" + "Message: " + message
    var body = window.confirm("Is the following information correct?" + "\n" + "\n" + confirmText)
    body;
    window.open('mailto:jjryter1@gmail.com?subject=form&body=' + mailMessage)

}








//**********************************************************************************************************************
// map function


var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");
var R = 50;
var r = 20;
var O = 150;
var t = 0;
var x = (c.width / 2) + (R + r) * Math.cos(t) - (r + O) * Math.cos(((R + r) / r) * t);
var y = (c.width / 2) + (R + r) * Math.sin(t) - (r + O) * Math.sin(((R + r) / r) * t);


function doDrawing() {
    t = 0;

    // Clear the Canvas
    ctx.clear();

    // Create a random color
    var timesRun = 0;
    var color = '#' + Math.floor(Math.random() * 16777215).toString(16);


    // Start the Drawing
    ctx.beginPath();
    ctx.strokeStyle = color;
    ctx.moveTo(x, y);

    //Use the timer to create drawing
    var interval = setInterval(function () {
        timesRun += 1;
        if (timesRun === 500) {
            clearInterval(interval);
        }

        drawCircle();
    }, 5);

}

function drawCircle() {
    t += 1.4;

    x = (c.width / 2) + Math.floor((R + r) * Math.sin(t) - (r + O) * Math.cos(((R + r) / r) * t));
    y = (c.width / 2.7) + Math.floor((R + R) * Math.cos(t) - (r + O) * Math.sin(((R + r) / r) * t));


    ctx.lineTo(x, y) * (c.width / 2);
    ctx.stroke();
}

CanvasRenderingContext2D.prototype.clear = CanvasRenderingContext2D.prototype.clear || function (preserveTransform) {
    if (preserveTransform) {
        this.save();
        this.setTransform(1, 0, 0, 1, 0, 0);
    }

    this.clearRect(0, 0, this.canvas.width, this.canvas.height);

    if (preserveTransform) {
        this.restore();
    }
};
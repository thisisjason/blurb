function loadjscssfile(filename, filetype) {
    if (filetype == "js") { //if filename is a external JavaScript file
        var fileref = document.createElement('script')
        fileref.setAttribute("type", "text/javascript")
        fileref.setAttribute("src", filename)
    }
}
// font family file name for friends 
loadjscssfile("https://fonts.googleapis.com/css?family=Roboto+Condensed:300,400", "css"); ////dynamically load and add this .css file

// Slides an element out from hidden position
function slideOut(el, animateFrom) {

    el.style.opacity = 1;

    var posOut = 20;
    var animationSpeed = 0;
    var id = setInterval(animateIn, animationSpeed);

    function animateIn() {
        if (posOut == "-80") {
            clearInterval(id);
        } else {
            posOut--;
            if(animateFrom == "top") {
                el.style.top = posOut + "px";
            } else if (animateFrom == "bottom") {
                el.style.bottom = posOut + "px";
            }
        }
    }
}

// Slides an element in from hidden position
function slideIn(el, animateFrom) {
   
    el.style.display = "block";

    var pos = -80;
    var animationSpeed = 5;
    var id = setInterval(animateIn, animationSpeed);

    function animateIn() {
        if (pos == "20") {
            clearInterval(id);
        } else {
            pos++;
            if(animateFrom == "top") {
                el.style.top = pos + "px";
            } else if (animateFrom == "bottom") {
                el.style.bottom = pos + "px";
            }
        }
    }
}

function Blurb(config) {

    var blurb = this;

    // Get the body
    var body = document.body;

    // Create the blurb box
    var box = document.createElement("div");
    box.className = "blurb";
    box.style.width = config.width ? config.width : "240px";
    box.style.height = config.height ? config.height : "70px";
    box.style.position = config.position ? config.position : "fixed";
    
    // Set position of Blurb based on corner setting
    switch (config.corner) {
        case "topleft":
            box.style.top = "-500px";    
            box.style.top = "-" + box.style.height.replace("px", "");
            box.style.left = "20px";
            config.animateFrom = "top";
            break;
        case "topright":
            box.style.top = "-500px";
            box.style.top = "-" + box.style.height.replace("px", "");
            box.style.right = "20px";
            config.animateFrom = "top";
            break;
        case "bottomleft":
            box.style.bottom = "-500px";
            box.style.bottom = "-" + box.style.height.replace("px", "");
            box.style.left = "20px";
            config.animateFrom = "bottom";
            break;
        case "bottomright":
            box.style.bottom = "-500px";                            
            box.style.bottom = "-" + box.style.height.replace("px", "");
            box.style.right = "20px";
            config.animateFrom = "bottom";
            break;
    }
 
    box.style.color = config.color ? config.color : "#FFF";
    box.style.backgroundColor = config.bgcolor ? config.bgcolor : "rgba(0, 0, 0, 0.8)";
    box.style.borderRadius = config.borderRadius ? config.borderRadius : "3px 3px 3px 3px";
    box.style.boxShadow = config.shadow ? config.shadow : "0 2px 10px rgba(0, 0, 0, 0.8)";
    box.style.display = "none";
    body.appendChild(box);

    // Create icon img
    var icon = document.createElement('div');
    icon.style.position = "relative";
    icon.style.float = "left";
    icon.style.width = "40px";
    icon.style.height = "40px";
    icon.style.margin = "0 10px";
    icon.style.bottom = "0px";
    icon.style.top = "50%";
    icon.style.transform = "translate(0, -50%)";
    icon.style.borderRadius = "50%";
    icon.style.backgroundImage = config.iconImage ? config.iconImage : 'url("http://icons.iconarchive.com/icons/yellowicon/game-stars/256/Mario-icon.png")';
    icon.style.backgroundSize = "cover";
    box.appendChild(icon);
  
    // Create the message box
    var blurbtext = document.createElement("div");
    blurbtext.style.width = box.style.width.replace("px", "") - 60 + "px";
    blurbtext.style.float = "right";
    blurbtext.style.height = "100%";
    blurbtext.style.fontFamily = config.fontFamily ? config.fontFamily : "'Roboto Condensed', sans-serif";
    blurbtext.style.fontWeight = "300";
    blurbtext.style.overflow = "hidden";
    blurbtext.style.cursor = "pointer";
    blurbtext.style.display = "flex";
    blurbtext.style.alignItems = "center";
    
    blurbtext.textContent = config.message;
    
    //Create Message Link
    var a = document.createElement('a');
    a.href =  config.messageLink ? config.messageLink : "";
    a.target = "_blank";
    a.style.textDecoration = "none";
    a.style.color = config.color ? config.color : "#FFF";
    a.appendChild(blurbtext);
    
    
    box.appendChild(a);
    
     
    // Get mouseOver state to keep visible when mouse is on the Blurb
    var mouseOver = false;
    document.getElementsByClassName('blurb')[0].onmouseover  = function() {
        mouseOver = true;
    }
    document.getElementsByClassName('blurb')[0].onmouseout = function() {
        mouseOver = false;
    }


    // Show the Blurb
    this.show = function() {
        slideIn(box, config.animateFrom);
        setTimeout(blurb.hide, config.wait * 1000);
    };

    // Hide the Blurb
    this.hide = function() {
        
        // If mouse is ! over the blurb then fadeout
        if (mouseOver) {
            setTimeout(blurb.hide, config.wait * 1000);
        } else {
            slideOut(box, config.animateFrom);
        }
    };
}

var myBlurb = new Blurb({
    message: "Easily customizable blurb!",
    messageLink: "http://www.github.com/thisisjason/blurb",
    iconImage: 'url("http://sharepointmaven.com/wp-content/uploads/2015/08/img-bell-icon.png")',
    width: "240px",
    height: "70px",
    wait: "3", //enter hang time in seconds
    corner: "bottomright", // Enter blurb location - Options: bottomright bottomleft topright topleft
    bgcolor: "rgba(0,0,0,.6)", // HEX or RGBA
    color: "#FFF", // HEX or RGBA
});

myBlurb.show(); //alerts message

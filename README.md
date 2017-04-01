# Blurb.js
Blurb is a simple javascript library for html notifications.
## [Demo Page](https://thisisjason.github.io/blurb)

## Getting Started
### Load blurb.js
```html
<script src="blurb.js"></script>
```
### Create a simple Blurb
```javascript
var blurb = new Blurb();
```

### Show the Blurb
```javascript
blurb.show();
```

## Configuration Options
### Example Config
```javascript
  var blurb = new Blurb({
      message: "Easily customizable blurb!",
      link: "http://www.google.com",
      iconImage: "http://www.placeholder.it/32x32",
      width: "240px",
      height: "70px",
      wait: "3",
      corner: "bottomright",
      bgcolor: "rgba(0,0,0,.6)",
      color: "#FFF", 
      borderRadius: "3px",
      shadow: "0 2px 10px rgba(0, 0, 0, .8)"
  });
```



## Available Functions
### .setMessage()
```javascript
blurb.setMessage("Hello World");
```
### .setPosition()
```javascript
blurb.setPosition("bottomleft");
```
Available options:
* topleft
* topright
* bottomleft
* bottomright


### .setLink()
```javascript
blurb.setMessage("http://google.com");
```

### .show()
```javascript
blurb.show();
```

### .hide()
```javascript
blurb.hide();
```

//Artwork contructor
function Artwork(name, illustrated, stock, image) {
    this.name = name;
    this.illustrated = illustrated;
    this.stock = stock;
    this.image = image;
};

// Create new Artwork from the Artwork constructor
var face1 = new Artwork('face 1', 'Illustrated', 20, 'images/face.jpg');
var face2 = new Artwork('face 2', 'Illustrated', 12, 'images/face2.jpg');
var face3 = new Artwork('face 3', 'Illustrated', 23, 'images/face3.jpg');
var face4 = new Artwork('face 4', 'Illustrated', 2, 'images/face4.jpg');
var face5 = new Artwork('face 5', 'Illustrated', 5, 'images/face5.jpg');
var face6 = new Artwork('face 6', 'Illustrated', 3, 'images/face6.jpg');

// Artwork array through the new obj contructor
var artworkArray = [face1, face2, face3, face4, face5, face6];

// for loop through the length of the artwork
for(var i =0; i < artworkArray.length; i++) {
// created new elem tags for each product
    var newItem = document.createElement('div');
    var newDiv = document.createElement('div');
    var newH1 = document.createElement('h1');
    var newImg = document.createElement('img');
    var newH3 = document.createElement('h3');
    var btn = document.createElement('button');
    
    var newH1Text = document.createTextNode(artworkArray[i].name);
    var newImgText = document.createTextNode(artworkArray[i].image);
    var newH3Text = document.createTextNode('In stock: ' + artworkArray[i].stock);
    var btnText = document.createTextNode('Buy Now');
// create text for new elem    
    newH1.appendChild(newH1Text);
    newH3.appendChild(newH3Text);
    btn.appendChild(btnText);
    
//update the src attribute
    newImg.src = artworkArray[i].image;
    
    newImg.className = 'img-responsive';
    newImg.width = '200';
    btn.className = 'btn btn-primary btn-lg';
    newItem.className = 'col-sm-4';
    newDiv.className = 'artSize img-thumbnail';
    
    
    newDiv.appendChild(newH1);
    newDiv.appendChild(newImg);
    newDiv.appendChild(newH3);
    newDiv.appendChild(btn);
    
    newItem.appendChild(newDiv);
    
    document.getElementById('products').appendChild(newDiv);
};
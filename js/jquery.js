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
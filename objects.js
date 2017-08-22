function Phone(brand, price, color) {
	this.brand = brand;
    this.price = price;
    this.color = color;
};

Phone.prototype.printInfo = function() {
    console.log('The phone\'s brand is ' + this.brand + ', color is ' + this.color + ' and the price is ' + this.price +'.');
};

var galaxy = new Phone('Samsung', 1246, 'silver');
galaxy.country ="USA";
var iphone = new Phone('Apple', 2246, 'onyx');
var xperia = new Phone('Sony', 1746, 'pink');

galaxy.printInfo();
console.log(galaxy);
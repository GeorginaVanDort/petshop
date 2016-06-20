function Pets(breed, age, color, considerations, image, type){
  this.breed = breed;
  this.age = age;
  this.color = color;
  this.considerations = considerations;
  this.image = image;
  this.type = type;
  this.adopted = false;
}

Pets.prototype.adopted = function(){
 (this.adopted) ? this.adopted = false : this.adopted = true;
}

Storage.prototype.setObject = function(key, value) {
    this.setItem(key, JSON.stringify(value));
};

Storage.prototype.getObject = function(key) {
    var value = this.getItem(key);
    return value && JSON.parse(value);
};

var petModel = new Model("animals");

// front-end
$(function(){

});

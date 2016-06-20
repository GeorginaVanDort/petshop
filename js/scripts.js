function App(model){
  this.model = model;
  this.pets = [];
}

App.prototype.addPet = function(pet){
  var exists = false;
  var petCheck = this.pets.forEach(function(animal){
    if(animal.id === pet.id){ exists = true; };
  });

  if(!exists){
    this.pets.push(pet);
    this.model.save("animal", this.pets)
  }
}

function Pets(name, breed, age, color, considerations, image, type){
  this.name = name;
  this.id = md5(name);
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

var app = new App(new Model("pets"));

// front-end
$(function(){

});

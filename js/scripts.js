/**
 *  App object
 */
function App(name){
  this.name = name;
  this.pets = [];
}

App.prototype.addPet = function(pet){
  var exists = false;
  var petCheck = this.pets.forEach(function(animal){
    if(animal.id === pet.id){ exists = true; };
  });

  if(!exists){
    this.pets.push(pet);
  }
}

function Pets(name, email, ownerName, description){
  this.name = name;
  this.ownerEmail = email;
  this.ownerName = ownerName
  this.id = md5(name);
  this.description = description;
  this.adopted = false;
  this.image = "";
}

/**
 *  App object
 */
Pets.prototype.adopted = function(){
 (this.adopted) ? this.adopted = false; : this.adopted = true;
}

var app = new App();
var renderCard = function(pets) {


}
// front-end
$(function(){
$(".contact-form").submit(function(event){
  event.preventDefault();
  var name = ("#petname").val();
  var email =("#email").val();
  var ownerName = ("#name").val();
  var description = ("#description").val();
  var newPet = new Pets(name, email, ownerName, description);
  app.pets.push(newPet);
  renderCard(newPet);
});
});

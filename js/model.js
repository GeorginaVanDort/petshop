/**
 * Model is attached to a source so it is aware of the underlying data
 * @param {[type]} source [description]
 */
function Model(id){
  this.id = id;
}
Model.prototype.fetch = function(table){
  if(localStorage.getObject(this.id + "-" + table)){
    return localStorage.getObject(this.id + "-" + table);
  } else {
    return false
  }
}

Model.prototype.save = function(table, data){
  localStorage.setObject(this.id + "-" + table, data);
}

/**
 * returns all records
 * @param  String table Name of the table to pull from
* @return Object [Array]       returns an array of the result-set
 */
Model.prototype.findAll = function(table){
  return this.fetch(table);
}

/**
 * findBy will search a table and filter the data based on the query
 * (wrapper for the js filter method)
 * @param  String table Table data will be pulled from
 * @param  Function query Function to be called on all items within storage
 * @return Object [Array] from the resultset
 */
Model.prototype.findBy = function(table, query){
  var storage = this.fetch(table);
  return storage.filter(query);
}

const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/fruitsDB', {useNewUrlParser: true, useUnifiedTopology: true});

// const Cat = mongoose.model('Cat', { name: String });
//
// const kitty = new Cat({ name: 'Zildjian' });
// kitty.save().then(() => console.log('meow'));
const fruitSchema = new mongoose.Schema({
  name: String,
  rating: {
    type: Number,
    min: 1,
    max: 10
  },
  review: String
});

const Fruit = mongoose.model("Fruit", fruitSchema);

const fruit = new Fruit ({
  // name: "Apple",
  rating: 10,
  review: "Peaches are tasty as well as healthy!"
});

// fruit.save();
const peopleCollectionSchema = new mongoose.Schema({
  name: String,
  age: Number,
  favouriteFruit: fruitSchema
});

const Person = mongoose.model("Person", peopleCollectionSchema);

// const pineapple = new Fruit({
//   name:"Pineapple",
//   score: 9,
//   review: "Great apple with Pines!"
// });

// pineapple.save();


// const person = new Person ({
//   name: "Amy",
//   age: 12,
//   favouriteFruit: pineapple
// });
const Mango = new Fruit({
  name:"Mango",
  score: 10,
  review: "The king of all fruits, i love it!"
});
// Mango.save();

// const person = new Person({
//   name: "John",
//   age: 37
// });
//
// person.save();

Person.updateOne({name: "John"}, {favouriteFruit: Mango}, function(err){
  if (err){
    console.log(err);
  } else {
    console.log("Successfully updated the document");
  }
})

// const kiwi = new Fruit({
//   name: "Kiwi",
//   score: 10,
//   review: "The best fruit."
// });
//
// const orange = new Fruit({
//   name: "Orange",
//   score: 4,
//   review: "Too sour for me😣."
// });
//
// const banana = new Fruit({
//   name: "Banana",
//   score: 8,
//   review: "Good for health."
// });
// Fruit.insertMany([kiwi, orange, banana], function(err){
//   if (err){
//     console.log(err);
//   } else {
//     console.log("Successfully saved all the fruits to the database");
//   }
// });

Fruit.find(function(err, fruits){
  if (err){
    console.log(err);
  } else {

    mongoose.connection.close();

    fruits.forEach(function(fruit){
      console.log(fruit.name);
    });
  }
});

// Fruit.updateOne({_id: "5f539ed0fd509a439c95b95b"}, {name: "Peach"}, function(err){
//   if (err){
//     console.log(err);
//   } else {
//     console.log("Successfully updated the document");
//   }
// });

// Fruit.deleteOne({_id: "5f539ed0fd509a439c95b95b"}, function(err){
//   if (err){
//     console.log(err);
//   } else {
//     console.log("Successfully deleted a document");
//   }
// })
// Person.deleteMany({name: "John"}, function(err){
//   if (err){
//     console.log(err);
//   } else {
//     console.log("Successfully deleted John ahhaaha");
//   }
// })

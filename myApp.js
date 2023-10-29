require('dotenv').config();
const mongoose = require('mongoose');
const connectionString = `mongodb+srv://${process.env.MONGO_USERNAME}:${process.env.MONGO_PASSWORD}@${process.env.CLUSTER}.ecttduz.mongodb.net/?retryWrites=true&w=majority`;

mongoose.connect(connectionString, {useNewUrlParser: true, useUnifiedTopology: true });

const personSchema = new mongoose.Schema({
  name: { type: String, required: true },
  age: Number,
  favoriteFoods: [String]
});

let Person = mongoose.model("Person", personSchema);


const createAndSavePerson = (done, name = "Adrian", age = 35, favoriteFoods = ["Pierogis", "Paczkis"]) => {
  let newPerson = new Person({ name, age, favoriteFoods });
  newPerson.save((err, data) => {
    if (err) {
      return console.error(err);
    }
    console.log(data);
    done(null, data);
  });
};

var peopleArray = [
  {
    name: "Ludwig van Beethoven",
    age: 56,
    favoriteFoods: ["Bread", "Fish", "Wine"]
  },
  {
    name: "Friedrich Nietzsche",
    age: 55,
    favoriteFoods: ["Pasta", "Bread", "Fruits"]
  },
  {
    name: "Bob Dylan",
    age: 80,
    favoriteFoods: ["Coffee", "Burgers", "Pie"]
  },
  {
    name: "Plato",
    age: 80,
    favoriteFoods: ["Olives", "Wine", "Fig"]
  },
  {
    name: "Jimi Hendrix",
    age: 27,
    favoriteFoods: ["Steak", "Eggs", "Juice"]
  },
  {
    name: "Immanuel Kant",
    age: 79,
    favoriteFoods: ["Bread", "Cheese", "Wine"]
  },
  {
    name: "John Lennon",
    age: 40,
    favoriteFoods: ["Tea", "Toast", "Eggs"]
  }
];


const createManyPeople = (arrayOfPeople = peopleArray, done) => {
  Person.create(arrayOfPeople, (err, data) => {
    if (err) {
      return console.error(err);
    }
    console.log(data);
    done(null, data);
  });
};

const findPeopleByName = (personName, done) => {
  Person.find({name: personName}, function (err, personFound) {
    if (err) {
      return console.log(err);
    }
    console.log(personFound);
    done(null, personFound);
  });
};

const findOneByFood = (food, done) => {
  Person.findOne({favoriteFoods: food}, function (err, foodFound) {
    if (err) {
      return console.log(err);
    }
    console.log(foodFound);
    done(null, foodFound);
  });
};

const findPersonById = (personId, done) => {
  Person.findById(personId, function (err, personFound) {
    if (err) {
      return console.log(err);
    }
    console.log(personFound);
    done(null, personFound);
  });
};

const findEditThenSave = (personId, done) => {
  const foodToAdd = "hamburger";
  Person.findById(personId, function (err, personFound) {
    if (err) {
      return console.log(err);
    }
    personFound.favoriteFoods.push(foodToAdd);
    personFound.save((err, data) => {
      if (err) {
        return console.error(err);
      }
      console.log(data);
      done(null, data);
    });
  });
};


const findAndUpdate = (personName, done) => {
  const ageToSet = 20;
  Person.findOneAndUpdate({name: personName}, {age: ageToSet}, {new: true}, function (err, personFound) {
    if (err) {
      return console.log(err);
    }
    console.log(personFound);
    done(null, personFound);
  });
};

const removeById = (personId, done) => {
  Person.findByIdAndRemove(personId, function (err, personFound) {
    if (err) {
      return console.log(err);
    }
    console.log(personFound);
    done(null, personFound);
  });
};

const removeManyPeople = (done) => {
  const nameToRemove = "Mary";

  Person.remove({name: nameToRemove}, function (err, data) {
    if (err) {
      return console.log(err);
    }
    console.log(data);
    done(null, data);
  });
};

const queryChain = (done) => {
  const foodToSearch = "burrito";

  Person.find({favoriteFoods: foodToSearch})
  .sort({name: 1})
  .limit(2)
  .select({age: 0})
  .exec(function (err, data) {
    if (err) {
      return console.log(err);
    }
    console.log(data);
    done(null, data);
    
  });
};

  /** **Well Done !!**
  /* You completed these challenges, let's go celebrate !
   */

  //----- **DO NOT EDIT BELOW THIS LINE** ----------------------------------

  exports.PersonModel = Person;
  exports.createAndSavePerson = createAndSavePerson;
  exports.findPeopleByName = findPeopleByName;
  exports.findOneByFood = findOneByFood;
  exports.findPersonById = findPersonById;
  exports.findEditThenSave = findEditThenSave;
  exports.findAndUpdate = findAndUpdate;
  exports.createManyPeople = createManyPeople;
  exports.removeById = removeById;
  exports.removeManyPeople = removeManyPeople;
  exports.queryChain = queryChain;

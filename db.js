const Sequelize = require("sequelize");
const conn = new Sequelize(process.env.DATABASE_URL);
const faker = require("faker");

const Campus = conn.define("campuses", {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true
    }
  },
  imageUrl: {
    type: Sequelize.TEXT,
    defaultValue:
      "https://www.google.com/url?sa=i&source=images&cd=&ved=2ahUKEwiXyrLOl83hAhWRY98KHSmWDJAQjRx6BAgBEAU&url=https%3A%2F%2Fsimpsonswiki.com%2Fwiki%2FSpringfield_Elementary_School&psig=AOvVaw3w2BTFOORRVgjQSGITxXDA&ust=1555248851476251"
  },
  address: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true
    }
  },
  description: {
    type: Sequelize.TEXT
  }
});

const Student = conn.define("students", {
  firstName: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true
    }
  },
  lastName: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true
    }
  },
  email: {
    type: Sequelize.STRING,
    allowNull: false,
    isEmpty: false,
    validate: {
      isEmail: true
    }
  },
  imageUrl: {
    type: Sequelize.TEXT,
    defaultValue:
      "https://www.google.com/imgres?imgurl=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fen%2Fa%2Faa%2FBart_Simpson_200px.png&imgrefurl=https%3A%2F%2Fen.wikipedia.org%2Fwiki%2FBart_Simpson&docid=vFAi7OjJ2lytKM&tbnid=NOBTlKyLlEJevM%3A&vet=10ahUKEwj-1MuWmM3hAhVFhOAKHbP9DaIQMwhlKAAwAA..i&w=200&h=298&bih=732&biw=1393&q=bart%20simpson&ved=0ahUKEwj-1MuWmM3hAhVFhOAKHbP9DaIQMwhlKAAwAA&iact=mrc&uact=8"
  },
  gpa: {
    type: Sequelize.DECIMAL,
    validate: {
      min: 0.0,
      max: 4.0
    }
  }
});

Student.belongsTo(Campus);
Campus.hasMany(Student);

const syncAndSeed = () => {
  return conn.sync({ force: true }).then(() => {
    return Promise.all([
      Promise.all([
        Campus.create({
          name: "Luna",
          imageUrl: faker.image.city(),
          address: `${faker.address.streetAddress()} ${faker.address.city()}, ${faker.address.state()} ${faker.address.zipCode()}`,
          description: faker.lorem.sentence()
        }),
        Campus.create({
          name: "Terra",
          imageUrl: faker.image.city(),
          address: `${faker.address.streetAddress()} ${faker.address.city()}, ${faker.address.state()} ${faker.address.zipCode()}`,
          description: faker.lorem.sentence()
        }),
        Campus.create({
          name: "Mars",
          imageUrl: faker.image.city(),
          address: `${faker.address.streetAddress()} ${faker.address.city()}, ${faker.address.state()} ${faker.address.zipCode()}`,
          description: faker.lorem.sentence()
        }),
        Campus.create({
          name: "Titan",
          imageUrl: faker.image.city(),
          address: `${faker.address.streetAddress()} ${faker.address.city()}, ${faker.address.state()} ${faker.address.zipCode()}`,
          description: faker.lorem.sentence()
        })
      ]),
      Promise.all([
        Student.create({
          firstName: faker.name.firstName(),
          lastName: faker.name.lastName(),
          email: faker.internet.email(),
          gpa: (Math.random() * 4).toFixed(2),
          campusId: 1
        }),
        Student.create({
          firstName: faker.name.firstName(),
          lastName: faker.name.lastName(),
          email: faker.internet.email(),
          gpa: (Math.random() * 4).toFixed(2),
          campusId: 2
        }),
        Student.create({
          firstName: faker.name.firstName(),
          lastName: faker.name.lastName(),
          email: faker.internet.email(),
          gpa: (Math.random() * 4).toFixed(2),
          campusId: 3
        }),
        Student.create({
          firstName: faker.name.firstName(),
          lastName: faker.name.lastName(),
          email: faker.internet.email(),
          gpa: (Math.random() * 4).toFixed(2),
          campusId: 4
        })
      ])
    ]).then(() => {
      console.log("data seeded!");
    });
  });
};

module.exports = {
  Campus,
  Student,
  syncAndSeed
};

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
    type: Sequelize.TEXT
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
    type: Sequelize.TEXT
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
          imageUrl: faker.image.people(),
          gpa: (Math.random() * 4).toFixed(2),
          campusId: 1
        }),
        Student.create({
          firstName: faker.name.firstName(),
          lastName: faker.name.lastName(),
          email: faker.internet.email(),
          imageUrl: faker.image.people(),
          gpa: (Math.random() * 4).toFixed(2),
          campusId: 2
        }),
        Student.create({
          firstName: faker.name.firstName(),
          lastName: faker.name.lastName(),
          email: faker.internet.email(),
          imageUrl: faker.image.people(),
          gpa: (Math.random() * 4).toFixed(2),
          campusId: 3
        }),
        Student.create({
          firstName: faker.name.firstName(),
          lastName: faker.name.lastName(),
          email: faker.internet.email(),
          imageUrl: faker.image.people(),
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

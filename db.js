const Sequelize = require("sequelize");
const conn = new Sequelize(process.env.DATABASE_URL);
const faker = require("faker");

const Campus = conn.define("campuses", {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: {
        args: true,
        msg: "Please enter a name."
      }
    }
  },
  imageUrl: {
    type: Sequelize.TEXT
  },
  address: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: {
        args: true,
        msg: "Please enter an address."
      }
    }
  },
  city: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: {
        args: true,
        msg: "Please enter a city."
      }
    }
  },
  state: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: {
        args: true,
        msg: "Please enter a state"
      },
      isIn: {
        args: [
          [
            "AL",
            "AK",
            "AS",
            "AZ",
            "AR",
            "CA",
            "CO",
            "CT",
            "DE",
            "DC",
            "FM",
            "FL",
            "GA",
            "GU",
            "HI",
            "ID",
            "IL",
            "IN",
            "IA",
            "KS",
            "KY",
            "LA",
            "ME",
            "MH",
            "MD",
            "MA",
            "MI",
            "MN",
            "MS",
            "MO",
            "MT",
            "NE",
            "NV",
            "NH",
            "NJ",
            "NM",
            "NY",
            "NC",
            "ND",
            "MP",
            "OH",
            "OK",
            "OR",
            "PW",
            "PA",
            "PR",
            "RI",
            "SC",
            "SD",
            "TN",
            "TX",
            "UT",
            "VT",
            "VI",
            "VA",
            "WA",
            "WV",
            "WI",
            "WY"
          ]
        ],
        msg: "Please enter a valid state"
      }
    }
  },
  zip: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: {
        args: true,
        msg: "Please enter a zip code"
      }
    }
  },
  description: {
    type: Sequelize.TEXT
  },
  blurb: {
    type: Sequelize.STRING,
    defaultValue: "A nice school."
  }
});

const Student = conn.define("students", {
  firstName: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: {
        args: true,
        msg: "Please enter a first name."
      }
    }
  },
  lastName: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: {
        args: true,
        msg: "Please provide a last name."
      }
    }
  },
  email: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      isEmail: {
        args: true,
        msg: "You have entered an invalid email. Try again."
      },
      notEmpty: {
        args: true,
        msg: "Please enter an email."
      }
    }
  },
  imageUrl: {
    type: Sequelize.TEXT
  },
  gpa: {
    type: Sequelize.DECIMAL,
    validate: {
      min: {
        args: [0.0],
        msg: "You may not enter a negative value. Please try again."
      },
      max: {
        args: [4.0],
        msg: "You may not enter a value greater than 4.0. Please try again."
      }
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
          address: `${faker.address.streetAddress()}`,
          city: `${faker.address.city()}`,
          state: `${faker.address.stateAbbr()}`,
          zip: `${faker.address.zipCode()}`,
          description: faker.lorem.sentence()
        }),
        Campus.create({
          name: "Terra",
          imageUrl: faker.image.city(),
          address: `${faker.address.streetAddress()}`,
          city: `${faker.address.city()}`,
          state: `${faker.address.stateAbbr()}`,
          zip: `${faker.address.zipCode()}`,
          description: faker.lorem.sentence()
        }),
        Campus.create({
          name: "Mars",
          imageUrl: faker.image.city(),
          address: `${faker.address.streetAddress()}`,
          city: `${faker.address.city()}`,
          state: `${faker.address.stateAbbr()}`,
          zip: `${faker.address.zipCode()}`,
          description: faker.lorem.sentence()
        }),
        Campus.create({
          name: "Titan",
          imageUrl: faker.image.city(),
          address: `${faker.address.streetAddress()}`,
          city: `${faker.address.city()}`,
          state: `${faker.address.stateAbbr()}`,
          zip: `${faker.address.zipCode()}`,
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

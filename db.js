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
        msg: "Please enter a valid state as a two capital letters."
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

module.exports = {
  Campus,
  Student,
  conn
};

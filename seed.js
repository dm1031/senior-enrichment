const { conn, Campus, Student } = require("./db");
const faker = require("faker");

const syncAndSeed = () => {
  return conn.sync({ force: true }).then(() => {
    return Promise.all([
      Campus.create({
        name: "Luna High",
        imageUrl: faker.image.city(),
        address: `${faker.address.streetAddress()}`,
        city: `${faker.address.city()}`,
        state: `${faker.address.stateAbbr()}`,
        zip: `${faker.address.zipCode()}`,
        description: faker.lorem.paragraphs(),
        blurb: faker.lorem.words()
      }),
      Campus.create({
        name: "Terra Middle",
        imageUrl: faker.image.city(),
        address: `${faker.address.streetAddress()}`,
        city: `${faker.address.city()}`,
        state: `${faker.address.stateAbbr()}`,
        zip: `${faker.address.zipCode()}`,
        description: faker.lorem.paragraphs(),
        blurb: faker.lorem.words()
      }),
      Campus.create({
        name: "Mars Middle",
        imageUrl: faker.image.city(),
        address: `${faker.address.streetAddress()}`,
        city: `${faker.address.city()}`,
        state: `${faker.address.stateAbbr()}`,
        zip: `${faker.address.zipCode()}`,
        description: faker.lorem.paragraphs(),
        blurb: faker.lorem.words()
      }),
      Campus.create({
        name: "Titan Elementary",
        imageUrl: faker.image.city(),
        address: `${faker.address.streetAddress()}`,
        city: `${faker.address.city()}`,
        state: `${faker.address.stateAbbr()}`,
        zip: `${faker.address.zipCode()}`,
        description: faker.lorem.paragraphs(),
        blurb: faker.lorem.words()
      })
    ])
      .then(() => {
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
          }),
          Student.create({
            firstName: faker.name.firstName(),
            lastName: faker.name.lastName(),
            email: faker.internet.email(),
            imageUrl: faker.image.people(),
            gpa: (Math.random() * 4).toFixed(2),
            campusId: 4
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
            campusId: 1
          }),
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
            campusId: 3
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
            campusId: 4
          }),
          Student.create({
            firstName: faker.name.firstName(),
            lastName: faker.name.lastName(),
            email: faker.internet.email(),
            imageUrl: faker.image.people(),
            gpa: (Math.random() * 4).toFixed(2),
            campusId: 4
          }),
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
            campusId: 4
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
            campusId: 2
          })
        ]);
      })
      .then(() => {
        console.log("data seeded!");
      });
  });
};

module.exports = { syncAndSeed };

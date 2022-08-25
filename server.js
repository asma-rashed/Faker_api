// import { faker } from '@faker-js/faker';

const express = require("express");
const app = express();
const port = 8000;
const { faker } = require('@faker-js/faker');


class User {
  constructor() {
    // this._id = faker.random.number();
    this.firstName = faker.name.firstName();
    this.lastName = faker.name.lastName();
    this.phoneNumber = faker.phone.phoneNumber();
    this.email = faker.internet.email();
    this.password = faker.internet.password();
  }
}


class Company {
  constructor() {
    // this._id = faker.random.number();
    this.name = faker.company.name();
    this.street = faker.address.streetName()
    this.city = faker.address.city(),
      this.state = faker.address.state(),
      this.zipCode = faker.address.zipCode(),
      this.country = faker.address.country()
  }
}

app.get("/api/users/new/", (req, res) => {
  const newUser = new User();
  res.json({user: newUser});
});
app.get("/api/companies/new", (req, res) => {
  const newComp = new Company();
  res.json({ company: newComp });
});
app.get("/api/user/company", (req, res) => {
  const newUser = new User();
  const newCom = new Company();
  res.json({ user: newUser, company: newCom });
});


app.listen(port, () => console.log(`Listening on port: ${port}`));

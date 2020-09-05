const { expect } = require("chai");

const {
  sequelize,
  dataTypes,
  checkModelName,
  checkPropertyExists,
} = require("sequelize-test-helpers");

const UserModel = require("../models/User");
const User = new UserModel(sequelize, dataTypes);
//   const user = new User()
describe("models/User", () => {
  context("properties", () => {
    ["id", "username", "password"].forEach(checkPropertyExists(User));
  });
});

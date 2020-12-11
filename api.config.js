const request = require("supertest")("https://reduxbank.herokuapp.com/");
const expect = require("chai").expect;

module.exports = {
  request,
  expect,
};
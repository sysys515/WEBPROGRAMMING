const express = require("express");
const interestCalculator = require("./public/interestCalculator");

const app = express();
const port = 4000;

// http:80
// https:443

console.log("모듈 테스트", interestCalculator.calcSimpleInterest(100, 10, 3));

app.use("/html", express.static("public"));

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/simple", (req, res) => {
  const balance = Number(req.query.balance);
  const interest = Number(req.query.interest);
  const range = Number(req.query.range);

  const simpleInterestResult = interestCalculator.calcSimpleInterest(
    balance,
    interest,
    range
  );
  res.send(`<p style="color: red">단리 계산결과: ${simpleInterestResult}</p>`);
});

app.get("/compound", (req, res) => {
  const balance = Number(req.query.balance);
  const interest = Number(req.query.interest);
  const range = Number(req.query.range);

  const compoundInterestResult = interestCalculator.calcCompoundInterest(
    balance,
    interest,
    range
  );
  res.send(`복리 계산결과:  ${compoundInterestResult}`);
});

app.get("/users/:name", (req, res) => {
  res.send(`Name: ${req.params.name}, Age: ${req.query.age}`);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

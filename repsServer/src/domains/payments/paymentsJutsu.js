const paystack = require("paystack")(
  "sk_test_7d42863a18300ab53e4cb98a98b4ad741db521b7"
);

paystack.plan
  .create({
    name: "API demo",
    amount: 100,
    interval: "monthly",
  })
  .then(function (error, body) {
    console.log(error);
    console.log(body);
  });

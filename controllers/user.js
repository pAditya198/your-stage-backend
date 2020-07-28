const User = require("../model/user");

exports.getHome = (req, res, next) => {
  User.findAll({
    where: {
      name: "Aditya",
    },
  })
    .then((result) => {
      console.log(result);
    })
    .catch((err) => {
      console.log(err);
    });
  res.end(`
        <html>
            <body>hello</body>
        </html>
    `);
};

exports.registerUser = (req, res, next) => {
  User.create({
    name,
    age,
    email,
    phone,
    password,
  }).then((result) => {
    res.send({ redirect: true });
  });
};
exports.logIn = (req, res, next) => {
  console.log(req.body);
  User.findAll({
    where: {
      email: req.email,
    },
  })
    .then((users) => {
      const user = users[0];
      if (user.password !== req.body.password) {
        return;
      }
      res.end({ token: true });
    })
    .catch((err) => {
        console.log(err)
    });
};

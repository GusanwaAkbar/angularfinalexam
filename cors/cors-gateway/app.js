require("dotenv").config();
const cors = require('cors');
const express = require("express");
const { UsersResource } = require("./users/users.resource");
const { IHateCORSResource } = require("./ihatecors/ihatecors.resource");
const bodyParser = require("body-parser");

const app = express();

app.use(cors({
  origin: '*'
}));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
// app.post('api/users/v1/auth/login', (req, res) => {
//   let url = "http://192.168.133.100:8082/api/users/v1/auth/login";
//   fetch(url, {
//     method: 'POST',
//     body: JSON.stringify(req.body)
//   }).then(res=>res.json())
//     .then(json=> res.status(201).json(json))
// })

// app.use("/barang", BarangResource);
// app.use("/customer", CustomerResource);
// app.use("/order", OrderResource);
// app.use("/users", UsersResource);
app.use(IHateCORSResource);

// app.use("/antrian", AntrianResource);

// app.use("/users", require("./controllers/user.controller"));
// app.use("/pelanggan", require("./controllers/pelanggan.controller"));
// app.use("/barang", require("./controllers/barang.controller"));
// app.use("/terima", require("./controllers/terima.controller"));


module.exports = {
  app
};
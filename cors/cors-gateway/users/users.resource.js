const axios = require("axios");
const express = require("express");
const fetch = require("node-fetch-commonjs")
const UsersResource = express.Router();

UsersResource.post('', async (req, res) => {
  let url = "http://192.168.133.66:3030/api/auth/v1/login";
  "http://192.168.133.66:3030/api/auth/v1/register";
  "http://192.168.133.66:3030/api/menu/v1/menu/menuId"
  // content type always josn, but todo upload
  // 
  axios.post()
    fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(req.body)
  }).then(res=>res.json())
    .then(json=> {
      console.log(json)
      return res.status(201).json(json)
    }).catch((error) => {
      return res.status(400).json(error)
    })

  // try {
  // } catch (error) {
  //   return res.status(400).json(error);
  // }
})

module.exports = {
  UsersResource
}
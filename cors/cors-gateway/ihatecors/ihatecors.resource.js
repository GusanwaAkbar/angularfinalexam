const fetch = require("node-fetch-commonjs");
const axios = require("axios");
const express = require("express");
const multer = require('multer');
const upload = multer();

const IHateCORSResource = express.Router();

IHateCORSResource.use("", upload.single('file'), async (req, res) => {
	try {
		let headers = {
			"Content-Type": req.headers["content-type"],
			Authorization: req.headers["authorization"],
		};

		let form = new FormData();

		if (req.file) {
			const file_blob = new Blob([req.file.buffer], { type: req.file.mimetype })
			form.append('file', file_blob, req.file.orinalname);
		}

		let body = req.file ? form : JSON.stringify(req.body);
		
		let response = await axios({
			method: req.method.toLocaleLowerCase(),
			url: `http://104.248.144.154:8081${req.path}`,
			data: body,
			headers,
			params: { ...req.query },
			responseType: "application/json",
		});

		// const response = await axios.post(, {headers})
		return res.status(200).json(JSON.parse(response.data));
	} catch (error) {
		if (error.response) {
			// The request was made and the server responded with a status code
			// that falls out of the range of 2xx
			return res.status(400).json({ error: JSON.parse(error.response.data) });
		} else if (error.request) {
			// The request was made but no response was received
			return res.status(500).json({ error: 'No response was received' });
		} else {
			// Something happened in setting up the request that triggered an Error
			return res.status(500).json({ error: error.message });
		}
	}
	
});

module.exports = {
	IHateCORSResource,
};

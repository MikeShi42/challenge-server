'use strict';
const _ = require('lodash');
const async = require('async');
const validator = require('validator');
const request = require('request');
const cheerio = require('cheerio');
const graph = require('fbgraph');
const Github = require('github-api');

const NodeRSA = require('node-rsa');
const fs = require('fs');

exports.getKey = (req, res) => {
  var key = new NodeRSA();
  key.generateKeyPair();
  var user = req.user;
  user.publicKey = key.exportKey('pkcs1-public');
  user.save().then(u => {
    res.set({"Content-Disposition":"attachment; filename=\"id_rsa\""});
    res.send(key.exportKey());
  });
};

/**
 * GET /api/upload
 * File Upload API example.
 */

exports.getFileUpload = (req, res, next) => {
  res.render('api/upload', {
    title: 'File Upload'
  });
};

exports.postFileUpload = (req, res, next) => {
  fs.readFile(req.file.path, (err, data) => {
    var key = new NodeRSA(req.user.publicKey);
    var encryptedData = key.encrypt(data, 'base64');
    var fileName = req.file.originalname + '.enc';
    res.set({
      'Content-Disposition': 'attachment; filename="' + fileName + '"',
    });
    res.send(encryptedData);
  });
};

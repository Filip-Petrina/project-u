const Joi = require('joi');
const express = require('express');
const router = express.Router();


router.post('/', function(req, res, next) {


  const schema = Joi.object().keys({
    email: Joi.string().email({ minDomainAtoms: 2 }).required(),
    message: Joi.string().min(30).required()
  }); 

  const result = Joi.validate(req.body, schema, {abortEarly: false});

  if(result.error)
  {
    let errorResponse = {
      messages: []
    };
    result.error.details.forEach(element => {
      errorResponse.messages.push(element.message);
    });
    res.status(422).send(errorResponse);
    return;
  }

  const success = {
    message: 'Your message has been sent!'
  } 
  res.status(200).send(success);
});

module.exports = router;

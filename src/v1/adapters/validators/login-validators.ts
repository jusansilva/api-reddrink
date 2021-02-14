const Joi = require('@hapi/joi')


export const LoginSchema = Joi.object({
  body: Joi.object({
    login: Joi.string().required(),
    password: Joi.string().required(),
  }).required(),
})
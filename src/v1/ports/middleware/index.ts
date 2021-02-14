module.exports = schema => (req, res, next) => {
    const { error } = schema.validate(req, {
      abortEarly: false, // Para validar todos os campos
    })
    
    if (error) {
      res.status(422).send({
        message: 'Validation error',
      })
    } else {
      next()
    }
  }
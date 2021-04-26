import * as express from 'express';

const jwt = require('jwt-simple');
const moment = require('moment');

class TokenMiddleware{
  async token(req: any, res: express.Response, next){
    try {
      if (!req.headers.authorization) {
        return res.status(403).send({message: "Sin autorización"});
      }

      const token = req.headers.authorization.split(" ")[1];
      const payload = jwt.decode(token, process.env.TOKEN_SECRET);

      if (payload.exp <= moment().unix()) {
        return res.status(401).send({message: "El token ha expirado"});
      }

      req.user = payload.sub;
      next();
    } catch (e) {
      console.log(e);
      res.status(500).json({ error: "Error interno" });
    }
  }
}

export default TokenMiddleware;

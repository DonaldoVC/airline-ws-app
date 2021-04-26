import * as express from 'express';

const jwt = require('jwt-simple');
const moment = require('moment');

class TokenController {

  public router: express.Router;

  constructor() {
    const router = express.Router();

    router.post('/', this.generate);

    this.router = router;
  }

  async generate(req: any, res: any) {
    try {
      const payload: any = {
        sub: 'dvc_21',
        iat: moment().unix(),
        exp: moment().add(14, "days").unix(),
        };
      
      res.status(200).json({token: jwt.encode(payload, process.env.TOKEN_SECRET)});
    } catch (e) {
      res.status(500).json(e.message);
    }
  }
}

export default TokenController;
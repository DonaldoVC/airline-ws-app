import * as express from 'express';

import FlightController from './flight.controller';
import CityController from './city.controller';
import TokenController from './token.controller';
import TokenMiddleware from "../middleware/token.middleware";

class AppController {

  public router: express.Router;

  constructor() {
    const router = express.Router();

    const flightController = new FlightController();
    const cityController = new CityController();
    const tokenController = new TokenController();

    router.use('/token', tokenController.router);

    router.use(new TokenMiddleware().token);
    router.use('/flight', flightController.router);
    router.use('/city', cityController.router);

    this.router = router;
  }
}

export default AppController;

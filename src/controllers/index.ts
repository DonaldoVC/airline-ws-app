import * as express from 'express';

import FlightController from './flight.controller';
import CityController from './city.controller';

class AppController {

  public router: express.Router;

  constructor() {
    const router = express.Router();

    const flightController = new FlightController();
    const cityController = new CityController();

    router.use('/flight', flightController.router);
    router.use('/city', cityController.router);

    this.router = router;
  }
}

export default AppController;

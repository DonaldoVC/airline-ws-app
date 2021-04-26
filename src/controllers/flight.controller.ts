import * as express from 'express';

const moment = require('moment-timezone');
moment().tz("America/Mexico_City").format();

import {City, Flight} from '../models';

class FlightController {

  public router: express.Router;

  constructor() {
    const router = express.Router();

    router.post('/', this.create);
    router.get('/', this.getAll);
    router.post('/availability', this.getAvailability);

    this.router = router;
  }

  async create(req: any, res: any) {
    try {
      const datas = [
        {
          "citySource": "CDMX",
          "cityDestiny": "Roma",
          "dateSource": "2021-04-26T06:30:00.000Z",
          "dateDestiny": "2021-04-27T23:30:00.000Z",
          "price": 9500,
          "availability": 40
        },
        {
          "citySource": "CDMX",
          "cityDestiny": "Roma",
          "dateSource": "2021-04-26T12:30:00.000Z",
          "dateDestiny": "2021-04-27T17:30:00.000Z",
          "price": 12000,
          "availability": 40
        },
        {
          "citySource": "CDMX",
          "cityDestiny": "Roma",
          "dateSource": "2021-04-26T19:00:00.000Z",
          "dateDestiny": "2021-04-27T12:00:00.000Z",
          "price": 13000,
          "availability": 40
        },
        {
          "citySource": "CDMX",
          "cityDestiny": "Roma",
          "dateSource": "2021-04-27T06:30:00.000Z",
          "dateDestiny": "2021-04-28T23:30:00.000Z",
          "price": 9500,
          "availability": 40
        },
        {
          "citySource": "CDMX",
          "cityDestiny": "Roma",
          "dateSource": "2021-04-27T12:30:00.000Z",
          "dateDestiny": "2021-04-28T17:30:00.000Z",
          "price": 12000,
          "availability": 40
        },
        {
          "citySource": "CDMX",
          "cityDestiny": "Roma",
          "dateSource": "2021-04-27T19:00:00.000Z",
          "dateDestiny": "2021-04-28T12:00:00.000Z",
          "price": 13000,
          "availability": 40
        },
        {
          "citySource": "CDMX",
          "cityDestiny": "Roma",
          "dateSource": "2021-04-28T06:30:00.000Z",
          "dateDestiny": "2021-04-29T23:30:00.000Z",
          "price": 9500,
          "availability": 40
        },
        {
          "citySource": "CDMX",
          "cityDestiny": "Roma",
          "dateSource": "2021-04-28T19:00:00.000Z",
          "dateDestiny": "2021-04-29T17:30:00.000Z",
          "price": 12000,
          "availability": 40
        },
        {
          "citySource": "CDMX",
          "cityDestiny": "Roma",
          "dateSource": "2021-04-28T19:00:00.000Z",
          "dateDestiny": "2021-04-29T12:00:00.000Z",
          "price": 13000,
          "availability": 40
        },
        {
          "citySource": "CDMX",
          "cityDestiny": "Roma",
          "dateSource": "2021-05-29T06:30:00.000Z",
          "dateDestiny": "2021-04-30T23:30:00.000Z",
          "price": 9500,
          "availability": 40
        },
        {
          "citySource": "CDMX",
          "cityDestiny": "Roma",
          "dateSource": "2021-04-29T19:00:00.000Z",
          "dateDestiny": "2021-04-30T17:30:00.000Z",
          "price": 12000,
          "availability": 40
        },
        {
          "citySource": "CDMX",
          "cityDestiny": "Roma",
          "dateSource": "2021-04-29T19:00:00.000Z",
          "dateDestiny": "2021-04-30T12:00:00.000Z",
          "price": 13000,
          "availability": 40
        },
        {
          "citySource": "CDMX",
          "cityDestiny": "Roma",
          "dateSource": "2021-05-30T06:30:00.000Z",
          "dateDestiny": "2021-05-01T23:30:00.000Z",
          "price": 9500,
          "availability": 40
        },
        {
          "citySource": "CDMX",
          "cityDestiny": "Roma",
          "dateSource": "2021-04-30T19:00:00.000Z",
          "dateDestiny": "2021-05-01T17:30:00.000Z",
          "price": 12000,
          "availability": 40
        },
        {
          "citySource": "CDMX",
          "cityDestiny": "Roma",
          "dateSource": "2021-04-30T19:00:00.000Z",
          "dateDestiny": "2021-05-01T12:00:00.000Z",
          "price": 13000,
          "availability": 40
        },
        {
          "citySource": "CDMX",
          "cityDestiny": "Roma",
          "dateSource": "2021-05-01T06:00:00.000Z",
          "dateDestiny": "2021-05-02T23:30:00.000Z",
          "price": 9500,
          "availability": 40
        },
        {
          "citySource": "CDMX",
          "cityDestiny": "Roma",
          "dateSource": "2021-05-01T12:00:00.000Z",
          "dateDestiny": "2021-05-02T17:30:00.000Z",
          "price": 12000,
          "availability": 40
        },
        {
          "citySource": "CDMX",
          "cityDestiny": "Roma",
          "dateSource": "2021-05-01T19:00:00.000Z",
          "dateDestiny": "2021-05-02T12:00:00.000Z",
          "price": 13000,
          "availability": 40
        },
        {
          "citySource": "CDMX",
          "cityDestiny": "Roma",
          "dateSource": "2021-05-02T06:30:00.000Z",
          "dateDestiny": "2021-05-03T23:30:00.000Z",
          "price": 9500,
          "availability": 40
        },
        {
          "citySource": "CDMX",
          "cityDestiny": "Roma",
          "dateSource": "2021-05-02T12:00:00.000Z",
          "dateDestiny": "2021-05-03T17:30:00.000Z",
          "price": 12000,
          "availability": 40
        },
        {
          "citySource": "CDMX",
          "cityDestiny": "Roma",
          "dateSource": "2021-05-02T19:00:00.000Z",
          "dateDestiny": "2021-05-03T12:00:00.000Z",
          "price": 13000,
          "availability": 40
        },
        {
          "citySource": "Cancún",
          "cityDestiny": "Nueva York",
          "dateSource": "2021-04-26T11:30:00.000Z",
          "dateDestiny": "2021-04-26T15:30:00.000Z",
          "price": 5000,
          "availability": 40
        },
        {
          "citySource": "Cancún",
          "cityDestiny": "Nueva York",
          "dateSource": "2021-04-26T05:30:00.000Z",
          "dateDestiny": "2021-04-26T21:30:00.000Z",
          "price": 8000,
          "availability": 40
        },
        {
          "citySource": "Cancún",
          "cityDestiny": "Nueva York",
          "dateSource": "2021-04-26T03:00:00.000Z",
          "dateDestiny": "2021-04-26T07:00:00.000Z",
          "price": 7500,
          "availability": 40
        },
        {
          "citySource": "Cancún",
          "cityDestiny": "Nueva York",
          "dateSource": "2021-04-27T11:30:00.000Z",
          "dateDestiny": "2021-04-27T15:30:00.000Z",
          "price": 5000,
          "availability": 40
        },
        {
          "citySource": "Cancún",
          "cityDestiny": "Nueva York",
          "dateSource": "2021-04-27T05:30:00.000Z",
          "dateDestiny": "2021-04-27T21:30:00.000Z",
          "price": 8000,
          "availability": 40
        },
        {
          "citySource": "Cancún",
          "cityDestiny": "Nueva York",
          "dateSource": "2021-04-27T03:00:00.000Z",
          "dateDestiny": "2021-04-27T07:00:00.000Z",
          "price": 7500,
          "availability": 40
        },
        {
          "citySource": "Cancún",
          "cityDestiny": "Nueva York",
          "dateSource": "2021-04-28T11:30:00.000Z",
          "dateDestiny": "2021-04-28T15:30:00.000Z",
          "price": 5000,
          "availability": 40
        },
        {
          "citySource": "Cancún",
          "cityDestiny": "Nueva York",
          "dateSource": "2021-04-28T05:30:00.000Z",
          "dateDestiny": "2021-04-28T21:30:00.000Z",
          "price": 8000,
          "availability": 40
        },
        {
          "citySource": "Cancún",
          "cityDestiny": "Nueva York",
          "dateSource": "2021-04-28T03:00:00.000Z",
          "dateDestiny": "2021-04-28T07:00:00.000Z",
          "price": 7500,
          "availability": 40
        },
        {
          "citySource": "Cancún",
          "cityDestiny": "Nueva York",
          "dateSource": "2021-04-29T11:30:00.000Z",
          "dateDestiny": "2021-04-29T15:30:00.000Z",
          "price": 5000,
          "availability": 40
        },
        {
          "citySource": "Cancún",
          "cityDestiny": "Nueva York",
          "dateSource": "2021-04-29T05:30:00.000Z",
          "dateDestiny": "2021-04-29T21:30:00.000Z",
          "price": 8000,
          "availability": 40
        },
        {
          "citySource": "Cancún",
          "cityDestiny": "Nueva York",
          "dateSource": "2021-04-29T03:00:00.000Z",
          "dateDestiny": "2021-04-29T07:00:00.000Z",
          "price": 7500,
          "availability": 40
        },
        {
          "citySource": "Cancún",
          "cityDestiny": "Nueva York",
          "dateSource": "2021-04-30T11:30:00.000Z",
          "dateDestiny": "2021-04-30T15:30:00.000Z",
          "price": 5000,
          "availability": 40
        },
        {
          "citySource": "Cancún",
          "cityDestiny": "Nueva York",
          "dateSource": "2021-04-30T05:30:00.000Z",
          "dateDestiny": "2021-04-30T21:30:00.000Z",
          "price": 8000,
          "availability": 40
        },
        {
          "citySource": "Cancún",
          "cityDestiny": "Nueva York",
          "dateSource": "2021-04-30T03:00:00.000Z",
          "dateDestiny": "2021-04-30T07:00:00.000Z",
          "price": 7500,
          "availability": 40
        },
        {
          "citySource": "Cancún",
          "cityDestiny": "Nueva York",
          "dateSource": "2021-05-01T11:30:00.000Z",
          "dateDestiny": "2021-05-01T15:30:00.000Z",
          "price": 5000,
          "availability": 40
        },
        {
          "citySource": "Cancún",
          "cityDestiny": "Nueva York",
          "dateSource": "2021-05-01T05:30:00.000Z",
          "dateDestiny": "2021-05-01T21:30:00.000Z",
          "price": 8000,
          "availability": 40
        },
        {
          "citySource": "Cancún",
          "cityDestiny": "Nueva York",
          "dateSource": "2021-05-01T03:00:00.000Z",
          "dateDestiny": "2021-05-01T07:00:00.000Z",
          "price": 7500,
          "availability": 40
        },
        {
          "citySource": "Cancún",
          "cityDestiny": "Nueva York",
          "dateSource": "2021-05-02T11:30:00.000Z",
          "dateDestiny": "2021-05-02T15:30:00.000Z",
          "price": 5000,
          "availability": 40
        },
        {
          "citySource": "Cancún",
          "cityDestiny": "Nueva York",
          "dateSource": "2021-05-02T05:30:00.000Z",
          "dateDestiny": "2021-05-02T21:30:00.000Z",
          "price": 8000,
          "availability": 40
        },
        {
          "citySource": "Cancún",
          "cityDestiny": "Nueva York",
          "dateSource": "2021-05-02T03:00:00.000Z",
          "dateDestiny": "2021-05-02T07:00:00.000Z",
          "price": 7500,
          "availability": 40
        },
        {
          "citySource": "Nueva York",
          "cityDestiny": "Mazatlán",
          "dateSource": "2021-04-26T09:00:00.000Z",
          "dateDestiny": "2021-04-26T13:00:00.000Z",
          "price": 3500,
          "availability": 40
        },
        {
          "citySource": "Nueva York",
          "cityDestiny": "Mazatlán",
          "dateSource": "2021-04-26T12:30:00.000Z",
          "dateDestiny": "2021-04-26T16:30:00.000Z",
          "price": 5400,
          "availability": 40
        },
        {
          "citySource": "Nueva York",
          "cityDestiny": "Mazatlán",
          "dateSource": "2021-04-26T16:00:00.000Z",
          "dateDestiny": "2021-04-26T20:00:00.000Z",
          "price": 6000,
          "availability": 40
        },
        {
          "citySource": "Nueva York",
          "cityDestiny": "Mazatlán",
          "dateSource": "2021-04-27T09:00:00.000Z",
          "dateDestiny": "2021-04-27T13:00:00.000Z",
          "price": 3500,
          "availability": 40
        },
        {
          "citySource": "Nueva York",
          "cityDestiny": "Mazatlán",
          "dateSource": "2021-04-27T12:30:00.000Z",
          "dateDestiny": "2021-04-27T16:30:00.000Z",
          "price": 5400,
          "availability": 40
        },
        {
          "citySource": "Nueva York",
          "cityDestiny": "Mazatlán",
          "dateSource": "2021-04-27T16:00:00.000Z",
          "dateDestiny": "2021-04-27T20:00:00.000Z",
          "price": 6000,
          "availability": 40
        },
        {
          "citySource": "Nueva York",
          "cityDestiny": "Mazatlán",
          "dateSource": "2021-04-28T09:00:00.000Z",
          "dateDestiny": "2021-04-28T13:00:00.000Z",
          "price": 3500,
          "availability": 40
        },
        {
          "citySource": "Nueva York",
          "cityDestiny": "Mazatlán",
          "dateSource": "2021-04-28T12:30:00.000Z",
          "dateDestiny": "2021-04-28T16:30:00.000Z",
          "price": 5400,
          "availability": 40
        },
        {
          "citySource": "Nueva York",
          "cityDestiny": "Mazatlán",
          "dateSource": "2021-04-28T16:00:00.000Z",
          "dateDestiny": "2021-04-28T20:00:00.000Z",
          "price": 6000,
          "availability": 40
        },
        {
          "citySource": "Nueva York",
          "cityDestiny": "Mazatlán",
          "dateSource": "2021-04-29T09:00:00.000Z",
          "dateDestiny": "2021-04-29T13:00:00.000Z",
          "price": 3500,
          "availability": 40
        },
        {
          "citySource": "Nueva York",
          "cityDestiny": "Mazatlán",
          "dateSource": "2021-04-29T12:30:00.000Z",
          "dateDestiny": "2021-04-29T16:30:00.000Z",
          "price": 5400,
          "availability": 40
        },
        {
          "citySource": "Nueva York",
          "cityDestiny": "Mazatlán",
          "dateSource": "2021-04-29T16:00:00.000Z",
          "dateDestiny": "2021-04-29T20:00:00.000Z",
          "price": 6000,
          "availability": 40
        },
        {
          "citySource": "Nueva York",
          "cityDestiny": "Mazatlán",
          "dateSource": "2021-04-30T09:00:00.000Z",
          "dateDestiny": "2021-04-30T13:00:00.000Z",
          "price": 3500,
          "availability": 40
        },
        {
          "citySource": "Nueva York",
          "cityDestiny": "Mazatlán",
          "dateSource": "2021-04-30T12:30:00.000Z",
          "dateDestiny": "2021-04-30T16:30:00.000Z",
          "price": 5400,
          "availability": 40
        },
        {
          "citySource": "Nueva York",
          "cityDestiny": "Mazatlán",
          "dateSource": "2021-04-30T16:00:00.000Z",
          "dateDestiny": "2021-04-30T20:00:00.000Z",
          "price": 6000,
          "availability": 40
        },
        {
          "citySource": "Nueva York",
          "cityDestiny": "Mazatlán",
          "dateSource": "2021-05-01T09:00:00.000Z",
          "dateDestiny": "2021-05-01T13:00:00.000Z",
          "price": 3500,
          "availability": 40
        },
        {
          "citySource": "Nueva York",
          "cityDestiny": "Mazatlán",
          "dateSource": "2021-05-01T12:30:00.000Z",
          "dateDestiny": "2021-05-01T16:30:00.000Z",
          "price": 5400,
          "availability": 40
        },
        {
          "citySource": "Nueva York",
          "cityDestiny": "Mazatlán",
          "dateSource": "2021-05-01T16:00:00.000Z",
          "dateDestiny": "2021-05-01T20:00:00.000Z",
          "price": 6000,
          "availability": 40
        },
        {
          "citySource": "Nueva York",
          "cityDestiny": "Mazatlán",
          "dateSource": "2021-05-02T09:00:00.000Z",
          "dateDestiny": "2021-05-02T13:00:00.000Z",
          "price": 3500,
          "availability": 40
        },
        {
          "citySource": "Nueva York",
          "cityDestiny": "Mazatlán",
          "dateSource": "2021-05-02T12:30:00.000Z",
          "dateDestiny": "2021-05-02T16:30:00.000Z",
          "price": 5400,
          "availability": 40
        },
        {
          "citySource": "Nueva York",
          "cityDestiny": "Mazatlán",
          "dateSource": "2021-05-02T16:00:00.000Z",
          "dateDestiny": "2021-05-02T20:00:00.000Z",
          "price": 6000,
          "availability": 40
        },
        {
          "citySource": "Guadalajara",
          "cityDestiny": "Acapulco",
          "dateSource": "2021-04-26T05:30:00.000Z",
          "dateDestiny": "2021-04-26T07:30:00.000Z",
          "price": 3700,
          "availability": 40
        },
        {
          "citySource": "Guadalajara",
          "cityDestiny": "Acapulco",
          "dateSource": "2021-04-26T13:30:00.000Z",
          "dateDestiny": "2021-04-26T15:30:00.000Z",
          "price": 4000,
          "availability": 40
        },
        {
          "citySource": "Guadalajara",
          "cityDestiny": "Acapulco",
          "dateSource": "2021-04-26T18:00:00.000Z",
          "dateDestiny": "2021-04-26T20:00:00.000Z",
          "price": 3090,
          "availability": 40
        },
        {
          "citySource": "Guadalajara",
          "cityDestiny": "Acapulco",
          "dateSource": "2021-04-27T05:30:00.000Z",
          "dateDestiny": "2021-04-27T07:30:00.000Z",
          "price": 3700,
          "availability": 40
        },
        {
          "citySource": "Guadalajara",
          "cityDestiny": "Acapulco",
          "dateSource": "2021-04-27T13:30:00.000Z",
          "dateDestiny": "2021-04-27T15:30:00.000Z",
          "price": 4000,
          "availability": 40
        },
        {
          "citySource": "Guadalajara",
          "cityDestiny": "Acapulco",
          "dateSource": "2021-04-27T18:00:00.000Z",
          "dateDestiny": "2021-04-27T20:00:00.000Z",
          "price": 3090,
          "availability": 40
        },
        {
          "citySource": "Guadalajara",
          "cityDestiny": "Acapulco",
          "dateSource": "2021-04-28T05:30:00.000Z",
          "dateDestiny": "2021-04-28T07:30:00.000Z",
          "price": 3700,
          "availability": 40
        },
        {
          "citySource": "Guadalajara",
          "cityDestiny": "Acapulco",
          "dateSource": "2021-04-28T13:30:00.000Z",
          "dateDestiny": "2021-04-28T15:30:00.000Z",
          "price": 4000,
          "availability": 40
        },
        {
          "citySource": "Guadalajara",
          "cityDestiny": "Acapulco",
          "dateSource": "2021-04-28T18:00:00.000Z",
          "dateDestiny": "2021-04-28T20:00:00.000Z",
          "price": 3090,
          "availability": 40
        },
        {
          "citySource": "Guadalajara",
          "cityDestiny": "Acapulco",
          "dateSource": "2021-04-29T05:30:00.000Z",
          "dateDestiny": "2021-04-29T07:30:00.000Z",
          "price": 3700,
          "availability": 40
        },
        {
          "citySource": "Guadalajara",
          "cityDestiny": "Acapulco",
          "dateSource": "2021-04-29T13:30:00.000Z",
          "dateDestiny": "2021-04-29T15:30:00.000Z",
          "price": 4000,
          "availability": 40
        },
        {
          "citySource": "Guadalajara",
          "cityDestiny": "Acapulco",
          "dateSource": "2021-04-29T18:00:00.000Z",
          "dateDestiny": "2021-04-29T20:00:00.000Z",
          "price": 3090,
          "availability": 40
        },
        {
          "citySource": "Guadalajara",
          "cityDestiny": "Acapulco",
          "dateSource": "2021-04-30T05:30:00.000Z",
          "dateDestiny": "2021-04-30T07:30:00.000Z",
          "price": 3700,
          "availability": 40
        },
        {
          "citySource": "Guadalajara",
          "cityDestiny": "Acapulco",
          "dateSource": "2021-04-30T13:30:00.000Z",
          "dateDestiny": "2021-04-30T15:30:00.000Z",
          "price": 4000,
          "availability": 40
        },
        {
          "citySource": "Guadalajara",
          "cityDestiny": "Acapulco",
          "dateSource": "2021-04-30T18:00:00.000Z",
          "dateDestiny": "2021-04-30T20:00:00.000Z",
          "price": 3090,
          "availability": 40
        },
        {
          "citySource": "Guadalajara",
          "cityDestiny": "Acapulco",
          "dateSource": "2021-05-01T05:30:00.000Z",
          "dateDestiny": "2021-05-01T07:30:00.000Z",
          "price": 3700,
          "availability": 40
        },
        {
          "citySource": "Guadalajara",
          "cityDestiny": "Acapulco",
          "dateSource": "2021-05-01T13:30:00.000Z",
          "dateDestiny": "2021-05-01T15:30:00.000Z",
          "price": 4000,
          "availability": 40
        },
        {
          "citySource": "Guadalajara",
          "cityDestiny": "Acapulco",
          "dateSource": "2021-05-01T18:00:00.000Z",
          "dateDestiny": "2021-05-01T20:00:00.000Z",
          "price": 3090,
          "availability": 40
        },
        {
          "citySource": "Guadalajara",
          "cityDestiny": "Acapulco",
          "dateSource": "2021-05-02T05:30:00.000Z",
          "dateDestiny": "2021-05-02T07:30:00.000Z",
          "price": 3700,
          "availability": 40
        },
        {
          "citySource": "Guadalajara",
          "cityDestiny": "Acapulco",
          "dateSource": "2021-05-02T13:30:00.000Z",
          "dateDestiny": "2021-05-02T15:30:00.000Z",
          "price": 4000,
          "availability": 40
        },
        {
          "citySource": "Guadalajara",
          "cityDestiny": "Acapulco",
          "dateSource": "2021-05-02T18:00:00.000Z",
          "dateDestiny": "2021-05-02T20:00:00.000Z",
          "price": 3090,
          "availability": 40
        },
        {
          "citySource": "Orlando",
          "cityDestiny": "Toronto",
          "dateSource": "2021-04-26T10:30:00.000Z",
          "dateDestiny": "2021-04-26T12:00:00.000Z",
          "price": 5000,
          "availability": 40
        },
        {
          "citySource": "Orlando",
          "cityDestiny": "Toronto",
          "dateSource": "2021-04-26T12:30:00.000Z",
          "dateDestiny": "2021-04-26T14:00:00.000Z",
          "price": 5000,
          "availability": 40
        },
        {
          "citySource": "Orlando",
          "cityDestiny": "Toronto",
          "dateSource": "2021-04-26T15:00:00.000Z",
          "dateDestiny": "2021-04-26T16:30:00.000Z",
          "price": 5000,
          "availability": 40
        },
        {
          "citySource": "Orlando",
          "cityDestiny": "Toronto",
          "dateSource": "2021-04-27T10:30:00.000Z",
          "dateDestiny": "2021-04-27T12:00:00.000Z",
          "price": 5000,
          "availability": 40
        },
        {
          "citySource": "Orlando",
          "cityDestiny": "Toronto",
          "dateSource": "2021-04-27T12:30:00.000Z",
          "dateDestiny": "2021-04-27T14:00:00.000Z",
          "price": 5000,
          "availability": 40
        },
        {
          "citySource": "Orlando",
          "cityDestiny": "Toronto",
          "dateSource": "2021-04-27T15:00:00.000Z",
          "dateDestiny": "2021-04-27T16:30:00.000Z",
          "price": 5000,
          "availability": 40
        },
        {
          "citySource": "Orlando",
          "cityDestiny": "Toronto",
          "dateSource": "2021-04-28T10:30:00.000Z",
          "dateDestiny": "2021-04-28T12:00:00.000Z",
          "price": 5000,
          "availability": 40
        },
        {
          "citySource": "Orlando",
          "cityDestiny": "Toronto",
          "dateSource": "2021-04-28T12:30:00.000Z",
          "dateDestiny": "2021-04-28T14:00:00.000Z",
          "price": 5000,
          "availability": 40
        },
        {
          "citySource": "Orlando",
          "cityDestiny": "Toronto",
          "dateSource": "2021-04-28T15:00:00.000Z",
          "dateDestiny": "2021-04-28T16:30:00.000Z",
          "price": 5000,
          "availability": 40
        },
        {
          "citySource": "Orlando",
          "cityDestiny": "Toronto",
          "dateSource": "2021-04-29T10:30:00.000Z",
          "dateDestiny": "2021-04-29T12:00:00.000Z",
          "price": 5000,
          "availability": 40
        },
        {
          "citySource": "Orlando",
          "cityDestiny": "Toronto",
          "dateSource": "2021-04-29T12:30:00.000Z",
          "dateDestiny": "2021-04-29T14:00:00.000Z",
          "price": 5000,
          "availability": 40
        },
        {
          "citySource": "Orlando",
          "cityDestiny": "Toronto",
          "dateSource": "2021-04-29T15:00:00.000Z",
          "dateDestiny": "2021-04-29T16:30:00.000Z",
          "price": 5000,
          "availability": 40
        },
        {
          "citySource": "Orlando",
          "cityDestiny": "Toronto",
          "dateSource": "2021-04-30T10:30:00.000Z",
          "dateDestiny": "2021-04-30T12:00:00.000Z",
          "price": 5000,
          "availability": 40
        },
        {
          "citySource": "Orlando",
          "cityDestiny": "Toronto",
          "dateSource": "2021-04-30T12:30:00.000Z",
          "dateDestiny": "2021-04-30T14:00:00.000Z",
          "price": 5000,
          "availability": 40
        },
        {
          "citySource": "Orlando",
          "cityDestiny": "Toronto",
          "dateSource": "2021-04-30T15:00:00.000Z",
          "dateDestiny": "2021-04-30T16:30:00.000Z",
          "price": 5000,
          "availability": 40
        },
        {
          "citySource": "Orlando",
          "cityDestiny": "Toronto",
          "dateSource": "2021-05-01T10:30:00.000Z",
          "dateDestiny": "2021-05-01T12:00:00.000Z",
          "price": 5000,
          "availability": 40
        },
        {
          "citySource": "Orlando",
          "cityDestiny": "Toronto",
          "dateSource": "2021-05-01T12:30:00.000Z",
          "dateDestiny": "2021-05-01T14:00:00.000Z",
          "price": 5000,
          "availability": 40
        },
        {
          "citySource": "Orlando",
          "cityDestiny": "Toronto",
          "dateSource": "2021-05-01T15:00:00.000Z",
          "dateDestiny": "2021-05-01T16:30:00.000Z",
          "price": 5000,
          "availability": 40
        },
        {
          "citySource": "Orlando",
          "cityDestiny": "Toronto",
          "dateSource": "2021-05-02T10:30:00.000Z",
          "dateDestiny": "2021-05-02T12:00:00.000Z",
          "price": 5000,
          "availability": 40
        },
        {
          "citySource": "Orlando",
          "cityDestiny": "Toronto",
          "dateSource": "2021-05-02T12:30:00.000Z",
          "dateDestiny": "2021-05-02T14:00:00.000Z",
          "price": 5000,
          "availability": 40
        },
        {
          "citySource": "Orlando",
          "cityDestiny": "Toronto",
          "dateSource": "2021-05-02T15:00:00.000Z",
          "dateDestiny": "2021-05-02T16:30:00.000Z",
          "price": 5000,
          "availability": 40
        },
        {
          "citySource": "Tijuana",
          "cityDestiny": "Veracruz",
          "dateSource": "2021-04-26T14:30:00.000Z",
          "dateDestiny": "2021-04-26T20:30:00.000Z",
          "price": 4500,
          "availability": 40
        },
        {
          "citySource": "Tijuana",
          "cityDestiny": "Veracruz",
          "dateSource": "2021-04-26T16:20:00.000Z",
          "dateDestiny": "2021-04-26T22:20:00.000Z",
          "price": 4000,
          "availability": 40
        },
        {
          "citySource": "Tijuana",
          "cityDestiny": "Veracruz",
          "dateSource": "2021-04-26T19:00:00.000Z",
          "dateDestiny": "2021-04-27T01:00:00.000Z",
          "price": 4700,
          "availability": 40
        },
        {
          "citySource": "Tijuana",
          "cityDestiny": "Veracruz",
          "dateSource": "2021-04-27T14:30:00.000Z",
          "dateDestiny": "2021-04-27T20:30:00.000Z",
          "price": 4500,
          "availability": 40
        },
        {
          "citySource": "Tijuana",
          "cityDestiny": "Veracruz",
          "dateSource": "2021-04-27T16:20:00.000Z",
          "dateDestiny": "2021-04-27T22:20:00.000Z",
          "price": 4000,
          "availability": 40
        },
        {
          "citySource": "Tijuana",
          "cityDestiny": "Veracruz",
          "dateSource": "2021-04-27T19:00:00.000Z",
          "dateDestiny": "2021-04-28T01:00:00.000Z",
          "price": 4700,
          "availability": 40
        },
        {
          "citySource": "Tijuana",
          "cityDestiny": "Veracruz",
          "dateSource": "2021-04-28T14:30:00.000Z",
          "dateDestiny": "2021-04-28T20:30:00.000Z",
          "price": 4500,
          "availability": 40
        },
        {
          "citySource": "Tijuana",
          "cityDestiny": "Veracruz",
          "dateSource": "2021-04-28T16:20:00.000Z",
          "dateDestiny": "2021-04-28T22:20:00.000Z",
          "price": 4000,
          "availability": 40
        },
        {
          "citySource": "Tijuana",
          "cityDestiny": "Veracruz",
          "dateSource": "2021-04-28T19:00:00.000Z",
          "dateDestiny": "2021-04-29T01:00:00.000Z",
          "price": 4700,
          "availability": 40
        },
        {
          "citySource": "Tijuana",
          "cityDestiny": "Veracruz",
          "dateSource": "2021-04-29T14:30:00.000Z",
          "dateDestiny": "2021-04-29T20:30:00.000Z",
          "price": 4500,
          "availability": 40
        },
        {
          "citySource": "Tijuana",
          "cityDestiny": "Veracruz",
          "dateSource": "2021-04-29T16:20:00.000Z",
          "dateDestiny": "2021-04-29T22:20:00.000Z",
          "price": 4000,
          "availability": 40
        },
        {
          "citySource": "Tijuana",
          "cityDestiny": "Veracruz",
          "dateSource": "2021-04-29T19:00:00.000Z",
          "dateDestiny": "2021-04-30T01:00:00.000Z",
          "price": 4700,
          "availability": 40
        },
        {
          "citySource": "Tijuana",
          "cityDestiny": "Veracruz",
          "dateSource": "2021-04-30T14:30:00.000Z",
          "dateDestiny": "2021-04-30T20:30:00.000Z",
          "price": 4500,
          "availability": 40
        },
        {
          "citySource": "Tijuana",
          "cityDestiny": "Veracruz",
          "dateSource": "2021-04-30T16:20:00.000Z",
          "dateDestiny": "2021-04-30T22:20:00.000Z",
          "price": 4000,
          "availability": 40
        },
        {
          "citySource": "Tijuana",
          "cityDestiny": "Veracruz",
          "dateSource": "2021-04-30T19:00:00.000Z",
          "dateDestiny": "2021-05-01T01:00:00.000Z",
          "price": 4700,
          "availability": 40
        },
        {
          "citySource": "Tijuana",
          "cityDestiny": "Veracruz",
          "dateSource": "2021-05-01T14:30:00.000Z",
          "dateDestiny": "2021-05-01T20:30:00.000Z",
          "price": 4500,
          "availability": 40
        },
        {
          "citySource": "Tijuana",
          "cityDestiny": "Veracruz",
          "dateSource": "2021-05-01T16:20:00.000Z",
          "dateDestiny": "2021-05-01T22:20:00.000Z",
          "price": 4000,
          "availability": 40
        },
        {
          "citySource": "Tijuana",
          "cityDestiny": "Veracruz",
          "dateSource": "2021-05-01T19:00:00.000Z",
          "dateDestiny": "2021-05-02T01:00:00.000Z",
          "price": 4700,
          "availability": 40
        },
        {
          "citySource": "Tijuana",
          "cityDestiny": "Veracruz",
          "dateSource": "2021-05-02T14:30:00.000Z",
          "dateDestiny": "2021-05-02T20:30:00.000Z",
          "price": 4500,
          "availability": 40
        },
        {
          "citySource": "Tijuana",
          "cityDestiny": "Veracruz",
          "dateSource": "2021-05-02T16:20:00.000Z",
          "dateDestiny": "2021-05-02T22:20:00.000Z",
          "price": 4000,
          "availability": 40
        },
        {
          "citySource": "Tijuana",
          "cityDestiny": "Veracruz",
          "dateSource": "2021-05-02T19:00:00.000Z",
          "dateDestiny": "2021-05-03T01:00:00.000Z",
          "price": 4700,
          "availability": 40
        },
        {
          "citySource": "Santiago de Chile",
          "cityDestiny": "Bogotá",
          "dateSource": "2021-04-26T11:00:00.000Z",
          "dateDestiny": "2021-04-26T12:00:00.000Z",
          "price": 2000,
          "availability": 40
        },
        {
          "citySource": "Santiago de Chile",
          "cityDestiny": "Bogotá",
          "dateSource": "2021-04-26T17:30:00.000Z",
          "dateDestiny": "2021-04-26T18:30:00.000Z",
          "price": 2400,
          "availability": 40
        },
        {
          "citySource": "Santiago de Chile",
          "cityDestiny": "Bogotá",
          "dateSource": "2021-04-26T18:00:00.000Z",
          "dateDestiny": "2021-04-26T19:00:00.000Z",
          "price": 2500,
          "availability": 40
        },
        {
          "citySource": "Santiago de Chile",
          "cityDestiny": "Bogotá",
          "dateSource": "2021-04-27T11:00:00.000Z",
          "dateDestiny": "2021-04-27T12:00:00.000Z",
          "price": 2000,
          "availability": 40
        },
        {
          "citySource": "Santiago de Chile",
          "cityDestiny": "Bogotá",
          "dateSource": "2021-04-27T17:30:00.000Z",
          "dateDestiny": "2021-04-27T18:30:00.000Z",
          "price": 2400,
          "availability": 40
        },
        {
          "citySource": "Santiago de Chile",
          "cityDestiny": "Bogotá",
          "dateSource": "2021-04-27T18:00:00.000Z",
          "dateDestiny": "2021-04-27T19:00:00.000Z",
          "price": 2500,
          "availability": 40
        },
        {
          "citySource": "Santiago de Chile",
          "cityDestiny": "Bogotá",
          "dateSource": "2021-04-28T11:00:00.000Z",
          "dateDestiny": "2021-04-28T12:00:00.000Z",
          "price": 2000,
          "availability": 40
        },
        {
          "citySource": "Santiago de Chile",
          "cityDestiny": "Bogotá",
          "dateSource": "2021-04-28T17:30:00.000Z",
          "dateDestiny": "2021-04-28T18:30:00.000Z",
          "price": 2400,
          "availability": 40
        },
        {
          "citySource": "Santiago de Chile",
          "cityDestiny": "Bogotá",
          "dateSource": "2021-04-28T18:00:00.000Z",
          "dateDestiny": "2021-04-28T19:00:00.000Z",
          "price": 2500,
          "availability": 40
        },
        {
          "citySource": "Santiago de Chile",
          "cityDestiny": "Bogotá",
          "dateSource": "2021-04-29T11:00:00.000Z",
          "dateDestiny": "2021-04-29T12:00:00.000Z",
          "price": 2000,
          "availability": 40
        },
        {
          "citySource": "Santiago de Chile",
          "cityDestiny": "Bogotá",
          "dateSource": "2021-04-29T17:30:00.000Z",
          "dateDestiny": "2021-04-29T18:30:00.000Z",
          "price": 2400,
          "availability": 40
        },
        {
          "citySource": "Santiago de Chile",
          "cityDestiny": "Bogotá",
          "dateSource": "2021-04-29T18:00:00.000Z",
          "dateDestiny": "2021-04-29T19:00:00.000Z",
          "price": 2500,
          "availability": 40
        },
        {
          "citySource": "Santiago de Chile",
          "cityDestiny": "Bogotá",
          "dateSource": "2021-04-30T11:00:00.000Z",
          "dateDestiny": "2021-04-30T12:00:00.000Z",
          "price": 2000,
          "availability": 40
        },
        {
          "citySource": "Santiago de Chile",
          "cityDestiny": "Bogotá",
          "dateSource": "2021-04-30T17:30:00.000Z",
          "dateDestiny": "2021-04-30T18:30:00.000Z",
          "price": 2400,
          "availability": 40
        },
        {
          "citySource": "Santiago de Chile",
          "cityDestiny": "Bogotá",
          "dateSource": "2021-04-30T18:00:00.000Z",
          "dateDestiny": "2021-04-30T19:00:00.000Z",
          "price": 2500,
          "availability": 40
        },
        {
          "citySource": "Santiago de Chile",
          "cityDestiny": "Bogotá",
          "dateSource": "2021-05-01T11:00:00.000Z",
          "dateDestiny": "2021-05-01T12:00:00.000Z",
          "price": 2000,
          "availability": 40
        },
        {
          "citySource": "Santiago de Chile",
          "cityDestiny": "Bogotá",
          "dateSource": "2021-05-01T17:30:00.000Z",
          "dateDestiny": "2021-05-01T18:30:00.000Z",
          "price": 2400,
          "availability": 40
        },
        {
          "citySource": "Santiago de Chile",
          "cityDestiny": "Bogotá",
          "dateSource": "2021-05-01T18:00:00.000Z",
          "dateDestiny": "2021-05-01T19:00:00.000Z",
          "price": 2500,
          "availability": 40
        },
        {
          "citySource": "Santiago de Chile",
          "cityDestiny": "Bogotá",
          "dateSource": "2021-05-02T11:00:00.000Z",
          "dateDestiny": "2021-05-02T12:00:00.000Z",
          "price": 2000,
          "availability": 40
        },
        {
          "citySource": "Santiago de Chile",
          "cityDestiny": "Bogotá",
          "dateSource": "2021-05-02T17:30:00.000Z",
          "dateDestiny": "2021-05-02T18:30:00.000Z",
          "price": 2400,
          "availability": 40
        },
        {
          "citySource": "Santiago de Chile",
          "cityDestiny": "Bogotá",
          "dateSource": "2021-05-02T18:00:00.000Z",
          "dateDestiny": "2021-05-02T19:00:00.000Z",
          "price": 2500,
          "availability": 40
        }
      ];

      for (const data of datas) {

        const citySource: any = await City.findOne({"name": data.citySource}).select('-deletedAt -createdAt -updatedAt -__v');
        const cityDestiny: any = await City.findOne({"name": data.cityDestiny}).select('-deletedAt -createdAt -updatedAt -__v');
        const timeSource = new Date(data.dateSource);
        const timeDestiny = new Date(data.dateDestiny);
        timeSource.setHours(timeSource.getHours() - 5)
        timeDestiny.setHours(timeDestiny.getHours() - 5)

        const newFlight: any = new Flight({
          citySource: citySource._id,
          cityDestiny: cityDestiny._id,
          price: data.price,
          availability: data.availability,
          dateSource: timeSource.toISOString(),
          dateDestiny: timeDestiny.toISOString()
        });

        await newFlight.save();
      }

      res.status(200).json('finished');
    } catch (e) {
      res.status(500).json(e.message);
    }
  }

  async getAll(req: any, res: any) {
    try {
      const flights: any = await Flight.find().select('-deletedAt -createdAt -updatedAt -__v');

      res.status(200).json({
        success: true,
        flights
      });
    } catch (e) {
      res.status(500).json(e.message);
    }
  }

  async getAvailability(req: any, res: any) {
    try {
      const data: any = req.body.data;

      const origin = new Date(data.date.split(' ')[0]);
      const source = new Date(data.date.split(' ')[0]);
      source.setDate(source.getDate() + 1);


      const flights: any = await Flight.find({
        citySource: data.citySource,
        cityDestiny: data.cityDestiny,
        dateSource: {
          $gte: origin.toISOString(),
          $lt: source.toISOString()
        }
      }).select('-deletedAt -createdAt -updatedAt -__v');

      res.status(200).json({
        success: true,
        flights
      });
    } catch (e) {
      res.status(500).json(e.message);
    }
  }
}

export default FlightController;

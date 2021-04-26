import * as express from 'express';
import {City} from '../models';

class CityController {

  public router: express.Router;

  constructor() {
    const router = express.Router();

    router.post('/', this.create);
    router.get('/', this.getAll);

    this.router = router;
  }

  async create(req: any, res: any) {
    try {
      const data: any = req.body.data;

      const newCity: any = new City(data);
      const saved: any = await newCity.save();
      
      res.status(200).json(saved);
    } catch (e) {
      res.status(500).json(e.message);
    }
  }

  async getAll(req: any, res: any) {
    try {
      City.deleteOne({"_id": "60851dfc33d5282386f6a0d1"})
      const cities: any = await City.find().select('-deletedAt -createdAt -updatedAt -__v');

      res.status(200).json({
        success: true,
        cities
      });
    } catch (e) {
      res.status(500).json(e.message);
    }
  }
}

export default CityController;
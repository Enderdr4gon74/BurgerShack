import { burgersService } from "../services/BurgersService.js";
import BaseController from "../utils/BaseController.js";

export class BurgersController extends BaseController {
  constructor() {
    super('api/burgers')
    this.router
      .get('', this.getAllBurgers)
      .get('/id/:burgerId', this.getBurgerById)
      .post('', this.addBurger)
      .delete('/remove/:burgerId', this.removeBurger)
  }

  async addBurger(req, res, next) {
    try {
      const formData = req.body
      const burger = await burgersService.addBurger(formData)
      res.send(burger)
    } catch (error) {
      next(error)
    }
  }

  async removeBurger(req, res, next) {
    try {
      await burgersService.deleteBurger(req.params.burgerId)
      res.send('Burger Removed')
    } catch (error) {
      next(error)
    }
  }
  async getBurgerById(req, res, next) {
    try {
      const burgerId = req.params.burgerId
      const burger = await burgersService.getBurgerById(burgerId)
      res.send(burger)
    } catch (error) {
      next(error)
    }
  }
  async getAllBurgers(req, res, next) {
    try {
      const burgers = await burgersService.getBurgers()
      res.send(burgers)
    } catch (error) {
      next(error)
    }
  }
}
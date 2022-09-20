import { burgers } from "../db/BurgerDB.js"
import { BadRequest } from "../utils/Errors.js"

class BurgersService {
  addBurger(formData) {
    if (formData.title && formData.tastePercent && formData.cookedAmount) {
      formData.id = Math.floor((Math.random()*900)+100)
      burgers.burgers.push(formData)
      return formData
    } else {
      throw new BadRequest('Not All Data Provided! ' + formData + ": " + formData.title + ", " + formData.tastePercent + ", " + formData.cookedAmount)
    }
  }
  deleteBurger(burgerId) {
    const burger = this.getBurgerById(burgerId)
    burgers.burgers.splice(burgers.burgers.indexOf(burger), 1)
  }
  getBurgerById(burgerId) {
    const burger = burgers.burgers.find(b => b.id == burgerId)
    if (!burger) {
      throw new BadRequest('Invalid Id')
    }
    return burger
  }
  getBurgers() {
    const res = burgers
    return res.burgers
  }
  
}

export const burgersService = new BurgersService()
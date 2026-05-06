const User = require('../models/User');

class UserController {
  async createUser(req, res) {
    try {
      const { name, email } = req.body
      const user = await User.create({ name , email })
      res.status(201).json(user)
    } catch (error) {
      res.status(500).json({ message: 'Ошибка при создании пользователя', error: error.message})
    }
  }

  async getUsers(req, res) {
    try {
      const users = await User.findAll()
      res.status(200).json(users)
    } catch (error) {
      res.status(500).json({ message: 'Ошибка при получении пользователей'})
    }
  }

  async deleteUser(req, res) {
    try {
      const id = req.params.id
      const deleted = await User.destroy({where: {id}})

      if (!deleted) {
        return res.status(404).json({message: 'Пользователь не найден'})
      }

      res.status(200).json({message: 'Пользователь успешно удалён'})
    } catch (error) {
      res.status(500).json({message: 'Ошибка при удалении'})
    }
  }
};

module.exports = new UserController()


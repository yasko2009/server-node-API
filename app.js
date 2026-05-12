require('dotenv').config()
const express = require('express')
const cors = require('cors')

const sequelize = require('./config/db')
const userRoutes = require('./routes/userRoutes')

const app = express()

app.use(express.json())

app.use('/api', userRoutes)

const PORT = 5000

const startServer = async () => {
  try {
    await sequelize.authenticate()
    console.log('Подключение к БД установлено успешно.')

    await sequelize.sync({ alter: true})
    console.log('Модели синхронизированы с БД.')

    app.listen(PORT, () => {
      console.log(`Сервер запущен на порту ${PORT}`)
    }) 
  } catch (error) {
    console.error('Не удалось подключиться к БД:', error)
  }
}

startServer()
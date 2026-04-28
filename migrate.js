const pool = require('./config/db');

const createUserTable = `
CREATE TABLE IF NOT EXISTS users (
  id SERIAL PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  email VARCHAR(255) UNIQUE NOT NULL,
  password VARCHAR(255) NOT NULL,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);
`;

(async () => {
    try{
        await pool.query(createUserTable)
        console.log('Тавпвап')
    } catch (err) {
        console.error('ошибка:', err)
    } finally {
        pool.end()
    }

})()

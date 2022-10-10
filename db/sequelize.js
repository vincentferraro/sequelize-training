const { Sequelize } = require('sequelize')
const sequelize = new Sequelize(
    'sequelize_db',
    'postgres',
    'Admin85280',
    {
        host:'localhost',
        dialect: 'postgres'
    }
)

async function ConnectDB() {
    
try {
    await sequelize.authenticate(),
    console.log('Connection OK')
    
} catch (e) {
    console.log("Error:",e)
}
}
ConnectDB()
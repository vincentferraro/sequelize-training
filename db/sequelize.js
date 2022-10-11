const { Sequelize, DataTypes } = require('sequelize')
const person = require('./models/person')

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
    addPerson('Vincent','Ferraro',30)
    
} catch (e) {
    console.log("Error:",e)
}
}

async function createDB() {
    try {
        await sequelize.sync({ force: true })
        console.log("INSERT DB OK")
    } catch (e) {
        console.log("Error:",e)
    }
    
}
ConnectDB()
const Person = person(sequelize,DataTypes)


async function addPerson(firstname, lastname, birth) {
    console.log(firstname,lastname,birth)
    try {
        await Person.create({
        firstname: firstname,
        lastname: lastname,
        birth:birth
        })
        console.log("INSERT PERSON OK")
    } catch (e) {
        console.log("ERROR:",e)
     }
        
}






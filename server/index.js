const express = require('express')
const cors = require('cors')


const app = express()

app.use(cors())

app.get('/tasks', (req, res)=> {
    res.send('list of all task')
})

app.get('/addTasks', (req, res)=> {
    res.send('add task')
})

app.get('/deleteTasks', (req, res)=> {
    res.send('delete')
})



app.listen(4000, ()=> {
    console.log('running on port 4000')
})

//se correo con nodemon index.js
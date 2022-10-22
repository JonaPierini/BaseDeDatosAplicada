const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser');


const app = express()

app.use(cors())

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


let taskList = [{
    name: 'tarea1',
    id: new Date().getMilliseconds()
},{ 
    name: 'tarea2',
    id: new Date().getMilliseconds()
},
];

app.get('/tasks', (req, res)=> {
    res.status(200).send(taskList)
})

app.post('/addTasks', (req, res)=> {
    const id = new Date().getMilliseconds()
    taskList.push({
        name:req.body.task,
        id: id
    })
    res.status(200).send({
        id
    })
})

app.delete('/deleteTasks/:id', (req, res)=> {
    taskList = taskList.filter((elem)=> elem.id !== req.params.id)
    res.status(200).send()
})

app.listen(4000, ()=> {
    console.log('running on port 4000')
})

//se corre con nodemon index.js
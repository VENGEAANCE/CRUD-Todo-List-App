const TodoTask = require('../models/todotask')

module.exports = {
    getIndex: async (request, response) => {
        try {
            const tasks = await
                TodoTask.find()
            response.render('index.ejs', {
                todoTasks: tasks
            })

        } catch (err) {
            if (err) return response.status(500).
                send(err);

        }
    },

    createTask: async (req, res) => {
        const todoTask = new TodoTask(
            {
                title: req.body.title,
                content: req.body.content
            }
        )
        try {
            await todoTask.save()
            console.log(todoTask)
            res.redirect('/')
        } catch (error) {
            if (error) return res.status(500).send(error)
            res.redirect('/')
        }
    }

}


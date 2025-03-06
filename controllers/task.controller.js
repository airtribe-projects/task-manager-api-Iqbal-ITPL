let tasks = [];
let taskId = 1;
const validPriorities = ["low", "medium", "high"];


exports.getAllTasks = (req, res) => {
    try {
        let tasksArray = tasks
        if (req.query?.completed) {
            const isCompleted = req.query.completed.toLowerCase() === 'true'; // Convert to boolean
            tasksArray = tasksArray?.filter((item) => item.completed === isCompleted)
        }
        return res.status(200).json(tasksArray);
    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
};

exports.getTaskById = (req, res) => {
    try {
        const task = tasks.find(t => t.id === parseInt(req.params.id));
        if (!task) return res.status(404).json({ message: 'Task not found' });
        return res.status(200).json(task);
    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
};

exports.createTask = (req, res) => {
    try {
        const { title, description, completed = false, priority } = req.body;
        if (typeof completed !== 'boolean') {
            return res.status(400).json({ message: 'Completed status should be boolean' });
        }

        if (!title || !description || !completed || !priority) {
            return res.status(400).json({ error: "All fields (title, description, completed, priority) are required." });
        }

        if (!validPriorities.includes(priority.toLowerCase())) {
            return res.status(400).json({ error: "Invalid priority level. Use 'low', 'medium', or 'high'." });
        }
        const newTask = { id: taskId++, title, description, completed, priority: priority.toLowerCase() };
        tasks.push(newTask);
        return res.status(201).json(newTask);
    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
};

exports.updateTask = (req, res) => {
    try {
        const task = tasks.find(t => t.id === parseInt(req.params.id));
        if (!task) return res.status(404).json({ message: 'Task not found' });

        const { title, description, completed, priority } = req.body;
        if (priority && !["low", "medium", "high"].includes(priority.toLowerCase())) {
            return res.status(400).json({ error: "Invalid priority level. Use 'low', 'medium', or 'high'." });
        }
        if (title !== undefined) task.title = title;
        if (description !== undefined) task.description = description;
        if (completed !== undefined) task.completed = completed;
        if(priority) task.priority = priority.toLowerCase();

        return res.status(200).json(task);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};

exports.deleteTask = (req, res) => {
    try {
        const taskIndex = tasks.findIndex(t => t.id === parseInt(req.params.id));
        if (taskIndex === -1) return res.status(404).json({ message: 'Task not found' });

        tasks.splice(taskIndex, 1);
        return res.status(204).send();
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};
exports.getPriorityTask = (req, res) => {
    try {
        const { level } = req.params;
        const validPriorities = ["low", "medium", "high"];

        if (!validPriorities.includes(level.toLowerCase())) {
            return res.status(400).json({ error: "Invalid priority level. Use 'low', 'medium', or 'high'." });
        }

        const filteredTasks = tasks.filter(task => task.priority.toLowerCase() === level.toLowerCase());
        return res.status(200).json(filteredTasks);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}

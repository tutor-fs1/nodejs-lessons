const fs = require('fs');

const DATABASE_FILE = './src/db/tasks.json';

class TaskDatabase {
  constructor() {
    // Initialize an empty database if it doesn't exist
    if (!fs.existsSync(DATABASE_FILE)) {
      fs.writeFileSync(DATABASE_FILE, JSON.stringify([]));
    }
  }

  // Function to read data from the database
  readData() {
    const data = fs.readFileSync(DATABASE_FILE, 'utf8');
    console.log(data);
    return JSON.parse(data);
  }

  // Function to write data to the database
  writeData(data) {
    fs.writeFileSync(DATABASE_FILE, JSON.stringify(data, null, 2));
  }

  // Function to generate a unique ID for tasks
  generateUniqueId(data) {
    const ids = data.map((item) => item.id);
    let id = 1;
    while (ids.includes(id)) {
      id++;
    }
    return id;
  }

  // Simulated database operations for tasks
  getAllTasks() {
    return this.readData();
  }

  getTaskById(id) {
    const data = this.readData();
    return data.find((task) => task.id === id);
  }

  addTask(task) {
    const data = this.readData();
    const id = this.generateUniqueId(data);
    const newTask = { id, ...task };
    data.push(newTask);
    this.writeData(data);
    return newTask;
  }

  updateTask(id, updatedTask) {
    const data = this.readData();
    const index = data.findIndex((task) => task.id === id);
    if (index !== -1) {
      data[index] = { ...data[index], ...updatedTask };
      this.writeData(data);
      return data[index];
    }
    return null;
  }

  deleteTask(id) {
    const data = this.readData();
    const index = data.findIndex((task) => task.id === id);
    if (index !== -1) {
      const deletedTask = data.splice(index, 1)[0];
      this.writeData(data);
      return deletedTask;
    }
    return null;
  }
}

// const db = new TaskDatabase();
// console.log(db.getAllTasks())

module.exports = TaskDatabase;

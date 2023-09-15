const { program } = require('commander');
const fs = require('fs');
const tasks = require('./src/db/tasks.json');
const { v4: uuidv4 } = require('uuid');

program
  .option('-a, --action [type]', 'Ce actiune sa se desfasoare', 'list')
  .option('-f, --filter [type]', 'Filtru de done sau nu', 'all')
  .option('-n, --name [type]', 'Numele unui task nou', false)
  .option('-d, --done', 'Daca este facut sau nu taskul', false);

program.parse(process.argv);

// console.log(program.opts());
const { action, filter, name, done } = program.opts();

switch (action) {
  case 'list':
    let tasksToDisplay = [...tasks];
    if (filter === 'done') {
      tasksToDisplay = tasksToDisplay.filter((t) => t.done);
    }
    if (filter === 'notdone') {
      tasksToDisplay = tasksToDisplay.filter((t) => !t.done);
    }
    console.table(tasksToDisplay);
    break;

  case 'add':
    if (!name) {
      throw new Error('Trebuie dat un nume taskului nou');
    }
    fs.readFile('./src/db/tasks.json', 'utf8', (err, tasks) => {
      const newTasks = JSON.parse(tasks);
      newTasks.push({ id: uuidv4(), name: name, done: done });
      fs.writeFileSync('./src/db/tasks.json', JSON.stringify(newTasks));
    });
    break;
  default:
    throw new Error('No valid action');
    break;
}


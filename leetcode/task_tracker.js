/*
Problem 2.  Task Tracker
Description:

You have an array of task objects. Each task has a taskName, a completed status (boolean), and a priority (numerical value where lower numbers indicate higher priority). Your tasks are:
find: Identify the first task with a high priority (for example, priority less than 3).
findIndex: Find the index of the first task that is not completed.
reduce: Count how many tasks have been completed.
(forEach): Print all task names.
const tasks = [   { taskName: "Write report", completed: true, priority: 2 },   { taskName: "Attend meeting", completed: false, priority: 3 },   { taskName: "Fix bug", completed: false, priority: 1 },   
{ taskName: "Update website", completed: true, priority: 4 } ];
 
 */

const tasks = [
    { taskName: "Write report", completed: true, priority: 2 },
    { taskName: "Attend meeting", completed: false, priority: 3 },   
    { taskName: "Fix bug", completed: false, priority: 1 },   
    { taskName: "Update website", completed: true, priority: 4 } 
];

const Highprior = tasks.find(task =>{
     return task.priority <3
})
console.log("first task with a hugh priority is: ", Highprior);

const Idxtasknotcomp = tasks.findIndex(task =>{
    return !task.completed
})
console.log("index of the first tasks that is not completed is : ", Idxtasknotcomp);

const Compcount = tasks.reduce((count,task) => task.completed? count+1: count, 0)
console.log("The number of tasks that have been completed are ", Compcount);


console.log("Task List:");
tasks.forEach(task => console.log(task.taskName));


// Your application should collect a name and robot type from the types we list below. For each, it should create a Robot of the type the user chooses, e.g. Larry, Bipedal.

//Given the list of tasks below, your application should then assign the Robot a set of five tasks, all of which complete after a duration that we show in milliseconds.

// Collect a name and robot type from user.
// Instantiate a Robot of the type provided by the user with the name provided by the user
// for example: Bipedal, Larry
// Set up methods on Robot to complete tasks from the provided list

//Robot completes tasks and removes them from the list when they are done (i.e. enough time has passed since starting the task).

const botType = { 
    UNIPEDAL: 'Unipedal',
    BIPEDAL: 'Bipedal',
    QUADRUPEDAL: 'Quadrupedal',
    ARACHNID: 'Arachnid',
    RADIAL: 'Radial',
    AERONAUTICAL: 'Aeronautical'
  };

  const botTasks = [
    {
      // object of the bot tasks
      description: 'do the dishes',
      eta: 1000,
    },{
      description: 'sweep the house',
      eta: 3000,
    },{
      description: 'do the laundry',
      eta: 10000,
    },{
      description: 'take out the recycling',
      eta: 4000,
    },{
      description: 'make a sammich',
      eta: 7000,
    },{
      description: 'mow the lawn',
      eta: 20000,
    },{
      description: 'rake the leaves',
      eta: 18000,
    },{
      description: 'give the dog a bath',
      eta: 14500,
    },{
      description: 'bake some cookies',
      eta: 8000,
    },{
      description: 'wash the car',
      eta: 20000,
    },
  ];

  
 


  class Bot {
    constructor (name, type){
        this.name = name,
        this.type = type,
        this.tasks = [],
        this.active = false,
        this.time = -1;

         console.log(`Bot created: ${name} the ${type}`);
   
  
    };
     printName (){
        console.log(this.name)

    }

     sleepDuration = function (sleepTime) {
     
        console.log("executing sleep")
          // date is rep of current date and time
          // new Date collects current date and time and brings it back to you
         var startDate = new Date();
        //initializing another date to null. tht other thing in a while loop. constantly grabbing the new date and looping till the difference btwn startDate and CurDate is = to sleepTime
        var curDate = null;
    
        //when get current time 
        //collecting current date
        // while current date - start is less than sleep time keeps lopping
        //blocking execution until the time has elapsed then continues
       do { curDate = new Date(); }
        while (curDate - startDate < sleepTime);
     }

     assignTasks (theTasks){
         console.log(theTasks);
         this.tasks = theTasks;
     }
    
     executeTasks (){
       // when start at index 0, i less than the task length, got to the next task
         for(let i = 0; i < this.tasks.length; i++) {
            var taskDescription = botTasks[i].description;
            var taskETA = botTasks[i].eta;
            console.log(`Executing task ${taskDescription}.`)
            this.sleepDuration(taskETA);
            //this.sleep stays until nect task is ready
        }
    }
}


    robot1 = new Bot ("Larry", 'Bipedal');

    robot1.printName ();
    // robot1.sleepDuration(1000);
  



// tasks ive chosen to run
var robotTasks = [0,1,2,3,4];

 
// console.log(robotTasks[1]);
// assigning the robot1 tasks- chose meaningful name for what bot is doing (more readabble)
robot1.assignTasks(robotTasks);

//executing the tasks chosen
robot1.executeTasks();




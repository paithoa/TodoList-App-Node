//require the just installed express app
var express = require('express');
//then we call express
var app = express();

var task = ["buy socks", "practise with nodejs"];
var taskCompleted = [];
var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: true }));
app.set('view engine', 'ejs');
//takes us to the root(/) URL
app.get('/', function(req, res){
   res.render('index',{task:task,taskCompleted:taskCompleted});
});
app.post('/addtask', function (req, res) {
    console.log("called")
    var newTask = req.body.newtask;

//add the new task from the post route into the array
    task.push(newTask);
    console.log(task)
//after adding to the array go back to the root route
    res.redirect("/");
});

app.post('/removetask',function(req,res){

  var taskChecked = req.body.check
  for(i=0;i<taskChecked.length;i++){
    var index =  task.indexOf(taskChecked[i])
    console.log(index)
      task.splice(index,1)
  }
console.log("task finished:" + taskChecked)
console.log(task)
  taskCompleted.push(taskChecked)
  res.redirect("/")
});
//the server is listening on port 3000 for connections
app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
});

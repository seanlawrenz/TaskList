var listart = '<li>', lisdate = '<span class="date">', liassigned = '</span> <span class="assigned">', liend = '</span></li>';

//JSON 
function loadTasks() {
  $.getJSON("js/tasks.json", function(result) {
    $.each(result, function(i, task) {
      $("#tasks").append(listart + task.name + lisdate + task.date + liassigned + task.assigned + liend);
    });
  });
}

function Tasks(name,date,assigned){
	this.name = name;
	this.date = date;
	this.assigned = assigned;
}

Tasks.prototype.addTask = function(){
	$('#tasks').append(listart + this.name + lisdate + this.date + liassigned + this.assigned + liend);
}

$('#newTask').submit(function(e){
	e.preventDefault();
	var name = $('#name').val();
	var date = $('#date').val();
	var assigned = $('#assigned').val();
	var newTask = new Tasks(name, date, assigned);
	newTask.addTask();
});

$(function(){
	loadTasks();
});	
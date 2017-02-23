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

//Form vaildation
function formVailidation(expression, regex){
	return regex.test(expression);
}

$('#newTask').submit(function(e){
	e.preventDefault();
	//Regex
	var lettersNumbersReg = new RegExp("^[A-Z0-9 _]*[A-Z0-9][A-Z0-9 _]*$");
	var dateReg = new RegExp("^\d{1,2}\/\d{1,2}\/\d{4}$");
	var nameReg = new RegExp("/^[a-zA-Z\s]*$/;");
	//values
	var name = $('#name').val();
	var date = $('#date').val();
	var assigned = $('#assigned').val();
	if(formVailidation(name, lettersNumbersReg) === false){
		
	}

	var newTask = new Tasks(name, date, assigned);
	//vaildation


	newTask.addTask();
});

$(function(){
	loadTasks();
});	
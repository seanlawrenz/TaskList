var htmlBuilder = function(obj){
	$.each(obj, function(i, tasks){
	html = '<li>' + tasks.name + ' ' + tasks.date + ' ' + tasks.assigned + '</li>';
	
	$('#test').append(html);	
});
}


$(function(){
 
var tasks =	'[ '+
				'{"name": "Test Task #1", "date": "12/01/2012", "assigned": "John Doe" },'+
				'{"name": "Test Task #2", "date": "12/02/2012", "assigned": "John Doe" },'+
				'{"name": "Test Task #3", "date": "12/03/2012", "assigned": "John Doe" },'+
				'{"name": "Test Task #4", "date": "12/04/2012", "assigned": "John Doe" },'+
				'{"name": "Test Task #5", "date": "12/05/2012", "assigned": "John Doe" },'+
				'{"name": "Test Task #6", "date": "12/06/2012", "assigned": "John Doe" },'+
				'{"name": "Test Task #7", "date": "12/07/2012", "assigned": "John Doe" }'+
			']';

var obj = $.parseJSON(tasks);

htmlBuilder(obj);


$('#newTask').submit(function(e){
	e.preventDefault();
	var name = $('#name').val();
	var date = $('#date').val();
	var asgd = $('#assigned').val();
	obj.push({"name": name, "date": date,"assigned":asgd});
	tasks= JSON.stringify(obj);
	$('#test').empty();
	htmlBuilder(obj);
	$('#name').val()='';
	$('#date').val() ='';
	$('#assigned').val()= '';
});


});
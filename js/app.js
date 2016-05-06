var htmlBuilder = function(obj){
	$.each(obj, function(i, tasks){
		html = '<li>' + tasks.name + '<span class="date"> ' + tasks.date + '</span><span class="assigned"> ' + tasks.assigned + '</span></li>';	
		$('#tasks').append(html);	
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

//Add data to JSON via stringify, 
//It's a little clumsy because I have to empty the data and refill, but I canno use a web server 
$('#newTask').submit(function(e){
	e.preventDefault();
	var name = $('#name').val();
	var date = $('#date').val();
	var asgd = $('#assigned').val();
		if(name != '' && date != ''&& asgd !=''){
			obj.push({"name": name, "date": date,"assigned":asgd});
			tasks= JSON.stringify(obj);
			$('#tasks').empty();
			htmlBuilder(obj);
			$('#name').val('');
			$('#date').val('');
			$('#assigned').val('');	
		}else{
			//I know this is generic 
			alert('Please fill out all forms');
		}
});


});
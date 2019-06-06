// check off specific todos by clicking

$("ul").on("click","li", function() {
	$(this).toggleClass("completed");
	
	});

//click on to delete todo
// we need to use on in order that the new elements added get the same feature
$("ul").on("click","span",function(event){ //event object prevent to trigger other event in the li
	$(this).parent().fadeOut(500,function(){
		$(this).remove()
	});

	event.stopPropagation();
});


$("input[type='text']").keypress(function(event){
if(event.which===13){
	//grab todo text from input
	var todoText= $(this).val();
	//clear the input
	$(this).val("");
	//create a new li and add to ul
	$("ul").append("<li><span>x</span> "+ todoText +"</li>")
}


});
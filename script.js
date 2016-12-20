$("#add-item-btn").click(function() {
	var newItem = $("#new-item").val();

	$("#items").append("<li>" + newItem + "<button class=\"delete\"></button>" + "</li>");
	$("input").val(" ");
});

$(document).on('click', '.delete', function() {
	$(this).parent().remove();
});
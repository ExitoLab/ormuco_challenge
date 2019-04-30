$(document).ready(function() {

	$("#pet_name" ).blur(function() {

		if($('#pet_name').val() == ''){
			alert('The pet name cannot be empty');
			$('#pet_name').focus();
			return false
		}

		$.ajax({
			url: '/check_pet_name',
			type: 'GET',
			dataType: 'json', // returning data as json
			data: {
				    pet_name:$('#pet_name').val()
		          },
			success: function(response){
				console.log(response);
			},
			error: function(error){
				console.log(error);
			}
		});
	});

	$('#register').click(function(event) {
	  /* Act on the event */

	if($('#pet_name').val() == ''){
		alert('The pet name cannot be empty');
		return false
	}

	if($('#pet_favorite_color').val() == ''){
		alert('The pet favorite color cannot be empty');
		return false
	}

	  $.ajax({
		url: '/register_pet', //server url
		type: 'POST',    //passing data as post method
		dataType: 'json', // returning data as json
		data: {pet_name:$('#pet_name').val(),pet_favorite_color:$('#pet_favorite_color').val(),pet_category: $('#pet_category').val()},  //form values
		success:function(json)
		{
		  alert(json.result);  //response from the server given as alert message

		}

	  });
	});
  });
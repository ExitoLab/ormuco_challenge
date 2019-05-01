$(document).ready(function() {

	$("#pet_name" ).blur(function() {
		if($('#pet_name').val() == ''){
			$('#pageMessage').html("The pet name cannot be empty");
			$('#pet_name').focus();
			return false
		}

		$("#search").prop('disabled', false);

		$.ajax({
			url: '/check_pet_name',
			type: 'GET',
			dataType: 'json', // returning data as json
			data: {	pet_name:$('#pet_name').val()},
			beforeSend: function() {
				$("#search").prop('disabled', false);
				$('#pageMessage').html("");
			},
			success: function(response){
				if (response.status == "Found") {
					$('#pageMessage').html("Your name exist in the database, pls select another name");
					$("#register").prop('disabled', true);
					$('#pet_name').focus();
					return false
				}else {
					$("#search").prop('disabled', false);
					$('#pageMessage').html("");
				}
			},
			error: function(error){
				console.log(error);
			}
		});
	});

	$('#register').click(function(event) {

		$('#pageMessage').html("");
		if($('#pet_name').val() == ''){
			$('#pageMessage').html("The pet name cannot be empty");
			$('#pet_name').focus();
			return false
		}

		if($('#pet_favorite_color').val() == ''){
			$('#pageMessage').html("The pet favorite color cannot be empty");
			$('#pet_favorite_color').focus();
			return false
		}

	  $.ajax({
		url: '/register_pet', //server url
		type: 'POST',    //passing data as post method
		dataType: 'json', // returning data as json
		data: {pet_name:$('#pet_name').val(),pet_favorite_color:$('#pet_favorite_color').val(),pet_category: $('#pet_category').val()},  //form values
		success:function(response)
		{
			$('#pageMessage').html("");
			if (response.status == "ok") {
				$("#register input[type=text]").val('');
				$('#pageMessage').html("Your registration was successful");
				$("form").trigger("reset");
			}
		},
		error: function(error){
			console.log(error);
		}
	  });
	});
  });
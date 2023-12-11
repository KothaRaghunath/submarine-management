$(document).ready(function() {
	$("#registerSubmarine1").click(function() {
		var uuid1 = $("#subuuid1").val(UUID());
		var submarine = JSON.stringify({
			submarineName: $("#name1").val()
		})
		$.ajax({
			url: 'http://localhost:9090/registerSubmarine',
			type: 'POST',
			data: submarine,
			async: false,
			contentType: 'application/json',
			success: function(response) {
				// do whatever you want with response
				if (response) {
					submarineRegisteredSuccessfully("name1", "registerSubmarine1", "hideSubmarine1", "success1", "error1", response, "101");
				} else {
					submarineRegistrationFailed("name1", "registerSubmarine1", "hideSubmarine1", "error1", "success1", response);
				}

			},
			error: function(error) {
				console.log(error)
			}
		});


	});
	$("#registerSubmarine2").click(function() {
		$("#subuuid2").val(UUID());
		var submarine = JSON.stringify({
			submarineName: $("#name2").val()
		});
		$.ajax({
			url: 'http://localhost:9090/registerSubmarine',
			type: 'POST',
			data: submarine,
			async: false,
			contentType: 'application/json',
			success: function(response) {
				// do whatever you want with response
				if (response) {
					submarineRegisteredSuccessfully("name2", "registerSubmarine2", "hideSubmarine2", "success2", "error2", response);
				} else {
					submarineRegistrationFailed("name2", "registerSubmarine2", "hideSubmarine2", "error2", "success2" , response);
				}

			},
			error: function(error) {
				console.log(error)
			}
		});

	});
	$("#registerSubmarine3").click(function() {
		$("#subuuid3").val(UUID());
		var submarine = JSON.stringify({
			submarineName: $("#name3").val()
		})
		$.ajax({
			url: 'http://localhost:9090/registerSubmarine',
			type: 'POST',
			data: submarine,
			async: false,
			contentType: 'application/json',
			success: function(response) {
				// do whatever you want with response
				if (response) {
					submarineRegisteredSuccessfully("name3", "registerSubmarine3", "hideSubmarine3", "success3", "error3", response);
				} else {
					submarineRegistrationFailed("name3", "registerSubmarine3", "hideSubmarine3", "error3", "success3", response);
				}

			},
			error: function(error) {
				console.log(error)
			}
		});

	});

	$("#hideSubmarine1,#hideSubmarine101").click(function() {
		var submarine = JSON.stringify({
			submarineName: $("#name1").val()
		})
		$.ajax({
			url: 'http://localhost:9090/hideSubmarine',
			type: 'POST',
			data: submarine,
			async: false,
			contentType: 'application/json',
			success: function(response) {
				// do whatever you want with response
				if (response) {
					submarineHiddenSuccessfully("name1", "registerSubmarine1", "hideSubmarine1", "success1", "error1", response);
				} 

			},
			error: function(error) {
				console.log(error)
			}
		});


	});
	$("#hideSubmarine2").click(function() {
			var submarine = JSON.stringify({
			submarineName: $("#name1").val()
		})
		$.ajax({
			url: 'http://localhost:9090/hideSubmarine',
			type: 'POST',
			data: submarine,
			async: false,
			contentType: 'application/json',
			success: function(response) {
				// do whatever you want with response
				if (response) {
					submarineHiddenSuccessfully("name2", "registerSubmarine2", "hideSubmarine2", "success2", "error2", response);
				} 

			},
			error: function(error) {
				console.log(error)
			}
		});

	});
	$("#hideSubmarine3").click(function() {
		var submarine = JSON.stringify({
			submarineName: $("#name1").val()
		})
		$.ajax({
			url: 'http://localhost:9090/hideSubmarine',
			type: 'POST',
			data: submarine,
			async: false,
			contentType: 'application/json',
			success: function(response) {
				// do whatever you want with response
				if (response) {
					submarineHiddenSuccessfully("name3", "registerSubmarine3", "hideSubmarine3", "success3", "error3", response);
				} 

			},
			error: function(error) {
				console.log(error)
			}
		});


	});
});

function submarineRegisteredSuccessfully(name, registerSubmarine, hideSubmarine, success, error, response, uuid) {
	//console.log("---> submarineRegisteredSuccessfully");
	$("#" + name).prop("disabled", true);
	if (response) {
		 var count = 1;
		$("#" + success).removeClass("hide").addClass("show");
		
		}
	$("#" + error).removeClass("show").addClass("hide");

	$("#" + registerSubmarine).removeClass("show").addClass("hide");
	$("#" + hideSubmarine).removeClass("hide").addClass("show");
	//var uuid = $("#subuuid1").val(UUID());
	
	/*if(response) {
		var template =  '<div id="submarine_'+uuid+'")> <h2>'+$("#"+name).val()+'</h2>'
            + '<input type="hidden" id="subuuid'+uuid+'" value="'+$("#"+name).val()+'"></input>'
            +  '<p><a class="btn btn-primary" id="hideSubmarine'+uuid+'" href="#" role="button">Hide Submarine</a></p></div>'
	 $("#submarines").append(template);
	}*/
	

	
}

function submarineHiddenSuccessfully(name, registerSubmarine, hideSubmarine, success, error, response) {
	$("#" + name).prop("disabled", false);

	if (response) {
		$("#" + success).removeClass("show").addClass("hide");
	}
	$("#" + error).removeClass("show").addClass("hide");
	$("#" + registerSubmarine).removeClass("hide").addClass("show");
	$("#" + hideSubmarine).removeClass("show").addClass("hide");
	$("#submarine_1").hide();
}

function submarineRegistrationFailed(name, registerSubmarine, hideSubmarine, error, success, response) {
	//console.log("---> submarineRegistrationFailed");

	$("#" + name).prop("disabled", false);
	if (response) {
		$("#" + success).removeClass("show").addClass("hide");
	}
	$("#" + error).removeClass("hide").addClass("show");

	$("#" + registerSubmarine).removeClass("hide").addClass("show");
	$("#" + hideSubmarine).removeClass("show").addClass("hide");
}

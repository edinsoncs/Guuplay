$(document).ready(function(){


	function homeHeader() {
		$(".jsOn").click(function(){
			$(".user--Login").slideToggle();
		});

		$(".jsTwoo").click(function(){
			window.location.href = "/register"
		});
		
		$(".cont--header .logo .title").click(function(){
			var $home = "/";
			window.location.href = $home;
		})
	}
	homeHeader();

	var aUrl = window.location.href;
	function sharedLink(data) {
		$(".inputSharedLink").val(data);
	}
	sharedLink(aUrl)

	$(".userForm").submit(function(event){
	event.preventDefault();

		$.ajax({

			url: "/register",
			type: "POST",
			dataType: "JSON",
			contentType: "application/json",
			data: JSON.stringify({
				nombre: $("input[name='nombre']").val(),
				surname: $("input[name='surname']").val(),
				nickname: $("input[name='nick']").val(),
				email: $("input[name='email']").val(),
				password: $("input[name='password']").val()
			}),
		
			success: function(data) {
				console.log(data);
				window.location = "/profile";
			}
		});

	});

	$(".user--Login").submit(function(event){
		event.preventDefault();

		$.ajax({

			url: "/login",
			type: "POST",
			dataType: "JSON",
			contentType: "application/json",
			data: JSON.stringify({

				name: $("input[name='nameLogin']").val(),
				password: $("input[name='passwordLogin']").val()


			}),

			success: function(data){
				console.log(data);
				//window.location = "/";

				if(data.inserted === true) {
						$(".jsError").append("<label>Bienvenido, Disfruta de la musica!!!</label>");
						setTimeout(function(){
							window.location = "/dashboard";
						},1500)
					}

				else if(data.inserted === null || data.inserted === undefined) {
						$(".jsError").append("<label>Ocurrio un error, no se ha podido iniciar session</label>");
					}



				/*setTimeout(function(){
					if(data.inserted === true) {
						window.location = "/";
					}

					else if(data.inserted === null || data.inserted === undefined) {
						$(".jsError").append("<label>Ocurrio un error, no se ha podido iniciar session</label>");
					}

				}, 2000);*/
				
			},
			error: function(err){
				console.log(err);
			}


		});


	});

	
	$(".user--Login").submit(function(event){
		event.preventDefault();

		var n = $("[data-user='name']").val();
		var p = $("[data-user='pass']").val();

		if(n === "" && p == "") {
			$("[data-user='name']").addClass("u--Warning");
			$("[data-user='pass']").addClass("u--Warning");
		}
		else if(n.length > 1 && p.length > 1) {
			$("[data-user='name']").removeClass("u--Warning");
			$("[data-user='pass']").removeClass("u--Warning");
		}


	});





});
(function(){

	var API = "http://api.soundcloud.com/";

	var KEY = "client_id=58488e8291e78780ccb8309c94df92b5";

	var API_BIO = "http://es.wikipedia.org/w/api.php?action=parse&format=json&prop=text&section=0&page=";

	var music = {};

	var v = window.location.search.substring(10); 
	var va = encodeURIComponent(v);
	var value = va.toLowerCase();



	function form() {
		var s = $(".valueSearch").val();
		$(".a").html(a);
		$(".e").append("dasasd");
	}
	

	$.getJSON(API_BIO+value+"&callback=?", bio, false);

	function bio(data){
		var biografia = data.parse.text["*"];

		var bioAdd = $(".detalles").append(biografia);
		
		var bioFind = bioAdd.find('a')

		bioFind.each(function(){
			//remove links yuusong
			$(this).replaceWith($(this).html());
		});

		bioAdd.find('.infobox').remove();
		bioAdd.find('.references').remove();
		bioAdd.find('.reference').remove();
		bioAdd.find('.noprint').remove();	
		bioAdd.find('.mw-ext-cite-error').remove();
		

	}

	/*$.ajax({
		type: "GET",
		url: API_BIO,
		contentType: "application/json; charset=utf-8",
		async: false,
		dataType: "json",
		success: function(data) {
			console.log(data);
		}

	});*/

	//console.log(value);
	
	
	$.getJSON(API+"tracks?q="+value+"&limit=25&"+KEY, search, false);

	
		


	function search(data) {
		
		var cover = data[0].artwork_url.replace("large.jpg", "t500x500.jpg");

		var views = data[0].favoritings_count;

		var gen = data[0].genre;

		var tag = data[0].tag_list;

		$(".cont--Img").append("<img src='"+cover+"'>");

		//$(".details--Cont--Views").append(views);

		//$(".details--Cont--Gen").append(gen);

		//$(".details--Cont--Tag").append(tag);

		for(var i = 0; i < data.length; i++) {
		
			var repro = API+"tracks/"+data[i].id+"/stream?"+KEY;
			
			//<!--<audio controls><source src="+repro+"></audio></div>-->"
			
			$(".cont--Playlist")
				.append("<div class='List--Cont'>"+
						"<li class='List'>"+
							"<figure class='u--Margen contImg'>"+
								"<img class='contImg--Img' src="+data[i].artwork_url+">"+
							"</figure>"+
							"<span class='List--Ico'>"+
								"<i class='el el-play-alt'></i>"+
							"</span>" + 
							"<span class='List--Title'>" + 
								data[i].title.replace("-", "</br>") + 
						"</li>"+
							"</span>" + 
							"<div class='list--Cont'>"+
								"</div><ul class='list--Options'>"+
							"<li class='list'>"+
								"<i class='el el-heart'></i>" + 
							"<span class='list--Views'>"+
								data[i].favoritings_count.toLocaleString()+
							"</span></li><li class='list'>"+
								"<i class='el el-comment'></i>"+
								"</li><li class='list'>"+
								"<i class='el el-video'></i></li>"+
								"<li class='list'>"+
									"<i class='el el-play-alt playinSound' id='jsPLay'></i>"+
								"</li></ul>" + 
								"<audio class='reproductor' preload='none' controls >"+
									"<source src="+repro+"></audio></div>");
				

			/*function view() {
				var v = data[i].favoritings_count;
				
				console.log(v.toLocaleString());
				
			}
			view();
			*/

		}

		
		function player() {
			
			var playIcon = $(".playinSound");
			var next = $(".nextIcon");
			var previus = $(".previusIcon");

			$(playIcon).on('click', function(){
				
				console.log($(this).parent().parent().parent().parent().find('audio'));
			});
		}

		player();


		

	}

	


	
})();

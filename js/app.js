function playHadouken () {
  $('#hadouken')[0].volume = 0.5;
  $('#hadouken')[0].load();
  $('#hadouken')[0].play();
}

$(document).ready(function() {

	$(".ryu-ready").hide();
	$(".ryu-throwing").hide();
	$(".hadouken").hide();
	$(".ryu-cool").hide();

	$("div.ryu-img")
		.mouseenter(function() {
			$("div.ryu-still").hide();
			$(".ryu-ready").show();
		})
	.mouseleave(function() {
			$(".ryu-ready").hide();
			$(".ryu-throwing").hide();
			$(".ryu-cool").hide();
			$(".ryu-still").show();
		});

	$("div.ryu-img")
		.mousedown(function() {
			playHadouken();
			$("div.ryu-still").hide();
			$(".ryu-cool").hide();
			$(".ryu-ready").hide();
			$(".ryu-throwing").show();
			$(".hadouken").finish().show()
				.animate({ "left": "+=520px" }, "slow", 
					function() {
						$(this).hide();
						$(this).css("left", "520px")
				});
		})
		.mouseup(function() {
			$(".ryu-throwing").hide();
			$(".ryu-cool").hide();
			$(".ryu-ready").show();
		});
	$("div.ryu-img").keydown(function(e){
		if(e.keyCode == 88){
			$(".ryu-cool").show();
			}
	});

});



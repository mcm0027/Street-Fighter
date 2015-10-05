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
			$(".ryu-cool").hide();
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

	$("body").keydown(function(e){
		if(e.which == 88){
			$(".ryu-cool").show();
			$("div.ryu-still").hide();
			$(".ryu-ready").hide();
			$(".ryu-throwing").hide();
			}
	}).keyup(function(e){
		if(e.which == 88){
			$(".ryu-cool").hide();
			$("div.ryu-still").show();
		}
	});
});



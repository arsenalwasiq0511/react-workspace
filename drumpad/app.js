var count  = 0;

function playAudio(url) {
	var audio = document.createElement('audio');
	audio.src = url;
	audio.id = count;
	var temp = count;
	if (count >= 20) {
		count = 0;
	}
	else {
		count++;
	}
	$('.audioList').append(audio);
	audio.play();
	audio.onended = function() {
		this.parentNode.removeChild(document.getElementById(temp));
	}
}


$(document).keydown(function(event){
	switch(event.which){
		case 81:
			$("#Q").addClass("pressed");
			playAudio('assets/kick.wav');
			break;
		case 87:
			$("#W").addClass("pressed");
			playAudio('assets/clap.wav');
			break;
		case 69:
			$("#E").addClass("pressed");
			playAudio('assets/snare.wav');
			break;
		case 82:
			$("#R").addClass("pressed");
			playAudio('assets/click.wav');
			break;
		case 65:
			$("#A").addClass("pressed");
			playAudio('assets/closedHH.wav');
			break;
		case 83:
			$("#S").addClass("pressed");
			playAudio('assets/closedHH2.wav');
			break;
		case 68:
			$("#D").addClass("pressed");
			playAudio('assets/openHH.wav');
			break;
		case 70:
			$("#F").addClass("pressed");
			playAudio('assets/crash.wav');
			break;
		default:
			break;
	}
})

$(document).keyup(function(event){
	switch(event.which){
		case 81:
			$("#Q").removeClass("pressed");
			break;
		case 87:
			$("#W").removeClass("pressed");
			break;
		case 69:
			$("#E").removeClass("pressed");
			break;
		case 82:
			$("#R").removeClass("pressed");
			break;
		case 65:
			$("#A").removeClass("pressed");
			break;
		case 83:
			$("#S").removeClass("pressed");
			break;
		case 68:
			$("#D").removeClass("pressed");
			break;
		case 70:
			$("#F").removeClass("pressed");
			break;
		default:
			break;
	}
})
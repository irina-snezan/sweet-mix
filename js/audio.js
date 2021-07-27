document.addEventListener('DOMContentLoaded', function(){
var audio = document.getElementById('audio')
var range = document.getElementById('range');
var playStop = document.getElementById('button_play');
var vol = document.getElementById('volume_btn');
var player = document.getElementById('player');

range.onchange = function(){
	if(this.value == this.min) {
		audio.volume = 0;
		vol.style.backgroundImage = "url(image/icon_2.png)";
		
	}
	else if(this.value == this.max){
		audio.volume = 1;
		vol.style.backgroundImage = "url(image/icon_1.png)";
	}
	else if(this.value = 50) {
		audio.volume = 0.5;
		vol.style.backgroundImage = "url(image/icon_1.png)";
	}
	

}
	playStop.addEventListener("click", function (){
				if (audio.paused == true)
				{
					audio.play();
					playStop.style.backgroundImage = "url(image/icon_stop.png)";
				}
				else
				{   
					audio.pause();
					playStop.style.backgroundImage = "url(image/icon_play.png)";
				}
			}
			,false);
			
	vol.addEventListener("click", function (){
				if (audio.volume > 0)
				{
					audio.volume = 0;
					vol.style.backgroundImage = "url(image/icon_2.png)";
				}
				else
				{   
					audio.volume = 0.5;
					vol.style.backgroundImage = "url(image/icon_1.png)";
				}
			}
			,false);
			
	player.onmouseover = function()
			{ 
				player.style.opacity = '1';
			}
	player.onmouseout = function()
			{
				player.style.opacity = '.5';
			}
})
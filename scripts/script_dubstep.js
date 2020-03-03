var play_pause = 0;
var currentSong = 0;

function play() {
	play_pause++;

	if (play_pause == 1) {
		song.play();
		play_img.src = "images/player/pause.png";

		song.addEventListener("timeupdate", function() {
		var position = song.currentTime / song.duration;
		song_bar_progress.style.width = position * 92 + "%";
		})

		site_bar.style.animation = "faded 1.5s infinite";
		main.style.animation = "faded 1.5s infinite";
	}

	else if (play_pause > 1) {
		play_pause = 0;
		song.pause();
		play_img.src = "images/player/play.png";

		site_bar.style.animation = "paused";
		main.style.animation = "paused";

	}
}

function next() {
	if (currentSong < 9) {
		currentSong++;
		play_img.src = "images/player/pause.png";

		site_bar.style.animation = "faded 1.5s infinite";
		main.style.animation = "faded 1.5s infinite";
	
		if (currentSong == 1) {
			song_name_text.innerHTML = "Crankdat - Redo";
			bg_img.src = "images/posters/crankdat_redo.jpg";
			main_img.src = "images/posters/crankdat_redo.jpg";
			song.src = "audios/dubstep/crankdat_redo.mp3";
			play_img.src = "images/player/pause.png";

			song.addEventListener("timeupdate", function() {
			var position = song.currentTime / song.duration;
			song_bar_progress.style.width = position * 92 + "%";
			})

			play_pause++;
			song.play();
		}

		else if (currentSong == 2) {
			song_name_text.innerHTML = "Knife Party - Bonfire";
			bg_img.src = "images/posters/knife_party_bonfire.jpg";
			main_img.src = "images/posters/knife_party_bonfire.jpg";
			song.src = "audios/dubstep/knife_party_bonfire.mp3";
			play_img.src = "images/player/pause.png";

			song.addEventListener("timeupdate", function() {
			var position = song.currentTime / song.duration;
			song_bar_progress.style.width = position * 92 + "%";
			})
			
			play_pause++;
			song.play();
		}

		else if (currentSong == 3) {
			song_name_text.innerHTML = "N3ÜRØ - VIRUS";
			bg_img.src = "images/posters/n3ÜrØ_virus.jpg";
			main_img.src = "images/posters/n3ÜrØ_virus.jpg";
			song.src = "audios/dubstep/n3ÜrØ_virus.mp3";
			play_img.src = "images/player/pause.png";

			song.addEventListener("timeupdate", function() {
			var position = song.currentTime / song.duration;
			song_bar_progress.style.width = position * 92 + "%";
			})
			
			play_pause++;
			song.play();
		}

		else if (currentSong == 4) {
			song_name_text.innerHTML = "Teminite & MDK - Space Invaders";
			bg_img.src = "images/posters/teminite_mdk_space_invaders.jpg";
			main_img.src = "images/posters/teminite_mdk_space_invaders.jpg";
			song.src = "audios/dubstep/teminite_mdk_space_invaders.mp3";
			play_img.src = "images/player/pause.png";

			song.addEventListener("timeupdate", function() {
			var position = song.currentTime / song.duration;
			song_bar_progress.style.width = position * 92 + "%";
			})
			
			play_pause++;
			song.play();
		}

		else if (currentSong == 5) {
			song_name_text.innerHTML = "Skrillex, MUST DIE! - VIPs";
			bg_img.src = "images/posters/skrillex_must_die_vips.jpg";
			main_img.src = "images/posters/skrillex_must_die_vips.jpg";
			song.src = "audios/dubstep/skrillex_must_die_vips.mp3";
			play_img.src = "images/player/pause.png";

			song.addEventListener("timeupdate", function() {
			var position = song.currentTime / song.duration;
			song_bar_progress.style.width = position * 92 + "%";
			})
			
			play_pause++;
			song.play();
		}

		else if (currentSong == 6) {
			song_name_text.innerHTML = "Knife Party - Sleaze";
			bg_img.src = "images/posters/knife_party_sleaze.jpg";
			main_img.src = "images/posters/knife_party_sleaze.jpg";
			song.src = "audios/dubstep/knife_party_sleaze.mp3";
			play_img.src = "images/player/pause.png";

			song.addEventListener("timeupdate", function() {
			var position = song.currentTime / song.duration;
			song_bar_progress.style.width = position * 92 + "%";
			})
			
			play_pause++;
			song.play();
		}

		else if (currentSong == 7) {
			song_name_text.innerHTML = "Amidst - Voices";
			bg_img.src = "images/posters/amidst_voices.jpg";
			main_img.src = "images/posters/amidst_voices.jpg";
			song.src = "audios/dubstep/amidst_voices.mp3";
			play_img.src = "images/player/pause.png";

			song.addEventListener("timeupdate", function() {
			var position = song.currentTime / song.duration;
			song_bar_progress.style.width = position * 92 + "%";
			})
			
			play_pause++;
			song.play();
		}

		else if (currentSong == 8) {
			song_name_text.innerHTML = "Krewella - One Minute";
			bg_img.src = "images/posters/krewella_one_minute.jpg";
			main_img.src = "images/posters/krewella_one_minute.jpg";
			song.src = "audios/dubstep/krewella_one_minute.mp3";
			play_img.src = "images/player/pause.png";

			song.addEventListener("timeupdate", function() {
			var position = song.currentTime / song.duration;
			song_bar_progress.style.width = position * 92 + "%";
			})
			
			play_pause++;
			song.play();
		}

		else if (currentSong == 9) {
			song_name_text.innerHTML = "Midranger - Castle In The Sky";
			bg_img.src = "images/posters/midranger_castle_in_the_sky.jpg";
			main_img.src = "images/posters/midranger_castle_in_the_sky.jpg";
			song.src = "audios/dubstep/midranger_castle_in_the_sky.mp3";
			play_img.src = "images/player/pause.png";

			song.addEventListener("timeupdate", function() {
			var position = song.currentTime / song.duration;
			song_bar_progress.style.width = position * 92 + "%";
			})
			
			play_pause++;
			song.play();
		}
	}
}

function prev() {
	if (currentSong >= 1) {
		currentSong--;
		play_img.src = "images/player/pause.png";

		site_bar.style.animation = "faded 1.5s infinite";
		main.style.animation = "faded 1.5s infinite";
		
		if (currentSong == 0) {
			song_name_text.innerHTML = "Carbin, Hairitage - Shake It";
			bg_img.src = "images/posters/carbin_hairitage_shake_it.jpg";
			main_img.src = "images/posters/carbin_hairitage_shake_it.jpg";
			song.src = "audios/dubstep/carbin_hairitage_shake_it.mp3";
			play_img.src = "images/player/pause.png";

			song.addEventListener("timeupdate", function() {
			var position = song.currentTime / song.duration;
			song_bar_progress.style.width = position * 92 + "%";
			})
			
			play_pause++;
			song.play();
		}

		else if (currentSong == 1) {
			song_name_text.innerHTML = "Crankdat - Redo";
			bg_img.src = "images/posters/crankdat_redo.jpg";
			main_img.src = "images/posters/crankdat_redo.jpg";
			song.src = "audios/dubstep/crankdat_redo.mp3";
			play_img.src = "images/player/pause.png";

			song.addEventListener("timeupdate", function() {
			var position = song.currentTime / song.duration;
			song_bar_progress.style.width = position * 92 + "%";
			})
			
			play_pause++;
			song.play();
		}

		else if (currentSong == 2) {
			song_name_text.innerHTML = "Knife Party - Bonfire";
			bg_img.src = "images/posters/knife_party_bonfire.jpg";
			main_img.src = "images/posters/knife_party_bonfire.jpg";
			song.src = "audios/dubstep/knife_party_bonfire.mp3";
			play_img.src = "images/player/pause.png";

			song.addEventListener("timeupdate", function() {
			var position = song.currentTime / song.duration;
			song_bar_progress.style.width = position * 92 + "%";
			})
			
			play_pause++;
			song.play();
		}

		else if (currentSong == 3) {
			song_name_text.innerHTML = "N3ÜRØ - VIRUS";
			bg_img.src = "images/posters/n3ÜrØ_virus.jpg";
			main_img.src = "images/posters/n3ÜrØ_virus.jpg";
			song.src = "audios/dubstep/n3ÜrØ_virus.mp3";
			play_img.src = "images/player/pause.png";

			song.addEventListener("timeupdate", function() {
			var position = song.currentTime / song.duration;
			song_bar_progress.style.width = position * 92 + "%";
			})
			
			play_pause++;
			song.play();
		}

		else if (currentSong == 4) {
			song_name_text.innerHTML = "Teminite & MDK - Space Invaders";
			bg_img.src = "images/posters/teminite_mdk_space_invaders.jpg";
			main_img.src = "images/posters/teminite_mdk_space_invaders.jpg";
			song.src = "audios/dubstep/teminite_mdk_space_invaders.mp3";
			play_img.src = "images/player/pause.png";

			song.addEventListener("timeupdate", function() {
			var position = song.currentTime / song.duration;
			song_bar_progress.style.width = position * 92 + "%";
			})
			
			play_pause++;
			song.play();
		}

		else if (currentSong == 5) {
			song_name_text.innerHTML = "Skrillex, MUST DIE! - VIPs";
			bg_img.src = "images/posters/skrillex_must_die_vips.jpg";
			main_img.src = "images/posters/skrillex_must_die_vips.jpg";
			song.src = "audios/dubstep/skrillex_must_die_vips.mp3";
			play_img.src = "images/player/pause.png";

			song.addEventListener("timeupdate", function() {
			var position = song.currentTime / song.duration;
			song_bar_progress.style.width = position * 92 + "%";
			})
			
			play_pause++;
			song.play();
		}

		else if (currentSong == 6) {
			song_name_text.innerHTML = "Knife Party - Sleaze";
			bg_img.src = "images/posters/knife_party_sleaze.jpg";
			main_img.src = "images/posters/knife_party_sleaze.jpg";
			song.src = "audios/dubstep/knife_party_sleaze.mp3";
			play_img.src = "images/player/pause.png";

			song.addEventListener("timeupdate", function() {
			var position = song.currentTime / song.duration;
			song_bar_progress.style.width = position * 92 + "%";
			})
			
			play_pause++;
			song.play();
		}

		else if (currentSong == 7) {
			song_name_text.innerHTML = "Amidst - Voices";
			bg_img.src = "images/posters/amidst_voices.jpg";
			main_img.src = "images/posters/amidst_voices.jpg";
			song.src = "audios/dubstep/amidst_voices.mp3";
			play_img.src = "images/player/pause.png";

			song.addEventListener("timeupdate", function() {
			var position = song.currentTime / song.duration;
			song_bar_progress.style.width = position * 92 + "%";
			})
			
			play_pause++;
			song.play();
		}

		else if (currentSong == 8) {
			song_name_text.innerHTML = "Krewella - One Minute";
			bg_img.src = "images/posters/krewella_one_minute.jpg";
			main_img.src = "images/posters/krewella_one_minute.jpg";
			song.src = "audios/dubstep/krewella_one_minute.mp3";
			play_img.src = "images/player/pause.png";

			song.addEventListener("timeupdate", function() {
			var position = song.currentTime / song.duration;
			song_bar_progress.style.width = position * 92 + "%";
			})
			
			play_pause++;
			song.play();
		}
	}
}

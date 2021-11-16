// btn
const btnPlay = document.querySelector(".play-song");
const btnBack = document.querySelector(".back");
const btnForward = document.querySelector(".forward");
//
const audio = document.querySelector("#audio");
const progress = document.querySelector(".progress");
const playListBox = document.querySelector(".playlist-box");
const songs = document.querySelector(".list-song");
const thumbnailSong = document.querySelector(".thumbnail-song img");
const volume = document.querySelector(".volume-slider"); 
const nameSong = document.querySelector(".info-song .song-name");
const author = document.querySelector(".info-song .author");
const timeSong = document.querySelector(".bar-song .duration-time");
const musicContent = document.querySelector(".music-content");
const progressBar = document.querySelector(".progress-bar");
const currentTimeDisplay = document.querySelector(".current-time");

const listMusic = [
  { song: "Như Cố (Châu Sinh Như Cố OST)", author: "Trương Bích Thần" },
  { song: "Vô Ngu (Châu Sinh Như Cố OST)", author: "Lý Tử Đình (Mimi Lee), Tỉnh Lung (Jing Long)" },
  { song: "Tửu Lệnh 酒令", author: "Man Tiểu Man Đồng Học 慢小蛮同学" },
  { song: "Gió To Thổi 大风吹", author: "Lưu Tích Quân (Sara Liu Xijun), Vương Hách Dã" },
  { song: "Cô Nương Nấu Rượu", author: "Unknown" },
  { song: "Chàng Trai Thôn Đại Điền", author: "Vương Ngọc Manh" },
  { song: "Cô Đơn Mới Nói Yêu", author: "Tôn Lộ" },
  { song: "Dương Châu Cô Nương", author: "Song Sênh" },
  { song: "Good Luck Cover", author: "Phùng Đề Mặc" },
  { song: "Một Khúc Tương Tư", author: "Bắc Đảo Thi" },
  { song: "Một Giấc Mơ Cũ", author: "A Du Du" },
  { song: "Mạc Vấn Quy Kỳ", author: "Tưởng Tuyết Nhi" },
  { song: "Mộ Hạ", author: "Đẳng Thập Ma Quân" },
  { song: "Nhĩ Nhược Tam Đông", author: "A Du Du" },
  { song: "Ngu Hề Thán", author: "Văn Nhân Thính Thư" },
  { song: "Người Nhạc Sĩ", author: "Hải Lai A Mộc" },
  { song: "Quảng Hàn Cung", author: "Phạn Tư Tư" },
  { song: "Quảng Hàn Dao", author: "Y Cách Tái Thính" },
  { song: "Quan Sơn Tửu", author: "Đẳng Thập Ma Quân" },
  { song: "Hoàng Mai Hí", author: "Mộ Dung Hiểu Hiểu" },
  { song: "Nhân Vi Tình Thán", author: "A Du Du" },
  { song: "Thiên Hạ", author: "Đẳng Thập Ma Quân" },
  { song: "Tay Trái Chỉ Trăng", author: "Tát Đỉnh Đỉnh" },
  { song: "Tuyệt Thế Vũ Cơ", author: "Trương Hiểu Hàm" },
  { song: "Tử Cửu Hồi Môn Ức", author: "Đẳng Thập Ma Quân" },
  { song: "Thần Thiếp Cáo Lui", author: "Loan Âm Xã" },
  { song: "Thần Thoại", author: "Thành Long (Jackie Chan), Kim Hee Sun" },
  { song: "Vết Thương Đẹp Nhất", author: "Tiểu Ngư Nhi" },
  { song: "Xích Linh", author: "Đẳng Thập Ma Quân" },
  { song: "Yến Vô Hiết", author: "Tưởng Tuyết Nhi" }
];

class UI {
  constructor() {
    this.songIndex = 0;
  }
  // get duration
  getDuration(music) {
    return new Promise(function (resolve) {
      music.addEventListener("loadedmetadata", function () {
        const time = formatTime(music.duration);

        resolve(time);
      });
    });
  }
  // set list song
  async setSongs() {
    songs.innerHTML = "";

    for (let i = 0; i < listMusic.length; i++) {
      const music = new Audio(`src/music/${listMusic[i].song}.mp3`);
      const time = await this.getDuration(music);
      // const time = { time: await this.getDuration(music) };
      // listMusic[i] = { ...listMusic[i], ...time };

      songs.insertAdjacentHTML( 
        "beforeend",
        `<div class="song-info">
            <div class="left">
                <span class="name-song">${listMusic[i].song}</span>
                <span class="author">${listMusic[i].author}</span>
            </div>
            <div class="right">
                <span class="minutes">${time}</span>
            </div>
          </div>`
      );
    }
  }
  // load detail song when page loaded
  loadSong(music) {
    audio.src = `src/music/${music.song}.mp3`;

    this.getDuration(audio).then((time) => {
      // name file ${music.song} or để mặc định là default.jpg
      thumbnailSong.src = `src/images/${music.song}.jpg`;
      nameSong.textContent = music.song;
      author.textContent = music.author;
      timeSong.textContent = time;
      thumbnailSong.classList.add("rotate-ani");
    });
  }
  // play song
  playSong() {
    musicContent.classList.add("playing");
    thumbnailSong.style.animationPlayState = "running";
    btnPlay.querySelector(".fa").classList.remove("fa-play");
    btnPlay.querySelector(".fa").classList.add("fa-pause");
    audio.play();
  }
  // pause song
  pauseSong() {
    musicContent.classList.remove("playing");
    thumbnailSong.style.animationPlayState = "paused";
    btnPlay.querySelector(".fa").classList.add("fa-play");
    btnPlay.querySelector(".fa").classList.remove("fa-pause");

    audio.pause();
  }
  // prev song
  prevSong() {
    this.songIndex--;

    if (this.songIndex < 0) {
      this.songIndex = listMusic.length - 1;
    }

    this.loadSong(listMusic[this.songIndex]);
  }
  // prev song
  nextSong() {
    this.songIndex++;

    if (this.songIndex > listMusic.length - 1) {
      this.songIndex = 0;
    }

    this.loadSong(listMusic[this.songIndex]);
  }
  // update progress
  updateProgress(e) {
    const { currentTime, duration } = e.srcElement;
    const percentWidth = (currentTime / duration) * 100;
    progressBar.style.width = `${percentWidth}%`;
    const time = formatTime(currentTime);

    currentTimeDisplay.textContent = time;
  }
  // set progress
  setProgress(e) {
    const width = e.offsetX;
    const progress = e.currentTarget;
    const progressBarWidth = (width / progress.clientWidth) * 100;
    progressBar.style.width = `${progressBarWidth}%`;

    let { duration } = audio;
    audio.currentTime = (width * duration) / progress.clientWidth;
  }
  // select song in playlist
  selectSong(e) {
    const target = e.target;

    const nameSong = target.querySelector(".name-song").textContent;
    const song = listMusic.find((audio) => audio.song === nameSong);

    this.loadSong(song);
    this.playSong();
  }
  setVolume() { 
    // Set âm lượng
    audio.volume = volume.value / 100;
  } 
}

document.addEventListener("DOMContentLoaded", eventListeners);

function eventListeners() {
  const ui = new UI();

  // load song
  ui.loadSong(listMusic[ui.songIndex]);
  // set list song
  ui.setSongs();
  // play/pause song
  btnPlay.addEventListener("click", function () {
    if (musicContent.classList.contains("playing")) {
      ui.pauseSong();
    } else {
      ui.playSong();
    }
  });
  // update progress
  audio.addEventListener("timeupdate", function (e) {
    ui.updateProgress(e);
    ui.setVolume();
  });
  // set progress
  progress.addEventListener("click", function (e) {
    ui.setProgress(e);
  });
  // previous song
  btnBack.addEventListener("click", function () {
    ui.prevSong();
    ui.playSong();
  });
  // forward song
  btnForward.addEventListener("click", function () {
    ui.nextSong();
    ui.playSong();
  });
  // end song
  audio.addEventListener("ended", function () {
    ui.nextSong();
    ui.playSong();
  });
  // select song
  songs.addEventListener("click", function (e) {
    ui.selectSong(e);
  });
}

function formatTime(sec_num) {
  let hours = Math.floor(sec_num / 3600);
  let minutes = Math.floor((sec_num - hours * 3600) / 60);
  let seconds = Math.floor(sec_num - hours * 3600 - minutes * 60);

  hours = hours < 10 ? (hours > 0 ? "0" + hours : 0) : hours;

  if (minutes < 10) {
    minutes = "0" + minutes;
  }
  if (seconds < 10) {
    seconds = "0" + seconds;
  }
  return (hours !== 0 ? hours + ":" : "") + minutes + ":" + seconds;
}
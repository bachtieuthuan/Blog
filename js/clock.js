//Live Clock
setInterval(function getTime(){
    const today = new Date();
    const day = today.getDate();//lấy ngày 1 - 31
    const month = today.getMonth() + 1;// lấy tháng 0 - 11
    const year = today.getFullYear();// lấy năm
    const h = today.getHours();// lấy giờ
    const m = today.getMinutes();// lấy phút
    const s = today. getSeconds();// lấy giây
    const liveTime = formatTimeClock(h) + ":" + formatTimeClock(m) + ":" + formatTimeClock(s) + "(" + ampm(h) + ")"
    + " " + weeks() + " " + " " + formatTimeClock(day) + "/" + formatTimeClock(month) + "/" + year;
    document.querySelector(".liveTime").innerHTML = liveTime;//in dữ liệu ra HTML
},1000);
//định dạng thứ trong tuần
function weeks(){
    let day;
    switch (new Date().getDay()) {
        case 0:
          day = "Sunday";
          break;
        case 1:
          day = "Monday";
          break;
        case 2:
          day = "Tuesday";
          break;
        case 3:
          day = "Wednesday";
          break;
        case 4:
          day = "Thursday";
          break;
        case 5:
          day = "Friday";
          break;
        case  6:
          day = "Saturday";
      }
    return day;
};
// định dạng AM/PM
function ampm(i){
    let n;
    if(i < 12){
        n = "AM";
    }
    else
        n = "PM";
    return n;
};
//định dạng giờ thêm số 0 trước (nếu cần)
function formatTimeClock(i){
    let n = i;
    if(i<10){
        n = "0" + i;
    }
    return n;
};





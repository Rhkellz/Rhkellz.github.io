let date
let day

function time() {
   date = new Date()
   day = date.getDay()
}

function twoDigits(num) {
  return num.toString().padStart(2, '0')
}

function timer(x) {
  for (let i = 0; i < x.length; i++) {
    if (date < x[i].start) {
      return [x[i].start - date, x[i+1].start - x[i].end]
      }
    if (date < x[i].end) {
      return [x[i].end - date, x[i].end - x[i].start]
    }
  }
  return -1
}

function updateTimer() {
  //date = new Date().setHours(13, 0, 0, 0)
  let timeleft
  let otimeleft
  var monthDate = 24//date.getDate()
  var month = date.getMonth()
  let periods
  let operiods
  let percent
  let opercent
  let typeDay
  let sStart = new Date().setHours(8, 30, 0, 0)
  let sEnd
  fetch('./JSONN/csvjson.json')
      .then(function(resp) {
        return resp.json()
      })
      .then(function(data) {
        for (var i = 0; i < data.length; i++) {
          if (data[i].month == month) {
            if (data[i].day == monthDate) {
              typeDay = data[i].typeday
               console.log(typeDay)
              switch (typeDay) {
                case 1:
                  periods = [
                    {start: new Date().setHours(8, 30, 0, 0), end: new Date().setHours(9, 3, 0, 0)},
                    {start: new Date().setHours(9, 8, 0, 0), end: new Date().setHours(9, 41, 0, 0)},
                    {start: new Date().setHours(9, 46, 0, 0), end: new Date().setHours(10, 19, 0, 0)},
                    {start: new Date().setHours(10, 24, 0, 0), end: new Date().setHours(10, 57, 0, 0)},
                    {start: new Date().setHours(11, 2, 0, 0), end: new Date().setHours(11, 35, 0, 0)},
                    {start: new Date().setHours(11, 40, 0, 0), end: new Date().setHours(12, 13, 0, 0)},
                    {start: new Date().setHours(12, 18, 0, 0), end: new Date().setHours(12, 51, 0, 0)},
                    {start: new Date().setHours(12, 56, 0, 0), end: new Date().setHours(13, 29, 0, 0)},
                    {start: new Date().setHours(13, 34, 0, 0), end: new Date().setHours(14, 7, 0, 0)}, 
                    {start: new Date().setHours(14, 12, 0, 0), end: new Date().setHours(14, 12, 0, 0)}
                  ]
                  document.body.style.backgroundColor = "black"
                  timeleft = timer(periods)[0]
                  otimeleft = -1
                  sEnd = new Date().setHours(14, 7, 0, 0)
                  percent = Math.floor(100 - (timer(periods)[0] / timer(periods)[1]) * 100)
                  break
                case 2:
                  periods = [
                    {start: new Date().setHours(8, 30, 0, 0), end: new Date().setHours(9, 55, 0, 0)},
                    {start: new Date().setHours(10, 5, 0, 0), end: new Date().setHours(11, 30, 0, 0)},
                    {start: new Date().setHours(11, 40, 0, 0), end: new Date().setHours(13, 5, 0, 0)},
                    {start: new Date().setHours(13, 15, 0, 0), end: new Date().setHours(13, 55, 0, 0)},
                    {start: new Date().setHours(14, 5, 0, 0), end: new Date().setHours(15, 35, 0, 0)},
                    {start: new Date().setHours(15, 45, 0, 0), end: new Date().setHours(16, 0, 0, 0)}//fixes a 2:07 bug because i dont know how my code works 
                  ]
                  operiods = [
                    {start: new Date().setHours(11, 40, 0, 0), end: new Date().setHours(12, 20, 0, 0)},
                    {start: new Date().setHours(12, 20, 0, 0), end: new Date().setHours(12, 30, 0, 0)},//fix for bug i dont understand, may cause issues
                    {start: new Date().setHours(12, 30, 0, 0), end: new Date().setHours(13, 55, 0, 0)}
                  ]
                  document.body.style.backgroundColor = "#ff7000"
                  timeleft = timer(periods)[0]
                  otimeleft = timer(operiods)[0]
                  sEnd = new Date().setHours(15, 35, 0, 0)
                  percent = Math.floor(100 - (timer(periods)[0] / timer(periods)[1]) * 100)
                  opercent = Math.floor(100 - (timer(operiods)[0] / timer(operiods)[1]) * 100)
                  break
                case 3:
                  periods = [
                    {start: new Date().setHours(8, 30, 0, 0), end: new Date().setHours(9, 55, 0, 0)},
                    {start: new Date().setHours(10, 5, 0, 0), end: new Date().setHours(11, 30, 0, 0)},
                    {start: new Date().setHours(11, 40, 0, 0), end: new Date().setHours(13, 5, 0, 0)},
                    {start: new Date().setHours(13, 15, 0, 0), end: new Date().setHours(13, 55, 0, 0)},
                    {start: new Date().setHours(14, 5, 0, 0), end: new Date().setHours(15, 35, 0, 0)},
                    {start: new Date().setHours(15, 45, 0, 0), end: new Date().setHours(16, 0, 0, 0)}//fixes a 2:07 bug because i dont know how my code works
                  ]
                  operiods = [
                    {start: new Date().setHours(11, 40, 0, 0), end: new Date().setHours(12, 20, 0, 0)},
                    {start: new Date().setHours(12, 20, 0, 0), end: new Date().setHours(12, 30, 0, 0)},
                    {start: new Date().setHours(12, 30, 0, 0), end: new Date().setHours(13, 55, 0, 0)}
                  ]
                  document.body.style.backgroundColor = "#125e70"
                  timeleft = timer(periods)[0]
                  otimeleft = timer(operiods)[0]
                  sEnd = new Date().setHours(15, 35, 0, 0)
                  percent = Math.floor(100 - (timer(periods)[0] / timer(periods)[1]) * 100)
                  opercent = Math.floor(100 - (timer(operiods)[0] / timer(operiods)[1]) * 100)
                  break
                case 4:
                  document.body.style.backgroundColor = "gray"
                case 5:
                  periods = [
                    {start: new Date().setHours(8, 30, 0, 0), end: new Date().setHours(12, 0, 0, 0)}
                  ]
                  document.body.style.backgroundColor = "purple"
                  timeleft = timer(periods)[0]
                  otimeleft = -1
                  sEnd = new Date().setHours(12, 0, 0, 0)
                  percent = Math.floor(100 - (timer(periods)[0] / timer(periods)[1]) * 100)
                default:
                  timeleft = -1
                  otimeleft = -1
                  document.body.style.backgroundColor = "gray"
                }
              var obar = new Date().setHours(11, 40, 0, 0)
              
              const minutes = Math.floor(timeleft / 1000 / 60)
              const seconds = Math.floor(timeleft / 1000) % 60
              const ominutes = Math.floor(otimeleft / 1000 / 60)
              const oseconds = Math.floor(otimeleft / 1000) % 60
            
              if (otimeleft == -1 || date < obar || otimeleft == null) {
                document.getElementById("clock").innerText =`${twoDigits(minutes)}:${twoDigits(seconds)}` + " left " + percent + "%"
              } else {
                document.getElementById("clock").innerText =`${twoDigits(minutes)}:${twoDigits(seconds)}` + " left " + percent + "%"; document.getElementById("percent").innerText = `${twoDigits(ominutes)}:${twoDigits(oseconds)}` + " left " + opercent + "%"
              }
              
            
              if (date >= sEnd || date <= sStart || timeleft == -1) { 
                document.getElementById("clock").innerText = "School's over"
              } 
              if (typeDay == 4) {
                document.getElementById("clock").innerText = "No School"
              }
            }
          }
        }
      })
}

function updateUpdateTimer() {
   setInterval(time, 10)
   setInterval(updateTimer, 10)
}

window.addEventListener('load', updateUpdateTimer)

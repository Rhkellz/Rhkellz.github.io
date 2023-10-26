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
      console.log(i)
      return [x[i].start - date, x[i].start - x[i-1].end]
      }
    if (date < x[i].end) {
      return [x[i].end - date, x[i].end - x[i].start]
    }
  }
  return -1
}

function updateTimer() {
  let timeleft
  let otimeleft
  var monthDate = date.getDate()
  var month = date.getMonth()
  let periods
  let operiods
  let percent
  let opercent
  let typeDay
  let sStart = new Date().setHours(8, 30, 0, 0)
  let sEnd
  let obar = new Date().setHours(11, 40, 0, 0)
  fetch('./data/monthschedule.json')
      .then(function(resp) {
        return resp.json()
      })
      .then(function(data) {
        for (var i = 0; i < data.length; i++) {
          if (data[i].month == month) {
            if (data[i].day == monthDate) {
              typeDay = data[i].typeday
              switch (typeDay) {
                case 1://wildkit monday
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
                case 2://orange day
                  periods = [
                    {start: new Date().setHours(8, 30, 0, 0), end: new Date().setHours(9, 55, 0, 0)},
                    {start: new Date().setHours(10, 5, 0, 0), end: new Date().setHours(11, 30, 0, 0)},
                    {start: new Date().setHours(11, 40, 0, 0), end: new Date().setHours(13, 5, 0, 0)},
                    {start: new Date().setHours(13, 15, 0, 0), end: new Date().setHours(13, 55, 0, 0)},
                    {start: new Date().setHours(14, 5, 0, 0), end: new Date().setHours(15, 35, 0, 0)},
                    {start: new Date().setHours(15, 35, 0, 0), end: new Date().setHours(15, 35, 0, 0)}//fixes a 2:07 bug because i dont know how my code works 
                  ]
                  operiods = [
                    {start: new Date().setHours(11, 40, 0, 0), end: new Date().setHours(12, 20, 0, 0)},
                    {start: new Date().setHours(12, 20, 0, 0), end: new Date().setHours(12, 30, 0, 0)},//fix for bug i dont understand, may cause issues
                    {start: new Date().setHours(12, 30, 0, 0), end: new Date().setHours(13, 55, 0, 0)}
                  ]
                  document.body.style.backgroundColor = "#ff7000"
                  timeleft = timer(periods)[0]
                  if (date > obar) {
                    otimeleft = -1
                  } else {
                    otimeleft = timer(operiods)[0]
                    opercent = Math.floor(100 - (timer(operiods)[0] / timer(operiods)[1]) * 100)
                  }
                  sEnd = new Date().setHours(15, 35, 0, 0)
                  percent = Math.floor(100 - (timer(periods)[0] / timer(periods)[1]) * 100)
                  break
                case 3://blue days
                  periods = [
                    {start: new Date().setHours(8, 30, 0, 0), end: new Date().setHours(9, 55, 0, 0)},
                    {start: new Date().setHours(10, 5, 0, 0), end: new Date().setHours(11, 30, 0, 0)},
                    {start: new Date().setHours(11, 40, 0, 0), end: new Date().setHours(13, 5, 0, 0)},
                    {start: new Date().setHours(13, 15, 0, 0), end: new Date().setHours(13, 55, 0, 0)},
                    {start: new Date().setHours(14, 5, 0, 0), end: new Date().setHours(15, 35, 0, 0)},
                    {start: new Date().setHours(15, 35, 0, 0), end: new Date().setHours(15, 35, 0, 0)}//fixes a 2:07 bug because i dont know how my code works 
                  ]
                  operiods = [
                    {start: new Date().setHours(11, 40, 0, 0), end: new Date().setHours(12, 20, 0, 0)},
                    {start: new Date().setHours(12, 20, 0, 0), end: new Date().setHours(12, 30, 0, 0)},
                    {start: new Date().setHours(12, 30, 0, 0), end: new Date().setHours(13, 55, 0, 0)}
                  ]
                  document.body.style.backgroundColor = "#125e70"
                  timeleft = timer(periods)[0]
                  if (date < obar) {
                    otimeleft = -1
                  } else {
                    otimeleft = timer(operiods)[0]
                    opercent = Math.floor(100 - (timer(operiods)[0] / timer(operiods)[1]) * 100)
                  }
                  sEnd = new Date().setHours(15, 35, 0, 0)
                  percent = Math.floor(100 - (timer(periods)[0] / timer(periods)[1]) * 100)
                  break
                case 4://no school
                  document.body.style.backgroundColor = "gray"
                  break
                case 5://futures day
                  periods = [
                    {start: new Date().setHours(8, 0, 0, 0), end: new Date().setHours(12, 0, 0, 0)}
                  ]
                  document.body.style.backgroundColor = "purple"
                  timeleft = timer(periods)[0]
                  otimeleft = -1
                  sEnd = new Date().setHours(12, 0, 0, 0)
                  percent = Math.floor(100 - (timer(periods)[0] / timer(periods)[1]) * 100)
                  break
                default:
                  timeleft = -1
                  otimeleft = -1
                  document.body.style.backgroundColor = "gray"
                }
              
              const minutes = Math.floor(timeleft / 1000 / 60)
              const seconds = Math.floor(timeleft / 1000) % 60
              const ominutes = Math.floor(otimeleft / 1000 / 60)
              const oseconds = Math.floor(otimeleft / 1000) % 60

              const dayTotal = periods[periods.length - 1].end - periods[0].start
              const dayCompleted = periods[periods.length - 1].end - date
              const dayPercent = Math.floor(100 - (dayCompleted / dayTotal) * 100)

              if (otimeleft == -1 || otimeleft == null) {
                document.getElementById("clock").innerText =`${twoDigits(minutes)}:${twoDigits(seconds)}` + " left " + percent + "%"
              } else {
                document.getElementById("clock").innerText =`${twoDigits(minutes)}:${twoDigits(seconds)}` + " left " + percent + "%"; document.getElementById("percent").innerText = `${twoDigits(ominutes)}:${twoDigits(oseconds)}` + " left " + opercent + "%"
              }
              
            
              if (date >= sEnd || timeleft == -1) { 
                document.getElementById("clock").innerText = "School's over"
              } else if (date <= sStart) {
                document.getElementById("clock").innerText = "School hasn't started"
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

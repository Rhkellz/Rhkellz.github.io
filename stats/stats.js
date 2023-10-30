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
      return [x[i].start - date, x[i].start - x[i-1].end]
      }
    if (date < x[i].end) {
      return [x[i].end - date, x[i].end - x[i].start]
    }
  }
  return -1
}

function getPeriods(x) {
    switch (x) {
      case 1:
        return [
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
      case 2:
        return [
          {start: new Date().setHours(8, 30, 0, 0), end: new Date().setHours(9, 55, 0, 0)},
          {start: new Date().setHours(10, 5, 0, 0), end: new Date().setHours(11, 30, 0, 0)},
          {start: new Date().setHours(11, 40, 0, 0), end: new Date().setHours(13, 5, 0, 0)},
          {start: new Date().setHours(13, 15, 0, 0), end: new Date().setHours(13, 55, 0, 0)},
          {start: new Date().setHours(14, 5, 0, 0), end: new Date().setHours(15, 35, 0, 0)},
          {start: new Date().setHours(15, 35, 0, 0), end: new Date().setHours(15, 35, 0, 0)}//fixes a 2:07 bug because i dont know how my code works 
        ]
        
      case 3:
        return [
          {start: new Date().setHours(8, 30, 0, 0), end: new Date().setHours(9, 55, 0, 0)},
          {start: new Date().setHours(10, 5, 0, 0), end: new Date().setHours(11, 30, 0, 0)},
          {start: new Date().setHours(11, 40, 0, 0), end: new Date().setHours(13, 5, 0, 0)},
          {start: new Date().setHours(13, 15, 0, 0), end: new Date().setHours(13, 55, 0, 0)},
          {start: new Date().setHours(14, 5, 0, 0), end: new Date().setHours(15, 35, 0, 0)},
          {start: new Date().setHours(15, 35, 0, 0), end: new Date().setHours(15, 35, 0, 0)}//fixes a 2:07 bug because i dont know how my code works 
        ]
      case 5:
        return [{start: new Date().setHours(8, 0, 0, 0), end: new Date().setHours(12, 0, 0, 0)}]
      default:
        break
    }
}

function updateTimer() {
  let timeleft
  let otimeleft
  var monthDate = date.getDate()
  var month = date.getMonth()
  let periods
  let operiods
  let percent
  let typeDay
  let sEnd
  let currentDay
  let obar = new Date().setHours(11, 40, 0, 0)
  fetch('/data/monthschedule.json')
      .then(function(resp) {
        return resp.json()
      })
      .then(function(data) {
        for (var i = 0; i < data.length; i++) {
          if (data[i].month == month) {
            if (data[i].day == monthDate) {
                currentDay = i
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
                    sEnd = new Date().setHours(14, 7, 0, 0)
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
                    document.body.style.backgroundColor = "#ff7000"
                    sEnd = new Date().setHours(15, 35, 0, 0)
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
                    document.body.style.backgroundColor = "#125e70"
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
                
                let dayTotal = periods[periods.length - 1].end - periods[0].start;
                let dayCompleted = 0
                if (date > periods[periods.length - 1].end) {
                    dayCompleted = periods[periods.length - 1].end - periods[0].start
                } else {
                    dayCompleted = periods[periods.length - 1].end - date
                }
                let dayPercent = Math.floor(100 - (dayCompleted / dayTotal) * 100)
                document.getElementById("dayPercent").innerText = dayPercent + "% school day completed"
                }
            
                let weekStart
                let weekEnd

                for (var j = currentDay; j >= 0; j--) {
                   if (j >= date.getDate()) {
                       if (data[j].typeday == 4) {
                           if (data[j+1].typeday == 1 || data[j+1].typedaay == 2 || data[j+1].typeday == 3) {
                               weekStart = j+1
                           }
                       }
                   }
                }
                for (var h = weekStart; h < weekStart + 10; h++) {//10 is  problem
                    if (data[h].typeday == 4) {
                        if (data[h+1].typeday == 4 && (data[h-1].typeday == 1 || data[h-1].typeday == 2 || data[h-1].typeday == 3)) {
                            weekEnd = h-1
                            let weekTotal = 0
                            let weekCompleted = 0
                            for (var l = weekStart; l <= weekEnd; l++) {
                                weekTotal += getPeriods(data[l].typeday)[getPeriods(data[l].typeday).length-1].end - getPeriods(data[l].typeday)[0].start
                            }
                            for (var k = weekStart; k <= currentDay; k++) {
                                weekCompleted += getPeriods(data[k].typeday)[getPeriods(data[k].typeday).length-1].end - getPeriods(data[k].typeday)[0].start
                            }
                            if (date > getPeriods(data[currentDay].typeday)[getPeriods(data[currentDay].typeday).length-1].end) {
                                weekCompleted += getPeriods(data[currentDay].typeday)[getPeriods(data[currentDay].typeday).length-1].end - getPeriods(data[currentDay].typeday)[0].start
                            } else {
                                weekCompleted += getPeriods(data[currentDay].typeday)[getPeriods(data[currentDay].typeday).length-1].end - new Date()
                            }
                            //console.log(weekCompleted)
                            let weekPercent = Math.floor((weekCompleted / weekTotal) * 100)
                            document.getElementById("weekPercent").innerText = "a"//weekPercent + "% school week completed"
                        }
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

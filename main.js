let date
let day

function time() {
   date = new Date()
   day = date.getDay()
}

function twoDigits(num) {
  return num.toString().padStart(2, "0")
}

function timer(x) {
  //date = new Date().setHours(11, 50, 0, 0)
  for (let i = 0; i < x.length; i++) {
    if (date < x[i].start) {
      if (date > x[i-1].end) {
        return [x[i].start - date, x[i].start - x[i-1].end, "Passing Period"]
      } else {
        return [x[i].start - date, x[i].start - x[i-1].end, x[i].name]
      }
      }
    if (date < x[i].end) {
      return [x[i].end - date, x[i].end - x[i].start, x[i].name]
    }
  }
  return -1
}

function getPeriods(x) {
    switch (x) {
      case 1:
        return [
          {start: new Date().setHours(8, 30, 0, 0), end: new Date().setHours(9, 3, 0, 0), name: "Block 1"},
          {start: new Date().setHours(9, 8, 0, 0), end: new Date().setHours(9, 41, 0, 0), name: "Block 2"},
          {start: new Date().setHours(9, 46, 0, 0), end: new Date().setHours(10, 19, 0, 0), name: "Block 3"},
          {start: new Date().setHours(10, 24, 0, 0), end: new Date().setHours(10, 57, 0, 0), name: "Block 4"},
          {start: new Date().setHours(11, 2, 0, 0), end: new Date().setHours(11, 35, 0, 0), name: "Block 5A / Lunch 1"},
          {start: new Date().setHours(11, 40, 0, 0), end: new Date().setHours(12, 13, 0, 0), name: "Block 5B / Lunch 2"},
          {start: new Date().setHours(12, 18, 0, 0), end: new Date().setHours(12, 51, 0, 0), name: "Block 6"},
          {start: new Date().setHours(12, 56, 0, 0), end: new Date().setHours(13, 29, 0, 0), name: "Block 7"},
          {start: new Date().setHours(13, 34, 0, 0), end: new Date().setHours(14, 7, 0, 0), name: "Block 8"}, 
          {start: new Date().setHours(14, 7, 0, 0), end: new Date().setHours(14, 7, 0, 0), name: "Block 8"}
        ]
      case 2:
        return [
          {start: new Date().setHours(8, 30, 0, 0), end: new Date().setHours(9, 55, 0, 0), name: "Block 1"},
          {start: new Date().setHours(10, 5, 0, 0), end: new Date().setHours(11, 30, 0, 0), name: "Block 3"},
          {start: new Date().setHours(11, 40, 0, 0), end: new Date().setHours(13, 5, 0, 0), name: "Block 5A"},
          {start: new Date().setHours(13, 15, 0, 0), end: new Date().setHours(13, 55, 0, 0), name: "Lunch 2"},
          {start: new Date().setHours(14, 5, 0, 0), end: new Date().setHours(15, 35, 0, 0), name: "Block 7"},
          //{start: new Date().setHours(15, 35, 0, 0), end: new Date().setHours(15, 35, 0, 0)}//fixes a 2:07 bug because i dont know how my code works 
        ]
        
      case 3:
        return [
          {start: new Date().setHours(8, 30, 0, 0), end: new Date().setHours(9, 55, 0, 0), name: "Block 2"},
          {start: new Date().setHours(10, 5, 0, 0), end: new Date().setHours(11, 30, 0, 0), name: "Block 4"},
          {start: new Date().setHours(11, 40, 0, 0), end: new Date().setHours(13, 5, 0, 0), name: "Block 6A"},
          {start: new Date().setHours(13, 15, 0, 0), end: new Date().setHours(13, 55, 0, 0), name: "Lunch 2"},
          {start: new Date().setHours(14, 5, 0, 0), end: new Date().setHours(15, 35, 0, 0), name: "Block 8"},
          //{start: new Date().setHours(15, 35, 0, 0), end: new Date().setHours(15, 35, 0, 0)}//fixes a 2:07 bug because i dont know how my code works 
        ]
      case 4:
        return [
           {start: new Date().setHours(8, 30, 0, 0), end: new Date().setHours(8, 30, 0, 0), name: "Block 2"},
           {start: new Date().setHours(8, 30, 0, 0), end: new Date().setHours(8, 30, 0, 0), name: "Block 4"}]
      case 5:
        return [{start: new Date().setHours(8, 0, 0, 0), end: new Date().setHours(12, 0, 0, 0), name: "Full Period"}]
      case 6:
        return [
          {start: new Date().setHours(8, 30, 0, 0), end: new Date().setHours(9, 40, 0, 0), name: "Block 1"},
          {start: new Date().setHours(9, 50, 0, 0), end: new Date().setHours(11, 0, 0, 0), name: "Block 3"},
          {start: new Date().setHours(11, 10, 0, 0), end: new Date().setHours(12, 20, 0, 0), name: "Block 5A"},
          {start: new Date().setHours(12, 30, 0, 0), end: new Date().setHours(13, 10, 0, 0), name: "Lunch 2"},
          {start: new Date().setHours(13, 20, 0, 0), end: new Date().setHours(14, 30, 0, 0), name: "Block 7"},
        ]
      case 7:
          return [
          {start: new Date().setHours(8, 30, 0, 0), end: new Date().setHours(9, 40, 0, 0), name: "Block 2"},
          {start: new Date().setHours(9, 50, 0, 0), end: new Date().setHours(11, 0, 0, 0), name: "Block 4"},
          {start: new Date().setHours(11, 10, 0, 0), end: new Date().setHours(12, 20, 0, 0), name: "Block 6A"},
          {start: new Date().setHours(12, 30, 0, 0), end: new Date().setHours(13, 10, 0, 0), name: "Lunch 2"},
          {start: new Date().setHours(13, 20, 0, 0), end: new Date().setHours(14, 30, 0, 0), name: "Block 8"},
        ]
      /*case 8:
          return [
          {start: new Date().setHours(9, 35, 0, 0), end: new Date().setHours(10, 45, 0, 0), name: "Block 2"},
          {start: new Date().setHours(10, 55, 0, 0), end: new Date().setHours(12, 05, 0, 0), name: "Block 4"},
          {start: new Date().setHours(12, 15, 0, 0), end: new Date().setHours(13, 25, 0, 0), name: "Block 6A"},
          {start: new Date().setHours(13, 35, 0, 0), end: new Date().setHours(14, 15, 0, 0), name: "Lunch 2"},
          {start: new Date().setHours(14, 25, 0, 0), end: new Date().setHours(15, 35, 0, 0), name: "Block 8"},
        ]*/
      default:
        break
    }
}

function updateTimer() {
  let timeleft
  let otimeleft
  var monthDate = date.getDate()
  var month = date.getMonth()
  var dateTime = date.getHours()*60+date.getMinutes()
  let periods
  let operiods
  let percent
  let opercent
  let typeDay
  let sStart = 510
  let sEnd
  let name
  let altPeriodsName
  let periodsName
  let obar = new Date().setHours(11, 40, 0, 0)
  fetch("./data/monthschedule.json")
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
                  periods = getPeriods(typeDay)
                  document.body.style.backgroundColor = "black"
                  document.getElementById("progress1").style.background = "white"
                  document.getElementById("progress2").style.background = "white"
                  timeleft = timer(periods)[0]
                  periodsName = timer(periods)[2]
                  otimeleft = -1
                  sEnd = 847
                  percent = 100 - (timer(periods)[0] / timer(periods)[1]) * 100
                  break
                case 2://orange day
                  periods = getPeriods(typeDay)
                  operiods = [
                    {start: new Date().setHours(11, 40, 0, 0), end: new Date().setHours(12, 20, 0, 0), name: "Lunch 1"},
                    {start: new Date().setHours(12, 20, 0, 0), end: new Date().setHours(12, 30, 0, 0), name: "Passing Period"},//fix for bug i dont understand, may cause issues
                    {start: new Date().setHours(12, 30, 0, 0), end: new Date().setHours(13, 55, 0, 0), name: "Block 5B"}
                  ]
                  document.body.style.backgroundColor = "#ff7000"
                  timeleft = timer(periods)[0]
                  periodsName = timer(periods)[2]
                  if (date < obar) {
                    otimeleft = -1
                  } else {
                    otimeleft = timer(operiods)[0]
                    opercent = 100 - (timer(operiods)[0] / timer(operiods)[1]) * 100
                    altPeriodsName = timer(operiods)[2]
                  }
                  sEnd = 935
                  percent = 100 - (timer(periods)[0] / timer(periods)[1]) * 100
                  break
                case 3://blue days
                  periods = getPeriods(typeDay)
                  operiods = [
                    {start: new Date().setHours(11, 40, 0, 0), end: new Date().setHours(12, 20, 0, 0), name: "Lunch 1"},
                    {start: new Date().setHours(12, 20, 0, 0), end: new Date().setHours(12, 30, 0, 0), name: "Passing Period"},
                    {start: new Date().setHours(12, 30, 0, 0), end: new Date().setHours(13, 55, 0, 0), name: "Block 6B"}
                  ]
                  document.body.style.backgroundColor = "#125e70"
                  timeleft = timer(periods)[0]
                  periodsName = timer(periods)[2]
                  if (date < obar) {
                    otimeleft = -1
                  } else {
                    otimeleft = timer(operiods)[0]
                    opercent = 100 - (timer(operiods)[0] / timer(operiods)[1]) * 100
                    altPeriodsName = timer(operiods)[2]
                  }
                  sEnd = 935
                  percent = 100 - (timer(periods)[0] / timer(periods)[1]) * 100
                  break
                case 4://no school
                  document.body.style.backgroundColor = "gray"
                  break
                case 5://futures day
                  periods = getPeriods(typeDay)
                  document.body.style.backgroundColor = "purple"
                  timeleft = timer(periods)[0]
                  otimeleft = -1
                  sEnd = 720
                  percent = 100 - (timer(periods)[0] / timer(periods)[1]) * 100
                  periodsName = timer(periods)[2]
                  break
                case 6://early dismissal orange
                  obar = new Date().setHours(11, 10, 0, 0)
                  periods = getPeriods(typeDay)
                  operiods = [
                    {start: new Date().setHours(11, 10, 0, 0), end: new Date().setHours(11, 50, 0, 0), name: "Lunch 1"},
                    {start: new Date().setHours(11, 50, 0, 0), end: new Date().setHours(12, 0, 0, 0), name: "Passing Period"},//fix for bug i dont understand, may cause issues
                    {start: new Date().setHours(12, 0, 0, 0), end: new Date().setHours(13, 10, 0, 0), name: "Block 5B"}
                  ]
                  document.body.style.backgroundColor = "#ff7000"
                  timeleft = timer(periods)[0]
                  periodsName = timer(periods)[2]
                  if (date < obar) {
                    otimeleft = -1
                  } else {
                    otimeleft = timer(operiods)[0]
                    opercent = 100 - (timer(operiods)[0] / timer(operiods)[1]) * 100
                    altPeriodsName = timer(operiods)[2]
                  }
                  sEnd = 870
                  percent = 100 - (timer(periods)[0] / timer(periods)[1]) * 100
                  break
                case 7://early dismissal blue
                  obar = new Date().setHours(11, 10, 0, 0)
                  periods = getPeriods(typeDay)
                  operiods = [
                    {start: new Date().setHours(11, 10, 0, 0), end: new Date().setHours(11, 50, 0, 0), name: "Lunch 1"},
                    {start: new Date().setHours(11, 50, 0, 0), end: new Date().setHours(12, 0, 0, 0), name: "Passing Period"},//fix for bug i dont understand, may cause issues
                    {start: new Date().setHours(12, 0, 0, 0), end: new Date().setHours(13, 10, 0, 0), name: "Block 6B"}
                  ]
                  document.body.style.backgroundColor = "#125e70"
                  timeleft = timer(periods)[0]
                  periodsName = timer(periods)[2]
                  if (date < obar) {
                    otimeleft = -1
                  } else {
                    otimeleft = timer(operiods)[0]
                    opercent = 100 - (timer(operiods)[0] / timer(operiods)[1]) * 100
                    altPeriodsName = timer(operiods)[2]
                  }
                  sEnd = 870
                  percent = 100 - (timer(periods)[0] / timer(periods)[1]) * 100
                  break
               case 8:
                  periods = getPeriods(typeDay)
                  operiods = [
                    {start: new Date().setHours(12, 15, 0, 0), end: new Date().setHours(12, 55, 0, 0), name: "Lunch 1"},
                    {start: new Date().setHours(12, 55, 0, 0), end: new Date().setHours(13, 5, 0, 0), name: "Passing Period"},
                    {start: new Date().setHours(13, 5, 0, 0), end: new Date().setHours(14, 15, 0, 0), name: "Block 6B"}
                  ]
                  document.body.style.backgroundColor = "#125e70"
                  timeleft = timer(periods)[0]
                  periodsName = timer(periods)[2]
                  if (date < obar) {
                    otimeleft = -1
                  } else {
                    otimeleft = timer(operiods)[0]
                    opercent = 100 - (timer(operiods)[0] / timer(operiods)[1]) * 100
                    altPeriodsName = timer(operiods)[2]
                  }
                  sEnd = 935
                  percent = 100 - (timer(periods)[0] / timer(periods)[1]) * 100
                  break
                default:
                  timeleft = -1
                  otimeleft = -1
                  document.body.style.backgroundColor = "gray"
                }

              if (typeDay != 4) {
                   let dayTotal = periods[periods.length - 1].end - periods[0].start;
                   let dayCompleted = 0
                   if (date > periods[periods.length - 1].end) {
                       dayCompleted = periods[periods.length - 1].end - periods[0].start
                       document.getElementById("dayPercent").innerText = "100% school day completed"
                   } else {
                       dayCompleted = periods[periods.length - 1].end - date
                       let dayPercent = Math.floor(100 - (dayCompleted / dayTotal) * 100)
                       document.getElementById("dayPercent").innerText = dayPercent + "% school day completed"
                   }
                } else {
                   document.getElementById("dayPercent").innerText = "No School"
                }
              
              const minutes = Math.floor(timeleft / 1000 / 60)
              const seconds = Math.floor(timeleft / 1000) % 60
              const ominutes = Math.floor(otimeleft / 1000 / 60)
              const oseconds = Math.floor(otimeleft / 1000) % 60

              document.getElementById("classPercent").style.display = "block"
              if (otimeleft == -1 || date < obar || otimeleft == null) {
                document.getElementById("clock").innerText = periodsName + ": " + `${twoDigits(minutes)}:${twoDigits(seconds)}` + " left"
                document.getElementById("progress1").style.width = percent + "%"
                document.getElementById("progress2").style.display = "none"
                document.getElementById("classPercent").innerText = periodsName + " is " + Math.floor(percent) + "% completed"
                document.getElementById("altClassPercent").style.display = "none"
              } else {
                document.getElementById("clock").innerText = periodsName + ": " + `${twoDigits(minutes)}:${twoDigits(seconds)}` + " left"
                document.getElementById("progress1").style.width = percent + "%"
                document.getElementById("percent").innerText = altPeriodsName + ": " + `${twoDigits(ominutes)}:${twoDigits(oseconds)}` + " left"
                document.getElementById("progress2").style.width = opercent + "%"
                document.getElementById("classPercent").innerText = periodsName + " is " + Math.floor(percent) + "% completed"
                document.getElementById("altClassPercent").innerText = altPeriodsName + " is " + Math.floor(opercent) + "% completed"
                document.getElementById("altClassPercent").style.display = "block"
              }

              
              
              if (dateTime >= sEnd || timeleft == -1) { 
                document.getElementById("clock").innerText = "School's over"

                document.getElementById("progress1").style.display = "none"
                document.getElementById("progress2").style.display = "none"
                document.getElementById("classPercent").style.display = "none"
                document.getElementById("altClassPercent").style.display = "none"
              } else if (dateTime < sStart) {
                document.getElementById("clock").innerText = "School hasn't started"

                document.getElementById("progress1").style.display = "none"
                document.getElementById("progress2").style.display = "none"
                document.getElementById("classPercent").style.display = "none"
                document.getElementById("altClassPercent").style.display = "none"
              }
              if (typeDay == 4) {
                document.getElementById("clock").innerText = "No School"
                document.getElementById("progress1").style.display = "none"
                document.getElementById("progress2").style.display = "none"
                document.getElementById("classPercent").style.display = "none"
                document.getElementById("altClassPercent").style.display = "none"
              }
              if (document.body.style.backgroundColor == "black") {
                document.getElementById("githubLink").style.color = "white"
                document.getElementById("progress1").style.color = "white"
              }
            }
          }
        }

        let weekStart = 0
        let weekEnd = 0
        let weekTotal = 0
        let weekCompleted = 0
        let weekPercent = 0
        let dayAsIndex = data.indexOf(data.find(x => x.day === new Date().getDate() && x.month === new Date().getMonth()))
         console.log("index: " + dayAsIndex)
        for (var j = dayAsIndex; j >= (dayAsIndex - 6); j--) {
           if (data[j].typeday == 4 && data[j-1].typeday == 4) {
              console.log("check" + j)
               if (data[j+1].typeday == 1 || data[j+1].typeday == 2 || data[j+1].typeday == 3) {
                  weekStart = j+1
               }
            }
        }
                console.log("WeekStart: " + weekStart)
        for (var h = weekStart; h < (weekStart + 10); h++) {//10 is  problem
           if (data[h].typeday == 4) {
              if (data[h+1].typeday == 4 && (data[h-1].typeday == 1 || data[h-1].typeday == 2 || data[h-1].typeday == 3 || data[h-1].typeday == 6 || data[h-1].typeday == 7)) {//&& (data[h-1].typeday == 1 || data[h-1].typeday == 2 || data[h-1].typeday == 3 || data[h-1].typeday == 6 || data[h-1].typeday == 7)) {
                 weekEnd = h-1
                 console.log("weekEnd: " + weekEnd)
                 for (var l = weekStart; l <= weekEnd; l++) {
                    weekTotal += getPeriods(data[l].typeday)[getPeriods(data[l].typeday).length-1].end - getPeriods(data[l].typeday)[0].start
                 }
                 for (var k = weekStart; k < dayAsIndex; k++) {
                    weekCompleted += getPeriods(data[k].typeday)[getPeriods(data[k].typeday).length-1].end - getPeriods(data[k].typeday)[0].start
                 }
                 if (date > getPeriods(data[dayAsIndex].typeday)[getPeriods(data[dayAsIndex].typeday).length-1].end) {
                    weekCompleted += getPeriods(data[dayAsIndex].typeday)[getPeriods(data[dayAsIndex].typeday).length-1].end - getPeriods(data[dayAsIndex].typeday)[0].start
                    weekPercent = Math.floor((weekCompleted / weekTotal) * 100)
                 } else {
                     weekCompleted += new Date() - getPeriods(data[dayAsIndex].typeday)[0].start
                     weekPercent = Math.floor((weekCompleted / weekTotal) * 100)
                 }
                 document.getElementById("weekPercent").innerText = weekPercent + "% school week completed"
                 break
              }
         }
      }
         
      })
}


function updateUpdateTimer() {
   setInterval(time, 10)
   setInterval(updateTimer, 10)
}

  document.querySelector(".toggle").addEventListener("click", function(){
  document.querySelector("aside").classList.toggle("visible")})


window.addEventListener("load", updateUpdateTimer)

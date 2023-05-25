function databaseLink(){  
  // var databaseLink = 'https://golfdatabase2test.herokuapp.com';
  var databaseLink = 'http://coupons.test';
  return databaseLink;
}

function currentDateTime(){  
  var d = new Date();

  var year = d.getFullYear()
  var month = d.getMonth()+1
  if (month <10){
    month = "0"+month
  }
  var day = d.getDate()
  if (day <10){
    day = "0"+day
  }
  var currentDate = year+"-"+month+"-"+day

  var hour = d.getHours()
  var minute = d.getMinutes()
  var second = d.getSeconds()
  var currentTime = hour+":"+minute+":00"

  // currentDate = "2023-02-25"
  // currentTime = "08:00:00"

  return [currentDate, currentTime];
}


function getMonthNumber(month){
  switch(month){
    case 'January':
      month = 1;
      break;
    case 'February': 
      month = 2;
      break;
    case 'March':
      month = 3;
      break;
    case 'April':
      month = 4;
      break;
    case 'May':
      month = 5;
      break;
    case 'June':
      month = 6;
      break;
    case 'July':
      month = 7;
      break;
    case 'August': 
      month = 8;
      break;
    case 'September':
      month = 9;
      break;
    case 'October':
      month = 10;
      break;
    case 'November':
      month = 11;
      break;
    case 'December':
      month = 12;
      break;
  }
  return month;
}

function getProperMonth(month){
  while(month > 11){
    month = month -12
  }
  switch(month){
    case 0:
      month = 'January';
      break;
    case 1: 
      month = 'February';
      break;
    case 2:
      month = 'March';
      break;
    case 3:
      month = 'April';
      break;
    case 4:
      month = 'May';
      break;
    case 5:
      month = 'June';
      break;
    case 6:
      month = 'July';
      break;
    case 7: 
      month = 'August';
      break;
    case 8:
      month = 'September';
      break;
    case 9:
      month = 'October';
      break;
    case 10:
      month = 'November';
      break;
    case 11:
      month = 'December';
      break;
  }
  return month;
}

function getProperDate(date){
	var d = new Date(date);
  	var day = d.getDay();
  	switch(day){
  		case 1: 
  			day = 'Monday';
  			break;
  		case 2:
  			day = 'Tuesday';
  			break;
  		case 3:
  			day = 'Wednesday';
  			break;
  		case 4:
  			day = 'Thursday';
  			break;
  		case 5:
  			day = 'Friday';
  			break;
  		case 6:
  			day = 'Saturday';
  			break;
  		case 0:
  			day = 'Sunday';
  	}
  	var date = d.getDate()
  	var month = d.getMonth()
    month = getProperMonth(month)  	
  	var year = d.getFullYear()

  	return [day, (date+"-"+month+"-"+year)];
}

function getProperTime(time){
  	var time = time.split(":")
    if(time[0]== 0){
      // console.log("yes its 00")
      time = "12:"+time[1]+" AM"
    }else if(time[0]<12){
  		// console.log(time[0].split("")[0])
  		if(time[0].split("")[0] == "0"){
  			time[0] = time[0].split("")[1]
  		}
  		time = time[0]+":"+time[1]+" AM"
  	}else if(time[0]==12){
  		time = time[0]+":"+time[1]+" PM"
  	}else{
  		time = parseInt(time[0])-12+":"+time[1]+" PM"
  	}
  	return time;
}

function militaryTime(time){
  var hour = time.split(" ")[0].split(":")[0]
  var minutes = time.split(" ")[0].split(":")[1]

  if (time.split(" ")[1].toUpperCase() == "AM"){
    if (hour == "12"){
      console.log("yes its 12 am")
      time = "00:"+minutes+":00"
    }else{
      time = time.split(" ")[0]

      if(hour.length == 1){
        hour = "0"+hour
      }
      
      time = hour+":"+minutes+":00"
    }
  }else{
    if (hour == "12"){
      time = time.split(" ")[0]
    }else{
      var hour = parseInt(hour) + 12
      time = hour+":"+minutes+":00"
    }   
  }

  return time;
}

function capitalize(string){
 	var splitStr = string.split(" ")
 	var capitalzeStr = ""
 	for (var i=0; i<splitStr.length; i++){
    if(i>0){
      capitalzeStr = capitalzeStr + " "
    }
 		var wordSplit = splitStr[i].split("")
 		for (var j=0; j<wordSplit.length; j++){
 			if(j==0){
 				capitalzeStr = capitalzeStr + wordSplit[j].toUpperCase()
 			}else{
 				capitalzeStr = capitalzeStr + wordSplit[j].toLowerCase()
 			}
 		} 		
 	}
 	return capitalzeStr;
}

function changeDisplay(elmnt, styl){
  elmnt.style.display=styl;
}

function moveToPassword(event) {
  if(event.which === 13){
    document.getElementsByName('password')[0].focus()
  }
}

function logout(){
  sessionStorage.removeItem("token")
  window.location.replace("login.html")
}
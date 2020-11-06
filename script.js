var today = moment();
$("#currentDay").text(today.format("dddd, MMMM Do"));

var currentTime = moment();


// var nineOclock = moment('09:00:00', 'hh:mm:ss');
// var tenOclock = moment('10:00:00', 'hh:mm:ss');
// var elevenOclock = moment('11:00:00', 'hh:mm:ss');
// var twelveOclock = moment('12:00:00', 'hh:mm:ss');
// var oneOclock = moment('13:00:00', 'hh:mm:ss');
// var twoOclock = moment('14:00:00', 'hh:mm:ss');
// var threeOclock = moment('15:00:00', 'hh:mm:ss');
// var fourOclock = moment('16:00:00', 'hh:mm:ss');
// var fiveOclock = moment('17:00:00', 'hh:mm:ss');

if (currentTime.isBetween(moment('08:00:00', 'hh:mm:ss'), moment('08:59:59', 'hh:mm:ss'))) {
    $("#nine").addClass('future');
}

if (currentTime.isBetween(moment('09:00:00', 'hh:mm:ss'), moment('09:59:59', 'hh:mm:ss'))) {
    $("#nine").addClass('present');
}

else {
    $("#nine").addClass('past');
}

if (currentTime.isBetween(moment('08:00:00', 'hh:mm:ss'), moment('09:59:59', 'hh:mm:ss'))) {
    $("#ten").addClass('future');
}

if (currentTime.isBetween(moment('10:00:00', 'hh:mm:ss'), moment('10:59:59', 'hh:mm:ss'))) {
    $("#ten").addClass('present');
}

else {
    $("#ten").addClass('past');
}

if (currentTime.isBetween(moment('08:00:00', 'hh:mm:ss'), moment('10:59:59', 'hh:mm:ss'))) {
    $("#eleven").addClass('future');
}

if (currentTime.isBetween(moment('11:00:00', 'hh:mm:ss'), moment('11:59:59', 'hh:mm:ss'))) {
    $("#eleven").addClass('present');
}

else {
    $("#eleven").addClass('past');
}

if (currentTime.isBetween(moment('08:00:00', 'hh:mm:ss'), moment('11:59:59', 'hh:mm:ss'))) {
    $("#twelve").addClass('future');
}

if (currentTime.isBetween(moment('12:00:00', 'hh:mm:ss'), moment('12:59:59', 'hh:mm:ss'))) {
    $("#twelve").addClass('present');
}

else {
    $("#twelve").addClass('past');
}

if (currentTime.isBetween(moment('08:00:00', 'hh:mm:ss'), moment('12:59:59', 'hh:mm:ss'))) {
    $("#one").addClass('future');
}

if (currentTime.isBetween(moment('13:00:00', 'hh:mm:ss'), moment('13:59:59', 'hh:mm:ss'))) {
    $("#one").addClass('present');
}

else {
    $("#one").addClass('past');
}

if (currentTime.isBetween(moment('08:00:00', 'hh:mm:ss'), moment('13:59:59', 'hh:mm:ss'))) {
    $("#two").addClass('future');
}

if (currentTime.isBetween(moment('14:00:00', 'hh:mm:ss'), moment('14:59:59', 'hh:mm:ss'))) {
    $("#two").addClass('present');
}

else {
    $("#two").addClass('past');
}

if (currentTime.isBetween(moment('08:00:00', 'hh:mm:ss'), moment('14:59:59', 'hh:mm:ss'))) {
    $("#three").addClass('future');
}

if (currentTime.isBetween(moment('15:00:00', 'hh:mm:ss'), moment('15:59:59', 'hh:mm:ss'))) {
    $("#three").addClass('present');
}

else {
    $("#three").addClass('past');
}

if (currentTime.isBetween(moment('08:00:00', 'hh:mm:ss'), moment('15:59:59', 'hh:mm:ss'))) {
    $("#four").addClass('future');
}

if (currentTime.isBetween(moment('16:00:00', 'hh:mm:ss'), moment('16:59:59', 'hh:mm:ss'))) {
    $("#four").addClass('present');
}

else {
    $("#four").addClass('past');
}

if (currentTime.isBetween(moment('08:00:00', 'hh:mm:ss'), moment('16:59:59', 'hh:mm:ss'))) {
    $("#five").addClass('future');
}

if (currentTime.isBetween(moment('17:00:00', 'hh:mm:ss'), moment('17:59:59', 'hh:mm:ss'))) {
    $("#five").addClass('present');
}

else {
    $("#five").addClass('past');
}


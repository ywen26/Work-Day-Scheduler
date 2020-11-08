var today = moment();
$("#currentDay").text(today.format("dddd, MMMM Do"));

var currentTime = moment();

if (currentTime.isBetween(
    moment('08:00:00', 'hh:mm:ss'), moment('08:59:59', 'hh:mm:ss'))) {
    $("#Oclock9").addClass('future');
}

if (currentTime.isBetween(moment('09:00:00', 'hh:mm:ss'), moment('09:59:59', 'hh:mm:ss'))) {
    $("#Oclock9").addClass('present');
}

else {
    $("#Oclock9").addClass('past');
}

if (currentTime.isBetween(moment('08:00:00', 'hh:mm:ss'), moment('09:59:59', 'hh:mm:ss'))) {
    $("#Oclock10").addClass('future');
}

if (currentTime.isBetween(moment('10:00:00', 'hh:mm:ss'), moment('10:59:59', 'hh:mm:ss'))) {
    $("#Oclock10").addClass('present');
}

else {
    $("#Oclock10").addClass('past');
}

if (currentTime.isBetween(moment('08:00:00', 'hh:mm:ss'), moment('10:59:59', 'hh:mm:ss'))) {
    $("#Oclock11").addClass('future');
}

if (currentTime.isBetween(moment('11:00:00', 'hh:mm:ss'), moment('11:59:59', 'hh:mm:ss'))) {
    $("#Oclock11").addClass('present');
}

else {
    $("#Oclock11").addClass('past');
}

if (currentTime.isBetween(moment('08:00:00', 'hh:mm:ss'), moment('11:59:59', 'hh:mm:ss'))) {
    $("#Oclock12").addClass('future');
}

if (currentTime.isBetween(moment('12:00:00', 'hh:mm:ss'), moment('12:59:59', 'hh:mm:ss'))) {
    $("#Oclock12").addClass('present');
}

else {
    $("#Oclock12").addClass('past');
}

if (currentTime.isBetween(moment('08:00:00', 'hh:mm:ss'), moment('12:59:59', 'hh:mm:ss'))) {
    $("#Oclock13").addClass('future');
}

if (currentTime.isBetween(moment('13:00:00', 'hh:mm:ss'), moment('13:59:59', 'hh:mm:ss'))) {
    $("#Oclock13").addClass('present');
}

else {
    $("#Oclock13").addClass('past');
}

if (currentTime.isBetween(moment('08:00:00', 'hh:mm:ss'), moment('13:59:59', 'hh:mm:ss'))) {
    $("#Oclock14").addClass('future');
}

if (currentTime.isBetween(moment('14:00:00', 'hh:mm:ss'), moment('14:59:59', 'hh:mm:ss'))) {
    $("#Oclock14").addClass('present');
}

else {
    $("#Oclock14").addClass('past');
}

if (currentTime.isBetween(moment('08:00:00', 'hh:mm:ss'), moment('14:59:59', 'hh:mm:ss'))) {
    $("#Oclock15").addClass('future');
}

if (currentTime.isBetween(moment('15:00:00', 'hh:mm:ss'), moment('15:59:59', 'hh:mm:ss'))) {
    $("#Oclock15").addClass('present');
}

else {
    $("#Oclock15").addClass('past');
}

if (currentTime.isBetween(moment('08:00:00', 'hh:mm:ss'), moment('15:59:59', 'hh:mm:ss'))) {
    $("#Oclock16").addClass('future');
}

if (currentTime.isBetween(moment('16:00:00', 'hh:mm:ss'), moment('16:59:59', 'hh:mm:ss'))) {
    $("#Oclock16").addClass('present');
}

else {
    $("#Oclock16").addClass('past');
}

if (currentTime.isBetween(moment('08:00:00', 'hh:mm:ss'), moment('16:59:59', 'hh:mm:ss'))) {
    $("#Oclock17").addClass('future');
}

if (currentTime.isBetween(moment('17:00:00', 'hh:mm:ss'), moment('17:59:59', 'hh:mm:ss'))) {
    $("#Oclock17").addClass('present');
}

else {
    $("#Oclock17").addClass('past');
}

var scheduleEndTime = 18;
for (i = 9; i < scheduleEndTime; i++) {
    var hour = i.toString();
    var timeBlock = localStorage.getItem(hour); 
    $("#Oclock" + hour).text(timeBlock);
}

$(".saveBtn").on("click", function(event) {
    event.preventDefault();

    var inputEl = $(this).siblings(".description").val();
    var timeEl = $(this).siblings(".description").data("time");

    localStorage.setItem(timeEl, inputEl);
});


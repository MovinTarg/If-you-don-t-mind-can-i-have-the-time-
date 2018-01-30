var hour = 12;
var minute = 5;
var period ="PM"
var time

if (minute === 0 && hour === 12 && period === "AM") {
    time = ("It's midnight");
} else if (minute === 0 && hour === 12 && period === "PM") {
    time = ("It's noon");
} else if (minute === 0 && hour === 12 && period === "AM") {
    time = ("It's midnight");
} else if (minute === 5 && hour === 12 && period === "PM") {
    time = ("It's five after noon");
} else if (minute === 5 && hour === 12 && period === "AM") {
    time = ("It's five after midnight");
} else if (minute === 15 && hour === 12 && period === "PM") {
    time = ("It's quarter after noon");
} else if (minute === 15 && hour === 12 && period === "AM") {
    time = ("It's quarter after midnight");
} else if (minute === 30 && hour === 12 && period === "PM") {
    time = ("It's half past noon");
} else if (minute === 30 && hour === 12 && period === "AM") {
    time = ("It's half past midnight");
} else if (minute >= 30 && hour == 12 && period === "AM") {
    time = ("It's almost "+ 1 +" in the afternoon");
} else if (minute >= 30 && hour == 12 && period === "PM") {
    time = ("It's almost "+ 1 +" in the morning");
} else if (minute === 5 && period === "AM") {
    time = ("It's five after "+ hour +" in the morning");
} else if (minute === 15 && period === "AM") {
    time = ("It's quarter after "+ hour +" in the morning");
} else if (minute === 30 && period === "AM") {
    time = ("It's half past "+ hour +" in the morning");
} else if (minute < 30 && period === "AM") {
    time = ("It's just after "+ hour +" in the morning");
} else if (minute > 30 && period === "AM") {
    time = ("It's almost "+ (hour+1) +" in the morning");
} else if (minute === 5 && hour < 5 && period === "PM") {
    time = ("It's five after "+ hour +" in the afternoon");
} else if (minute === 15 && hour < 5 && period === "PM") {
    time = ("It's quarter after "+ hour +" in the afternoon");
} else if (minute === 30 && hour < 5 && period === "PM") {
    time = ("It's half past "+ hour +" in the afternoon");
} else if (minute < 30 && hour < 5 && period === "PM") {
    time = ("It's just after "+ hour +" in the afternoon");
} else if (minute > 30 && hour < 5 && period === "PM") {
    time = ("It's almost "+ (hour+1) +" in the afternoon");
} else if (minute === 5 && period === "PM") {
    time = ("It's five after "+ hour +" at night");
} else if (minute === 15 && period === "PM") {
    time = ("It's quarter after "+ hour +" at night");
} else if (minute === 30 && period === "PM") {
    time = ("It's half past "+ hour +" at night");
} else if (minute < 30 && period === "PM") {
    time = ("It's just after "+ hour +" at night");
} else if (minute > 30 && period === "PM") {
    time = ("It's almost "+ (hour+1) +" at night");
}
console.log(time);
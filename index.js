// code your solution here

function saturdayFun(activity = "roller-skate") {
  return `This Saturday, I want to ${activity}!`;
}

const mondayWork = function (activity = "go to the office") {
  return `This Monday, I will ${activity}.`;
};
mondayWork();
mondayWork("work from home");

const wrapAdjective = function (star = "*") {
  return function (greeting = "special") {
    return `You are ${star}${greeting}${star}!`;
  };
};
console.log(wrapAdjective("*")("a FullStack Web Developer"));

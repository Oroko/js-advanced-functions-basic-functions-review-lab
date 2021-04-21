// Your code here
function saturdayFun(activity = "roller-skate") {
  return `This Saturday, I want to ${activity}!`;
}

function mondayWork(work = "go to the office") {
  return `This Monday, I will ${work}.`;
}

function wrapAdjective(char="*") {
  return function (str="special") {
    return `You are ${char}${str}${char}!`;
  };
}

const Calculator = {
  add: function (a,b) {
    return a + b;
  },
  subtract: function (a,b) {
    return a - b;
  },
  multiply: function (a,b) {
    return a * b;
  },
  divide: function (a,b) {
    return a / b;
  }
  
};

function actionApplyer(i,arr){
  if(arr.length === 0){
    return i
  }
  for (const fn of arr){
    i = fn(i)
  }
  return i
}


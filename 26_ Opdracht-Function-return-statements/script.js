const checkScore = function (score) {
  if (score >= 100) {
    return true;
  }
  return false;
};

const result = checkScore(101);
//console.log(result);

const BBB = function (age, numberOfPeople) {
  if (age < 18) {
    return "this is a club for adults";
  }
  if (numberOfPeople < 50) {
    return "come in";
  }
  return "it's too busy now, come back later";
};

const access = BBB(19, 49);
//console.log(access);

Array.prototype.sum = function () {
  return this.reduce(function (a, b) {
    return a + b;
  });
};

const average = [4, 5, 3, 4, 5];
console.log(average.sum() / average.length);

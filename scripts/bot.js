// Description:
// Example scripts for you to examine and try out.

// Notes:
// They are commented out by default, because most of them are pretty silly and
// wouldn't be useful and amusing enough for day to day huboting.
// Uncomment the ones you want to try and experiment with.

// These are JavaScript versions of the CoffeeScript code from the scripting
// documentation: 
// https://github.com/github/hubot/blob/master/docs/scripting.md

module.exports = function(robot) {

  const week2Url = 'https://docs.google.com/document/d/11Jb6arbfPKvZlxj1FSeMMBXRhltWvI3H6INPdGjATKQ/';
  const week3Url = "https://docs.google.com/document/d/1JLzyx1hEhlyt1IY1iE2kld0QrowCpY-k8piHJ6_WGLA";
  const week4Url = "https://docs.google.com/document/d/11Jb6arbfPKvZlxj1FSeMMBXRhltWvI3H6INPdGjATKQ";
  const week5Url = "https://docs.google.com/document/d/1OJ8G8EiEWajQgT3FJm_7TGH9FX-dbWqQyUJtJoSDjkg";
  const week6Url = "https://docs.google.com/document/d/1SSznH5XF-xukKQBHK3QcnJ5kxZGAqpu7ZQ09iToDS0o";
  const week7Url = "https://docs.google.com/document/d/1t-vfZaHuTklw9bufPOdtsVRE7TwEGOD0KCmU-3f86CI";
  const week8Url = "https://docs.google.com/document/d/1UHH88cbLjDUcIPIJ-Rumb3yrcJ6HuKs-RKhMH7_7wd8";
  const week9Url = "https://docs.google.com/document/d/11VQS9xVcXyLm8XTksRp7K4nBUhv6EWGkltmgKpjVPEM";
  const week10Url = "https://docs.google.com/document/d/1Qtcel-m1Pm5OACeJuZxhTF5NNCoujJLEEzA8snWgkbk";

  const homeworkWeek = ["2", "3", "4", "5", "6", "7", "8", "9", "10"];
  const homeworkWeekUrls = [week2Url, week3Url, week4Url, week5Url, week6Url, week7Url, week8Url, week9Url, week10Url]; 

  robot.hear(/homework for week (.*)/i, function(res) {
    const requestedWeek = res.match[1];
    for (let i = 0; i < homeworkWeekUrls.length; i++) {
      const url = homeworkWeekUrls[i];
      const week = homeworkWeek[i];

      if (week === requestedWeek) {
        return res.send(url);
      }
    }
    return res.send('No homework this week!');
  });
};

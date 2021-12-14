// We import the object from the data file. Inside that object there is a function to get players data
const data = require('./data');

/**
 * Test 1
 * Write a function to log in the console the players data with this format:
 * PLAYER 1
 * NAME: Zinedine
 * LASTNAME: Zidane
 * POSITION: Midfielder
 * PLAYER 2...
 */

// Your code
function logPlayerData() {
  data.getPlayers().forEach(({ name, lastname, position }, index) => {
    console.log(`PLAYER ${index + 1}`);
    console.log(`NAME: ${name}`);
    console.log(`LASTNAME: ${lastname}`);
    console.log(`POSITION: ${position}`);
  });
  console.log('');
}

logPlayerData();

/**
 * Test 2
 * Write a function to log in the console an array with only the names of the players, ordered by name length descending
 */

// Your code
function logOrderedPlayerNames() {
  const sortedByName = data
    .getPlayers()
    .sort((a, b) => b.name.length - a.name.length)
    .map(({ name }) => name);
  console.log(sortedByName);
  console.log('');
}
logOrderedPlayerNames();

/**
 * Test 3
 * Write a function to log in the console the average number of goals there will be in a match if all the players in the data play on it
 * scoringChance means how many goals per 100 matches the player will score
 * Example: 10 players play in a match, all of them has 0.11 scoringChance, the result will be 1.1 average goals
 * Output example -> Goals per match: 2.19
 */

// Your code
function logAverageGoals() {
  const players = data.getPlayers();
  const averageGoals =
    players.reduce((avg, { scoringChance }) => avg + scoringChance / 100, 0) ||
    0;
  console.log(`Goals per match: ${averageGoals}`);
  console.log('');
}
logAverageGoals();

/**
 * Test 4
 * Write a function that accepts a name, and logs the position of the player with that name (by position it means striker, goalkeeper...)
 */

// Your code
function logPlayerPosition(playerName) {
  const player = data.getPlayers().filter(({ name }) => name === playerName);
  player
    ? console.log(`Position: ${player[0].position}`)
    : console.log('Player does not exist.');
  console.log('');
}
logPlayerPosition('Tammy');

/**
 * Test 5
 * Write a function that splits all the players randomly into 2 teams, Team A and Team B. Both teams should have same number of players.
 * The function should log the match score, using the average number of goals like the Test 3 and rounding to the closest integer
 * Example:
 *      Team A has 4 players, 2 with 50 scoringChance and 2 with 70 scoringChance.
 *      The average score for the team would be 2.4 (50+50+70+70 / 100), and the closest integer is 2, so the Team A score is 2
 */

// Your code
function logTeamScoresAfterSplitting() {
  const players = data.getPlayers();
  const teamA = players.slice(0, players.length / 2);
  const teamB = players.slice(players.length / 2);

  const scores = [
    Math.round(
      teamA.reduce((avg, { scoringChance }) => avg + scoringChance / 100, 0) ||
        0
    ),
    Math.round(
      teamB.reduce((avg, { scoringChance }) => avg + scoringChance / 100, 0) ||
        0
    ),
  ];

  console.log('SCORES');
  console.log(`Team A: ${scores[0]}`);
  console.log(`Team B: ${scores[1]}`);
  console.log('');
}
logTeamScoresAfterSplitting();

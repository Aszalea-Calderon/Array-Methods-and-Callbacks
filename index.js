import { fifaData } from './fifa.js';
// console.log(fifaData);

console.log('its working');
// ⚽️ M  V P ⚽️ //

/* Task 1: Investigate the data above. Practice accessing data by console.log-ing the following pieces of data 

(a) Home Team Name for 2014 world cup final
(b) Away Team Name for 2014 world cup final
(c) Home Team Goals for 2014 world cup final
(d) Away Team Goals for 2014 world cup final
(e) Winner of 2014 world cup final */

//Goals - access 2014 - X
//console log, letters above, 
    //feed 2014 into the logger so it knows what to log-- we could .map
    //add each of the items above
        //figure out the console.log with [] data[] should work adding

    //Log the winner of 2014 by adding reducing the score to be the highest one
    //last date of the final and last match of the final 

//COMPLETED
// const fourteen = fifaData.filter((data) =>{
//     return data.Year === 2014;
// });

// const separate = fourteen.map(function(data){
//     console.log(`The Home Team's Name was ${data['Home Team Name']}`);
//     console.log(`The Away Team's Name was ${data['Away Team Name']}`);
//     console.log(`Home score: ${data['Home Team Goals']}`);
//     console.log(`Away score: ${data['Away Team Goals']}`);
    
// });



/* Task 2: Create a function called  getFinals that takes `data` as an argument and returns an array of objects with only finals data
*/
//create function called getFinals
    //give it data
    //filter only finals data

   
    function getFinals (data) {
        return data.filter(item => item.Stage === "Final")
    }
    // console.log(getFinals(fifaData)) 

    // let getFinals = fifaData.filter((data) =>{
    //     return data.Stage === "Final";
    // });


    // console.log(getFinals);
/* Task 3: Implement a higher-order function called `getYears` that accepts the callback function `getFinals`, and returns an array called `years` containing all of the years in the dataset */

//create a function that revieces the function 
    //getYears (callback)task two, and maybe years. (as we need it to use years)
//filter it further to have 'Year"
//return an array called years with all the years in the dataset

function getYears(func) {
    let newArr = [];
    func.forEach(item => {
        newArr.push(item.Year);
    })
    return newArr;
};

console.log(getYears(getFinals(fifaData)));

// function getYears(cb, arr){
//     let years = arr.map((data) => {
//         return {'Year': data.year};
//     })
//     return years;
// };
// console.log(getYears(cb));

// function getYears(cb) {
//     let years = cb.map(item => item['Years']);
//    return years;

// };

// console.log(getYears(getFinals(fifaData)));

//   const mappedCityStates = data.map((state) =>{
//     return {'city': state.city, 'state': state.state};
// });


//remeber that cb is getting you the finals data already 


/* Task 4: Implement a higher-order function called `getWinners`, that accepts the callback function `getFinals()` and determine the winner (home or away) of each `finals` game. Return the name of all winning countries in an array called `winners` */ 

    //What to do
        //create a function that uses a function called getWinners, 
            //accept cb (getFinals())
        //.map
        //return names of winners


function getWinners(getFinalscb) {

    /* code here */

};

getWinners(getFinal, );

/* Task 5: Implement a higher-order function called `getWinnersByYear` that accepts the following parameters and returns a set of strings "In {year}, {country} won the world cup!" 

Parameters: 
 * callback function getWinners
 * callback function getYears
 */

// function getWinnersByYear(/* code here */) {

// };

// getWinnersByYear();

/* Task 6: Write a function called `getAverageGoals` that accepts a parameter `data` and returns the the average number of home team goals and away team goals scored per match (Hint: use .reduce and do this in 2 steps) */

// function getAverageGoals(/* code here */) {

//     /* code here */

// };

// getAverageGoals();

/// STRETCH 🥅 //

/* Stretch 1: Create a function called `getCountryWins` that takes the parameters `data` and `team initials` and returns the number of world cup wins that country has had. 

Hint: Investigate your data to find "team initials"!
Hint: use `.reduce` */

// function getCountryWins(/* code here */) {

//     /* code here */

// };

// getCountryWins();


// /* Stretch 3: Write a function called getGoals() that accepts a parameter `data` and returns the team with the most goals score per appearance (average goals for) in the World Cup finals */

// function getGoals(/* code here */) {

//     /* code here */

// };

// getGoals();


// /* Stretch 4: Write a function called badDefense() that accepts a parameter `data` and calculates the team with the most goals scored against them per appearance (average goals against) in the World Cup finals */

// function badDefense(/* code here */) {

//     /* code here */

// };

// badDefense();

// /* If you still have time, use the space below to work on any stretch goals of your chosing as listed in the README file. */

// app.js

// Import modules
const yargs = require("yargs");
const chalk = require("chalk");

// --------------------------------------------
// Written Responses:
//
// package.json stores project information and
// a list of all dependencies required.
//
// node_modules contains installed packages.
// It should not be pushed to GitHub because
// it is very large and can be recreated.
//
// npm install reads package.json and installs
// all required dependencies, making it easy
// for collaborators to run the project.
// --------------------------------------------

// Parse command-line arguments
const argv = yargs.option("city", {
    describe: "City name",
    type: "string",
    demandOption: true
}).argv;

// Simulated weather data
const weatherData = {
    "New York": {
        temperature: "75°F",
        condition: "Sunny"
    },
    "Chicago": {
        temperature: "68°F",
        condition: "Cloudy"
    },
    "St. Louis": {
        temperature: "82°F",
        condition: "Partly Cloudy"
    },
    "Los Angeles": {
        temperature: "90°F",
        condition: "Hot"
    }
};

const city = argv.city;

if (weatherData[city]) {

    console.log(chalk.blue("Weather Report"));
    console.log("------------------------");

    console.log(
        chalk.green("City:"),
        chalk.yellow(city)
    );

    console.log(
        chalk.green("Temperature:"),
        weatherData[city].temperature
    );

    console.log(
        chalk.green("Condition:"),
        weatherData[city].condition
    );

} else {

    console.log(
        chalk.red("Weather data not available for"),
        chalk.yellow(city)
    );

}
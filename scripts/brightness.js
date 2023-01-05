const { exec } = require("node:child_process");
const fs = require("node:fs/promises");
const argv = process.argv;

if (!argv.at(2)) {
  exec("brightnessctl g", (_error, stdout, _stderror) => {
    const level = stdout;
    const result = JSON.stringify([Math.round(level / 255 * 100) + "%", Math.round(level / 85)]);
    fs.writeFile("/tmp/brightness", result + "\n");
    exec(`eww update brightness=${result}`)
  })
}

if (process.argv.at(2) === "inc") {
  exec("brightnessctl set 5%+", (_error, stdout, _stderror) => {
    const level = stdout.match(/[+-]?([0-9]*[.])?[0-9]+%/g);
    const result = JSON.stringify([level.at(0), Math.floor(parseInt(level.at(0))/ 33.33)]);
    fs.writeFile("/tmp/brightness",result + "\n", {flag: "a+"});
  });
} else if (process.argv.at(2) === "dec") {
  exec("brightnessctl set 5%-", (_error, stdout, _stderror) => {
    const level = stdout.match(/[+-]?([0-9]*[.])?[0-9]+%/g);
    const result = JSON.stringify([level.at(0), Math.floor(parseInt(level.at(0))/ 33.33)]);
    fs.writeFile("/tmp/brightness", result+"\n",{flag: "a+"});
  });
} 


import { argv } from "node:process";

// setup brightness file in /tmp/widget directory [level, icon-index]
exec("brightnessctl g", (_error, stdout, _stderror) => {
  const level = stdout;
  const result = JSON.stringify([Math.round(level / 255 * 100) + "%", Math.round(level / 85)]);
  fs.writeFile("/tmp/brightness", result + "\n");
  exec(`eww update brightness=${result}`)
})

const {exec} = require("node:child_process");
exec("date +'%d %b %g'", (_error, stdout, _stderror) => {
  const [day, month, year] = stdout.split(" ");
  exec(`eww update day='${day}' month='${month}' year='${year}'`)
})

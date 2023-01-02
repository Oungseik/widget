const {exec} = require("node:child_process");
exec("hyprctl activewindow -j", (_error, stdout, _stderror) => {
  const data = JSON.parse(stdout);
  const active_workspace = data.workspace.id;
  console.log(active_workspace);
})

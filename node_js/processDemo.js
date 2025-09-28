// argv
console.log(process.argv);
console.log(process.argv[3]);

// process.env
console.log(process.env.COMPUTERNAME);

// pid
console.log(process.pid);

// cwd
console.log(process.cwd());

// title
console.log(process.title);

// memoryUsage()
console.log(process.memoryUsage());

// uptime()
console.log(process.uptime());

// exit
// setTimeout(() => {
//   process.exit(0);
// }, 2000);

process.on("exit", (code) => {
  console.log("About to exit with code:", code);
});

// exit example to show how exit works
process.exit(0);
console.log("This will not be printed because the process has exited.");
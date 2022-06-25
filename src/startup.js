const child_process = require("child_process");
const colors = require("colors");
console.clear();
console.log(colors.underline.green("[ MASTER ] => process is running."));
start(process.argv[2]);

function sleep(ms) {
	return new Promise((resolve) => setTimeout(resolve, ms));
}

function start(nodefile, reboot) {
	if (typeof nodefile != "string") {
		return console.log("Give a file name to run");
	}

	console.log(
		colors.underline.green("[ MASTER ] => Spawning Child process.")
	);
	var proc;
	if (reboot) proc = child_process.spawn("node", [nodefile, `${reboot}`]);
	else proc = child_process.spawn("node", [nodefile]);

	proc.stdout.on("data", function (data) {
		console.log(data.toString());
	});

	proc.stderr.on("data", function (data) {
		console.log(colors.red(data.toString()));
	});

	proc.on("exit", async function (code) {
		console.log(
			colors.underline.green(
				"[ MASTER ] => Child process exited with code"
			) +
				" " +
				colors.underline.red(code) +
				"\n"
		);
		delete proc;
		if (code > 1000) {
			console.log(
				colors.underline.red(
					"Too many commands were to be registered, decrease number of commands/aliases to run the bot",
					`You tried to register ${
						parseInt(code) - 1000
					} commands too much!`
				)
			);
		} else {
			console.log(colors.underline.green("Rebooting in 3 seconds"));
			await sleep(999);
			console.log(colors.underline.green("Rebooting in 2 seconds"));
			await sleep(999);
			console.log(colors.underline.green("Rebooting in 1 seconds"));
			await sleep(999);
			console.log(colors.underline.green("Rebooting..."));
			setTimeout(() => start(nodefile, code), 5000);
		}
	});
}

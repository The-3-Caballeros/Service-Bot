const { exit } = require("process");
const prompt = require("prompt-sync")({ sigint: true });
const Colorz = require("./colors");
const Colors = new Colorz();

class stdout {
	constructor() { }

	/**
	 * Prints a line. Also supports color sequences.
	 *
	 * ```ts
	 * stdio.out.write("/st_bold//fg_magenta/Hello World!/st_reset/");
	 * ```
	 * @param {*} v Text to print.
	 */
	write(v = "") {
		if (v == null) return;
		const chars = v.split("");

		let color = "";
		let reading_color = false;

		for (let c = 0; c < chars.length; c++) {
			if (chars[c] == "/" && chars[c - 1] != "\\") {
				if (!reading_color) reading_color = true;
				else {
					switch (color) {
						// Foreground colors (fg_).
						case "fg_black":
							v = v.replace(`/${color}/`, Colors.FG_BLACK);
							break;

						case "fg_red":
							v = v.replace(`/${color}/`, Colors.FG_RED);
							break;

						case "fg_green":
							v = v.replace(`/${color}/`, Colors.FG_GREEN);
							break;

						case "fg_yellow":
							v = v.replace(`/${color}/`, Colors.FG_YELLOW);
							break;

						case "fg_blue":
							v = v.replace(`/${color}/`, Colors.FG_BLUE);
							break;

						case "fg_magenta":
							v = v.replace(`/${color}/`, Colors.FG_MAGENTA);
							break;

						case "fg_cyan":
							v = v.replace(`/${color}/`, Colors.FG_CYAN);
							break;

						case "fg_white":
							v = v.replace(`/${color}/`, Colors.FG_WHITE);
							break;

						// Background colors (bg_).
						case "bg_black":
							v = v.replace(`/${color}/`, Colors.BG_BLACK);
							break;

						case "bg_red":
							v = v.replace(`/${color}/`, Colors.BG_RED);
							break;

						case "bg_green":
							v = v.replace(`/${color}/`, Colors.BG_GREEN);
							break;

						case "bg_yellow":
							v = v.replace(`/${color}/`, Colors.BG_YELLOW);
							break;

						case "bg_blue":
							v = v.replace(`/${color}/`, Colors.BG_BLUE);
							break;

						case "bg_magenta":
							v = v.replace(`/${color}/`, Colors.BG_MAGENTA);
							break;

						case "bg_cyan":
							v = v.replace(`/${color}/`, Colors.BG_CYAN);
							break;

						case "bg_white":
							v = v.replace(`/${color}/`, Colors.BG_WHITE);
							break;

						// Styles (st_).
						case "st_bold":
							v = v.replace(`/${color}/`, Colors.ST_BOLD);
							break;

						case "st_dim":
							v = v.replace(`/${color}/`, Colors.ST_DIM);
							break;

						case "st_italic":
							v = v.replace(`/${color}/`, Colors.ST_ITALIC);
							break;

						case "st_underline":
							v = v.replace(`/${color}/`, Colors.ST_UNDERLINE);
							break;

						case "st_blink":
							v = v.replace(`/${color}/`, Colors.ST_BLINK);
							break;

						case "st_reverse":
							v = v.replace(`/${color}/`, Colors.ST_REVERSE);
							break;

						case "st_hidden":
							v = v.replace(`/${color}/`, Colors.ST_HIDDEN);
							break;

						case "st_strike":
							v = v.replace(`/${color}/`, Colors.ST_REVERSE);
							break;

						case "st_reset":
							v = v.replace(`/${color}/`, Colors.ST_RESET);
							break;

						default:
							new stderr().write(`Unknown color: '${color}'.`);
					};

					reading_color = false;
					color = "";
				};
			}
			else if (reading_color) {
				const validChars = "abcdefghijklmnopqrstuvwxyz_"
				if (validChars.split("").includes(chars[c])) color += chars[c].toLowerCase();
				else new stderr().write(`Invalid character in color expression: '${chars[c]}'.`);
			}
			else continue;
		};

		return console.log(v);
	}
}

class stdin {
	constructor() { }

	/**
	 * Reads user input.
	 * @param {*} m The text the user is responding to.
	 * @returns {string} The user's response.
	 */
	read(m = "") {
		return prompt(m);
	}
}

class stderr {
	constructor() { }

	/**
	 * Displays error and exits the process.
	 * @param {*} err The error message.
	 * @param {*} code The exit code.
	 */
	write(err = "", code = 1) {
		console.log(`${Colors.ST_BOLD}${Colors.FG_RED}Error ${code}: ${Colors.FG_WHITE}${err}${Colors.ST_RESET}`);
		exit(code);
	}
}

/**
 * Standard Input Output.
 */
class stdio {
	static out = new stdout();
	static in = new stdin();
	static err = new stderr();
}

module.exports = stdio;

class Colors {
	constructor() { }

	base = "\x1b["

	// FG colors.
	FG_BLACK = `${this.base}30m`;
	FG_RED = `${this.base}31m`;
	FG_GREEN = `${this.base}32m`;
	FG_YELLOW = `${this.base}33m`;
	FG_BLUE = `${this.base}34m`;
	FG_MAGENTA = `${this.base}35m`;
	FG_CYAN = `${this.base}36m`;
	FG_WHITE = `${this.base}37m`;

	// BG colors.
	BG_BLACK = `${this.base}40m`;
	BG_RED = `${this.base}41m`;
	BG_GREEN = `${this.base}42m`;
	BG_YELLOW = `${this.base}43m`;
	BG_BLUE = `${this.base}44m`;
	BG_MAGENTA = `${this.base}45m`;
	BG_CYAN = `${this.base}46m`;
	BG_WHITE = `${this.base}47m`;

	// Styles.
	ST_BOLD = `${this.base}1m`;
	ST_DIM = `${this.base}2m`;
	ST_ITALIC = `${this.base}3m`;
	ST_UNDERLINE = `${this.base}4m`;
	ST_BLINK = `${this.base}5m`;
	ST_REVERSE = `${this.base}7m`;
	ST_HIDDEN = `${this.base}8m`;
	ST_STRIKE = `${this.base}9m`;
	ST_RESET = `${this.base}0m`;
}

module.exports = Colors;

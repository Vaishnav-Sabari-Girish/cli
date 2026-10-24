import {
	siC,
	siCplusplus,
	siGnubash,
	siGo,
	siHaskell,
	siJavascript,
	siLua,
	siMarkdown,
	siOpenjdk,
	siPerl,
	siPython,
	siRust,
	siTypescript,
	siVim,
	siZig,
} from 'simple-icons';

export interface LanguageIconData {
	path: string;
	hex: string;
}

// Keyed by exact language name (lowercased), not slugify(): "C" and "C++" both
// slugify to "c" (see lib/slug.ts), but they're distinct languages with distinct icons.
const ICONS_BY_NAME: Record<string, LanguageIconData> = {
	c: siC,
	'c++': siCplusplus,
	go: siGo,
	haskell: siHaskell,
	java: siOpenjdk,
	javascript: siJavascript,
	lua: siLua,
	markdown: siMarkdown,
	perl: siPerl,
	python: siPython,
	rust: siRust,
	shell: siGnubash,
	typescript: siTypescript,
	'vim script': siVim,
	zig: siZig,
};

export function getLanguageIcon(language: string): LanguageIconData | null {
	return ICONS_BY_NAME[language.trim().toLowerCase()] ?? null;
}

// languages/index.astro and languages/[language]/[...page].astro join
// same-slug languages (e.g. "C" + "C++") into one label with " / ".
export function splitLanguageLabel(label: string): string[] {
	return label.split(' / ');
}

// A very dark brand color (e.g. Rust's official black) is nearly invisible
// against this site's dark background, so those icons get a faint outline.
export function isNearBlack(hex: string): boolean {
	const r = parseInt(hex.slice(0, 2), 16);
	const g = parseInt(hex.slice(2, 4), 16);
	const b = parseInt(hex.slice(4, 6), 16);
	return (0.299 * r + 0.587 * g + 0.114 * b) / 255 < 0.15;
}

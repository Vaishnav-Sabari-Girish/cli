// A leading emoji ("📻 gtm(d) is…") knocks a description out of line with
// its neighbours in a list, so drop it (plus any variation selector/ZWJ tail).
const LEADING_EMOJI = /^(?:\p{Extended_Pictographic}[️‍]*)+\s*/u;

export const stripLeadingEmoji = (text: string) => text.replace(LEADING_EMOJI, '');

const regex = new RegExp('^.*(?<searched>' + {{ui.regexSearch.value}} + ').*$', 'gim');

const matches = [...{{data}}.Body.matchAll(regex)];

return {
  ...{{data}},
  matches: matches.map((m) => m[0]),
};
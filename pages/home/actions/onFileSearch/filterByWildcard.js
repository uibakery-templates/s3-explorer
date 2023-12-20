const wildcard = {{ui.wildcardSearch.value}}.replaceAll('.', '\\.').replaceAll('?', '[a-z]').replaceAll('*', '.*').replaceAll('#', '\\d');

const regex = new RegExp(`^${wildcard}$`, 'i');

return {{actions.listAllFiles.data}}.filter((file) => regex.test(file.Key));
const regex = new RegExp('\\.(' + {{ui.selectExtension.value}}.join('|') + ')$');
return {{data}}.filter((file) => regex.test(file.Key));
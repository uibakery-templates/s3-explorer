{{state.searchProgress}} += 100 / {{actions.listFileWithExtension.data.length}};

{{ui.progressBar}}.setValue({{state.searchProgress}}.toFixed(1));

{{ui.progressText}}.setValue('Processing: ' + {{data}}.fileKey);

return {{data}};
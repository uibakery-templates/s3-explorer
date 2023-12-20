const actionMapper = {
  ['copy']: {{actions.copyFile}},
  ['move']: {{actions.moveFile}},
};

await actionMapper[{{ui.popupForm.value.id}}].trigger({ ...ui.popupForm.value });

{{ui.popupForm.close()}};
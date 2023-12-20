const actionMapper = {
  ['download']: {{actions.downloadFile}},
  ['delete']: {{actions.deleteFile}},
};

await actionMapper[{{params.id}}].trigger({ fileKey: params?.row?.Key });
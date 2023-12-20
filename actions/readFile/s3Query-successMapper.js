return {
  ...{{data}},
  Body: atob({{data.BodyBase64}}),
};
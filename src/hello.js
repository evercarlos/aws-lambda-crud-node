module.exports.handler = async (event) => {
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: "Hello World Prueba!",
        input: event,
      },
      null,
      2
    ),
  };
};

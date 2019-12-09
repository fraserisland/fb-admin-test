require("dotenv").config()

exports.handler = async (event, context, callback) => {
  return callback(null, {
    statusCode: 200,
    body: JSON.stringify({
      data: `Test2 data added successfully`
    })
  })
}

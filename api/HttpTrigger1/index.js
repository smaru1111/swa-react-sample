// swa start --api-location ./api
// でスタートして、localhost4280にアクセス

module.exports = async function (context, req) {
    context.log('JavaScript HTTP trigger function processed a request.');
  
    context.res.json({
      text: "Hello from the API"
    });
  }
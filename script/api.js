const queryString = `https://newsapi.org/v2/everything?q=keyword&


request.get(queryString, (err, response, body) => {
  if (err) {
    console.error(err);
  }
  const resp = JSON.parse(body);
  console.log(resp.title);
});
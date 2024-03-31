const queryString = `https://newsapi.org/v2/everything?q=keyword&apiKey=27dddb94b7ba4cf8af8657fc2ac9ef12`;


request.get(queryString, (err, response, body) => {
  if (err) {
    console.error(err);
  }
  const resp = JSON.parse(body);
  console.log(resp.title);
});
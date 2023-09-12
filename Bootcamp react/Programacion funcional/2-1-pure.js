async function app() {
  let promise = fetch('https://api.github.com/users/codigofacilito');
  let result = await promise
    .then((res) => res.json())
    .then((result) => result.avatar_url)
    .then((avatarUrl) => console.log(avatarUrl))
    .catch((err) => console.error(err))
    .finally(() => console.info('cleanup'));
  console.log(result);
}

app();

async function doCall() {
  const username = "toastbubbles";
  const url = `https://api.github.com/repos/${username}/codeup-web-exercises/events`;
  try {
    let resp = await fetch(url, {
      headers: { Authorization: `token ${keys.github}` },
    });
    let data = await resp.json();

    // console.log(resp);
    console.log(data[0]);
    console.log(data[0].created_at);
    console.log(data[0].payload.commits[0].message);
    let date = data[0].created_at;
    let message = data[0].payload.commits[0].message;
    appender({ date, message });
  } catch (error) {
    console.log(error);
  }
}
doCall();
function appender(obj) {
  console.log(obj);
  document.body.innerHTML += `<div>last commit:</div>`;
  document.body.innerHTML += `<div>  date: ${obj.date}</div>`;
  document.body.innerHTML += `<div>  msg: ${obj.message}</div>`;
}

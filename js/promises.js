async function doCall() {
  const username = "toastbubbles";
  //const url = `https://api.github.com/repos/${username}/codeup-web-exercises/events`;
  const url = `https://api.github.com/users/${username}/repos`;
  try {
    let resp = await fetch(url, {
      headers: { Authorization: `token ${keys.github}` },
    });
    let data = await resp.json();

    sortAndPrint(data);
  } catch (error) {
    console.log(error);
  }
}
doCall();

function sortAndPrint(data) {
  data.sort((a, b) => {
    return Date.parse(b.pushed_at) - Date.parse(a.pushed_at);
  });

  let name = data[0].name;
  let date = data[0].pushed_at;
  appender({ name, date });
  name = data[data.length - 1].name;
  date = data[data.length - 1].pushed_at;
  appender({ name, date });
}
function appender(obj) {
  console.log(obj);
  document.body.innerHTML += `<div>last commit:</div>`;
  document.body.innerHTML += `<div>  name: ${obj.name}</div>`;
  document.body.innerHTML += `<div>  date: ${obj.date}</div>`;
}

async function wait(time) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(`You'll see this after ${time} seconds`);
    }, time);
  });
}
wait(1000).then((resp) => console.log(resp));
wait(3000).then((resp) => console.log(resp));

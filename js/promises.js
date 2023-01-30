async function doCall() {
  const username = "toastbubbles";
  //const url = `https://api.github.com/repos/${username}/codeup-web-exercises/events`;
  const url = `https://api.github.com/users/${username}/repos`;
  try {
    let resp = await fetch(url, {
      headers: { Authorization: `token ${keys.github}` },
    });
    let data = await resp.json();

    // console.log(resp);
    console.log(data);
    // console.log(data[0].created_at);
    // console.log(data[0].payload.commits[0].message);
    // let date = data[0].created_at;
    // let message = data[0].payload.commits[0].message;
    // appender({ date, message });
    sortAndPrint(data);
  } catch (error) {
    console.log(error);
  }
}
doCall();

function sortAndPrint(data) {
  for (let i = 0; i < data.length; i++) {
    // console.log(data[i].pushed_at);
    // let arrayify = data[i].pushed_at.slice(0, -1).split("T");
    // // console.log(arrayify);
    // let year = arrayify[0].split("-")[0],
    //   month = arrayify[0].split("-")[1],
    //   day = arrayify[0].split("-")[2],
    //   hour = arrayify[1].split(":")[0],
    //   minute = arrayify[1].split(":")[1],
    //   second = arrayify[1].split(":")[2];
    // let dataObj = {
    //   id: i + 1,
    //   date: {
    //     year,
    //     month,
    //     day,
    //     hour,
    //     minute,
    //     second,
    //   },
    // };
    // console.log(Date.parse(data[i].pushed_at));
    // console.log(dataObj);
  }
  data.sort((a, b) => {
    return Date.parse(b.pushed_at) - Date.parse(a.pushed_at);
  });
  //   console.log(data);
  let name = data[0].name;
  let date = data[0].pushed_at;
  appender({ name, date });
}
function appender(obj) {
  console.log(obj);
  document.body.innerHTML += `<div>last commit:</div>`;
  document.body.innerHTML += `<div>  name: ${obj.name}</div>`;
  document.body.innerHTML += `<div>  date: ${obj.date}</div>`;
}

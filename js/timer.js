setTimeout(() => {
    console.log("timeout 1s")
}, 1000);

const tid = setTimeout(() => {
    console.log("timeout 5s")
}, 5000);
clearTimeout(tid)

let time = 0;
const iid = setInterval(() => {
    ++time
    console.log(`interval ${time}`)
}, 1000);

setTimeout(() => {
    console.log('clear interval')
    clearInterval(iid)
}, 5000);
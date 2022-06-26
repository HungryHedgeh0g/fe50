to = ["https://google.com", "https://yandex.by", "https://mile.by", "https://onliner.by", "https://facebook.com", "https://microsoft.com"];

let max = 6, n = 1;
let timerId;
const fish = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, doloremque possimus illo dolorum ipsum nihil blanditiis reprehenderit atque porro laboriosam nemo ea odit incidunt sunt non temporibus. Iste, vero consequuntur?';

function changeAll() {
    link1.href = `${to[n - 1]}`;
    im1.src = `./img/img${n}b.jpg`;
    document.getElementById('description').getElementsByTagName('h3')[0].innerHTML = `Заголовок слайда ${n++}`;
    document.getElementById('description').getElementsByTagName('p')[0].innerHTML = `${fish}`;
    if(to[n-2].indexOf('://')==5) {
        document.getElementById('url').innerHTML = to[n-2].replace(to[n-2].substring(0,8), '');
    } else if(to[n-2].indexOf('://')==4) {
        document.getElementById('url').innerHTML = to[n-2].replace(to[n-2].substring(0,7), '');
    }
}

function timer() {
    if (n > max) n = 1;
    changeAll();
    timerId = setTimeout(timer, 5000);
}

function stop() {
    clearTimeout(timerId);
}

function next() {
    if (n > max) n = 1;
    changeAll();
}

function back() {
    n-=2;
    if (n < 1) n = 6;
    changeAll();
}

function clickMe() {
    location.href = to[n-1];
}
let gallery = [
    {
        file: ["red.jpg", "red1.jpg", "red2.jpg"],
        w: "300",
        title: "Красный костёл",
        link: "https://msj.by/katolicheskie-xramy/krasnyj-kostel-v-minske/",
        description: "В храме святого Симеона и святой Елены находится полномасштабная копия Туринской Плащаницы."
    },
    {
        file: ["troi.jpg", "troi1.jpg", "troi2.jpg"],
        w: "300",
        title: "Троицкое предместье",
        link: "https://www.belarus.by/ru/travel/belarus-life/trinity-suburb",
        description: "Троицкое предместье — исторический район города Минска, расположенный в северо-восточной части исторического центра на левом берегу реки Свислочь."
    },
    {
        file: ["mir.jpg", "mir1.jpg", "mir2.jpg"],
        w: "300",
        title: "Мирский замок",
        link: "https://mirzamak.by/",
        description: "Построенный в начале XVI в. магнатом Ю. И. Ильиничем замок стал первым частнособственническим замком на землях Беларуси."
    }
]

function addStyles() {
    f = document.getElementById("picturesHere");

    p1 = f.getElementsByTagName('p');
    a1 = f.getElementsByTagName('a');

    for (j = 0; j < p1.length; j++) {
        p1[j].style.cssText = `font-size: 18pt;
    text-align: center;`;
        a1[j].style = `text-decoration: none;
    color: blue;`;
    }
}

function drawPic() {

    let s = "";

    for (i = 0; i < gallery.length; i++) {
        s += `
        <div id="id${i}">
            <img onmouseover="timerId = setTimeout('roll(${i})', 2000)" onmouseout="clearTimeout(timerId)" onclick="showPic('${gallery[i].file[0]}', '${gallery[i].description}')" src="./img/${gallery[i].file[0]}" alt="" style="width: ${gallery[i].w}px;">
            <p><a href="${gallery[i].link}">${gallery[i].title}</a></p>
        </div>
    `;
    }

    picturesHere.innerHTML = s;

    addStyles();

}

function showPic(pic, descr) {
    bigPicture.innerHTML = `
        <img src="./img/${pic}" alt="" style="width: 1000px;" onclick="bigPicture.innerHTML='';">
        <p>${descr}</p>
    `
}

let max=2, k=0;
function roll(n) {
    if(++k>max) k=0;
    mid = document.getElementById(`id${n}`);
    mid.innerHTML = `
    <div>
        <img onmouseout="clearTimeout(timerId); drawPic()" onclick="showPic('${gallery[n].file[k]}', '${gallery[n].description}')" src="./img/${gallery[n].file[k++]}" alt="" style="width: ${gallery[n].w}px;">
        <p><a href="${gallery[n].link}">${gallery[n].title}</a></p>
    </div>
    `;
    addStyles();
    timerId = setTimeout(`roll(${n})`, 2000, n)
}

f = document.getElementById("picturesHere");

p1 = f.getElementsByTagName('p');
a1 = f.getElementsByTagName('a');

for (j = 0; j < p1.length; j++) {
    p1[j].style.cssText = `font-size: 18pt;
    text-align: center;`;
    a1[j].style = `text-decoration: none;
    color: blue;`;
}


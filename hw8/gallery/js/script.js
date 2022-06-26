let imgGallery = [
    {
        file: 'chinawall1.jpg',
        title: 'Великая Китайская стена',
        url: 'https://planetofhotels.com/guide/ru/kitay/pekin/velikaya-kitayskaya-stena',
        description: 'Одним из самых грандиозных сооружений в истории человечества является Великая Китайская стена, строительство которой велось на протяжении долгих лет, до конца правления династии Мин. Тянется это грандиозное строение с востока на запад в северной части страны, огибает пустыни, степи и отвесные горы.',
    },

    {
        file: 'pyramids1.jpg',
        title: 'Пирамида Хеопса',
        url: 'https://planetofhotels.com/guide/ru/egipet/kair/piramida-heopsa',
        description: 'Единственное из сохранившихся до наших дней 7 чудес света – это пирамида Хеопса, или пирамида Хуфу, как называют ее сами египтяне в отличие от остального мира, использующего греческое произношение имени фараона.'
    },

    {
        file: 'stonehenge1.jpg',
        title: 'Стоунхендж',
        url: 'https://planetofhotels.com/guide/ru/velikobritaniya/eymsberi/stounhendzh',
        description: 'Величественный Стоунхендж – самый известный кромлех в мире, расположенный возле города Эймсбери в Англии. Вокруг древнего сооружения много тайн, в частности, о том, кто, когда и для чего его создал.'
    }
]

function hidePic() {
    document.getElementById('bigpic').style.display = 'none';
}

let a = '';
for (elem in imgGallery) {
    a += `
        <div id="p${+elem + 1}" class="pic">
            <img onclick="getPic(this.src, ${elem})" src="./img/${imgGallery[elem].file}" alt="" width="300">
            <p><a href="${imgGallery[elem].url}" target="_blank">${imgGallery[elem].title}</a></p>
        </div>
    `;
}
document.getElementById('picrow').innerHTML = a;

let b = '';

function getPic(src, t) {
    b = `
        <div>
            <img onclick="hidePic()" src="${src}" alt="">
            <p>${imgGallery[t].description}</p>
        </div>
    `;
    document.getElementById('bigpic').innerHTML = b;
    document.getElementById('bigpic').style.display = '';
}

let links = document.querySelectorAll('div:nth-of-type(1) a');
for (elem of links) {
    elem.style.cssText += `
        display: block;
        color: darkblue;
        font-size: 1.2em;
        text-align: center;
        margin-top: 0px;
        text-decoration: none;
    `;
}
let descs = document.querySelectorAll('div:nth-of-type(1) p');
for (elem of descs) {
    elem.style.cssText += `
        margin-top: 6px;
    `;
}

function slider(elem, url, i, img) {
    if (i == 3) {
        url = url.replace('3.jpg', '1.jpg');
        elem.setAttribute('src', `${url}`);
        i = 1;
    }
    else {
        url = url.replace((i) + '.jpg', (i + 1) + '.jpg');
        // меняем атрибут src у выбранной картинки
        elem.setAttribute('src', `${url}`);
        i++;
    }
    let timer = setTimeout(slider, 1000, elem, url, i, img);
    img.addEventListener('mouseout', function () {
        clearTimeout(timer);
        // вернёмся к первой картинке
        elem.setAttribute('src', url.substring(0, url.indexOf('.jpg')-1)+'1.jpg');
    });
}

// выберем отдельно каждый блок с картинкой
let pic1 = document.querySelector('#p1');
let pic2 = document.querySelector('#p2');
let pic3 = document.querySelector('#p3');

// если наводим на картинку, то выполнять функцию
pic1.addEventListener('mouseover', function (e) {
    if (e.target == pic1.querySelector('img')) {
        let i = 1;
        slider(e.target, './img/'+imgGallery[0].file, i, pic1);
    } else return;
});

pic2.addEventListener('mouseover', function (e) {
    if (e.target == pic2.querySelector('img')) {
        let i = 1;
        slider(e.target, './img/'+imgGallery[1].file, i, pic2);
    } else return;
});

pic3.addEventListener('mouseover', function (e) {
    if (e.target == pic3.querySelector('img')) {
        let i = 1;
        slider(e.target, './img/'+imgGallery[2].file, i, pic3);
    } else return;
});
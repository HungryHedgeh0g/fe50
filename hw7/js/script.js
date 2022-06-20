let imgGallery = [
    {
        file: 'chinawall_300.jpg',
        title: 'Великая Китайская стена',
        url: 'https://planetofhotels.com/guide/ru/kitay/pekin/velikaya-kitayskaya-stena',
        description: 'Одним из самых грандиозных сооружений в истории человечества является Великая Китайская стена, строительство которой велось на протяжении долгих лет, до конца правления династии Мин. Тянется это грандиозное строение с востока на запад в северной части страны, огибает пустыни, степи и отвесные горы.',
    },

    {
        file: 'pyramids_300.jpg',
        title: 'Пирамида Хеопса',
        url: 'https://planetofhotels.com/guide/ru/egipet/kair/piramida-heopsa',
        description: 'Единственное из сохранившихся до наших дней 7 чудес света – это пирамида Хеопса, или пирамида Хуфу, как называют ее сами египтяне в отличие от остального мира, использующего греческое произношение имени фараона.'
    },

    {
        file: 'stonehenge_300.jpg',
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
        <div class="pic">
            <img onclick="getPic(this.src, ${elem})" src="./img/${imgGallery[elem].file}" alt="">
            <p><a href="${imgGallery[elem].url}" target="_blank">${imgGallery[elem].title}</a></p>
        </div>
    `;
}
document.getElementById('picrow').innerHTML = a;

let b = '';

function getPic(src, t) {
    b = `
        <div>
            <img onclick="hidePic()" src="${src.replace('_300','')}" alt="">
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
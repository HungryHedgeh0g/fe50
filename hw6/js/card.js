let mas = [
    {
        poster: 'poster.png',
        type: 'type.png',
        offer: 'offer.png',
        title1: 'Тайная жизнь',
        title2: 'домашних животных 2',
        price: 50,
        currency: 'руб.',
        discount: 10,
        rating: 4,
        buy_button: 'buy.png',
        promotion: true,
    },
    {
        poster: 'toy4.jpg',
        type: 'type.png',
        offer: 'offer.png',
        title1: 'История игрушек 4',
        title2: 'Приключения Вилкинса',
        price: 60,
        currency: 'руб.',
        discount: 10,
        rating: 4,
        buy_button: 'buy.png',
        promotion: true,
    },
    {
        poster: 'ferd.jpg',
        type: 'type.png',
        offer: 'offer.png',
        title1: 'Фердинанд',
        title2: 'Побег из коровника',
        price: 40,
        currency: 'руб.',
        discount: 10,
        rating: 4,
        buy_button: 'buy.png',
        promotion: true,
    }
]

let card = "";
for (let elem in mas) {

    // Формат полной стоимости
    let fullPrice = `${mas[elem].price},00 ${mas[elem].currency}`;
    let offerPrice = `${Math.round(mas[elem].price * (100 - mas[elem].discount) * 0.01)},00 ${mas[elem].currency}`;

    let rank = "";
    let starsCount = 0;
    // можно загнать возможные баллы в массив и не плодить длинные ифы
    // но я пока не хочу
    if (mas[elem].rating > 0 && mas[elem].rating <= 5 && ((mas[elem].rating + 0.5) % 2 == 1 || (mas[elem].rating + 0.5) % 2 == 0 || mas[elem].rating % 2 == 1 || mas[elem].rating % 2 == 0)) {

        for (i = 0.5; i <= mas[elem].rating; i += 0.5) {
            if (Number.isInteger(i)) {
                rank = rank.replace("star_half ", "");
                starsCount--;
                rank += "star ";
            } else { rank += "star_half "; }
            starsCount++;
        }
    }
    for (i = 0; i < (5 - starsCount); i++)
        rank += "star_border ";

    // доделать акцию
    // знаю как делается, сделаю чуть позже
    card += `
    <div class="card">
        <div class="poster">
            <img src="./img/${mas[elem].poster}" alt="Тайная жизнь домашних животных 2">
            <img src="./img/${mas[elem].offer}" alt="Акция">
            <img src="./img/${mas[elem].type}" alt="Тип носителя">

        </div>
        <div class="title">
            <div>${mas[elem].title1}</div>
            <div>${mas[elem].title2}</div>
        </div>
        
        <div class="price">
            <div>${offerPrice}</div>
            <div>${fullPrice}</div>
        </div>
       
        <div class="rating">
            <span class="material-icons">${rank}</span>
        </div>
        <div class="order">
            <img src="./img/${mas[elem].buy_button}" alt="Купить">
        </div>
    </div>`;
}

cards.innerHTML = card;
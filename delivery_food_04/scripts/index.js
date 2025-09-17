const modalFunc = () => {
  const modal = document.querySelector(".cart-modal__overlay");
  const cartBtn = document.querySelector("#cart-button");

  const openModal = () => {
    modal.classList.add("open");
  };

  const closeModal = () => {
    modal.classList.remove("open");
  };

  cartBtn.addEventListener("click", () => {
    openModal();
  });

  modal.addEventListener("click", (event) => {
    if (
      event.target.classList.contains("cart-modal__overlay") ||
      event.target.closest(".cart-modal__header--close")
    ) {
      closeModal();
    }
  });
};

const restFunc = () => {
    const container = document.querySelector('#rests-container')

    const restArray = [
        {
            id: 0,
            title: 'Пицца плюс',
            time: 50,
            rating: 4.5,
            price: 900,
            type: 'Пицца',
            image: 'pizza-plus.jpg'
        },

        {
            id: 1,
            title: 'Тануки',
            time: 50,
            rating: 4.5,
            price: 900,
            type: 'Пицца',
            image: 'tanooki.jpg'
        },

        {
            id: 2,
            title: 'FoodBand',
            time: 50,
            rating: 4.5,
            price: 900,
            type: 'Пицца',
            image: 'food-band.jpg'
        },

        {
            id: 3,
            title: 'Жадина-пицца',
            time: 50,
            rating: 4.5,
            price: 900,
            type: 'Пицца',
            image: 'greedy-pizza.jpg'
        },

        {
            id: 4,
            title: 'Точка еды',
            time: 50,
            rating: 4.5,
            price: 900,
            type: 'Пицца',
            image: 'foodpoint.jpg'
        },

        {
            id: 5,
            title: 'PizzaBurger',
            time: 50,
            rating: 4.5,
            price: 900,
            type: 'Пицца',
            image: 'pizza-burger.jpg'
        }

    ]

    const loading = () => {
        container.innerHTML = '<p style="width: 100%; text-align: center;">Загрузка</p>'
    }

    const randerRests = (array) => {
        container.innerHTML = ''

        array.forEach((card) => {
            container.insertAdjacentHTML('beforeend', `
            <a href="./goods.html?id=${card.id}" class="products-cart">
                        <div class="products-cart_image">
                            <img src="./images/resto/${card.image}" alt="${card.image}">
                        </div>
                        <div class="products-cart_description">
                            <div class="products-cart_description-row">
                                <h4 class="products-cart_description--title">${card.title}</h4>
                                <div class="products-cart_description--bage">${card.time}</div>
                            </div>
                            <div class="products-cart_description-row">
                                <div class="products-cart_description-info">
                                    <div class="products-cart_description-info--raiting">
                                        <img src="./images/icons/star.svg" alt="star"> ${card.rating}
                                    </div>
                                    <div class="products-cart_description-info--price">
                                        ${card.price} ₽
                                    </div>
                                    <div class="products-cart_description-info--group">
                                        ${card.type}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </a>   
            `)
        })
    }

    if (container) {
        loading()
    
        setTimeout(() => {
            randerRests(restArray)
        }, 1000)
    }
}

const cardRestFunc = () => {
    const container = document.querySelector('#rest-card_container')

    const restCardArray = [
        {
            id: 0,
            name: 'Ролл угорь стандарт',
            text: 'Рис, угорь, соус унаги, кунжут, водоросли нори.',
            price: 250,
            image: 'good-1.jpg'
        },

        {
            id: 1,
            name: 'Калифорния лосось стандарт',
            text: 'Рис, лосось, авокадо, огурец, майонез, икра масаго, водоросли нори.',
            price: 395,
            image: 'california-standart.jpg'
        },

        {
            id: 2,
            name: 'Окинава стандарт',
            text: 'Рис, креветка отварная, сыр сливочный, лосось, огурец свежий...',
            price: 250,
            image: 'okinava-standart.jpg'
        },

        {
            id: 3,
            name: 'Цезарь маки хl',
            text: 'Рис, куриная грудка копченая, икра масаго, томат, айсберг, соус цезарь...',
            price: 250,
            image: 'cizar-mix.jpg'
        },

        {
            id: 4,
            name: 'Ясай маки стандарт 185 г',
            text: 'Рис, помидор свежий, перец болгарский, авокадо, огурец, айсберг',
            price: 250,
            image: 'yasay-standart.jpg'
        },

        {
            id: 5,
            name: 'Ролл с креветкой стандарт',
            text: 'Рис, водоросли нори, креветки отварные, сыр сливочный, огурцы',
            price: 250,
            image: 'shrimp-standart.jpg'
        }

    ]

    const loading = () => {
        container.innerHTML = '<p style="width: 100%; text-align: center;">Загрузка</p>'
    }

    const randerCartRests = (array) => {
        container.innerHTML = ''

        array.forEach((card) => {
            container.insertAdjacentHTML('beforeend', `
                <div class="products-cart">
                    <div class="products-cart_image">
                        <img src="./images/goods/${card.image}" alt="rest-1">
                    </div>
                    <div class="products-cart_description">
                        <div class="products-cart_description-row">
                            <h5 class="products-cart_description--name">
                                ${card.name}
                            </h5>
                        </div>
                        <div class="products-cart_description-row">
                            <p class="products-cart_description--text">
                                ${card.text}
                            </p>
                        </div>
                        <div class="products-cart_description-row">
                            <div class="products-cart_description-controls">
                                <button class="btn btn-primary">
                                    В корзину
                                    <img src="./images/icons/shopping-cart-white.svg" alt="shopping-cart-white">
                                </button>

                                <span class="products-cart_description-controls--price">
                                    ${card.price} ₽
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            `)
        })
    }

    if (container) {
        loading()
    
        setTimeout(() => {
            randerCartRests(restCardArray)
        }, 1000)
    }
}

modalFunc()
restFunc()
cardRestFunc()

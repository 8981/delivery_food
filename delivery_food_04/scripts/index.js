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
                                        ${card.price}
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

modalFunc()
restFunc()

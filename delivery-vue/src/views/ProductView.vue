<template>
  <div>
    <section class="products">
      <div class="container">
        <div class="products-wrapper" id="rest-card_container">
          <div class="products-cart" v-for="rest in restCardArray" :key="rest.id">
            <div class="products-cart_image">
              <img :src="getUrl(rest.image)" alt="rest-1" />
            </div>
            <div class="products-cart_description">
              <div class="products-cart_description-row">
                <h5 class="products-cart_description--name">
                  {{rest.name}}
                </h5>
              </div>
              <div class="products-cart_description-row">
                <p class="products-cart_description--text">
                  {{rest.text}}
                </p>
              </div>
              <div class="products-cart_description-row">
                <div class="products-cart_description-controls">
                  <button class="btn btn-primary">
                    В корзину
                    <img
                      src="../assets/images/icons/shopping-cart-white.svg"
                      alt="shopping-cart-white"
                    />
                  </button>

                  <span class="products-cart_description-controls--price">
                    {{rest.price}} ₽
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { restCardArray } from '../constants/cartRests';
const getUrl = (name) => {
  return new URL(`../assets/images/goods/${name}`, import.meta.url);
};
</script>

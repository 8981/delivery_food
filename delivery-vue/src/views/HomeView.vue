<template>
  <div>
    <section class="banner">
      <div class="container">
        <div class="banner-item">
          <h2 class="banner-item--title">
            Онлайн-сервис <br />доставки еды на дом
          </h2>
          <p class="banner-item--subtitle">
            Блюда из любимого ресторана привезет курьер в перчатках, маске и с
            антисептиком
          </p>
        </div>
      </div>
    </section>

    <section class="products">
      <div class="container">
        <div class="products-header">
          <h3 class="products-header--title">Рестораны</h3>
          <input
            type="text"
            class="products-header--search"
            placeholder="Поиск блюд и ресторанов"
          />
        </div>
        <div class="products-wrapper" id="rests-container">
          <router-link
            class="products-cart"
            v-for="rest in restArray"
            :key="rest.id"
            :to="`/rest?id=${rest.id}`"
          >
            <div class="products-cart_image">
              <img :src="getUrl(rest.image)" alt="rest-1" />
            </div>
            <div class="products-cart_description">
              <div class="products-cart_description-row">
                <h4 class="products-cart_description--title">{{rest.title}}</h4>
                <div class="products-cart_description--bage">{{rest.time}}</div>
              </div>
              <div class="products-cart_description-row">
                <div class="products-cart_description-info">
                  <div class="products-cart_description-info--raiting">
                    <img src="../assets/images/icons/star.svg" alt="star" /> {{rest.rating}}
                  </div>
                  <div class="products-cart_description-info--price">
                    {{rest.price}} ₽
                  </div>
                  <div class="products-cart_description-info--group">{{rest.type}}</div>
                </div>
              </div>
            </div>
          </router-link>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { restArray } from '../constants/rests';
const getUrl = (name) => {
  return new URL(`../assets/images/resto/${name}`, import.meta.url)
}
</script>

<script setup>
const token = useToken()
</script>

<template>
  <div class="min-vh-100 d-flex flex-column">
    <header
      style="height: 70px;"
      class="border-bottom bg-warning bg-opacity-50 p-3 d-flex align-items-center">
      <div class="container">
        <div class="d-flex align-items-center">
          <nuxt-link
            :to="{ name: 'index' }">
            Главная
          </nuxt-link>
          <template v-if="token">
            <nuxt-link
              class="ms-3"
              to="#">
              Заказы
            </nuxt-link>
            <nuxt-link
              class="ms-3"
              to="#">
              Корзина
            </nuxt-link>
            <button
              class="ms-auto btn btn-danger"
              @click="token = null">
              Выйти
            </button>
          </template>
          <nuxt-link
            v-else
            class="ms-auto btn btn-primary"
            :to="{ name: 'auth' }">
            Войти
          </nuxt-link>
        </div>
      </div>
    </header>
    <main class="container flex-grow-1 d-flex">
      <slot />
    </main>
    <footer
      style="height: 90px;"  
      class="border-top bg-secondary bg-opacity-25 p-3 d-flex align-items-center">
      <div class="container">
        <code>
          {{ '<footer/>' }}
        </code>
      </div>
    </footer>
  </div>
</template>
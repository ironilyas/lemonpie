<script setup>
const user = reactive({
  login: null,
  password: null
})
const pending = ref(false)
const error = ref(false)

function submit () {
  pending.value = true
  error.value = false
  setTimeout(async () => {
    if (user.login === 'admin' && user.password === 'password') {
      const token = useToken()
      token.value = 'YES!'
      await navigateTo({
        name: 'index'
      })
      return
    }
    error.value = true
    pending.value = false
  }, 2000)
}
</script>

<template>
  <div class="mx-auto">
    <form
      style="width: 400px;"
      class="border border-2 shadow rounded-3 p-4 my-5"
      @submit.prevent="submit">
      <h4 class="fw-bold fs-4 mb-3">
        Вход
      </h4>
      <div class="mb-3">
        <label for="login" class="form-label">
          Логин
        </label>
        <input
          v-model.trim="user.login"
          type="text"
          id="login"
          class="form-control"
          placeholder="Логин">
      </div>
      <div class="mb-4">
        <label for="password" class="form-label">
          Пароль
        </label>
        <input
          v-model.trim="user.password"
          type="password"
          id="password"
          class="form-control"
          placeholder="Пароль">
      </div>
      <span
        v-if="error"
        class="d-inline-block text-danger mb-2">
        Неверный логин и/или пароль
      </span>
      <button
        type="submit"
        class="btn btn-primary w-100"
        :disabled="pending">
        <div
          v-if="pending"
          class="spinner-border spinner-border-sm">
          <span class="visually-hidden"/>
        </div>
        Войти
      </button>
    </form>
  </div>
</template>
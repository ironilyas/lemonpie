export default defineNuxtConfig({
  css: [
    'assets/styles/main.css',
    // 'bootstrap-icons/font/bootstrap-icons.min.css'
  ],
  plugins: [
    { src: '~/plugins/bootstrap.js', mode: 'client' }
  ]
})

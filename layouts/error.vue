<template>
  <div class="d-flex flex-column justify-content-center align-items-center py-5">
    <h1 class="display-1 text-white">
      {{ code }}
    </h1>
    <h2 class="h1 mt-4">
      {{ message }}
    </h2>
    <nuxt-link class="d-flex align-items-center mt-4 text-white" to="/">
      <fa icon="arrow-left" />
      <p class="ml-2 mb-0">
        Back to home
      </p>
    </nuxt-link>
  </div>
</template>

<script>
export default {
  props: {
    error: {
      type: Object,
      default: null,
    },
  },
  computed: {
    code() {
      return (this.error && this.error.statusCode) || 500
    },
    message() {
      return (this.error.message || 'An unknown error occurred') + '.'
    },
  },
}
</script>

<template>
  <div class="d-flex flex-column justify-content-center align-items-center py-5">
    <div class="d-flex flex-column align-items-center w-75 w-md-50 w-lg-25 w-xl-20">
      <img class="w-100" src="/icon.png" alt="CHamburr">
    </div>
    <h1 class="display-2 mt-4 mb-2 text-white">Han Cen</h1>
    <h2 class="h1">@CHamburr</h2>
    <div class="d-flex flex-wrap justify-content-center mt-4">
      <a
        v-for="element in socials"
        :key="element.name"
        :href="element.url"
        target="_blank"
        class="mx-3 h1 text-white"
        v-b-tooltip
        :title="element.name"
        :aria-label="element.name"
      >
        <fa :icon="element.icon" />
      </a>
    </div>
  </div>
</template>

<script>
import socials from '~/assets/social.json'

export default {
  data() {
    return {
      socials
    }
  }
}
</script>

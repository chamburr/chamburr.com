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
export default {
  data() {
    return {
      socials: [
        {
          "name": "GitHub",
          "url": "https://github.com/chamburr",
          "icon": ["fab", "github"],
        },
        {
          "name": "Keybase",
          "url": "https://keybase.io/chamburr",
          "icon": ["fab", "keybase"],
        },
        {
          "name": "Twitter",
          "url": "https://twitter.com/@CHamburr22",
          "icon": ["fab", "twitter"],
        },
        {
          "name": "Facebook",
          "url": "https://facebook.com/chamburr22",
          "icon": ["fab", "facebook"],
        },
        {
          "name": "Instagram",
          "url": "https://instagram.com/chamburr",
          "icon": ["fab", "instagram"],
        },
        {
          "name": "LinkedIn",
          "url": "https://linkedin.com/in/chamburr",
          "icon": ["fab", "linkedin"],
        },
        {
          "name": "Discord",
          "url": "https://discord.com/users/446290930723717120",
          "icon": ["fab", "discord"],
        },
        {
          "name": "Email",
          "url": "mailto:hi@chamburr.xyz",
          "icon": ["fas", "at"],
        },
      ],
    }
  },
}
</script>

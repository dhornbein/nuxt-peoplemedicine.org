<template>
  <main class="collection collection-resources" :class="cssClass">
    <header class="collection__header">
      <nuxt-link to="/resources">
        <h1 class="capitalize"><CollectionIcon name="resources" class="mr-2" />Resources</h1>
      </nuxt-link>
    </header>

    <nuxt-child />

  </main>
</template>

<script>

export default {
  scrollToTop: true,
  computed: {
    cssClass() {
      const slug = this.$route.params.slug ? this.$route.params.slug : false
      return {
          'slug': slug,
        }
    }
    
  },
}
</script>

<style lang="scss">
// styled in /pages/_collection.vue
</style>
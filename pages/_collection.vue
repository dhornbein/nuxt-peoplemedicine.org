<template>
  <main class="collection" :class="cssClass">
    <header class="collection__header">
      <nuxt-link :to="`/${$route.params.collection}`">
        <h1 class="capitalize"><CollectionIcon :name="$route.params.collection" class="mr-2" />{{ $route.params.collection }}</h1>
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
      return [
        `collection-${this.$route.params.collection}`,
        {
          'slug': slug,
        }
      ]
    }
    
  },
}
</script>

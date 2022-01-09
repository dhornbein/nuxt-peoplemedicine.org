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

<style lang="scss">
.collection {
  @apply bg-brand-cream;
  
  .collection__header {
    @apply p-10 text-center mb-5 transition-all;
    h1 {
      @apply text-4xl font-bold;
    }
  }
  
  &.slug {
    .collection__header {
      @apply p-2 text-left mb-0;
      h1 {
        @apply text-lg;
      }
    }
  }

  &.collection-resources {
    .collection__header {
      @apply bg-brand-blue-400;
    }
  }
  &.collection-philosophies {
    .collection__header {
      @apply bg-brand-green-500;
    }
  }
}
</style>
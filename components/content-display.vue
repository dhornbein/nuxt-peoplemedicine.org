<template>
  <div :id="page.slug"
    class="my-10"
  >
    <h2 class="mb-2 text-2xl md:text-4xl font-bold text-dark group">
      <nuxt-link :to="href(page.slug)" class="group-hover:text-brand-red">
        {{ page.title }}
        <span class="group-hover:inline hidden font-mono font-bold text-sm">(Permalink)</span>
      </nuxt-link>
    </h2>
  
    <div v-if="getProperty(page)" class="text-brand-red mb-4 pl-2">
      <p class="font-mono font-bold text-sm mb-0">
        <slot></slot>
      </p>
      <p>{{ getProperty(page) }}</p>
    </div>

    <nuxt-content :document="page" />
  </div>
</template>

<script>
export default {
  props: {
    page: {
      type: Object,
      required: true
    },
    collection: {
      type: String,
      default: 'skills'
    },
    subtitle: {
      type: String,
      default: 'description'
    }
  },
  methods: {
    href(slug) {
      return `/${this.collection}/${slug}`
    },
    getProperty(item) {
      return (item.hasOwnProperty(this.subtitle)) ? item[this.subtitle] : false
    }
  },
}
</script>
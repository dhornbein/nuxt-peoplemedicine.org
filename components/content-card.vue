<template>
  <nuxt-link :to="href(page.slug)" :data-target="page.slug"
    class="related__item group block m-4 p-4 bg-white border border-gray-400 hover:border-brand-red rounded-lg shadow-md text-brand-red"
  >
    <p class="mb-2 text-2xl font-bold text-dark group-hover:text-brand-red">{{ page.title }}</p>
  
    <div v-if="getProperty(page)">
      <p class="font-mono font-bold text-sm mb-0">
        <slot></slot>
      </p>
      <p>{{ getProperty(page) }}</p>
    </div>
  </nuxt-link>
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
    },
    local: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    href(slug) {
      if (this.local) return `#${slug}`
      return `/${this.collection}/${slug}`
    },
    getProperty(item) {
      return (item.hasOwnProperty(this.subtitle)) ? item[this.subtitle] : false
    }
  },
}
</script>
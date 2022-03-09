<template>
  
  <div class="content-grid">
    <aside class="flex flex-wrap justify-center -mx-4">
      <div class="w-full sm:w-1/2 md:w-1/3 flex p-4" v-for="page in content" :key="page.slug">

        <a :href="href(page.slug, true)" :data-target="page.slug" @click.prevent="openModal($event, page)"
          class="related__item group block w-full p-4 bg-white border border-gray-400 hover:border-brand-red rounded-lg shadow-md text-brand-red"
        >
          <p class="mb-2 text-lg font-bold text-dark group-hover:text-brand-red">{{ page.title }}</p>
        
          <div v-if="getProperty(page)">
            <p class="font-mono font-bold text-sm mb-0">
              <slot></slot>
            </p>
            <p>{{ getProperty(page) }}</p>
          </div>
        </a>

      </div>
    </aside>

    <template>
      
      <div v-for="page in content" :key="page.slug" :ref="page.slug" v-show="display" 
        class="my-10"
      >
          <nuxt-link :to="href(page.slug)">
            <h2 class="mb-4 text-2xl md:text-4xl font-bold text-dark hover:text-brand-red">
            {{ page.title }}
            </h2>
          </nuxt-link>
      
        <div v-if="getProperty(page)" class="text-brand-red mb-4 pl-2 border-l-2 border-brand-red">
          <p class="font-mono font-bold text-sm mb-0">
            <slot></slot>
          </p>
          <p>{{ getProperty(page) }}</p>
        </div>

        <nuxt-content :document="page" class="max-w-prose" />
      </div>
      
    </template>

  </div>
  
</template>

<script>
export default {
  async fetch() {
    let data = await this.$content(this.collection).where({ slug: { $in: this.relations } }).fetch()
    this.content = data.sort((a, b) => this.relations.indexOf(a.slug) - this.relations.indexOf(b.slug))
  },
  props: {
    display: {
      type: Boolean,
      default: false
    },
    collection: {
      type: String,
      default: 'skills'
    },
    relations: {
      type: Array,
      default: () => []
    },
    subtitle: {
      type: String,
      default: 'description'
    },
    modal: {
      type: Boolean,
      default: true
    }
  },
  data() {
    return {
      content: [],
    }
  },
  methods: {
    href(slug, islocal = false) {
      if (islocal) return `#${slug}`
      return `/${this.collection}/${slug}`
    },
    getProperty(item) {
      return (item.hasOwnProperty(this.subtitle)) ? item[this.subtitle] : false
    },
    openModal(e, target) {
      this.$store.dispatch('modal/openModal', {
        html: this.$refs[target.slug][0],
        content: false,
      })
    }
  }
}
</script>
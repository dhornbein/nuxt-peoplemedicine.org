<template>
  
  <div class="content-grid">
    <aside class="flex flex-wrap justify-center -mx-4">
      <div class="w-full md:w-1/2 lg:w-1/3 flex" v-for="page in content" :key="page.slug">
        <contentCard :page="page" :collection="collection" :subtitle="subtitle" :local="local">
          <slot></slot>
        </contentCard>
      </div>
    </aside>
    <div v-if="display">
      
      <contentDisplay :page="page" :collection="collection" :subtitle="subtitle" v-for="page in content" :key="page.slug">
        <slot></slot>
      </contentDisplay>
      
    </div>
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
    local: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      content: [],
      params: 'none'
    }
  }
}
</script>
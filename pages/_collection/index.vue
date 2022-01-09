<template>
  <div class="flex flex-col justify-center px-2 pb-10 ">
    <article class=""
      v-for="article in articles" :key="article.slug">
      <div class="p-5 mb-5 bg-white rounded-lg shadow-lg h-full flex flex-col justify-between border-l-4" :class="colors(article)['border']">
        <h2 class="text-2xl hover:text-brand-red">
          <nuxt-link :to="link(article.slug)">
            {{ article.title }}
          </nuxt-link>
        </h2>
        <p v-if="false">{{ article.description ? article.description : article.excerpt }}</p>
      </div>
    </article>
  </div>
</template>

<script>

export default {
  async asyncData ({ $content, params, error }) {
    const articles = await $content( params.collection).fetch()

    if (!articles) {
      return error({ statusCode: 404, message: 'Collection not found' })
    }

    return {
      articles,
      params
    }
  },
  data() {
    return {
    }
  },
  methods: {
    link(to) {
      return '/' + this.params.collection + '/' + to
    },
    colors(article) {
      let bgColor = article.color ? 'bg-brand-' + article.color : false
      let textColor = article.color ? 'text-brand-' + article.color : false
      let borderColor = article.color ? 'border-brand-' + article.color : false
      return {
        bg: {[bgColor]: bgColor},
        text: {[textColor]: textColor},
        border: {[borderColor]: borderColor},
      }
    },
  }
}
</script>
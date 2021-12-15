<template>
  <main class="bg-brand-cream">
    <header class="p-10 text-center">
      <h1 class="text-4xl capitalize">{{ params.collection }}</h1>
    </header>
    <div class="flex justify-center p-10">
      <article class="w-1/2 md:w-1/3 lg:w-1/4 p-5"
        v-for="article in articles" :key="article.slug">
        <div class="p-5 bg-white rounded-lg shadow-lg h-full flex flex-col justify-between border" :class="colors(article)['border']">
          <h2 class="text-2xl mb-4 hover:text-brand-red">
            <nuxt-link :to="link(article.slug)">
              {{ article.title }}
            </nuxt-link>
          </h2>
          <p>{{ article.description ? article.description : article.excerpt }}</p>
          <footer class="mt-4">
            <nuxt-link :to="link(article.slug)" 
              class="p-4 bg-brand-cream hover:bg-brand-red hover:text-white rounded-md shadow-md inline-block"
            >Read more</nuxt-link>
          </footer>
        </div>
      </article>
    </div>
  </main>
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
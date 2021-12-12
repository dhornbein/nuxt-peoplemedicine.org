<template>
  <main class="bg-brand-cream">
    <header class="p-10 text-center">
      <h1 class="text-4xl capitalize">{{ params.collection }}</h1>
    </header>
    <div class="flex justify-center lg:container mx-auto p-10">
      <article class="p-5 bg-white rounded-lg shadow-lg w-1/2 lg:w-1/3"
        v-for="article in articles" :key="article.slug">
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
    }
  }
}
</script>
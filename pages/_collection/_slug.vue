<template>
  <article class="bg-brand-cream">
    <header class="p-10 text-center" :class="[ article.color ? 'bg-brand-' + article.color : null ]">
      <h1 class="text-4xl capitalize">{{ article.title }}</h1>
    </header>
    <main class="container mx-auto py-10 px-5">
      <nuxt-content :document="article" />
    </main>
  </article>
</template>

<script>
export default {
  async asyncData({ $content, params, error }) {
    const [article] = await $content(params.collection).where({ slug: params.slug }).fetch()

    if (!article) {
      return error({
        statusCode: 404,
        message:
          'Article (' +
          params.slug +
          ') not found in collection:' +
          params.collection,
      })
    }

    return { article, params }
  },
  head() {
    return {
      title: this.article.title,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.article.description,
        },
        // Open Graph
        {
          hid: 'og:title',
          property: 'og:title',
          content: this.article.title,
        },
        {
          hid: 'og:description',
          property: 'og:description',
          content: this.article.description,
        },
        // Twitter Card
        {
          hid: 'twitter:title',
          name: 'twitter:title',
          content: this.article.title,
        },
        {
          hid: 'twitter:description',
          name: 'twitter:description',
          content: this.article.description,
        },
      ],
    }
  },
}
</script>
<template>
  <div class="flex flex-col justify-center items-center px-2 pb-10 ">
    <article class="w-full md:w-1/2 lg:w-1/3 p-3"
      v-for="article in articles" :key="article.slug">
      <nuxt-link :to="link(article.slug)" class="p-5 mb-5 bg-white rounded-lg shadow-lg h-full flex flex-col justify-between border-l-4" :class="colors(article)['border']">
        <figure v-if="article.featuredImg" :style="`background-image:url('${article.featuredImg}');`"
          class="h-32 bg-cover bg-center rounded-t-lg -mt-5 -mx-5 mb-5"
        >

        </figure>
        <h2 class="text-2xl hover:text-brand-red">
            {{ article.title }}
        </h2>
        <p v-if="false">{{ article.description ? article.description : article.excerpt }}</p>
      </nuxt-link>
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
<template>
  <div class="flex flex-col justify-center px-2 pb-10 ">
    <article 
      class="p-5 mt-12 bg-white rounded-lg shadow-lg h-full flex flex-col justify-between border-l-4"
      :class="colors(article)['border']"
      v-for="article in articles" ref="articles" :key="article.slug">
      <div class="thumbnail h-16 -mt-14 overflow-hidden px-2 pb-2 mb-4 border-b border-gray-200">
        <nuxt-link :to="link(article.slug)">
          <BaseThumbnail
            class="shadow-md m-2 transition-transform"
            :src="thumbnailSrc(article.file)"
            :alt="`Image of the ${article.title} resource`" />
        </nuxt-link>
      </div>
      <div>
        <h2 class="text-2xl hover:text-brand-red">
          <nuxt-link :to="link(article.slug)">
            {{ article.title }}
          </nuxt-link>
        </h2>
        <p class="text-small">{{ article.description ? article.description : article.excerpt }}</p>
      </div>
      <footer>
        <div class="buttons flex flex-wrap gap-2 my-4 text-sm">
          <nuxt-link :to="link(article.slug)" class="btn is-primary">
            More Info
          </nuxt-link>
          <a
            v-if="article.links"
            class="btn"
            :href="article.links[0].href" 
            target="_blank" 
            rel="noopener noreferrer">{{article.links[0].text}}</a>
        </div>
        <div class="tags flex flex-wrap gap-1" v-if="article.tags">
          <span v-for="tag in article.tags.split(' ')" :key="tag"
            class="inline-block text-blue-600 text-xs"
          >#{{ tag }}</span>
        </div>
      </footer>
    </article>
  </div>
</template>

<script>

export default {
  async asyncData ({ $content, params, error }) {
    const articles = await $content('resources').fetch()

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
    thumbnailSrc(file){
      if (file.thumbnail) return file.thumbnail;
      if (file.gdocId) return file.gdocId;
      if (file.url) return file.url;
      return '/images/placeholder.png';
    },
    link(to) {
      return `/resources/${to}`
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
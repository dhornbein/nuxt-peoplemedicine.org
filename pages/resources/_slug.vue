<template>
  <article class="bg-brand-cream relative">
    <header class="header" :class="headerClass" :style="headerStyle">
      <div class="thumbnail h-28 -mt-8 overflow-hidden px-2 pb-2 mb-4 border-b border-brand-blue-400">
        <BaseThumbnail
          class="shadow-md m-2 transition-transform"
          :src="thumbnailSrc(article.file)"
          :alt="`Image of the ${article.title} resource`" />
      </div>
      <div class="header-content">
        <h1 class="text-4xl capitalize">{{ article.title }}</h1>
        <byLine :authors="article.authors" class="mt-4 pt-4 border-t border-current" v-if="article.authors"></byLine>
      </div>
    </header>
    <main class="container mx-auto py-10 px-5">
      <div class="buttons flex flex-wrap gap-2 mb-4">
        <a
          class="btn"
          :class="{
            'is-primary': idx === 0,
          }"
          v-for="(link, idx) in article.links" :key="link.text"
          :href="link.href"
          :target="link.target"
        >{{ link.text }}</a>
      </div>
      <div class="background" v-if="this.article.featuredImg" :style="headerStyle">
        <div class="gradient"></div>
      </div>
      <nuxt-content :document="article" class="max-w-prose mx-auto" />
    </main>
  </article>
</template>

<script>
export default {
  async asyncData({ $content, params, error }) {
    const collection = 'resources'
    const [article] = await $content(collection).where({ slug: params.slug }).fetch()

    if (!article) {
      return error({
        statusCode: 404,
        message:
          'Article (' +
          params.slug +
          ') not found in collection:' +
          collection,
      })
    }

    return { article, params }
  },
  methods: {
    thumbnailSrc(file){
      if (file.thumbnail) return file.thumbnail;
      if (file.gdocId) return file.gdocId;
      if (file.url) return file.url;
      return '/images/placeholder.png';
    },
  },
  computed: {
    headerClass() {
      let bgColor = this.article.color ? 'bg-brand-' + this.article.color : false
      let textColor = this.article.color ? 'text-brand-' + this.article.color : false
      return {
        [bgColor]: bgColor,
        [textColor]: textColor,
        'has-background': this.article.featuredImg,
      }
    },
    headerStyle() {
      return {
        backgroundImage: this.article.featuredImg ? 'url(' + this.article.featuredImg + ')' : null,
      }
    },
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

<style lang="scss" scoped>

.background {
  @apply bg-bottom bg-no-repeat bg-cover absolute left-0 bottom-0 right-0 overflow-hidden opacity-20 h-screen;

  .gradient {
    @apply bg-gradient-to-b from-brand-cream absolute left-0 right-0 bottom-0 h-full;
  }
}

.header {
  @apply border-b-4 border-brand-blue-400 bg-brand-blue-500;

  .header-content {
    @apply max-w-3xl mx-auto text-left;
  }
}

.header:not(.has-background) {
  @apply px-5 py-10 md:text-center text-dark border-b;
}

.header.has-background {
  @apply p-0 md:py-0 md:px-5 min-h-[40vh] flex flex-col justify-center items-center bg-cover bg-no-repeat bg-center;
  
  h1 {
    @apply text-white;
  }

  .header-content {
    @apply p-5 bg-opacity-70 bg-dark bg-gradient-to-b from-dark h-full w-full md:w-auto flex-grow flex flex-col justify-center;
  }
}

</style>
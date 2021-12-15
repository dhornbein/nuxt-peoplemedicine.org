<template>
  <address class="not-italic">
    By
    <template v-for="(author, key) in authors" ref="authors">
      <template v-if="authors.length > 1 && key > 0"><template v-if="key === authors.length - 1"> and</template><template v-else>, </template>
      </template>
      <span :key="author.name">
        <a class="underline" :href="formatHref(author)" rel="author" :ref="author.name" v-if="formatHref(author)">{{ author.name }}</a>
        <a v-if="author.email" :href="`mailto:${author.email}`" :title="`Send ${author.name} an email`">💌</a><a v-if="author.url" :href="author.url" :title="`Visit ${author.name}'s website`">🌐</a>
      </span>
    </template>
  </address>
</template>

<script>
export default {
  props: {
    authors: {
      type: Array,
      required: true,
    },
  },
  methods: {
    formatHref(author) {
      return author.url ? author.url : author.email ? 'mailto:' + author.email : null
    },
    toSentence(arr) {
      return arr.slice(0, -2).join(', ') + 
        (arr.slice(0, -2).length ? ', ' : '') + 
        arr.slice(-2).join(arr.length === 2 ? ' and ' : ', and ');
    }
  }
}
</script>
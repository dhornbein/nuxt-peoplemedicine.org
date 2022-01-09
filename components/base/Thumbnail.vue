<template>
  <figure>
    <img :src="source" :alt="alt">
    <figcaption>
      <slot></slot>
    </figcaption>
  </figure>
</template>

<script>
export default {
  props: {
    alt: {
      type: String,
      default: '',
    },
    src: {
      type: String, // URL or google drive ID
      default: '',
    },
    size: {
      type: String, // 123 | 123x123 | x123
      default: '320'
    }
  },
  methods: {
    fileURL(id) {
      return `https://drive.google.com/thumbnail?authuser=0&sz=w${this.size}&id=${id}`
    },
  },
  computed: {
    source() {
      if (/^https?|^\/\//.test(this.src))
        return this.src;

      return `https://drive.google.com/thumbnail?authuser=0&sz=w${this.size}&id=${this.src}`
    }
  },
}
</script>
<template>
  <figure>
    <img class="shadow-md" :src="source" :alt="alt">
    <figcaption class="text-sm mt-2">
      <slot></slot>
    </figcaption>
  </figure>
</template>

<script>
export default {
  props: {
    href: {
      type: String,
      default: false,
    },
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
    clickLink() {
      if (!this.href) return
      window.open(
        this.href,
        '_blank'
      );
    }
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
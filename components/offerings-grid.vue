<template>
  <nav :class="wrapperClass">
    <div :class="tileClass" v-for="offering in offerings" :key="offering.slug">
      <a class="p-5 h-full rounded-md flex flex-col items-center justify-between text-center transition-all scale-100 hover:scale-105" 
         :class="colors[offering.color]" 
         :href="href(offering)"
      >
        <img :src="offering.icon" :alt="'illustrated icon'" class="max-h-40 flex-shrink">
        <p class="text-4xl font-bold">{{ offering.title }}</p>
        <p class="text-lg">{{ offering.description }}</p>
      </a>
    </div>
  </nav>
</template>

<script>
export default {
  props: {
    linkPrefix: {
      type: String,
    },
    offerings: {
      type: Array,
      required: true
    },
    wrapperClass: {
      type: String,
      default: 'flex flex-wrap xl:container xl:mx-auto'
    },
    tileClass: {
      type: String,
      default: 'w-full md:w-1/2 lg:w-1/3 p-3'
    },
  },
  data() {
    return {
    }
  },
  methods: {
    href(offering) {
      return (this.linkPrefix) ? this.linkPrefix + offering.slug : `/offerings#${offering.slug}`
    }
  },
  computed: {
    colors() {
      return {
        'green': 'bg-brand-green-500',
        'orange': 'bg-brand-orange',
        'pink': 'bg-brand-pink',
        'red': 'bg-brand-red',
        'cyan': 'bg-brand-cyan',
        'yellow': 'bg-brand-yellow',
      }
    }
  }
}
</script>
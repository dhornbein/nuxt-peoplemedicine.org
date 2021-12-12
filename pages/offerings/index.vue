<template>
  <main class="bg-dark min-h-screen">
    <offeringsGrid :offerings="offerings"></offeringsGrid>

    <div class="xl:content xl:mx-auto flex justify-center py-10">
      <nav class="w-32 flex-grow-0">
        <ul class="sticky top-0 h-screen flex flex-col justify-between">
          <li class="p-3 flex-auto h-1 flex justify-center relative group" v-for="offering in offerings" :key="offering.slug">
            <a :href="'#' + offering.slug">
              <img :src="offering.iconColor" :alt="offering.title" class="max-h-full w-auto">
              <div class="absolute top-1/2 left-full rounded-lg p-2 drop-shadow-lg whitespace-nowrap -translate-y-1/2 z-10 transition duration-300 -translate-x-10 group-hover:translate-x-0 invisible group-hover:visible blur-xl group-hover:blur-0 " :class="colors('bg-')[offering.color]">{{ offering.title }}</div>
            </a>
          </li>
        </ul>
      </nav>
      <div class="">
        <article class="text-brand-cream mb-10 last:mb-0 p-2 md:p-5" :id="offering.slug" v-for="offering in offerings" :key="offering.slug">
          <div class="max-w-prose">
            <h1 class="text-2xl md:text-4xl font-bold" :class="colors()[offering.color]">{{ offering.title }}</h1>
            <p class="text-lg uppercase text-white mb-5 mt-2">{{ offering.description }}</p>
            <img :src="offering.iconColor" alt="" class="w-1/3 float-right ml-2 mb-2 md:ml-4 md:mb-4">
            <nuxt-content :document="offering" class="mb-5 static" />
            <div v-if="offering.deliverables">
              <h2 class="text-lg font-bold mb-2" :class="colors()[offering.color]">Deliverables</h2>
              <ul class="list-disc pl-4">
                <li class="mb-2" v-for="deliverable in offering.deliverables" :key="deliverable.id">
                  {{ deliverable }}
                </li>
              </ul>
            </div>
          </div>
        </article>
      </div>
    </div>
  </main>
</template>

<script>
import offeringsGrid from '@/components/offerings-grid.vue'

export default {
  components: {
    offeringsGrid
  },
  async asyncData ({ $content }) {
    const offerings = await $content('offerings').sortBy('order').fetch()

    return {
      offerings
    }
  },
  data() {
    return {
    }
  },
  methods: {
    colors(prefix = 'text-') {
      return {
        'green': prefix + 'brand-green-500',
        'orange': prefix + 'brand-orange',
        'pink': prefix + 'brand-pink',
        'red': prefix + 'brand-red',
        'cyan': prefix + 'brand-cyan',
        'yellow': prefix + 'brand-yellow',
      } // purgecss: 'text-brand-green-500' 'text-brand-yellow'
    }
  }
}
</script>
<template>
  <main class="bg-brand-cream p-10 lg:container mx-auto">
    <h1 class="text-4xl text-center">Connect with us</h1>
    <div class="flex flex-wrap justify-around px-5 py-20">
      <a class="mb-16 md:mb-0 md:w-1/3 bg-dark rounded-lg shadow-lg p-5 last:pr-16 first:pl-16 group relative transition hover:text-brand-cream hover:scale-105" :class="person.color"
        :href="'mailto: + person.email'"
        v-for="person in people" :key="person.name"
      >
        <div class="absolute w-full h-40 -top-8 group-first:-left-20 group-first:bg-left group-last:-right-20 group-last:bg-right bg-no-repeat" :style="{ backgroundImage: `url('${person.picture}')` }"></div>
        <div class="relative group-last:text-right">
          <h2 class="text-2xl">{{ person.name }}</h2>
          <span>{{ person.email }}</span>
        </div>
      </a>
    </div>
    <h2 class="text-2xl text-center">Get on our Calendar</h2>
    <div class="p-10">
      <!-- Calendly inline widget begin -->
      <div class="calendly-inline-widget" data-url="https://calendly.com/dddrew" style="min-width:320px;height:630px;"></div>
      <script type="text/javascript" src="https://assets.calendly.com/assets/external/widget.js" async></script>
      <!-- Calendly inline widget end -->
    </div>
  </main>
</template>

<script>
export default {
  data() {
    return {
      message: 'Welcome to Your Vue.js App',
      people: [
        {
          name: 'Maria Talero',
          picture: '/img/pm-portrait-maria.svg',
          email: 'maria@peoplemedicine.org',
          color: 'text-brand-cyan'
        },
        {
          name: 'Drew Hornbein',
          picture: '/img/pm-portrait-drew.svg',
          email: 'drew@peoplemedicine.org',
          color: 'text-brand-orange'
        },
      ]
    }
  },
}
</script>
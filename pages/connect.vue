<template>
  <main class="p-10 lg:container mx-auto">
    <h1 class="text-4xl text-center">Connect with us</h1>
    <div class="flex flex-wrap justify-around px-5 py-20">
      <a class="mb-16 md:mb-0 md:w-1/3 bg-dark rounded-lg shadow-lg p-5 group relative transition hover:text-brand-cream hover:scale-105" :class="person.color"
        :href="'mailto: + person.email'"
        v-for="person in people" :key="person.name"
      >
        <div class="relative">
          <h2 class="text-2xl">{{ person.name }}</h2>
          <span>{{ person.email }}</span>
        </div>
      </a>
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
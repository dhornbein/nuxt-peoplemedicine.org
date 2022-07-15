<template>
  <main>
    <section class="bg-dark overflow-hidden h-screen max-h-[85vh] flex flex-col items-stretch">
      
      <div class="flex flex-grow flex-col md:flex-row justify-center items-center">
        <div class="flex flex-col justify-center">
          <img class="animate-spin-slow" src="img/web-logo-color-people-lines.svg" alt="">
        </div>
        <div class="flex flex-col justify-center mt-6 md:mt-0 md:ml-6 text-center md:text-left">
          <h1 class="text-4xl md:text-6xl text-brand-pink font-bold">{{ title }}</h1>
          <p class="text-base md:text-2xl text-brand-orange mt-3 mb-5">{{ tagline }}</p>
        </div>
      </div>
    </section>

    <section class="bg-brand-cream py-10">
      <div class="lg:container mx-auto flex justify-around items-center lg:flex-row flex-col px-5 mb-10">
        <div class="max-w-2xl text-2xl leading-relaxed">

          <nuxt-content :document="content.invocation" class="" />

        </div>
        <div class="flex-shrink p-5 justify-self-center self-center">
          <img src="../static/img/web-3-circles.svg" alt="some colorful circles">
          </div>
      </div>

    </section>

    <section class="bg-dark min-h-[80vh] py-[230px] flex flex-col md:flex-row justify-center items-center overflow-hidden">
      <div class="text-brand-cyan min-h-[360px] max-w-[360px] p-5 relative flex flex-col justify-center mb-[180px] md:mb-0">
        <div class="absolute w-full h-0 bg-no-repeat top-0 left-0 pt-[100%] scale-[2.3] origin-center bg-center" style="background-image:url('/img/web-bio-circle-teal.svg'); background-size: auto 80%;"></div>
        <div class="absolute h-[300px] w-full bg-no-repeat md:-top-36 md:left-64 left-0 -bottom-72 origin-center bg-center bg-contain" style="background-image:url('/img/pm-portrait-maria.png');"></div>
        <h2 class="text-3xl font-bold relative">Maria Talero, Ph.D.</h2>

        <nuxt-content :document="content.maria" class="" />

      </div>
    </section>

    <section id="who-we-are" class="bg-brand-purple py-10">
      <div class="container mx-auto flex items-center justify-around lg:flex-row flex-col-reverse px-5">
        <div class="p-5">
          <img src="../static/img/web-2-souls.svg" alt="two souls intertwined, taming each other's shadows">
        </div>
        <div class="text-lg leading-relaxed md:w-2/3 sm:w-full bg-brand-cream p-4 rounded-lg">
          <h2 class="text-sm font-mono uppercase mb-6 pb-2 border-b border-dotted border-dark">Let's Connect</h2>

          <ContactForm class="mx-0" />

        </div>
      </div>
    </section>
    

  </main>
</template>

<script>
export default {
  layout: 'default',
  head() {
    return {
      script: [{ src: 'https://identity.netlify.com/v1/netlify-identity-widget.js' }],
    };
  },
  async asyncData ({ $content }) {
    const aboutPages = await $content('about').fetch()
    const offerings = await $content('offerings').sortBy('order').fetch()

    return {
      aboutPages,
      offerings
    }
  },
  data() {
    return {
      title: 'People Medicine',
      tagline: 'regenerative design for people systems',
      email: 'maria@peoplemedicine.org'
    }
  },
  computed: {
    content() {
      return this.aboutPages.reduce((acc, page) => {
        acc[page.slug] = page
        return acc
      }, {})
    }
  }
}
</script>
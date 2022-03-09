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
          <a :href="'mailto:' + email" class="text-brand-green-400 hover:text-brand-cream">{{ email }}</a>
        </div>
      </div>
    </section>

    <section class="bg-brand-cream py-10">
      <div class="lg:container mx-auto flex justify-around items-center lg:flex-row flex-col px-5 mb-10">
        <div class="max-w-2xl text-2xl leading-relaxed">
          <h2 class="text-sm font-mono uppercase">Invocation</h2>

          <nuxt-content :document="content.invocation" class="" />

        </div>
        <div class="flex-shrink p-5 justify-self-center self-center">
          <img src="../static/img/web-3-circles.svg" alt="some colorful circles">
          </div>
      </div>

      <div class="container mx-auto my-10 px-4">

        <newsletter label="We'll write to you:" :tags="['homepage']">
          Let us help you make your teams more resilient and your work more regenerative for you, your organization and the people you serve.
        </newsletter>

      </div>

    </section>

    <section id="who-we-are" class="bg-brand-purple py-10">
      <div class="container mx-auto flex items-center justify-around lg:flex-row flex-col-reverse px-5">
        <div class="p-5">
          <img src="../static/img/web-2-souls.svg" alt="two souls intertwined, taming each other's shadows">
        </div>
        <div class="max-w-prose text-lg leading-relaxed md:w-2/3 sm:w-full bg-brand-cream p-4 rounded-lg">
          <h2 class="text-sm font-mono uppercase">Who we are</h2>

          <nuxt-content :document="content['who-we-are']" class="" />

        </div>
      </div>
    </section>

    <section class="bg-dark min-h-[80vh] py-[230px] flex flex-col md:flex-row justify-center items-center overflow-hidden">
      <div class="text-brand-cyan min-h-[360px] max-w-[360px] p-5 relative flex flex-col justify-center mb-[180px] md:mb-0 md:mr-[155px]">
        <div class="absolute w-full h-0 bg-no-repeat top-0 left-0 pt-[100%] scale-[2.3] origin-center bg-center" style="background-image:url('/img/web-bio-circle-teal.svg'); background-size: auto 80%;"></div>
        <h2 class="text-3xl font-bold relative">Maria Talero</h2>

        <nuxt-content :document="content.maria" class="" />

      </div>
      <div class="text-brand-orange min-h-[360px] max-w-[360px] p-5 relative flex flex-col justify-center">
        <div class="absolute w-full h-0 bg-no-repeat top-0 left-0 pt-[100%] scale-[2.3] origin-center bg-center" style="background-image:url('/img/web-bio-circle-orange.svg'); background-size: auto 80%;"></div>
        <h2 class="text-3xl font-bold relative">Drew Hornbein</h2>

        <nuxt-content :document="content.drew" class="" />

      </div>
    </section>

    <section class="bg-gradient-to-b from-dark to-brand-green-400">
      <div class="flex justify-center items-center bg-no-repeat bg-center h-screen min-h-[700px]" style="background-image: url('/img/web-logo-circle-color-shape.svg'); background-size: auto 95%;">
        <div>
          <h2 class="text-sm text-mono uppercase">Talk to Us</h2>
          <a :href="'mailto:' + email" class="text-2xl text-brand-red hover:text-red-800">{{ email }}</a>
        </div>
      </div>
    </section>

    <section id="what-we-do" class="bg-brand-green-400 p-10 flex justify-center items-center">
      <div class="text-dark text-center max-w-prose">
        <h2 class="text-3xl font-bold uppercase mb-5">What we do</h2>

        <nuxt-content :document="content['what-we-do']" class="" />

      </div>
    </section>

    <section class="bg-dark p-10">
      <h2 class="text-brand-green-400 text-3xl font-bold uppercase text-center mb-10"><nuxt-link to="/offerings">Offerings</nuxt-link></h2>
      <offeringsGrid :offerings="offerings"></offeringsGrid>

    </section>

    <section class="bg-dark p-10 flex justify-center items-center">
      <img src="../static/img/web-logo-type-circle.svg" alt="People Medicine">
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
      email: 'hello@peoplemedicine.org'
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
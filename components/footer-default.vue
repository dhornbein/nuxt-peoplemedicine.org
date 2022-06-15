<template>
  <footer>
    <div class="text-center" xmlns:cc="http://creativecommons.org/ns#" xmlns:dct="http://purl.org/dc/terms/">
      <p class="text-3xl font-bold" property="dct:title">People Medicine</p> 
      © 
      <address class="inline not-italic" property="cc:attributionName">
        By 
        <a class="font-bold" :href="'mailto:' + maria.email" rel="author">{{ maria.name }}</a> 
        <a class="" :href="'mailto:' + maria.email" title="Send Maria an email">💌 </a>
      </address>
      <br>
      <em>(unless otherwise stated)</em>
      is licensed under
      <a class="font-bold" href="http://creativecommons.org/licenses/by-nc/4.0/?ref=chooser-v1" target="_blank" rel="license noopener noreferrer">
        Attribution-NonCommercial 4.0 International
        <div>
          <img class="inline max-h-5" src="https://mirrors.creativecommons.org/presskit/icons/cc.svg?ref=chooser-v1">
          <img class="inline max-h-5" src="https://mirrors.creativecommons.org/presskit/icons/by.svg?ref=chooser-v1">
          <img class="inline max-h-5" src="https://mirrors.creativecommons.org/presskit/icons/nc.svg?ref=chooser-v1">
        </div>
      </a>
    </div>
  </footer>
</template>

<script>
export default {
  data() {
    return {
      maria: {
        name: 'Maria Talero',
        email: 'maria@peoplemedicine.org'
      },
      drew: {
        name: 'Drew Hornbein',
        email: 'drew@peoplemedicine.org'
      }
    }
  },
}
</script>

<style lang="scss" scoped>
footer {
  @apply pt-5 pb-40 px-5 bg-brand-pink bg-no-repeat bg-bottom;
  background-image: url('/img/pm_hands_bottom.png');
  background-size: auto 11rem;
}
</style>
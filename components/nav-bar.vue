<template>
  <nav class="nav" :class="{'is-open': mobileMenuOpen}">
      
    <nuxt-link to="/" class="md:order-2 flex items-center">
        <img src="/img/web-logo-circle-color-shape.svg" class="max-h-10">
        <span class="text-xl text-white font-bold ml-2" :class="{ hidden: !mobileMenuOpen }">People Medicine</span>
    </nuxt-link>
      
    <ul class="" 
      v-for="(group, name, index) in navigation" :key="index" 
      :class="[group.class, { hidden: !group.showMobile, flex: group.showMobile }]"
    >
      <router-link v-for="item in group.links" :key="item.url"
        :to="item.url"
        v-slot="{ href, navigate, isActive, isExactActive }"
        custom
      >
        <li class=""
          :class="{'link-active': isActive, 'link-exact-active': isExactActive}"
        >
          <a class=""
            :href="href" @click="navigate">{{ item.name }}</a>
        </li>
      </router-link>
    </ul>
    <div class="burger">
      <button :class="{ opened: mobileMenuOpen }" @click="mobileMenuOpen = !mobileMenuOpen" aria-label="Main Menu" :aria-expanded="mobileMenuOpen">
        <svg width="100" height="100" viewBox="0 0 100 100">
          <path class="line line1" d="M 20,29.000046 H 80.000231 C 80.000231,29.000046 94.498839,28.817352 94.532987,66.711331 94.543142,77.980673 90.966081,81.670246 85.259173,81.668997 79.552261,81.667751 75.000211,74.999942 75.000211,74.999942 L 25.000021,25.000058" />
          <path class="line line2" d="M 20,50 H 80" />
          <path class="line line3" d="M 20,70.999954 H 80.000231 C 80.000231,70.999954 94.498839,71.182648 94.532987,33.288669 94.543142,22.019327 90.966081,18.329754 85.259173,18.331003 79.552261,18.332249 75.000211,25.000058 75.000211,25.000058 L 25.000021,74.999942" />
        </svg>
      </button>
    </div>
    
  </nav>
</template>

<script>
export default {
  props: {
  },
  data() {
    return {
      mobileMenuOpen: false,
      navigation: { 
        primary: {
          class: 'md:order-1',
          showMobile: true,
          links: [
            {
              name: 'Home',
              url: '/',
              class: ''
            },
            {
              name: 'Articles',
              url: '/articles',
              class: ''
            },
            {
              name: 'Connect',
              url: '/connect',
              class: ''
            },
          ],
        },
        secondary: {
          class: 'md:order-3',
          showMobile: false,
          links: [
            {
              name: 'Offerings',
              url: '/offerings',
              class: ''
            },
            {
              name: 'Philosophy',
              url: '/philosophies',
              class: ''
            },
            {
              name: 'Resources',
              url: '/resources',
              class: ''
            },
          ],
        }
      },
    }
  },
  methods: {
    burgerClick() {
      this.mobileMenuOpen = !this.mobileMenuOpen
    }
  },
}
</script>

<style lang="scss" scoped>
nav {
  @apply bg-dark text-brand-cream w-screen flex p-2 relative;

  ul {
    li {
      a {
        @apply p-2 md:px-5 block;
      }
      &.link-active a:not([href="/"]) {
        @apply text-brand-yellow;
      }
      &.link-active.link-exact-active a {
        @apply text-brand-pink;
      }
    }
  }
  
  &:not(.is-open) { // default navigation
    @apply max-h-14 items-center justify-between lg:justify-center;
    ul {
      @apply sm:justify-items-start md:justify-around flex-grow md:flex md:w-5/12 lg:flex-shrink;
      li {
        @apply inline;
        a {
        }
      }
    }
  }

  &.is-open { // mobile open navigation
    @apply flex-col fixed h-screen z-50;
    ul {
      @apply flex flex-grow flex-col justify-around;
      li {
        a {
          @apply text-xl;
        }
      }
    }
    .burger {
      @apply absolute top-2 right-2;
    }
  }

  // https://codepen.io/ainalem/pen/wvKOEMV
  .burger {
    @apply flex items-center md:hidden;
    button {
      @apply w-10 h-10;
      cursor: pointer;
      svg {
        @apply fill-current w-full h-full;
      }
      .line {
        fill: none;
        stroke: white;
        stroke-width: 6;
        transition: stroke-dasharray 600ms cubic-bezier(0.4, 0, 0.2, 1),
          stroke-dashoffset 600ms cubic-bezier(0.4, 0, 0.2, 1);
      }
      .line1 {
        stroke-dasharray: 60 207;
        stroke-width: 6;
      }
      .line2 {
        stroke-dasharray: 60 60;
        stroke-width: 6;
      }
      .line3 {
        stroke-dasharray: 60 207;
        stroke-width: 6;
      }
      
      &.opened {
        .line1 {
          stroke-dasharray: 90 207;
          stroke-dashoffset: -134;
          stroke-width: 6;
        }
        .line2 {
          stroke-dasharray: 1 60;
          stroke-dashoffset: -30;
          stroke-width: 6;
        }
        .line3 {
          stroke-dasharray: 90 207;
          stroke-dashoffset: -134;
          stroke-width: 6;
        }
      }
    }
  }
}
</style>
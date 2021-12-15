<template>
  <transition name="slide-fade">
    <div id="modal" class="modal" :class="{ 'modal-animate': $store.state.modal.open }" v-if="$store.state.modal.open">
      <div class="modal-overlay" @click="closeModal"></div>
      <div class="modal-container">
    
        <div class="modal-header">
          <h2 class="text-2xl font-bold text-dark" v-if="content.title">{{ content.title }}</h2>
          <button class="modal-close" @click="closeModal">
            <!-- <svg class="fill-current text-brand-red" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m24 12c0 6.627-5.373 12-12 12s-12-5.373-12-12 5.373-12 12-12 12 5.373 12 12zm-13.679 0-3.448 3.448 1.679 1.679 3.448-3.448 3.448 3.448 1.679-1.679-3.447-3.448 3.447-3.447-1.679-1.68-3.448 3.448-3.447-3.448-1.68 1.679z"/></svg> -->
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M 24 12 C 24 18.627 18.627 24 12 24 C 5.373 24 0 18.627 0 12 C 0 5.373 5.373 0 12 0 C 18.627 0 24 5.373 24 12 Z M 10.321 12 L 6.873 15.448 L 8.552 17.127 L 12 13.679 L 15.448 17.127 L 17.127 15.448 L 13.68 12 L 17.127 8.553 L 15.448 6.873 L 12 10.321 L 8.553 6.873 L 6.873 8.552 Z"></path></svg>
          </button>
        </div>
        <div class="modal-body" v-html="$store.state.modal.html.innerHTML">
        </div>
    
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  methods: {
    closeModal(e) {
      this.$store.dispatch('modal/closeModal')
    }
  },
  data() {
    return {
      content: {
        title: false
      }
    }
  },
  head() {
    return {
      bodyAttrs: {
          class: this.$store.state.modal.open ? 'modal-open' : 'modal-closed'
      },
      htmlAttrs: {
          class: this.$store.state.modal.open ? 'modal-open' : 'modal-closed'
      }
    }
  }
}
</script>

<style lang="scss">
.slide-fade-enter-active {
  transition: all .3s ease;
}
.slide-fade-leave-active {
  transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.slide-fade-enter, .slide-fade-leave-to {
  transform: translateY(30px);
  opacity: 0;
}

html.modal-open {
  overflow: hidden;
}
.modal-overlay {
  @apply fixed w-screen h-screen opacity-50 bg-purple-900 inset-0;
}
.modal {
  @apply fixed w-screen h-screen -inset-1 flex justify-center items-center transition-all;

  .modal-close {
    @apply absolute -top-5 -right-5 m-2 w-10 h-10 z-10 bg-brand-cream rounded-full p-1;
    
    svg {
      @apply fill-current text-dark hover:text-brand-red w-full h-full;
    }
  }

  .modal-container {
    @apply relative bg-brand-cream max-w-prose p-5 md:p-10 max-h-[95vh] max-w-[95vw] md:max-h-[90vh] md:max-w-[90vw] flex flex-col;
    
    .modal-body {
      @apply max-h-full overflow-y-auto flex-shrink;
      
      & > h1:first-child,
      & > h2:first-child {
        @apply sticky top-0 pb-4 bg-brand-cream
      }
    }
  }
}
</style>
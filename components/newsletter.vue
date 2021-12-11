<template>
  <div class="p-5 bg-white rounded-md shadow-lg max-w-screen-sm mx-auto" :class="childClass">
    <p class="mb-5" v-if="description">{{ description }}</p>
    <form
      action="https://buttondown.email/api/emails/embed-subscribe/people-medicine"
      method="post"
      target="popupwindow"
      onsubmit="window.open('https://buttondown.email/people-medicine', 'popupwindow')"
      class="embeddable-buttondown-form"
    >
      <label class="text-sm font-mono" :for="id" v-if="label">{{ label }}</label>
    
      <div class="flex flex-col md:flex-row">
          <input class="p-2 text-lg rounded-md border border-gray-100 shadow-inner flex-grow text-dark mb-2 md:mb-0 md:mr-2" type="email" name="email" :id="id" :placeholder="placeholder" required/>
          <input class="p-2 text-lg rounded-md border flex-shrink bg-brand-red text-white cursor-pointer hover:bg-red-800" type="submit" value="Subscribe" />
      </div>
      <input type="hidden" value="1" name="embed" />
      <input type="hidden" name="tag" :value="tags.concat(defaultTag)" />
    </form>
  </div>
</template>

<script>
export default {
  props: {
    description: {
      type: String,
      default: 'Let us help you make your teams more resilient and your work more regenerative for you, your organization and the people you serve.'
    },
    label: {
      type: String,
      default: 'Subscribe to our newsletter'
    },
    placeholder: {
      type: String,
      default: 'Your email please'
    },
    tags: {
      type: Array
    },
    childClass: {
      type: String
    },
  },
  data() {
    return {
      defaultTag: ['website'],
      id: null
    }
  },
  mounted () {
    this.id = this._uid
  }
}
</script>
<template>
  <form
    class="max-w-xl mx-auto"
    target="_blank"
    enctype="multipart/form-data"
    action="https://formkeep.com/f/a3f97e28525e"
    accept-charset="UTF-8"
    method="post"
    ref="contactForm"
    @submit="submitForm"
  >
    <input name="utf8" type="hidden" value="&#x2713;" />
    <div class="flex gap-2">
      <div class="row">
        <label class="text-sm font-mono" title="required" for="First_Name"
          >First Name *</label
        >
        <input
          type="text"
          name="First Name"
          id="First_Name"
          required="required"
          autofocus="autofocus"
          class="input"
        />
      </div>
      <div class="row">
        <label class="text-sm font-mono" title="required" for="Last_Name"
          >Last Name *</label
        >
        <input
          type="text"
          name="Last Name"
          id="Last_Name"
          required="required"
          class="input"
        />
      </div>
    </div>
    <div class="row">
      <label class="text-sm font-mono" title="required" for="Email"
        >Email *</label
      >
      <input
        type="text"
        name="Email"
        id="Email"
        required="required"
        class="input"
      />
    </div>
    <div class="row">
      <label class="text-sm font-mono" title="required" for="Subject"
        >Subject *</label
      >
      <input
        type="text"
        name="Subject"
        id="Subject"
        required="required"
        class="input"
      />
    </div>
    <div class="row">
      <label class="text-sm font-mono" title="required" for="Message"
        >Message *</label
      >
      <textarea
        name="Message"
        id="Message"
        required="required"
        class="input"
      ></textarea>
    </div>
    <input
      type="submit"
      value="Submit"
      class="
        p-2
        text-lg
        rounded-md
        border
        flex-shrink
        bg-brand-red
        text-white
        cursor-pointer
        hover:bg-red-800
      "
      data-disable-with="Submit"
    />
  </form>
</template>

<script>
export default {
  methods: {
    submitForm(){
        this.$refs.contactForm.reset(); // This will clear that form
    }
  }
}
</script>

<style lang="scss" scoped>
.input {
  @apply p-2 text-lg rounded-md border border-gray-400 shadow-inner flex-grow text-dark mb-2 w-full;
}

.row {
  @apply flex flex-col grow shrink;
}
</style>
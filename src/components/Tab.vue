<template>
  <div class='tab' v-show='isActive'>
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: 'Tab'
    }
  },
  data () {
    return {
      isActive: true
    }
  },
  created(){
    this.$parent.tabs.push(this);
  }
}
</script>

<style lang="css">
  
</style>
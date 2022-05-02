<template>
  <div>
    <a class="thumbnail" href="#" @click.prevent="show">
      <img  :src="thumbnail">
    </a>
    <div class="lightbox" v-if="visible" @click="hide">
      <div class="lightbox-innercontainer">
        <div class="lightbox-buttons" @click.stop="prev" >
          <div :class="{invisible: ! hasPrev()}">
    <!-- prev -->prev
          </div>
        </div>
        <div class="lightbox-image" @click.stop="">
          <img :src="images[index]" alt=""> 
        </div>
        <div class="lightbox-buttons" @click.stop="next">
          <div :class="{invisible: ! hasNext()}">
    <!-- next -->next
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    thumbnail: {
      type: String,
      required: true
    },
    images: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      visible: false,
      index: 0,
    }
  },
  methods: {
    show() {
      this.visible = true;
    },
    hide() {
      this.visible = false;
      this.index = 0;
    },
    hasNext() {
      return this.index + 1 < this.images.length;
    },
    hasPrev() {
      return this.index - 1 >= 0;
    },
    next(){
      if(this.hasNext()){
        this.index += 1;
      }
    },
    prev() {
      if(this.hasPrev()){
        this.index -= 1;
      }
    }
  }
}
</script>

<style>
.lightbox-innercontainer {
  display: grid;
  grid-auto-flow: column;
  justify-content: center;
  align-content: center;
}
.thumbnail {
  width: 100px;
}
.thumbnail img {
  object-fit: fill;
  overflow: hidden;
  width: 300px;
  height: 200px;
  display: grid;
}
.lightbox {
  display: grid;
  background: rgba(0,0,0,0.8);
  position: absolute;
  width: 99vw;
  height: 100vh;
  justify-content: center;
  z-index: 50;
  left: 0;
  top: 0;
}
.lightbox-buttons {
  display: grid;
  align-self: center;
  width: 100px;
  height: 100px;
  align-content: center;
  justify-content: center;
}
.lightbox-image img {
  width: auto;
  height: auto;
  max-width: 100%;
  max-height: calc(100vh - 90px);
}
.invisible {
  display: none;
}
</style>
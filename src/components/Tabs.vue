<template>
  <div class="tabs__dark">
    <ul class='tabs__header'>
      <li v-for='(tab, index) in tabs'
        :key='tab.title'
        @click='selectTab(index)'
        :class='{"tab__selected": (index == selectedIndex)}'>
        {{ tab.title }}
      </li>
    </ul>
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: {
  },
  data () {
    return {
      selectedIndex: 0, // the index of the selected tab,
      tabs: []         // all of the tabs
    }
  },
  created () {
    
  },
  mounted () {
    this.selectTab(0)
  },
  methods: {
    selectTab (i) {
      this.selectedIndex = i

      // loop over all the tabs
      this.tabs.forEach((tab, index) => {
        tab.isActive = (index === i)
      })
    }
  }
}
</script>

<style lang="css">

ul.tabs__header {
  display: block;
  list-style: none;
  margin: 0 0 0 10px;
  padding: 0;
  user-select: none;
}
ul.tabs__header > li {
  padding: 15px 30px;
  border-radius: 10px;
  margin: 0;
  display: inline-block;
  margin-right: 5px;
  cursor: pointer;
}
ul.tabs__header > li.tab__selected {
  border-radius: 10px 10px 0 0;
  border-bottom: 8px solid transparent;
}
.tab {
  display: inline-block;
  color: rgb(0, 0, 0);
  padding: 10px;
  min-width: 100px;
  border-radius: 2px;
  width: 90vw;
}
.tabs__dark .tab{
  background-color: rgb(70, 70, 70);
  color: #eee;
}
.tabs__dark li {
  background-color: rgb(48, 48, 48);
  color: white;
}
.tabs__dark li.tab__selected {
  background-color: #555;
  color: white;
}
.tabs__dark li:hover{
  border-bottom: solid cyan 2px;
  display: inline-block;
}
</style>
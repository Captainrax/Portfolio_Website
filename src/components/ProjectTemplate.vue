<template >

    <div class="panel">
        <h4 class="Headertext">{{ content.header }}</h4>
        <div class="panel_content">
          <img class="panel_content_image" :src= "content.image" alt=""> <!-- replace this with a component lightbox -->
          <div class="panel_content_text">
            <span id="panel_description">{{ content.description }}</span>
            <div class="panel_content_details">
              <p>Github: <a class="linktext" :href= "content.link" target="_blank">Link</a></p>
              <p class="text_platform">{{ content.platform }}</p>
              <p class="text_created_with">{{ content.created }}</p>
            </div>
          </div>
        </div>
    </div>

</template>

<script>
// implement lightbox for images
// https://www.youtube.com/watch?v=LOUKZrmFtgM
export default {
  props: {
    content: Object
  },
  data () {
    return {
      
    }
  },
  created(){
    // console.log(this.content);
  }
}
</script>

<style lang="css">
  .panel{
  margin: 20px 20px; /* panel gap */
  padding: 0px;
  height: auto;
  max-width: 90vw;
  background-color: rgba(56, 56, 56, 0.5);
  border: rgba(0,110,200,0.4) solid;
  border-width: 2px;
  border-radius: 4px;
}
.panel_content{
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr;
  grid-gap: 10px;
  margin: 4px;
  padding: 0px;
}
.panel_content_image{
  object-fit: contain;
  overflow: hidden;
  width: 100%;
  max-height: 260px;
}
.panel_content img {
  transition:transform 0.25s ease;
}
#panel_content_img_upscale{
  -webkit-transform:scale(2);  
  transform:scale(2);
}
#panel_content_img_normalscale{
  -webkit-transform:scale(1);  
  transform:scale(1);
}
.panel_content_text{ 
  display: grid;
  grid-template-columns: auto;
  grid-template-rows:  10fr auto;
  margin-left: 0px;
  margin-right: 0px;
}
.panel_content_text p{
  float: left;
  overflow: hidden;
  word-wrap: break-word;
  margin: 0px;
}
.panel_content_details{
  display: grid;
  align-content: center;
  margin-top: 10px;
}
#toppanel_content{
  align-content: center;
  overflow: hidden;
  word-wrap: break-word;
  text-align: center;
  margin: 0px;
}
#headerpanels{
  text-align: center;
  margin: 0px;
}
#info_panel{ /* top panel */
  grid-column-start: 1;
  grid-column-end: 3;
}
.Headertext {
  margin: 4px 10px;
  font-size: 30px;
  color: rgb(185, 185, 185);
}
.linktext{
  color: cyan;
}
</style>
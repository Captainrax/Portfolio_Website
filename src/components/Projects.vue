<template>
  <div class="wrapper">

    <div class="box" id="mainbody">

      <div class="panel" id="info_panel">
        <h4 class="Headertext" id="headerpanels">Current Live WebSite</h4>
        <div id="toppanel_content">
          <p id="toppanel_description">Current Website Project being worked on (may not be up to date)</p>
          <p><a class="linktext" href="https://captainrax.github.io/" target="_blank">CaptainRax.Github.io</a></p>
        </div>
      </div>

  </div>
  
  <div class="tab_wrapper">
    <Tabs>

      <Tab title="C#" name="csharp">

        <div class="box" id="mainbody">

          <div  v-for="(item, index) in content.projects_csharp" :key="index">
            <ProjectTemplate  :content="item">
            </ProjectTemplate>
          </div>
          
        </div>
      </Tab>

      <Tab title="JavaScript" name="js">

        <div class="box" id="mainbody">
        
          <div  v-for="(item, index) in content.projects_js" :key="index">
            <ProjectTemplate :content="item">
            </ProjectTemplate>
          </div>

        </div>
      </Tab>

    </Tabs>

  </div>

  </div>
</template>

<script>
import $ from 'jquery';
import Tab from './Tab.vue'
import Tabs from './Tabs.vue'
import ProjectTemplate from './ProjectTemplate.vue'
 
import json from "../offline_ignore/projects.json";

export default {
  name: 'Projects',
  props: {
  },
  components:{
    Tab,
    Tabs,
    ProjectTemplate
  },
  data () {
    return {
      content: json
    }
  },
  created(){
    // console.log(this.content.projects_csharp);
  },
  mounted(){
    // upscales / downscales images on click
    $(".panel_content_image").click(function() {
    if($(this).attr("id") == "panel_content_img_upscale"){
        $(this)
        .attr("id", "panel_content_img_normalscale")
        .css("z-index", 1);
    } else {
        $(this)
        .attr("id", "panel_content_img_upscale")
        .css("z-index", 2);
    }
    });
  }
}
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.wrapper{
  position: center;
  margin: 0px 5vw;
  display:grid;
  width: 90vw;
}
#mainbody {
  display: grid;
  grid-template-columns: 1fr 1fr;
  font-size: 20px;
  color: white;
  border: none;
  background-color: rgb(37, 37, 37);
}
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
#toppanel_description{
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
footer {
  position: center;
  margin: 0px 20vw;
  background-color: rgba(56, 56, 56, 0.5);
  color: aquamarine;
}
.tab_wrapper {
  padding: 10px;
}

</style>
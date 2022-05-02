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
            <ProjectTemplate  :content="item"></ProjectTemplate>
          </div>
          
        </div>
      </Tab>

      <Tab title="JavaScript" name="js">

        <div class="box" id="mainbody">
        
          <div  v-for="(item, index) in content.projects_js" :key="index">
            <ProjectTemplate :content="item"></ProjectTemplate>
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
.tab_wrapper {
  padding: 10px;
}

</style>
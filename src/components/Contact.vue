<template>
 <div class="wrapper">

    <div class="box" id="mainbody">

      <div class="panel" id="box1">
        <h4 class="Headertext">Contact</h4>
        <p>Email: Recon1145@gmail.com</p>
      </div>

        
    </div>

</div>
</template>

<script>
export default {
  name: 'Contact',
  props: {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.wrapper{
    display:grid;
    
    position: center;
    margin: 0px 20vw;
    background-color: rgb(41, 41, 41);
    width: 60vw;
    grid-gap: 1em;
}

/* .box{
    border-style: solid;
    border-width: 10px;
    border-radius: 10px; 
} */
#mainbody {
    font-size: 20px;
    color: white;
    border: none;
    background-color: rgb(37, 37, 37);
}

.panel{
    margin: 50px 30px;
    padding: 0px;
    height: 10vw;
    background-color: rgba(56, 56, 56, 0.5);
    
    border: rgba(0,110,200,0.4) solid;
    border-width: 2px;
    border-radius: 4px;
}
.Headertext {
    margin: 0px 10px;
    font-size: 30px;
    /* font-family: morpheus; */
    color: rgb(185, 185, 185);
}
p {
    margin: 24px 10px;
}

@font-face {
    font-family:"morpheus";
    src: 
    /* url("MORPHEUS.woff") format("woff"), */
    url("/MORPHEUS.TTF") format("truetype");
}
</style>

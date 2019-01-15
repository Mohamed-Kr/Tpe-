<template>
  <v-app id='app'>
    <div class='sideBar'>
      <div class='sideBtnC'>
        <v-tooltip right v-for="part in parts" :key='part.title'>
          <v-btn  slot="activator" @click='changePart(part)' icon><div class='sideBtn'></div></v-btn>
          <span>{{part.title}}</span>
        </v-tooltip>
      </div>
      <v-dialog v-model="dialog" width="500">
      <v-btn slot="activator"  >Sommaire</v-btn>
      <v-card>
        <v-card-title  class="headline grey lighten-2"     primary-title >  Sommaire   </v-card-title>
        <v-card-text>
        
        </v-card-text>
      </v-card>
    </v-dialog>
    </div>
    <v-content>
      <h1>{{title}}</h1>
      <h2>{{subTitle}}</h2>
      <router-view/>
    </v-content>
  </v-app>
</template>

<script>

export default {
  name: 'App',
  components: {
  },
  data: () => ({
    backcolor: "#009688",
    dialog: false,
    parts: [],
    title: "",
    subTitle: "",
    loc: ''
  }),
  mounted() {
    document.getElementById('app').style.backgroundColor = this.backcolor
    this.parts = this.$store.state.parts
    this.seeLoc(window.location)
  },
  watch: {
    backcolor: "changeBckColor",
  },
  methods: {
    changePart(data) {
      document.getElementById('app').style.backgroundColor = data.color
      this.title = data.title
      this.$router.push(data.route)
      var loc = window.location
      if (loc.toString().includes('Intro')){
      this.subTitle = this.$store.state.parts[1].subParts[parseInt(window.location.toString().slice(-1)) - 1].title
      }
      else if (loc.toString().includes('Pourqu')){
      this.subTitle = this.$store.state.parts[2].subParts[parseInt(window.location.toString().slice(-1)) - 1].title
      }
      else if (loc.toString().includes('Comm')){
      this.subTitle = this.$store.state.parts[3].subParts[parseInt(window.location.toString().slice(-1)) - 1].title
      }
      else {
        this.subTitle = ''
      }
    },
    seeLoc(loc) {
      if(loc.toString().includes('Intro')) {
        this.changePart(this.$store.state.parts[1])
      }
      else if(loc.toString().includes('Pourqu')) {
        this.changePart(this.$store.state.parts[2])
      }
      else if(loc.toString().includes('Comm')) {
        this.changePart(this.$store.state.parts[3])
      }
      else if(loc.toString().includes('Conc')) {
        this.changePart(this.$store.state.parts[4])
      }
      else {
        this.changePart(this.$store.state.parts[0])
      }
    }
  }
}
</script>

<style>
* {
  user-select: none;
}
h1 {
  color: white;
  font-size: 4em;
  margin-left: 100px;
  padding: 0px;
}
h2 {
  color: white;
  font-size: 2em;
  margin-left: 100px;
  padding: 0px;
  margin-top: 0px;
}
#app {
  transition: 1s;
}
.sideBar {
  position: absolute;
  left: 0px;
  top: 0px;
  height: 100vh;
  width: 100px;
  display: flex;
  flex-direction: column;
  align-content: center;
  z-index: 999;
}
.sideBtn {
  background-color: white;
  height: 25px;
  width: 25px;
  z-index: 9999;
  border-radius: 100%;
  margin: 10px 0px 10px 0px; 
}
.sideBtnC {
  display: flex;
  flex-direction: column;
  margin: auto;
}
</style>
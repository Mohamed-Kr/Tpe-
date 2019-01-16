<template>
  <v-app id='app'>
    <v-fade-transition>
      <div style='position: absolute; top: 0px; left: 0px; width:100%; height: 100vh;overflow: hidden;' v-show='title=="TPE 1S1"'>
        <div style='position: absolute; top: 0px; left: 0px; width:100%; height: 100vh; background: linear-gradient(to left,rgba(0,150,136,0.6), rgb(0,150,136));'>
        </div>
        <img src='https://i.imgur.com/19ctUK5.jpg' style='z-index:0; min-width: 1800px; height: 100vh;'/>
      </div>
    </v-fade-transition>
    <div class='sideBar'>
      <div class='sideBtnC'>
        <v-tooltip right v-for="part in parts" :key='part.title'>
          <v-btn  slot="activator" @click='changePart(part); cSub = 0' icon><div class='sideBtn'></div></v-btn>
          <span>{{part.title}}</span>
        </v-tooltip>
      </div>
      <v-dialog v-model="dialog" width="500">
      <v-btn slot="activator" flat large class='white--text pa-4 mb-4'>
        <v-icon x-large y-large>widgets</v-icon>
      </v-btn>
      <v-card dark class='pa-3'>
        <v-card-title  class="display-1">Sommaire</v-card-title>
        <template v-for='part in parts'>
          <v-btn large block :color='part.color' dark  @click='changePart(part); dialog=false' :key='part.title' class='mb-0'>
            {{part.title}}
          </v-btn>
          <div :key='part.color + "6"' style='display: flex; width: 100%; justify-content: center;'>
            <template v-for='sub in part.subParts' >
              <v-flex :class='"xs-" + 12/part.subParts.lenght'>
                <v-tooltip bottom>
                  <v-btn slot="activator" :color='part.color' :key='sub.title' class='mt-0' @click='dialog=false;changePart(part); $router.push(sub.route); cSub = part.subParts.indexOf(sub)' block>{{part.subParts.indexOf(sub) + 1}}</v-btn>
                  <span>{{ sub.title }}</span>
                </v-tooltip>
              </v-flex>
            </template>
          </div>
        </template>
      </v-card>
    </v-dialog>
    </div>
    <v-content>
      <v-layout>
        <v-flex xs-8>
      <h1>{{title}}</h1>
      <h2>{{subTitle}}</h2>
        </v-flex>
        <v-flex xs-4 class="pl-5">
        <v-btn-toggle style='margin: auto' class='ma-5' mandatory v-model='cSub'>
          <v-tooltip bottom v-for='(sub, index) in cPart.subParts'>
              <v-btn slot='activator' large class='pa-4' @click='changeSub(index)'>{{ index + 1}}</v-btn>
              <label>{{sub.title}}</label>
          </v-tooltip>
        </v-btn-toggle>
        </v-flex>
      </v-layout>
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
    cPart: {},
    cSub: 1,
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
      this.cPart = data
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
    },
    changeSub (sub) {
      this.cSub = sub + 1
      this.$router.push(this.cPart.route.substring(0, this.cPart.route.length - 1) + (sub + 1))
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
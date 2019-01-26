<template>
  <v-app id='app'>
    <div class="mobile-overlay white" v-if="$vuetify.breakpoint.smAndDown">
      <v-layout fill-height justify-center align-items>
        <div class="pa-3">
          <span class="headline">Ce site n'est disponible que sur Ordinateur !</span>
        </div>
      </v-layout>
    </div>
    <div class='sideBar'>
      <div class='sideBtnC'>
        <v-tooltip right v-for="part in parts" :key='part.title'>
          <v-btn  slot="activator" @click='changePart(part); cSub = 0' icon class='btns'><div class='sideBtn'></div></v-btn>
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
              {{ part.title }}
            </v-btn>
            <div :key='part.color + "6"' style='display: flex; width: 100%; justify-content: center;'>
              <template v-for='sub in part.subParts' >
                <v-flex :class='"xs-" + 12/part.subParts.lenght' :key='sub.title + "0"'>
                  <v-tooltip bottom>
                    <v-btn slot="activator" :color='part.color' :key='sub.title' class='mt-0' @click='dialog=false;changePart(part); $router.push(sub.route); cSub = part.subParts.indexOf(sub); subTitle = sub.title' block>{{part.subParts.indexOf(sub) + 1}}</v-btn>
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
        <v-flex xs-8 id='titleC' class='zi'>
          <h1>{{title}}</h1>
          <h2>{{subTitle}}</h2>
        </v-flex>
        <v-flex xs-4 class="pl-5 zi">
          <v-layout justify-end pa-5 id='subPartBtnC'>
          <v-tooltip bottom v-for='(sub, index) in cPart.subParts' :key='index'>
              <v-btn slot='activator' @click='changeSub(index); subTitle = sub.title' fab>
                  {{ index + 1}}
              </v-btn>
              <label>{{sub.title}}</label>
          </v-tooltip>

          </v-layout>
        </v-flex>
      </v-layout>
      <router-view/>
    </v-content>
  </v-app>
</template>

<script>
import { TimelineMax } from 'gsap'
import { delay } from 'q';
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
    document.onkeydown = this.checkKey;
    this.anim()
  },
  watch: {
    backcolor: "changeBckColor",
  },
  methods: {
    anim() {
    const start = [document.getElementById('titleC'), document.getElementsByClassName('sideBar')]
    const subPartBtnC = document.getElementById('subPartBtnC')
    const tl = new TimelineMax() 
    
    tl
    .fromTo(start, 1, { x: -500 }, { x: 0 }) 
    .fromTo(subPartBtnC, 1, { x: 500 }, { x: 0 })
    },
    changePart(data) {
      document.getElementById('app').style.backgroundColor = data.color
      this.title = data.title
      document.title = "TPE 1S1 | " + data.title
      this.cPart = data
      this.$router.push(data.route)
      var loc = window.location
      this.cSub = parseInt(window.location.toString().slice(-1)) - 1
      if (loc.toString().includes('Intro')){
      this.subTitle = this.$store.state.parts[1].subParts[parseInt(window.location.toString().slice(-1)) - 1].title
      }
      else if (loc.toString().includes('Pourqu')){
      this.subTitle = this.$store.state.parts[2].subParts[parseInt(window.location.toString().slice(-1)) - 1].title
      }
      else if (loc.toString().includes('Comm')){
      this.subTitle = this.$store.state.parts[3].subParts[parseInt(window.location.toString().slice(-1)) - 1].title
      }
      else if (loc.toString().includes('Conc')){
      this.subTitle = this.$store.state.parts[4].subParts[parseInt(window.location.toString().slice(-1)) - 1].title
      }
      else {
        if (this.cPart.route == '/'){
          this.title = ''
          this.subTitle = ''
        }
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
    },
    checkKey(e) {
    e = e || window.event;
    if (e.keyCode === 38) {
      this.cSub = 0
        if (this.$store.state.parts.indexOf(this.cPart) != 0 && !this.dialog) {
          this.changePart(this.$store.state.parts[(this.$store.state.parts.indexOf(this.cPart) - 1)])
        }
    }
    else if (e.keyCode === 40) {
      this.cSub = 0
        if (this.$store.state.parts.indexOf(this.cPart) != 4 && !this.dialog) {
          this.changePart(this.$store.state.parts[(this.$store.state.parts.indexOf(this.cPart) + 1)])
        }
    }
    else if (e.keyCode === 32) {
      this.dialog = !this.dialog
    }
    else if (e.keyCode === 37) {
      if (this.cSub != 0 && this.subTitle != '') {
        this.subTitle = this.$store.state.parts[this.$store.state.parts.indexOf(this.cPart)].subParts[parseInt(window.location.toString().slice(-1)) - 2].title
        this.$router.push(this.$store.state.parts[this.$store.state.parts.indexOf(this.cPart)].subParts[parseInt(window.location.toString().slice(-1)) - 2].route)
        this.cSub--
      }
    }
    else if (e.keyCode === 39) {
      if(document.location.toString().includes('Intro')) {
        var max = 2
      }
      else if(document.location.toString().includes('Pourqu') || document.location.toString().includes('Comm')) {
        var max = 1
      }
      else if(document.location.toString().includes('Conc') || document.location.toString().includes('Comm')) {
        var max = 1
      }
      if (this.cSub < max) {
        this.subTitle = this.$store.state.parts[this.$store.state.parts.indexOf(this.cPart)].subParts[parseInt(window.location.toString().slice(-1))].title
      this.$router.push(this.$store.state.parts[this.$store.state.parts.indexOf(this.cPart)].subParts[parseInt(window.location.toString().slice(-1))].route)
      this.cSub++
      }
      }
    }
  }
}
</script>

<style>
.zi {
  z-index: 999999;
}
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
  position: fixed;
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
  /*margin: 10px 0px 10px 0px;*/
}
.btns:hover {
  transform: scale(1.1)
}
.sideBtnC {
  display: flex;
  flex-direction: column;
  margin: auto;
}
.mobile-overlay {
  position: absolute;
  width: 100%;
  height: 100vh;
  top: 0;
  right: 0;
  z-index: 999999;
}
</style>

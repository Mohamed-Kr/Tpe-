<template>
  <v-app id='app'>
      <div class="mobile-overlay white" v-if="$vuetify.breakpoint.smAndDown">
          <v-layout fill-height justify-center align-items>
              <div class="pa-3">
                  <span class="headline">Ce site n'est disponible que sur Ordinateur !</span>
              </div>
          </v-layout>
      </div>
      <div class='sideBar' v-if="!$vuetify.breakpoint.smAndDown">
          <div class='sideBtnC'>
              <v-tooltip right v-for="part in parts" :key='part.title'>
                  <v-btn slot="activator" @click='changePart(part); cSub = 0' icon class='btns'>
                      <div class='sideBtn'></div>
                  </v-btn>
                  <span>{{part.title}}</span>
              </v-tooltip>
          </div>
          <v-dialog v-model="dialog" width="500">
              <v-layout slot="activator" justify-center>
                  <v-btn flat fab class='white--text mb-4'>
                      <v-icon x-large y-large>widgets</v-icon>
                  </v-btn>
              </v-layout>
              <v-card dark class='pa-3'>
                  <v-card-title class="display-1">Sommaire</v-card-title>
                  <template v-for='part in parts'>
                      <v-btn large block :color='part.menuColor' dark @click='changePart(part); dialog=false' :key='part.title' class='mb-0 mt-3'>
                          {{ part.title }}
                      </v-btn>
                      <div :key='part.color + "6"' style='display: flex; width: 100%; justify-content: space-between;' class="mt-2">
                          <template v-for='(sub, index) in part.subParts'>
                              <v-flex :class='"xs-" + 12/part.subParts.length + (index == 0 ? " pr-2 ": (index == part.subParts.length - 1 ? " pl-2 " : " px-2 "))' :key='sub.title + "0"'>
                                  <v-tooltip bottom>
                                      <v-btn
                                        outline
                                        slot="activator"
                                        :color='part.menuColor'
                                        :key='sub.title'
                                        class='mt-0'
                                        @click='dialog=false;changePart(part); $router.push(sub.route); cSub = part.subParts.indexOf(sub); subTitle = sub.title'
                                        block>
                                        {{part.subParts.indexOf(sub) + 1}}
                                      </v-btn>
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
          <v-layout v-if="$route.path != '/'">
              <v-flex xs-8 id='titleC' class='zi'>
                  <h1>{{title}}</h1>
                  <h2 v-show='subTitle != "Conclusion"'>{{subTitle}}</h2>
              </v-flex>
              <v-flex xs-4 class="pl-5 zi">
                  <v-layout justify-end pa-5 id='subPartBtnC'>
                      <div v-for='(sub, index) in cPart.subParts' :key='index'>
                          <v-tooltip :disabled="sub.title === 'Conclusion'" bottom>
                              <v-btn slot='activator' @click='changeSub(index + 1); subTitle = sub.title' fab>
                                  {{ index + 1}}
                              </v-btn>
                              <span>{{sub.title}}</span>
                          </v-tooltip>
                      </div>
                  </v-layout>
              </v-flex>
          </v-layout>
          <router-view/>
          <v-btn fixed fab bottom right color="success" @click="scrollToTop()" v-if="showToTopButton">
            <v-icon>keyboard_arrow_up</v-icon>
          </v-btn>
      </v-content>
  </v-app>
</template>

<script>

import {
    TimelineMax
}
from 'gsap'
import {
    delay
}
from 'q';
export default {
    name: 'App',
    components: {},
    data: () => ({
        backcolor: "#009688",
        dialog: false,
        parts: [],
        cPart: {},
        cSub: 1,
        title: "",
        subTitle: "",
        loc: '',
        showToTopButton: false
    }),
    mounted() {
        window.addEventListener('scroll', this.handleScroll);
        document.getElementById('app').style.backgroundColor = this.backcolor
        this.parts = this.$store.state.parts
        this.seeLoc(window.location)
        document.onkeydown = this.checkKey;
        this.anim()
    },
    watch: {
        backcolor: "changeBckColor",
        "window.scrollY": function () {
            console.log( window.screen.height)
            console.log( window.scrollY)
            this.showToTopButton = window.screen.height > window.scrollY
        }
    },
    methods: {
        handleScroll () {
            
            console.log( window.scrollY)
            console.log( window.screen.height)
            this.showToTopButton = window.screen.height <= window.scrollY
        },
        scrollToTop () {
            window.scrollTo(0,0);
        },
        anim() {
          const start = [document.getElementById('titleC'), document.getElementsByClassName('sideBar')]
          const subPartBtnC = document.getElementById('subPartBtnC')
          const tl = new TimelineMax()

          tl
              .fromTo(start, 1, {
                  x: -500
              }, {
                  x: 0
              })
              .fromTo(subPartBtnC, 1, {
                  x: 500
              }, {
                  x: 0
              })
        },
        changePart(data) {
            document.getElementById('app').style.background = data.color
            this.title = data.title
            document.title = "TPE 1S1 | " + data.title
            this.cPart = data
            this.$router.push(data.route)
            window.scrollTo(0,0);
            this.cSub = 1
            if (data.title != 'Bienvenue') {
            this.subTitle = this.$store.state.parts[this.$store.state.parts.indexOf(data)].subParts[0].title
            }
            window.scrollTo(0,0);
        },
        seeLoc(loc) {
            if (loc.toString().includes('Intro')) {
                this.changePart(this.$store.state.parts[1])
                this.cSub = loc.toString().substring(loc.toString().length - 1, loc.toString().length)
                this.$router.push(this.$store.state.parts[1].subParts[this.cSub - 1].route);
                this.subTitle = this.$store.state.parts[1].subParts[this.cSub - 1].title
            } else if (loc.toString().includes('Pourqu')) {
                this.changePart(this.$store.state.parts[2])
                this.cSub = loc.toString().substring(loc.toString().length - 1, loc.toString().length)
                this.$router.push(this.$store.state.parts[2].subParts[this.cSub - 1].route);
                this.subTitle = this.$store.state.parts[2].subParts[this.cSub - 1].title
            } else if (loc.toString().includes('Comm')) {
                this.changePart(this.$store.state.parts[3])
                this.cSub = loc.toString().substring(loc.toString().length - 1, loc.toString().length)
                this.$router.push(this.$store.state.parts[3].subParts[this.cSub - 1].route);
                this.subTitle = this.$store.state.parts[3].subParts[this.cSub - 1].title
            } else if (loc.toString().includes('Conc')) {
                this.changePart(this.$store.state.parts[4])
                this.cSub = loc.toString().substring(loc.toString().length - 1, loc.toString().length)
                this.$router.push(this.$store.state.parts[4].subParts[this.cSub - 1].route);
                this.subTitle = this.$store.state.parts[4].subParts[this.cSub - 1].title
            } else {
                this.cPart = this.$store.state.parts[0]
                this.changePart(this.cPart)
            }
        },
        changeSub(sub) {
            this.cSub = sub
            if (this.cPart.route != '/') {
            this.$router.push(this.cPart.route.substring(0, this.cPart.route.length - 1) +  this.cSub)
            this.subTitle = this.cPart.subParts[sub - 1].title
            }
            window.scrollTo(0,0);
        },
        checkKey(e) {
            e = e || window.event;/* 
            if (e.keyCode === 38) {
                if (this.cPart.route != '/') {
                this.changeSub(1)
                }
                if (this.$store.state.parts.indexOf(this.cPart) != 0 && !this.dialog) {
                    this.changePart(this.$store.state.parts[(this.$store.state.parts.indexOf(this.cPart) - 1)])
                }
            } else if (e.keyCode === 40) {
                if (this.cPart.route != '/') {
                this.changeSub(1)
                }
                if (this.$store.state.parts.indexOf(this.cPart) != 4 && !this.dialog) {
                    this.changePart(this.$store.state.parts[(this.$store.state.parts.indexOf(this.cPart) + 1)])
                }
            } else  */if (e.keyCode === 32) {
                this.dialog = !this.dialog
            } else if (e.keyCode === 37) {
                if (this.cSub > 1 && this.subTitle != '') {
                this.changeSub(this.cSub - 1)
                }
            } else if (e.keyCode === 39 && this.cPart.route != '/') {
                var max = this.cPart.subParts.length
                if (this.cSub < max) {
                this.changeSub(parseInt(this.cSub) + 1)
                }
            }
        }
    }
}

</script>


<style>

.zi {
    z-index: 99;
}

html {
  scroll-behavior: smooth;
}

* {
    font-family: 'Mukta', sans-serif;
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
    z-index: 9;
}

</style>

import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    parts: [
      {title : 'TPE 1S1', color: '#009688', route: '/'}, 
      { title: 'Introduction', color: '#00B8D4', route: '/Intro/1', subParts: [{ title: "Présentation du sujet" }, { title: "Histoire du mix" }, { title: "Définition de l'éléctricité" },]}, 
      { title: 'Pourquoi changer ?', color: '#EF5350', route: '/Pourquoi-Changer/1', subParts: [{ title: "Comment produire de l'éléctricité ?" }, { title: "La production française" }]}, 
      { title: 'Comment changer ?', color: '#7CB342', route: '/Comment-Changer/1', subParts: [{ title: "Le problème n'est pas que dans la production" }, { title: "100%, C'est possible ?" }]}, 
      {title : 'Conclusion', color: 'orange', route: '/Conclusion'}
    ]
  },
  mutations: {

  },
  actions: {

  }
})

import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    parts: [
      {
        title : 'Bienvenue',
        color: '#000000',
        route: '/'}, 
      { 
        title: 'Introduction',
        color: '#00B8D4', 
        route: '/Intro/1', 
        subParts: [
          { 
            title: "Présentation du sujet", 
            route: '/Intro/1' 
          }, 
          { 
            title: "Histoire du mix", 
            route: '/Intro/2' 
          }, 
          { 
            title: "Définition de l'éléctricité", 
            route: '/Intro/3' 
          }
        ]
      }, 
      {
        title: 'Pourquoi changer ?', 
        color: '#EF5350', 
        route: '/Pourquoi-Changer/1', 
        subParts: [
          {
            title: "Comment produire de l'éléctricité ?",
            route: '/Pourquoi-Changer/1'
          },
          {
            title: "La thermodynamique",
            route: '/Pourquoi-Changer/2'
          },
          {
            title: "Notions importantes sur la production",
            route: '/Pourquoi-Changer/3'
          },
          {
            title: "Les principaux moyens de production en France",
            route: '/Pourquoi-Changer/4'
          }
        ]
      }, 
      { 
        title: 'Comment changer ?', 
        color: '#7CB342', 
        route: '/Comment-Changer/1', 
        subParts: [
          { 
            title: "Le problème n'est pas que dans la production", 
            route: '/Comment-Changer/1' 
          }, 
          { 
            title: "100%, C'est possible ?", 
            route: '/Comment-Changer/2' 
          }
        ]
      }, 
      {
        title : 'Conclusion', 
        color: 'orange', 
        route: '/Conclusion/1', 
        subParts: [
          { 
            title: "", 
            route: '/Conclusion/1' 
          }, 
          { 
            title: "Sources", 
            route: '/Conclusion/2' 
          }
        ]
      }
    ]
  },
  mutations: {

  },
  actions: {

  }
})

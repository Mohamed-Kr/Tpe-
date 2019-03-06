import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    parts: [
      {
        title : 'Bienvenue',
        color: 'radial-gradient(circle, rgb(0,0,0) 36%, rgb(0,0,0) 100%)',
        menuColor: 'primary',
        route: '/'},
      {
        title: 'Introduction',
        //linear-gradient(0deg, rgba(3,169,244,1) 0%, rgba(1,87,155,1) 100%)
        //linear-gradient(rgba(211, 84, 0, 0.8), rgba(211, 84, 0, 0.8)), url('https://images.pexels.com/photos/421888/pexels-photo-421888.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260')
        color: "linear-gradient(rgba(3,169,244, 0.8), rgba(3,169,244, 0.8)), url('https://images.pexels.com/photos/7000/fre-sonneveld-powerlines.jpg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260') no-repeat",
        menuColor: '#00B8D4',
        route: '/Intro/1',
        subParts: [
          {
            title: "Présentation du sujet",
            route: '/Intro/1'
          },
          {
            title: "Histoire de l'électricité",
            route: '/Intro/2'
          },
          {
            title: "Définition de l'électricité",
            route: '/Intro/3'
          }
        ]
      },
      {
        title: 'Pourquoi changer ?',
        color: 'linear-gradient(0deg, rgba(244,67,54,1) 0%, rgba(183,28,28,1) 100%)',
        menuColor: '#EF5350',
        route: '/Pourquoi-Changer/1',
        subParts: [
          {
            title: "Comment produire de l'électricité ?",
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
            title: "Les principaux moyens de production",
            route: '/Pourquoi-Changer/4'
          }
        ]
      },
      {
        title: 'Comment changer ?',
        color: 'linear-gradient(0deg, rgba(129,199,132,1) 0%, rgba(76,175,80,1) 100%)',
        menuColor: '#7CB342',
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
        color: "linear-gradient(rgba(211, 84, 0, 0.8), rgba(211, 84, 0, 0.8)), url('https://images.pexels.com/photos/421888/pexels-photo-421888.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260')",
        menuColor: 'orange',
        route: '/Conclusion/1',
        subParts: [
          {
            title: "Conclusion",
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

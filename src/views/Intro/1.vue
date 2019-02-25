<template>
  <v-container justify-center align-center mt-2>
    <v-layout justify-center>
      <v-flex xs11 md12 lg10 xl8 white--text mb-5>
        <v-card id='introTxt'>
          <v-img
            height="200px"
            class="white--text"
            src="https://images.pexels.com/photos/7000/fre-sonneveld-powerlines.jpg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
          >
          </v-img>
          <v-card-text style="font-size: 1.5rem">
            Nous avons un réseau électrique constitué de milliers
            de points de production, tous synchronisés et permettant une accessibilité à l'électricité partout en France.
            <br><br>
            Mais le système actuel est remis en question. En cause: le réchauffement climatique et les problèmes liés à
            l'utilisation massive du nucléaire. Nous devons et sommes déjà en train de nous adapter pour réduire notre
            impact sur l'environnement et ainsi nous préserver nous-mêmes.
            <br><br>
            Cette transformation débute par une meilleure production et utilisation de l'énergie car elle est fondamentale
            au bon fonctionnement de notre société, un bon rapport à l'énergie constitue un enjeu et un défi majeur pour
            notre futur.
            <br><br>
            Dans ce TPE nous allons étudier d'un point de vue technique <b>la possibilité d'une transition vers un mix électrique 
            100% renouvelable en France.</b> Nous nous sommes imposé cette limitation spatiale car les enjeux
            restent sensiblement les mêmes d'un pays à l'autre et elle nous permet d'étudier un parcours précis.
          </v-card-text>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import {TimelineMax} from 'gsap'

export default {
  mounted() {
    const introTxt = document.getElementById('introTxt')
    const tli = new TimelineMax()

    tli
      .fromTo(introTxt, 1, {y: 800}, {y: 0})
  }
}
</script>

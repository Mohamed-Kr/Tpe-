<template>
  <v-container>
    <v-layout justify-center>
      <v-flex xs11 md12 lg10 xl8>
        <v-card class='subheading mx-3 px-3 transparent' flat>
          <v-card-title class='headline white--text'>
            Au final, à partir des constats qu'on peut faire on peut présenter plusieurs solutions plus ou moins
            plausibles afin de répondre au probléme énergétique.
          </v-card-title>
        </v-card>
        <Foudre />
        <Fusion />
      </v-flex>
      <!--<div>
        partie solution avc moyen actuels: <br>

        un moyens pour avoir un mix principalement renouvelable est donc de faire un “mélange” des trois car chacun a ses inconvénients:

        hydraulique:
        le seul moyen de produire de l'électricité assez efficacement pour tout miser dessus serait de faire le maximum de barrage, or pour cela, il faudrait déplacer plusieurs villes/villages car la création d’un barrage fait qu’une partie de la vallé se retrouve inondée, et puis pouvoir produire de l'hydroélectricité efficacement ne se fait que dans certaines régions, ce qui poserait problème au niveau de son utilisation au niveau national
        éolien:
        il a plus faible rendement que les autres, ce qui impose d’en faire en très grande quantité et le problème de son utilisation au niveau national revient car sa production n’est efficace que dans certaines régions
        solaire:
        encore plus faible rendement donc à produire en encore beaucoup plus grande quantité et elle ne produit de l'électricité que le jour, ce qui fait qu’elle est impossible à considérer comme seul moyen de production étant donné la difficulté de stockage de l’énergie électrique
      </div>-->
    </v-layout>
  </v-container>
</template>

<script>
  import Foudre from './Foudre'
  export default {
    components: {
      Foudre
    }
  }
</script>

<style>

</style>

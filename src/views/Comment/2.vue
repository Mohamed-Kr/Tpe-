<template>
  <v-container>
    <v-layout justify-center>
      <v-flex xs11 md12 lg10 xl8>
        <v-card class='subheading mx-3 px-3 transparent' flat>
          <v-card-title class='headline white--text'>
            Voilà donc les solutions issues de nos réflexions/recherches sur la possibilité 
            d'un mix électrique 100% renouvelable que nous avons décidé de vous présenter.
          </v-card-title>
        </v-card>
      <div>
        <v-stepper v-model="e1">
          <v-stepper-header>
            <template v-for="(step, index) in steps">
              <v-stepper-step
                :key="'loul'+index"
                :step="index + 1"
                editable>
              {{ step.title }} 
              </v-stepper-step>
              <v-divider
                v-if="step !== steps"
                :key="step.title"
              ></v-divider>
            </template>
          </v-stepper-header>
          <v-stepper-items>
              <Actuels v-if='e1==1'/>
              <Stockage v-if='e1==2'/>
              <Foudre v-if='e1==3'/>
              <Fusion v-if='e1==4'/>
          </v-stepper-items>
        </v-stepper>
      </div>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
  import Foudre from './Solution/Foudre'
  import Actuels from './Solution/Actuels'
  import Fusion from './Solution/Fusion'
  import Stockage from './Solution/Stockage'
  export default {
    components: {
      Foudre,
      Actuels,
      Fusion,
      Stockage
    },
    data () {
      return {
        e1: 1,
        steps: [
          {title: 'Avec les moyens actuels'},
          {title: 'En stockant mieux'},
          {title: 'En récupérant la foudre'},
          {title: 'Grâce à la fusion nucléaire'}
        ]
      }
    },
  }
</script>


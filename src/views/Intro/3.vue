<template>
<v-container>
  <v-layout justify-center>
    <v-flex xs11 md12 lg10 xl8>
      <v-card class='subheading mb-5 pa-3' flat>
        <v-card-title class='headline'>Nous parlerons plus tard de production électrique, rappelons donc ce qu'est l'électricité.</v-card-title>
        <v-card>
          <v-card-title class='title mt-3'>Définition</v-card-title>
          <v-card-text
          >L'électricité est l'effet du déplacement de particules chargées (les électrons) dans un matériau conducteur sous l'effet d'une différence de potentiel à ces extrémités.
            <br/> L'électricité n'est donc pas vraiment de l'énérgie mais peut être considérée come étant un vecteur énérgétique, un 'moyen de transport' pour l'énérgie.
          </v-card-text>
        </v-card>
        <v-card>
          <v-card-title class="title mt-3">
            Point historique
          </v-card-title>
          <v-card-text>
            Le XIXème siècle a été extrèmement riche en découvertes sur l'électrcité, particulièrement la fin:
            <ul>
              <li>
                En 1879, Joseph Swan invente la lampe à incandescence.
              </li>
              <li>
                En 1892, Heilbronn (Allemagne) est la première ville d'Europe à être équipée d'un système de distribution d'électricité.
              </li>
              <li>
                Avant la fin du XIXème siècle, la production électrique industrielle devient possible et les premières applications techniques apparaissent, comme le moteur électrique, le télégraphe et le téléphone.
              </li>
            </ul>
          </v-card-text>
        </v-card>
      </v-card>
      <v-card class='subheading mt-5 pa-3'>
        <v-card-title class='title'>La matière</v-card-title>
        <v-card-text>
          <v-layout align-start>
            <v-flex xs5 mt-5 pt-5
            >Tout d'abord, rappelons que la matière est constituée d'atomes, formés par un noyau constitué de protons (charges positives), de neutrons (charges neutres) et d'un nuage électronique constitué d'électrons (charges négatives) 'orbitants' autour du noyau.
              <br/> Un atome est donc composé d'autant d'électrons que de protons et est donc électriquement neutre.
            </v-flex>
            <v-flex xs7 style='height: 500px; overflow: hidden'>
              <p style='text-align: center' class='title grey--text'>Schéma simplifié d'un atome</p>
              <Elec1/>
            </v-flex>
          </v-layout>
          <v-card class='pa-2' flat
          >Les orbites des électrons ne peuvent être situées qu'à certaines distances du noyau, on parle de couches électroniques discrètes.
          </v-card>
          <v-card class='pa-2' flat
          >Plus la couche est proche du noyau, plus la force qui lie un électron au noyau est élevée et plus l'énérgie qu'il faut fournir à l'électron pour le 'séparer' du noyau doit être grande.
          </v-card>
          <v-card class='pa-2' flat
          >La couche électronique située à la plus grande distance du noyau (ou couche externe) est donc celle dont les électrons sont les plus faciles à séparer du noyau, la couche externe de certains atomes contiennent un ou plusieurs électrons libre(s) (ne participant pas à une liaison covalente), ce qui fait que les matériaux peuvent être plus ou moins conducteurs.
          </v-card>
        </v-card-text>
      </v-card>
      <v-card class='subheading mt-5 pa-3'>
        <v-card-title class='title'>Les ions</v-card-title>
        <v-card-text>
          Il arrive qu'un atome perde ou gagne un ou plusieurs électron(s), il devient alors un ion et est donc électriquement chargé.
          <v-layout pa-5 style='height:450px; overflow: hidden'>
            <v-flex xs-6>
              <p style='text-align: center' class='title grey--text'>Schéma simplifié d'un
                <br/> ion de charge positive</p>
              <Elec2/>
            </v-flex>
            <v-flex xs-6>
              <p style='text-align: center' class='title grey--text'>Schéma simplifié d'un
                <br/> ion de charge négative</p>
              <Elec3/>
            </v-flex>
          </v-layout>
        </v-card-text>
      </v-card>
      <v-card class='subheading mt-5 pa-3'>
        <v-card-title class='title'>Un peu de pratique...</v-card-title>
        <v-card class='pa-4' flat
        >Le schéma (très simplifié) ci-dessous présente deux matériaux de charges électriques opposées, appuyez sur le bouton pour les relier avec un matériau conducteur.
        </v-card>
        <Conducteur/>
      </v-card>
      </v-card>
    </v-flex>
  </v-layout>
</v-container>
</template>

<script>
import Elec1 from './schemas/Elec1.vue'
import Elec2 from './schemas/Elec2.vue'
import Elec3 from './schemas/Elec3.vue'
import Conducteur from './schemas/Conducteur.vue'
export default {
  components: {
    Elec1,
    Elec2,
    Elec3,
    Conducteur
  }
}
</script>

<template>

<v-container>
    <v-layout justify-center>
        <v-flex xs11>
                <v-card class='subheading mb-5 pa-3' flat>
                    <v-card-title class='headline'>Nous parlerons plus tard de production éléctrique, rappellons donc ce qu'est l'éléctricité.</v-card-title>
                    <v-card>
                        <v-card-title class='title mt-3'>Définition</v-card-title>
                        <v-card-text>
                            L'électricité est l'effet du déplacement de particules chargées (les éléctrons) dans un conducteur sous l'effet d'une différence de potentiel aux extremités de ce conducteur.
                            <br/> L'éléctricité n'est donc pas vraiment de l'énérgie mais peut être considérée un vecteur énérgétique, un 'moyen de transport' pour l'énérgie.
                        </v-card-text>
                    </v-card>
										<v-card>
											<v-card-title class="title mt-3">
												Point historique
											</v-card-title>
											<v-card-text>
													Le XIXeme siècle a été un sciècle extrèmement riche en découvertes sur l'éléctrcité, particulièrement la fin:
													<ul>
														<li>
															En 1879, Joseph Swan invente la lampe à incandescence.
														</li>
														<li>
															En 1892, Heilbronn, en Allemagne, est la première ville d'Europe à être équipée d'un système de distribution d'électricité.
														</li>
														<li>
															Avant la fin du XIème siècle, la production industrielle d'électricité devient possible et les premières applications techniques apparaissent comme le moteur électrique, le télégraphe et le téléphone.
														</li>
													</ul>
											</v-card-text>
										</v-card>
                </v-card>
                <v-card class='subheading mt-5 pa-3'>
                    <v-card-title class='title'>La matière</v-card-title>
                    <v-card-text>
                        <v-layout align-start>
                            <v-flex xs5 mt-5 pt-5>
                                Tout d'abord, rappelons que la matière est constituée d'atomes, formés par un noyau constitué de protons (charges positives), de neutrons (charges neutre) et d'un nuage éléctronique constitué d'éléctrons (charges négatives) 'orbitants' autour du noyau.
                                <br/> Un atome est donc composé d'autant d'éléctrons que de protons et est donc éléctriquement neutre.
                            </v-flex>
                            <v-flex xs7 style='height: 500px; overflow: hidden'>
                                <p style='text-align: center' class='title grey--text'>Schéma simplifié d'un atome</p>
                                <Elec1/>
                            </v-flex>
                        </v-layout>
                        <v-card class='pa-2' flat>
                            Les orbites des éléctrons ne peuvent être situées qu'à certaines distances du noyau, on parle de couches éléctroniques discrètes.
                        </v-card>
                        <v-card class='pa-2' flat>
                            Plus la couche est proche du noyau, plus la force qui lie un éléctron au noyau est élevée et plus l'énérgie qu'il faut fournir à l'éléctron pour le 'séparer' du noyau doit être grande.
                        </v-card>
                        <v-card class='pa-2' flat>
                            La couche éléctronique située à la plus grande distance du noyau (ou couche externe) est donc celle dont les éléctrons sont les plus faciles à séparer du noyau, ce qui fait que les matériaux peuvent être plus ou moins conducteurs.
                        </v-card>
                    </v-card-text>
                </v-card>
                <v-card class='subheading mt-5'>
                    <v-card-title class='title'>Les ions</v-card-title>
                    <v-card-text>
                        Il arrive qu'un atome perde ou gagne un ou plusieurs éléctron(s), il devient alors un ion et est donc éléctriquement chargé.
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
                <v-card class='subheading pa-2 mt-5'>
                    <v-card-title class='title'>Un peu de pratique</v-card-title>
                    <v-card class='pa-4' flat>
                        Le schéma ci-dessous présente deux matériaux de charges éléctriques opposées, appuyez sur le bouton pour les relier avec un matériau conducteur.
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

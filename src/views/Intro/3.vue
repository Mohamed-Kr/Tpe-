<template>
	<v-container>
		<v-card class='pt-2'>
			<v-card class='subheading ma-3 pa-3' flat>
				<v-card-title class='headline'>Avant de parler de produire de l'éléctricité, soyons sûr de savoir de quoi on parle</v-card-title>
				<v-card-title class='title mt-5'>Définition</v-card-title>
				<v-card-text>
				L'électricité est l'effet du déplacement de particules chargées (les éléctrons) 
				dans un conducteur sous l'effet d'une difference de potentiel aux extremités de ce conducteur.
				<br/>
				L'éléctricité n'est donc pas vraiment de l'énérgie mais plutôt un vecteur énérgétique, un 'moyen de
				transport' pour l'énérgie.
				</v-card-text>
			</v-card>
			<v-card class='subheading ma-5 pa-2' flat>
				<v-card-title class='title'>La matière</v-card-title>
				<v-card-text>
					<v-layout align-start>
						<v-flex xs5 mt-5 pt-5>
					Tout d'abord, rappelons que la matière est constituée d'atomes, formés par 
					un noyeau, constitué de protons (charges positives) et de neutrons (charges neutre) 
					et d'un nuage éléctronique, constitué d'éléctrons (charges négatives) 'orbitants' autour du noyeau.<br/>
					Un atome est éléctriquement neutre et est donc composé d'autant d'éléctrons que de protons.
						</v-flex>
						<v-flex xs7 style='height: 500px; overflow: hidden'>
							<p style='text-align: center' class='title grey--text'>schéma simplifié d'un atome</p>
							<Elec1/>
						</v-flex>
					</v-layout>
					-Les orbites des éléctrons ne peuvent être situées qu'à certaines distances du noyau, 
					on parle de couches éléctroniques discrètes.<br/>
					-Plus la couche est proche du noyau, plus la force qui lie un éléctron au noyau l'est aussi et plus
					l'énérgie qu'il faut fournir à l'éléctron pour le 'séparer' du noyau doit être grande.<br/>
					-La couche éléctronique située à la plus grande distance du noyau (ou couche externe)
					est donc celle dont les éléctrons sont les plus facile à séparer du noyau, ce qui fait que les matériaux peuvent être 
					plus ou moin conducteur.
					<v-card class='subheading mt-5' flat>
						<v-card-title class='title'>Les ions</v-card-title>
						<v-card-text>
							Il arrive qu'un atome perde ou gagne un ou plusieurs éléctron(s), il devient donc un ion éléctriquement chargé.
							<v-layout pa-5 style='height:450px; overflow: hidden'>
								<v-flex xs-6>
									<p style='text-align: center' class='title grey--text'>Schéma simplifié d'un<br/> ion de charge positive</p>
									<Elec2/>
								</v-flex>
								<v-flex xs-6>
									<p style='text-align: center' class='title grey--text'>Schéma simplifié d'un<br/> ion de charge négative</p>
									<Elec3/>
								</v-flex>
							</v-layout>
						</v-card-text>
					</v-card>
					<v-card class='subheading pa-2' flat>
						<v-card-title class='title'>Un peu de pratique</v-card-title>
						Dans ce schéma, il y a deux matériaux de charges éléctriques opposées, appuyez sur le bouton pour les relier avec un matériau conducteur.
						<Conducteur/>
						<v-card-text>
							-La différence des signe des deux matériaux éléctriquement chargés est la différence de potentiel évoqué plus tôt.<br/>
							-Le courant éléctrique est la conséquence du déplacement des éléctrons dans la matière.
						</v-card-text>
					</v-card>
				</v-card-text>
			</v-card>
		</v-card>
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
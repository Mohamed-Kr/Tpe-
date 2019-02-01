<template>
	<v-container justify-center align-center mt-2>
		<v-layout justify-center>
			<v-flex xs11 md10 lg11 white--text id='introTxt'>
				<v-card>
							<v-card-text style="font-size: 1.5rem">
								<!-- Introduction des enjeux, formidable réseau électrique, besoin d'une transformation, cadrage, problématique -->
								Aujourd'hui nous vivons une époque formidable... Nous avons un réseau électrique constitué de millers de points de productions, tous syncronisés et permettant une accessibilité à l'éléctricité partout en France.
								<br><br>
								Mais le système actuel est remis en question. En cause: le réchauffement climatique et les problèmes liées à l'utilisation massive du nucléaire. Nous devons et nous sommes déjà en train de nous adapter pour réduire notre impact sur l'environment et ainsi nous préserver nous même.
								<br>
								Cette transformation débute par une meilleure production et utilisation de l'énergie car elle est fondamentale au bon fonctionnement de notre société, un bon rapport à l'énergie constitue un enjeu et un défi majeur pour notre futur, en France et partout dans le Monde.
								<br><br>
								Dans ce TPE nous allons étudier d'un point de vue technique <b>la possibilité d'une transition vers un mix éléctrique 100% renouvelable en France.</b> Nous nous sommes imposé cette limitation spatiale car les enjeux restent sensiblement les mêmes d'un pays à l'autre et elle nous permet d'étudier un parcours précis.
								<!-- L'électricité n'est pas en elle même de l'énergie, même si nous n'allons pas rentrer dans les détails pour vous parler de la nature quantique de l'énergie nous pouvons quand même vous preciser que l'électricité n'est qu'un vecteur d'énergie, et ce vecteur est très utile et permet de faire fonctionner tout type d'appareils : de la machine industrielle à la voiture.
								<br>
								<br><br>
								C'est pourquoi nous allons nous demander <b>comment passer à un mix éléctrique 100% renouvelable en France ?</b> -->
							</v-card-text>
				</v-card>
			</v-flex>
		</v-layout>
	</v-container>
</template>

<script>
import { TimelineMax } from 'gsap'
export default {
	mounted () {
		const introTxt = document.getElementById('introTxt')
		const tli = new TimelineMax()

		tli
		.fromTo(introTxt, 1, {y: 800}, {y : 0})
	}
}
</script>

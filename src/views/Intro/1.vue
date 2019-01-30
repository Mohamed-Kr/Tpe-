<template>
	<v-container justify-center align-center mt-2>
		<v-layout justify-center>
			<v-flex xs11 md10 lg8 white--text id='introTxt'>
				<v-card>
					<v-img
						src="https://images.pexels.com/photos/157039/pexels-photo-157039.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
						height="200px"
						cover
					></v-img>
							<v-card-text style="font-size: 1.5rem">
								<!-- Introduction des enjeux, formidable réseau électrique, besoin d'une transformation, cadrage, problématique -->
								Aujourd'hui nous vivons une époque formidable... Nous avons à disposition une électricité accessible partout en France, notre réseau électrique est syncronisé avec des millers de points de productions électriques partout en Europe. Mais le système actuel est remis en question. En cause, le réchauffement climatique et les problèmes liées à l'utilisation massive du nucléaire. Nous devons et nous sommes déjà en train de nous adapter pour réduire notre impact sur l'environment et ainsi nous préserver nous même.
								<br>
								Cette transformation débute par une énergie propre, car l'énergie et à la base de notre société, l'énergie constitue un enjeu et un défie majeur pour notre futur, en France et partout dans le Monde.
								<br>
								Dans ce TPE nous allons aborder la question de la transition énergétique électrique en France seulement, car l'énergie est un domaine très vaste.
								L'électricité n'est pas en elle même de l'énergie, même si nous n'allons pas rentrer dans les détails pour vous parler de la nature quantique de l'énergie nous pouvons quand même vous preciser que l'électricité n'est qu'un vecteur d'énergie, et ce vecteur est très utile et permet de faire fonctionner tout type d'appareils : de la machine industrielle à la voiture.
								<br>
								<br>
								C'est pourquoi nous allons nous demander <b>comment passer à un mix énergétique électrique 100% renouvelable en France ?</b>
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

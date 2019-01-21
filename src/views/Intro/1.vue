<template>
	<v-container justify-center align-center mt-5>
		<v-flex pa-3 headline white--text id='introTxt'>
			A travers ce site, nous avons décider de tenter de répondre à une problématique 
			importante pour notre époque et notre futur: 
			<br>
			<b>Comment, pourquoi et par quels moyens obtenir un mix énergétique électrique 100% renouvelable en France ?</b>
			<br>
			Autrement dit : Est-il possible de produire assez d'éléctricité pour répondre à nos besoin sans que ça n'ait d'impact sur notre planète ?
			<br/><br/>
			Mais avant il convient de préciser les cadres de notre TPE, quel sujet nous traiterons exactement. Notre TPE se concentra principalement sur l'énergie électrique qui est aujourd'hui le principal vecteur énergétique utilisé dans le monde. Il faut savoir que la transition énergétique s'applique dans tout les domaines de l'énergie. En tout cas, sachez que quand vous entenderez "Transition énergétique", comprenez "Transition énergétique électrique". 
		</v-flex>
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
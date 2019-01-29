<template>
	<v-container justify-center align-center mt-5>
		<v-flex pa-3 headline white--text id='introTxt'>
			A travers ce TPE, nous avons décider de tenter de répondre à une problématique 
			importante de notre époque: Est-il possible d'avoir un mix énérgétique élécrtique 100% renouvelable en France ? Un mix énérgétique étant
			 l'ensemble des 
			moyens de production éléctrique d'un territoire donné.
			<br/><br/>
			Nous avons choisis cette problématique car nous pensons qu'elle est trop souvent prise à la légère,
			particulièrement d'un point de vue politique... 
			<br/><br/>
			Mais bien heureusement: ces quelques dérnières années, il y a eu une certaine prise de conscience 
			sur le sujet
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
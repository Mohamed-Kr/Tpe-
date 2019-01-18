<template>
	<v-container>
		<div>
			Tout d'abord avant de parler de l'histoire de l'énergie électrique, il convient de préciser qu'il n'y a jamais eu vraiment de transition énergétique, c'està dire un moment où dans l'histoire nous avons complétement changé de mode de transition énergétique. Or, à l'heure actuelle nous utilison encore du charbon pour produire 29% de l'électricité mondial est cette part est loin de diminuer.
	        
		</div>
		<v-timeline>
			<v-timeline-item
				v-for="(item, index) in timelineItems"
				:key="index"
				color="red lighten-2"
				large>
			<span slot="opposite">{{ item.date }}</span>
			<v-card class="elevation-2">
				<v-card-title class="headline">{{ item.title }}</v-card-title>
				<v-card-text>
				 {{ item.description }}
				</v-card-text>
			</v-card>
			</v-timeline-item>
		</v-timeline>
	</v-container>
</template>

<script>
export default {
	data: () => ({
		timelineItems: [
			{
				date: "il ya dix ans",
				title: "Hello world",
				description: "Lorem impsum lele"
			}
		]
	})
}
</script>

<style>

</style>

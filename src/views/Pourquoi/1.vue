<template>
	<v-container>
		<v-card class='pt-2 pb-4'>
			<v-card class='subheading ma-3 pa-3' flat>
			<v-card-title class='headline'>A première vue, il est assez facile de produire de l'éléctricité.</v-card-title>
			<v-card class='mt-5 pa-3'>
				Il y a plusieurs façon de produire de l'éléctricité mais nous n'étuedierons ici que l'induction, phénomène découvert le 29 août 1831 par le chimiste Britanique Michael Faraday (1791-1867).
			</v-card>
			</v-card>
				<v-card class='subheading ma-5 pa-3' >
					<v-card-text>
						<v-card-title class='title'>L'induction</v-card-title>
			<v-card class='mt-2 pa-3' flat>
				Essayez de déplacer l'aimant à l'intérieur de la bobine de cuivre (vue en coupe), bobine dont les 
				extémités ont été reliés a une lampe.
			</v-card>
				<Lampe/>
			<v-card class='mt-2 pa-3' flat>
					En déplaçant l’aimant, des charges vont être attirées, d’autres repoussées. Les électrons libres du fil vont bouger : ce mouvement d’électrons est par définition un courant électrique.
Sans le mouvement de l’aimant, les électrons se placent dans une position d’équilibre et ne bougent plus.
Plus la vitesse de déplacement de l’aimant par rapport à la bobine est grande, plus les électrons du fil métallique seront perturbés, plus le courant sera important.
Ce phénomène s’appelle l’induction.
			</v-card>
			<v-card class='mt-2 pa-3' flat>
D’autres caractéristiques vont jouer également comme la taille de l’aimant, ou le nombre de tours de fil sur la bobine :
			<v-card class='pl-3' flat>
un aimant plus gros est plus « puissant » et crée un champ magnétique plus intense : un plus grand nombre d’électrons est perturbé.
			</v-card>
			<v-card class='pl-3' flat>
plus la bobine comporte de tours, plus l’aimant qui se déplace va agir sur un grand nombre d’électrons en même temps : l’intensité du courant électrique (le 'débit' d’électrons) sera plus importante.
			</v-card>
			</v-card>
					</v-card-text>
				</v-card>
		</v-card>
	</v-container>
</template>

<script>
import Lampe from './Schemas/Lampe.vue'
export default {
	components: {
		Lampe
	}
}
</script>
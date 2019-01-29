<template>
	<v-container>
		<v-card class='pt-2 pb-4'>
			<v-card class='subheading ma-3 pa-3' flat>
			<v-card-title class='headline'>A première vue, il est assez facile de produire de l'éléctricité.</v-card-title>
			<v-card class='mt-5 pa-3'>
				Il y a plusieurs façon de produire de l'éléctricité mais nous n'étuedierons ici que l'induction, 
				phénomène découvert le 29 août 1831 par le chimiste Britanique Michael Faraday (1791-1867)
				car la trés grande majorité des moyens de productions éléctrique fonctionnent grâce à ce principe.
			</v-card>
			</v-card>
				<v-card class='subheading ma-5 pa-3' >
					<v-card-text>
						<v-card-title class='title'>L'induction</v-card-title>
			<v-card class='mt-2 pa-3' flat>
				Essayez de déplacer l'aimant à l'intérieur de la bobine de cuivre (vue en coupe), bobine dont les 
				extémités ont été reliés à une lampe.
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
Un aimant plus gros est plus « puissant » et crée un champ magnétique plus intense : un plus grand nombre d’électrons est perturbé.
			</v-card>
			<v-card class='pl-3' flat>
Plus la bobine comporte de tours, plus l’aimant qui se déplace va agir sur un grand nombre d’électrons en même temps : l’intensité du courant électrique (le 'débit' d’électrons) sera plus importante.
			</v-card>
			</v-card>
					</v-card-text>
				</v-card>
				<v-card class='subheading ma-5 pa-3' >
					<v-card-text>
						<v-card-title class='title'>L'alternateur</v-card-title>
			<v-card class='mt-2 pa-3' flat>
  En 1831, donc la même année que la découverte de l'induction, Hippolyte Pixii (1808 - 1835), fabricant d'instruments de Paris,
   sur les indications d'André-Marie Ampère, mathématicien, physicien, chimiste et philosophe français, construit le premier
    alternateur.
			</v-card>
			<v-card class='mt-2 pa-3' flat>
	Un alternateur est une machine rotative qui convertit l'énergie mécanique fournie au rotor
   en énergie électrique à courant alternatif.
			</v-card>
			<v-card class='mt-2 pa-3' flat>
Plus de 95 % de l’énergie électrique est produite par les alternateurs, ce sont des machines électromécaniques fournissant des tensions alternatives 
de fréquence proportionnelle à leur vitesse de rotation. Ces machines sont peu coûteuses 
par raport à d'autre moyens de production éléctrique et ont un rendement de l'ordre de 95 %.
			</v-card>
			<v-card class='mt-2 pa-3 pb-0 title' flat>
Principe de l'alternateur
			</v-card>
			<v-card class='pa-3' flat>
Cette machine est constituée d'un rotor (partie tournante) et d'un stator (partie fixe).
			</v-card>
			<v-card class='mt-2 pa-3' flat>
Le rotor est l'inducteur, il peut être constitué d'un aimant permanent (générant donc un champ constant), dans ce cas la tension délivrée 
par la machine n'est pas réglable. En général, un électroaimant 
assure l'induction. C'est un bobinage alimenté en courant continu, et créant un champ magnétique (c'est d'ailleur de ce constat qu'est 
parti Faraday pour déduire L'induction, étant le phénomène inverse).
			</v-card>
			<v-card class='mt-2 pa-3' flat>
Le stator est l'induit, il est constitué d'enroulements qui vont être le siège du courant électrique alternatif induit par la
 variation du champ magnétique due à son mouvement (par rapport à l'induit).
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
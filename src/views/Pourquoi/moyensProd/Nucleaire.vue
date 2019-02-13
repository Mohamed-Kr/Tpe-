<template>
		<v-card class='pa-4'>
			<v-card-title class='display-2'>Énergie nucléaire</v-card-title>
			<v-card flat class='my-4 px-5 title'>
				En France, la prodution d'éléctricité nucléaire est mise en place dans les années 1950 et 1960.
			</v-card>
			<v-card class='mt-2 px-3'>
				<v-card-text>
Elle est ensuite devenue progressivement la principale source de production d'électricité en France. Le nucléaire couvre, en 2016, 
72 % de la production d'électricité.
<v-layout py-5>
	<v-flex xs6>
		<v-img src='https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Produc-energie-primaire-fr.svg/330px-Produc-energie-primaire-fr.svg.png' aspect-ratio="1.7" contain></v-img>
	</v-flex>
	<v-flex xs6>
		1tep correspond à l'énergie dégagée sous forme de chaleur par la combustion d’une tonne de pétrole.
		<br/><br/>
		L'énergie produite par 1 kg d'uranium naturel dans un réacteur nucléaire est égale à l'énergie produite par 
		la combustion de 10 tonnes de pétrole.
	</v-flex>
</v-layout>
La France a bien heureusement décidé de réduire la part du nucléaire dans sa production d’électricité de moitié avant 2025
lors de l'adoption de la loi relative à la transition énergétique pour la croissance verte de 20151. 
<br/><br/>
En 2017, la France compte 19 centrales nucléaires en exploitation pour un total de 58 réacteurs nucléaires et se place donc deuxième 
au rang mondial derrière les états unis.
				</v-card-text>
			</v-card>
			<v-card class='mt-2 px-3'>
				<v-card-title class='title'>Comment ça marche?</v-card-title>
				<v-card-text>
					Les réacteurs nucléaire fonctionnent grâce à la fission nucléaire.
					Pour que la fission se produise, on ajoute généralement un neutron au noyau d'un atome lourd,
					le noyau se divise en deux, laissant place à deux noyaux moins lourd. La division du noyau
					dégage une quantité importante de chaleur. 
					<v-img class="py-5" contain src="https://proxy.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.bertrandbarre.com%2Fimages%2Fpic_reaction_en_chaine.gif&f=1"></v-img>
					Quelques uns des neutrons ne participe pas à la formation des deux nouveaux noyaux et vont donc 
					causer la fission des atomes voisins: c'est une réaction en chaîne.
					<br/><br/>
					Dans le réacteur, la fission des atomes d'uranium produit donc une grande quantité de chaleur.
					Cette chaleur fait augmenter la température de l'eau qui circule autour du réacteur, à 320 °C. 
					L'eau est maintenue sous pression pour l'empêcher de bouillir. Ce circuit fermé est appelé circuit primaire.
					<br/><br/>
					Le circuit primaire communique avec un deuxième circuit fermé, appelé circuit secondaire par l'intermédiaire 
					d'un générateur de vapeur. Dans ce générateur de vapeur, l'eau chaude du circuit primaire chauffe l'eau du 
					circuit secondaire qui se transforme en vapeur. La pression de cette vapeur fait tourner une turbine qui entraîne 
					à son tour un alternateur.
				</v-card-text>
			</v-card>
				<v-layout mt-5 color='white--text'>
					<v-flex xs1>
					</v-flex>
					<v-flex xs5>
						<v-card  style='height: 100%;' color='light-green lighten-1 white--text'>
							<v-card-title class='title'>Avantages:</v-card-title>
							<v-card-text>
								<ul>
									<li>peu rejet de CO2</li>
								</ul>
							</v-card-text>
						</v-card>
					</v-flex>
					<v-flex xs1>
					</v-flex>
					<v-flex xs5>
						<v-card  style='height: 100%;' color='red lighten-1 white--text'>
							<v-card-title class='title'>Désavantages:</v-card-title>
							<v-card-text>
								<ul>
									<li>Conséquences en cas d’accident</li>
									<li>Utilise une ressource limitée</li>
									<li>Difficultés à traiter les déchets</li>
									<li>Coûts d’installation, d’entretien et de démantèlement élevées</li>
								</ul>
							</v-card-text>
						</v-card>
					</v-flex>
					<v-flex xs1>
					</v-flex>
				</v-layout>
		</v-card>
</template>
<style scoped>
* {font-size: 20px;}
</style>

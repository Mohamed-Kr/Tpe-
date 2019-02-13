<template>
		<v-card class='pa-4'>
			<v-card-title class='display-2'>Les barrages hydroéléctriques</v-card-title>
			<v-card flat class='my-4 px-5 title'>
				L'énergie hydraulique est une énergie renouvelable qui utilise
				 l'énergie cinétique et potentielle de l'eau (rivière, chute 
				 d'eau et marée) pour produire de l'énergie mécanique et, surtout, 
				 de l'électricité. On parle alors d'hydroélectricité.
				 <br/>
				 Le secteur de l'hydroélectricité en France bénéficie d'un potentiel important grâce à la présence de massifs montagneux : Alpes, Pyrénées, Massif central.
			</v-card>
			<v-card class='mt-2 px-3'>
				<v-card-text>
					Les barrages hydroéléctriques ont été un des premiers moyens de production éléctrique,
					leur production représente aujourd'hui environ 10% du mix éléctrique,
					sa part est en augmentation, particulièrement depuis la fin de la seconde 
					guerre mondiale: de 1945 à 1960, 120 grands barrages furent construits.
					<br/><br/>
					Le potentiel brut hydroélectrique techniquement exploitable de la France est estimé à 
					100 TWh/an, dont 70 TWh/an sont considérés comme économiquement 
					exploitables. À la fin 2008, la France disposait de 25,3 GW en exploitation qui ont 
					produit 50 TWh en 2008, soit 72 % du potentiel économiquement exploitable.
					<br/><br/>
					Ils ont un rendement d'environ 80% et représente 51% de la production éléctrique 
					issue d'énérgies renouvelables.
				</v-card-text>
			</v-card>
			<v-card class='mt-2 px-3'>
				<v-card-title class='title'>Comment ça marche?</v-card-title>
				<v-card-text>
					Le barrage retient une partie de l'eau qui s'écoule et crée un lac de retenue. Ce lac constitue un stock d'eau,
					 c'est donc un moyen de stocker de l’énergie renouvelable. Le débit du cours d'eau ou l'ouverture des vannes du barrage entraîne 
					 l'eau dans un canal de dérivation jusqu'aux turbines électriques. Plus le débit et la hauteur de chute d'eau sont importants, 
					 plus l'eau transporte d'énergie.
					<br/><br/>
					Cette eau actionne les turbines qui entraînent à leur tour des alternateurs pour produire du courant électrique. 
					Un transformateur injecte ensuite cette électricité dans le réseau éléctrique.
					<br/><br/>
					<v-img class="py-5" contain src="https://proxy.duckduckgo.com/iu/?u=https%3A%2F%2F2.bp.blogspot.com%2F-HlLaV6iDi1E%2FW6ZsrD4Tw-I%2FAAAAAAAAtdE%2FdPaOUOXgiz4VrqFt3nDZPfGq0OHb3VwZACLcBGAs%2Fs1600%2Fhidroelektrik_santral_baraj.gif&f=1"></v-img>
					Leurs pâles orientables permettent de concentrer la production pendant les périodes de forte consommation. elles sont capables de passer de l'arrêt
					à leur puissance maximale en quelques minutes, et donc de faire face aux variations parfois très rapides de la demande 
					par exemple, lorsqu'un réacteur nucléaire tombe en panne, le réseau perd plus de 1 000 MW quasi-instantanément, cette caractéristique
					les rendent indispensables à la sécurité du système électrique.
					<br/><br/>
					Les barrages hydroélectriques ont toutefois des inconvénients vis-à-vis du fonctionnement des écosystèmes.
					En effet, après le transport de l'électricité dans le réseau, 
					l'eau rejoint enfin le cours d'eau, parfois avec un débit important, ce qui peut perturber les écosystèmes.
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
									<li>Pilotable</li>
									<li>Durable</li>
									<li>Capacité de stockage</li>
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
									<li>Influence sur les écosystèmes</li>
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
* {
	font-size: 20px;
}
</style>

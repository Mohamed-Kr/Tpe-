<template>
		<v-card class='pa-4'>
			<v-card-title class='display-2'>Énergie éolienne</v-card-title>
			<v-card flat class='my-4 px-5 title'>
				Le secteur de l'énergie éolienne en France a pris progressivement de l'importance : 
				en 2017, il fournissait 4,5 % de la production d'électricité du pays.<br/>
				La taille et la position géographique de son territoire donnent à la France le deuxième potentiel
				éolien européen.
			</v-card>
			<v-card class='mt-2 px-3'>
				<v-card-text>
				les zones terrestres régulièrement et fortement ventées se situent sur la façade ouest du pays, 
				de la Vendée au Pas-de-Calais, en vallée du Rhône et sur la côte languedocienne.
				
				<v-img style='width: 60%; margin: auto;' contain src="https://proxy.duckduckgo.com/iu/?u=http%3A%2F%2Ffiles.tpehydrolienneolienne.webnode.fr%2F200000019-9b9249c8c5%2Fpotentiel-eolien.png&f=1"></v-img>


				Le potentiel éolien français est éstimé à 30 000 MWA.
				<br/><br/>
				Le potentiel exploitable à terre est fortement réduit par diverses contraintes, 
				en particulier par l'obligation d'éviter les zones d'exclusion imposées par le ministère des Armées 
				pour les radars ou l'entraînement à très basse altitude, ainsi que les zones écologiquement 
				protégées, les périmètres historiques, et l'obligation de construire à plus de 500 mètres des 
				habitations. Ainsi en Bretagne, où l'habitation est dispersée, seul 4 % du territoire est éligible à l'éolien. 
				<br/><br/>
				15000 Mégawatts installés en France au 31 décembre 2018 contre 12000 Mégawatts en 2016 et 
				vise les 33% de la production renouvelable avant 2030, en 2012 elle était d'environ 20%.
				</v-card-text>
			</v-card>
			<v-card class='mt-2 px-3'>
				<v-card-title class='title'>Comment ça marche?</v-card-title>
				<v-card-text>
					Le vent fait tourner les pales, qui font tourner un alternateur.
					<v-img class="py-5" contain src="https://proxy.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.industrialoutpost.com%2Fwp-content%2Fuploads%2F2016%2F11%2Fgiphy.gif&f=1"></v-img>
					
					Mais le fonctionnement d'une éolienne n'est possible que sur une certaine intervalle de vitesse du vent:
					<br/><br/>
					-Si la vitesse du vent est trop faible (par exemple moins de 10 km/h), l'éolienne s'arrête en raison 
					des forces de frottement sec qui s'opposent à la rotation de l'hélice. Cette diminution de la vitesse 
					de rotation ne permet plus de fournir assez d'électricité. Dans ce cas, l'éolienne n'est donc plus 
					productrice d'électricité, mais pourrait au contraire devenir consommatrice, elle est donc 
					automatiquement déconnectée du réseau. 
					<br/><br/>
					-Si la vitesse du vent est trop forte (supérieure à 100 km/h par exemple), l'éolienne est mise en 
					sécurité et déconnectée du réseau, ses pales sont mises en drapeau et s'arrêtent pour éviter des 
					sollicitations qui pourraient les briser. Certaines éoliennes récentes continuent à tourner mais 
					à vitesse réduite, diminuant ainsi le nombre de déconnexions du réseau et augmentant la production 
					moyenne par vent fort
					

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
									<li>Durable</li>
									<li>Peu coûteux</li>
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
									<li>Non pilotable</li>
									<li>Ne fonctionne que sur une certaine intervalle de vitesse du vent</li>
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

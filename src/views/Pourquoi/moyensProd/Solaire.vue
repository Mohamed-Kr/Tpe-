<template>
		<v-card class='pa-4'>
			<v-card-title class='display-2'>Énergie solaire</v-card-title>
			<v-card flat class='my-4 px-5 title'>
				C'est en 1958 que la première application réelle des cellules photovoltaïques est trouvée, avec 
				l'alimentation des émetteurs radio du satellite Vanguard 1. <br/>
				Aujourd'hui, cette théchnologie s'est beaucoup dévelopée, parmi les Énergies Renouvelables, le solaire occupe 
				encore une place minime mais connait une très forte progression 
				depuis quelques années.
			</v-card>
			<v-card class='mt-2 px-3'>
				<v-card-text>
					Trois régions se partagent les deux tiers de la production nationale en 2017.
					 Il s’agit de la Nouvelle Aquitaine, l’Occitanie, et la Provence-Alpes-Côte-d’Azur.
					 <v-img src='https://www.edf.fr/sites/default/files/mediatheque/2018/solaire/energie-a-z_solaire-pv_cap-regions_2018.png' aspect-ratio="1.7" contain></v-img>
					Cela montre à quelle point la production issue de l'énérgie solaire est très dépendante de la position géographique et de la météo, 
					principaux 'créateur de potentiel', à tel point qu'un nuage peut avoir une influence majeure sur la production d'une journée.
					<br/><br/>
					En 2017, la puissance installée du parc photovoltaïque en France 
					métropolitaine atteint 7 660 MW. Il est en progression de 887 MW par rapport à 2016. 
					<br/><br/>
				Les panneaux photovoltaïques ne transforment que 5% de l'énérgie solaire en électricité.
				</v-card-text>
			</v-card>
			<v-card class='mt-2 px-3'>
				<v-card-title class='title'>Comment ça marche ?</v-card-title>
				<v-card-text>
					Une cellule photovoltïque est composée de deux couches de silicium, une dans 
					laquelle du bore a été ajouté, la rendant ainsi chargée négativement et une autre dans 
					laquelle du du phosphore à été ajouté, la rendant ainsi chargée positivement.
					<br/><br/>
					La couche chargée négativement est exposée à la lumière, le silicium est un semi-conducteur, 
					la lumière y ajoute donc des électrons. Cet ajout d'électrons agrandit la différence de potentiel entre les couches.
					il suffit donc de les relier pour obtenir
					du courant électrique.
					<v-img class="py-5" style='width:70%; margin: auto;' contain src="https://proxy.duckduckgo.com/iu/?u=http%3A%2F%2Fenergia.n.e.f.unblog.fr%2Ffiles%2F2010%2F06%2Fshemaenergiephotovoltaique.jpg&f=1"></v-img>
					la couche type n est celle contenant du bore<br/>
					et la couche type p est celle contenant du phosphore.
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
									<li>Peu cher à produire</li>
									<li>Durable</li>
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
									<li>Rendement faible</li>
									<li>La production dépend énormement de l’heure/la météo/l'emplacement géographique</li>
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

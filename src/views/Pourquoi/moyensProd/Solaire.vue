<template>
		<v-card class='pa-4'>
			<v-card-title class='display-2'>Énergie solaire</v-card-title>
			<v-card flat class='my-4 px-5 title'>
				Parmi les Énergies Renouvelables, le solaire occupe encore une place minime mais connait une très forte progression 
				depuis quelques années.
			</v-card>
			<v-card class='mt-2 px-3'>
				<v-card-text>
					Trois régions se partagent les deux tiers de la production nationale en 2017.
					 Il s’agit de la Nouvelle Aquitaine, l’Occitanie, et la Provence-Alpes-Côte-d’Azur.
					 <v-img src='https://www.edf.fr/sites/default/files/mediatheque/2018/solaire/energie-a-z_solaire-pv_cap-regions_2018.png' aspect-ratio="1.7" contain></v-img>
					Cela montre à quelle point la production issue de l'énérgie solaire est dépendante de la position géographique et de la météo.
				</v-card-text>
			</v-card>
			<v-card class='mt-2 px-3'>
				<v-card-text>
					La consommation d’électricité d’origine photovoltaïque représente 2 % de la consommation d’électricité nationale en 2017. 
					Par comparaison, elle avoisine les 7 % en Allemagne, en Italie et en Grèce. <br/><br/>
				Les panneaux photovoltaïques ont un trés faible rendement: seulement 5% de l'énérgie solaire est transformée en éléctricité.
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
									<li>Faible rendement</li>
									<li>La production dépend de l’heure</li>
									<li>La production dépend de la météo</li>
									<li>La production dépend de l'emplacement géographique</li>
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

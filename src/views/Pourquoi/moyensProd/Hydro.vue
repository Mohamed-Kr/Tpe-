<template>
		<v-card class='pa-4'>
			<v-card-title class='display-2'>Les barrages hydroéléctriques</v-card-title>
			<v-card flat class='my-4 px-5 title'>
				Le secteur de l'hydroélectricité en France bénéficie d'un potentiel important grâce à la présence de massifs montagneux : Alpes, Pyrénées, Massif central.
			</v-card>
			<v-card class='mt-2 px-3'>
				<v-card-text>
					Les barrages hydroéléctriques ont été un des premiers moyens de production éléctrique,
					leur production représente aujourd'hui environ 10% du mix éléctrique,
					sa part est en augmentation, particulièrement depuis la fin de la seconde 
					guerre mondiale.
					<br/><br/>
					Le potentiel brut hydroélectrique techniquement exploitable de la France est estimé à 
					100 TWh/an, dont 70 TWh/an sont considérés comme économiquement 
					exploitables. À la fin 2008, la France disposait de 25,3 GW en exploitation qui ont 
					produit 50 TWh en 2008, soit 72 % du potentiel économiquement exploitable.
					<br/><br/>
					Ils ont un rendement d'environ 80% et représente 51% de la production éléctrique 
					issue d'énérgies renouvelables.
					<br/><br/>
					La production d'électricité annuelle d'une centrale hydroélectrique d'une 
					puissance de 1MW permet d'alimenter environ 1 700 habitants toute l'année.
					<br/><br/>
					Une caractéristique intérréssante des centrales hydroélectrique est le stockage d’énergie, 
					en pompant de l’eau du bas jusqu’en haut du barrage
				</v-card-text>
			</v-card>
			<v-card class='mt-2 px-3'>
				<v-card-title class='title'>Comment ça marche?</v-card-title>
				<v-card-text>
- permettent de concentrer leur production pendant les périodes de forte consommation. elles sont capables de passer de l'arrêt
 à leur puissance maximale en quelques minutes, et donc de faire face aux variations parfois très rapides de la demande ou de l'offre 
 par exemple, lorsqu'un réacteur nucléaire tombe en panne, le réseau perd plus de 1 000 MW quasi-instantanément ; ces caractéristiques 
 les rendent indispensables à la sécurité du système électrique.



Les centrales aux fils de l’eau avec une hauteur de chute basse (inférieur à 50m) 
sont moins onéreuse mais produisent moins comparé à des centrales hydroélectrique accolé à un barrage. 
Elle sont aussi beaucoup moins dangereuse sur le plan environnemental que des centrales à hautes chutes (200m ou plus)  
car les barrages à basse chutes doivent moins retenir d’eau et donc moins de pression, ce qui signifie qu’en cas de rupture 
elles inondent beaucoup moins.
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
									<li>Risques et problèmes, catastrophes écologiques etc. en cas de rupture d’un barrage</li>
									<li>Besoin de déplacer des populations et de noyer des terres agricoles lors de la construction</li>
									<li>Offrent un "moyen de stockage" éléctrique à grande echelle et sur le long terme</li>
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

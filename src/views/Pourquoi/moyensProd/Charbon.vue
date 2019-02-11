<template>
		<v-card class='pa-4'>
			<v-card-title class='display-2'>Énergies fossiles</v-card-title>
			<v-card flat class='my-4 px-5 title'>
				Les énergies fossiles (ou hydrocarbures) sont issues de la transformation de matières 
				organiques et sont stockées sous terre.
			</v-card>
			<v-card class='mt-2 px-3'>
				<v-card-text>
					Le pétrole, le charbon et le gaz sont les principaux, ils ont mis des millions 
					d’années à se constituer et sont donc présents en quantités limitées. La France n’a 
					pas de réserves en énergie fossiles, la totalité des énérgie fossile provient de l'importation.
					<br/><br/>
					Les moyens de production utilisant leur combustion ont un rendement maximal de 40%.
					<v-card class='pa-4 my-2'>
						<v-card-title class='title'>Le pétrole</v-card-title>
						<v-card-text>
							Il est massivement utilisé car il est très 
							énergétique et facile à transporter. On estime qu’il reste environ assez de 
							pétrole pour satisfaire nos besoins pendant 50 ou 60 ans seulement. 
							Sa combustion émet beaucoup de gaz à effet de serre.
						</v-card-text>
					</v-card> 
					<v-card class='pa-4 my-2'>
						<v-card-title class='title'>Le gaz</v-card-title>
						<v-card-text>
							Cette énergie est moins facile à transporter 
							et à utiliser que le pétrole. Le gaz a cependant 
							un fort pouvoir énergétique qui le rend intéressant 
							pour le chauffage et la production d’eau chaude. Sa 
							combustion émet elle aussi beaucoup de gaz à effet de serre.
						</v-card-text>
					</v-card> 
					<v-card class='pa-4 my-2'>
						<v-card-title class='title'>Le charbon</v-card-title>
						<v-card-text>
							Cette énergie est également très énergétique et 
							permet à certains pays de produire de l’électricité 
							et de la chaleur. En France, nous n’avons plus de centrales 
							à charbon pour produire de l’électricité. Sa combustion émet elle aussi beaucoup de 
							gaz à effet de serre, c’est d’ailleurs l’énergie fossile la plus émettrice de CO2.
						</v-card-text>
					</v-card> 
				</v-card-text>
			</v-card>
			<v-card class='mt-2 px-3'>
				<v-card-title class='title'>Comment ça marche?</v-card-title>
				<v-card-text>
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
									<li>Facile à exploiter</li>
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
									<li>Ressources Limitées</li>
									<li>Cause importante du réchauffement climatique</li>
									<li>Cause des maladies respiratoires</li>
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

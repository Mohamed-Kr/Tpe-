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
					pas de réserve en énergies fossiles, la totalité des énergies fossiles provient de l'importation.
					<br/><br/>
					Les moyens de production utilisants leur combustion ont un rendement maximal de 40%.
					<v-card class='pa-4 my-2'>
						<v-card-title class='title'>Le charbon</v-card-title>
						<v-card-text>
							L’enfouissement rapide d'arbres et de débris végétaux au sein de certains bassins sédimentaires 
							provoque la lente et progressive formation du charbon. La plupart des charbons 
							exploitables se sont formés il y a 360 à 300 millions d'années. Exploités depuis des siècles.
							Il est l’un des facteurs importants ayants contribué à la première révolution industrielle durant le XIXe siècle.
							<br/><br/>
							Le charbon est encore la première source de production d’électricité, grâce à son 
							abondance et son coût peu élevé. Mais, très émetteur de gaz à effet de serre (c’est l’énergie 
							fossile la plus émettrice de CO2), son développement risque d’être bridé si la communauté 
							internationale amplifie ses efforts pour lutter contre le réchauffement climatique. 
							Il est cependant une énergie souvent essentielle à la croissance de grands 
							pays émergents très peuplés, comme la Chine, l’Inde, l’Indonésie ou l’Afrique du sud. Un ensemble de 
							techniques permet de réduire les émissions de polluants liées à l’usage du charbon et de tendre ainsi 
							vers un « charbon propre », mais ces procédés sont longs et coûteux à mettre en place.
							<br/><br/>
							La France a prévue de fermer toutes ses centrales à charbon d'ici 2022.
						</v-card-text>
					</v-card> 
					<v-card class='pa-4 my-2'>
						<v-card-title class='title'>Le pétrole et le gaz</v-card-title>
						<v-card-text>
							La formation de ces hydrocarbures est un processus qui s’étend aussi sur des millions d’années.  
							Elle débute par l'accumulation de matières organiques dans les sédiments de milieux peu oxygénés et calmes, 
							comme les fonds de mers fermées ou de lacs. Sous l'action de bactéries, elles se transforment en boues puis, 
							sous l'effet de l'augmentation de température provoquée par l'enfouissement progressif, en « roches-mères ». 
							Les hydrocarbures (pétrole et gaz) s’y forment puis entament une migration vers la surface pour se concentrer, 
							si les conditions s’y prêtent, dans des « roches-réservoirs », dans des volumes fermés constituants des gisements.
							<br/><br/>
							Ces gisements sont plus ou moins facilement accessibles. Ils doivent d’abord être localisés et étudiés, 
							lors d’une phase d’exploration en plusieurs étapes. Ensuite, vient le temps de l’exploitation du gisement 
							d’hydrocarbures, processus long, très technique, requérant un investissement en capital énorme et dépendant 
							des contraintes économiques du moment.
							<br/><br/>
							Le pétrole est massivement utilisé car il est très 
							énergétique et facile à transporter. On estime qu’il reste environ assez de 
							pétrole pour satisfaire nos besoins pendant 50 ou 60 ans seulement. 
							Sa combustion émet beaucoup de gaz à effet de serre.
							<br/><br/>
							Le gaz est moins facile à transporter 
							et à utiliser que le pétrole. Le gaz a cependant 
							un fort pouvoir énergétique qui le rend intéressant 
							pour le chauffage et la production d’eau chaude. Sa 
							combustion émet elle aussi beaucoup de gaz à effet de serre.
						</v-card-text>
					</v-card> 
				</v-card-text>
			</v-card>
			<v-card class='mt-2 px-3'>
				<v-card-title class='title'>Comment ça marche ?</v-card-title>
					Les centrales à hydrocarbures fonctionnent toutes sur le même principe,
					celui des centrales thérmiques (tout comme les centrales nucléaires)
					<v-img class="py-5" contain src="https://proxy.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.ensi.ch%2Ffr%2Fwp-content%2Fuploads%2Fsites%2F4%2F2013%2F06%2Fdruckwasser_anim_700px.gif&f=1"></v-img>
					La combustion des hydrocarbures ayant lieu en 2/3 (pour une description plus précise du procédé, voir centrales nucléaires).
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
									<li>Utilisent des ressources limitées</li>
									<li>Cause importante du réchauffement climatique</li>
									<li>Cause des maladies respiratoires</li>
									<li>Coûteux</li>
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

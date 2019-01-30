<template>
	<v-container>
		<v-layout justify-center align-center fill-height>
			<v-flex xs12 md10>
				<v-card class="mb-5">
					<v-card-text>

					Tout d'abord avant de parler de l'histoire de l'énergie électrique, il convient de préciser qu'il n'y a jamais eu vraiment de transition énergétique, c'est à dire un moment où dans l'histoire nous avons complétement changé de mode de production électrique. Or, à l'heure actuelle nous utilison encore du charbon pour produire 29% de l'électricité mondial et cette part est loin de diminuer. Même si des nouveaux moyens de productions sont apparus nous gardons l'usage des premiers moyens pas forcement très propre.

					<br>

					Nous allons ici vous présenter l'histoire de l'énergie électrique et tout particulièrement de l'histoire des moyens de productions électriques.
				</v-card-text>
				</v-card>
				<v-timeline>
					<v-timeline-item
						v-for="(item, index) in timelineItems"
      			:color="item.color"
						:key="index"
						large>
					<span
						slot="opposite"
        		:class="`headline font-weight-bold white--text`"
					>{{ item.date }}</span>
					<v-card class="elevation-2">
						<v-layout row>
                <v-flex xs7>
                  <v-card-title primary-title class="headline">
                    {{ item.title }}
                  </v-card-title>
									<v-card-text>
									 {{ item.description }}
									</v-card-text>
                </v-flex>
                <v-flex xs5>
									<v-layout justify-center align-center fill-height>
										<v-img
	                    :src="item.image"
	                    cover
	                  ></v-img>
									</v-layout>
                </v-flex>
              </v-layout>
					</v-card>
					</v-timeline-item>
				</v-timeline>
			</v-flex>
		</v-layout>
	</v-container>
</template>

<script>
export default {
	data: () => ({
		timelineItems: [
			{
				date: "600 av. J.-C.",
				title: "Première traces d'expériences avec de l'électricité statique",
				description: "Thales de Milet découvre l'électricité statique.",
				color: "green"
			},
			{
				date: "1891, Allemagne",
				title: "Première ligne à haute tension",
				description: "La toute première ligne à haute tension à courant alternatif est créé pour relier deux grandes villes industrielle d'Allemagne.",
				color: "amber"
			},
			{
				date: "1963, France",
				title: "Première centrale nucléaire française",
				description: "La toute première centrale nucléaire civile française pour produire de l'électricité entre service à Chinon en France",
				color: "orange",
				image: "https://proxy.duckduckgo.com/iu/?u=http%3A%2F%2Flesoufflecestmavie.e.l.f.unblog.fr%2Ffiles%2F2012%2F09%2Fcentrale-nucl%C3%A9aire-chinon.jpg&f=1"
			},
			{
				date: "1986, URSS",
				title: "Catastrophe nucléaire de Tchernobyl",
				description: "La première Catastrophe nucléaire de grande ampleur qui toucha toute l'Europe, la prise de consience du danger de représente ce moyen de production marque la fin de la croissance très rapide des réacteurs nucléaire",
				color: "orange",
				image: "https://proxy.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.jeunes-ecologistes.org%2Fwp-content%2Fuploads%2F2011%2F09%2Ftchernobyl1.jpg&f=1"
			},
			{
				date: "Années 2010",
				title: "Croissance de l'énergie électrique renouvelable",
				description: "Après la catastrophe nucléaire de Fukushima, l'Allemagne se tourne vers les énergie renouvelable et entame une transition énergétique.",
				color: "indigo",
				image: "https://i.imgur.com/fSSyBgr.png"
			}
		]
	})
}
</script>

<style>

</style>

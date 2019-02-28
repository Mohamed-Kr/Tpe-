<template>
	<v-container>
		<v-layout justify-center align-center fill-height>
	    <v-flex xs11 md12 lg10 xl8>
				<v-card class="mb-5">
					<v-card-text style='font-size: 1.2em;'>

					Tout d'abord, avant de parler de l'histoire de l'énergie électrique, il convient de préciser qu'il n'y a jamais eu vraiment de transition énergétique électrique, c'est-à-dire un moment où dans l'histoire nous avons complètement changé notre mode de production électrique. A l'heure actuelle, un tier de l'électricité mondiale est produite dans des centrales à charbon.

					<br><br>

					Nous allons ici vous présenter l'histoire de l'énergie électrique et tout particulièrement de l'histoire des moyens de production électriques.

					<br>
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
                <v-flex xs6="item.image != undefined" xs12="item.image == undefined">
                  <v-card-title primary-title class="headline">
                    {{ item.title }}
                  </v-card-title>
									<v-card-text style='font-size: 1.1em;'>
									 {{ item.description }}
									</v-card-text>
                </v-flex>
                <v-flex xs6 v-if="item.image != undefined">
									<v-layout justify-center align-center fill-height>
										<v-img
	                    :src="item.image"
											height="100%"
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
				title: "Premières traces d'expériences avec de l'électricité statique",
				description: "Thales de Milet découvre l'électricité statique.",
				color: "deep-orange"
			},
      {
        date: "XVIIIe siècle",
        title: "Découverte de l'électricité statique",
        description: "A partir du XVIIIe siècle, les scientifiques commencent à comprendre ce phénomène et à l'étudier.",
        color: "orange",
				image: "https://upload.wikimedia.org/wikipedia/commons/5/50/Machine_de_Ramsden.jpg"
      },
			{
        date: "1878, Etats Unis",
        title: "Invention de l'ampoule par Edison",
        description: "Cette invention marque le début de l'utilisation domestique et industrielle de l'électricité, à la fin du XIXe siècle son utilisation est très répandue, sa production était alors exclusivement faite dans des centrales utilisant la combustion du charbon.",
        color: "amber",
				image: "https://proxy.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.qiannipicture.com%2Fpic%2FUploadFile%2FP2%2FSKU166369%2FA1829B5693979E9177FF1697230303939226FB23136393139A56D28C139C9BCBD233C7CB37CFD24363CC43D283F7335353639D938393DF3346CFF51383.jpg&f=1	"
      },
			{
				date: "1891, Allemagne",
				title: "Première ligne à haute tension",
				description: "La toute première ligne à haute tension à courant alternatif est créé pour relier deux grandes villes industrielle d'Allemagne.",
				color: "yellow"
			},
			{
				date: "1963, France",
				title: "Première centrale nucléaire française",
				description: "La toute première centrale nucléaire française voit le jour dans la ville de Chinon.",
				color: "lime",
				image: "https://proxy.duckduckgo.com/iu/?u=http%3A%2F%2Flesoufflecestmavie.e.l.f.unblog.fr%2Ffiles%2F2012%2F09%2Fcentrale-nucl%C3%A9aire-chinon.jpg&f=1"
			},
			{
				date: "1986, URSS",
				title: "Catastrophe nucléaire de Tchernobyl",
				description: "Elle est la première catastrophe nucléaire de grande ampleur et a causé une prise de conscience du danger que peut représenter ce moyen de production, elle marque la fin de la croissance très rapide des réacteurs nucléaires.",
				color: "light-green",
				image: "https://proxy.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.jeunes-ecologistes.org%2Fwp-content%2Fuploads%2F2011%2F09%2Ftchernobyl1.jpg&f=1"
			},
			{
				date: "Années 2010",
				title: "Début de la production électrique renouvelable",
				description: "Après la catastrophe nucléaire de Fukushima, l'Allemagne se tourne vers les énergies renouvelables et entame une transition énergétique.",
				color: "green",
				image: "https://i.imgur.com/fSSyBgr.png"
			}
		]
	})
}
</script>

<style>

</style>

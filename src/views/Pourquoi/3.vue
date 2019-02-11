<template>
<v-container>
  <v-layout justify-center align-center fill-height>
    <v-flex xs11 md9 lg10 xl8>
	      <v-card class='subheading mx-3 px-3 transparent' flat>
	        <v-card-title class='headline white--text'
          >Pour produire de l'éléctricité, il faut donc trouver une énérgie exploitable mais 
          il y a en réalité beaucoup d'aspects à prendre en compte lors de la création d'un moyen de production.
          <br/>Nous verrons aussi quelques termes techniques liées à la production éléctrique
	        </v-card-title>
      </v-card>
      <v-card class='subheading mx-5 mt-4 pa-3'>
          <v-card-title class='title'>Le rendement</v-card-title>
        <v-card-text>
					<v-card class='mt-2 px-3' flat
          >Comme nous venons de le voir, nous ne créons pas de l'énérgie mais nous la transformons, 
					nous pouvons séparer les énérgies obtenue suite à cette transformation en deux catégories, 
					utile et inutile. La partie utile est l'énérgie éléctrique, et l'inutile est par exemple, la 
					chaleur que produit une bobine de cuivre à cause de sa résistance éléctrique suite à l'induction.
          </v-card>
					<v-card class='mt-2 px-3' flat
          >Le rendement d'un moyen de production éléctrique correspond donc à la part d'énérgie utile
					par rapport à l'énérgie consommé par la transformation, il peut être interpreté comme la
					 rentabilité d'un moyen de production éléctrique et est généralement éxprimé en pourcentage.
          </v-card>
        </v-card-text>
      </v-card>
      <v-card class='subheading ma-5 pa-3'>
          <v-card-title class='title'>La pilotabilité</v-card-title>
        <v-card-text>
					
					<v-card class='mt-2 px-3' flat
          >A tout instant, sur un réseau électrique, la production doit égaler la consommation.
          </v-card>
					<v-card class='mt-2 px-3' flat
          >Nos capacité en stockage éléctrique ne sont actuellement pas assez avancées pour être utiles sur une si grande echelle,
					tout écart faible entre la production et la consommation aura donc à être immédiatement 
					compensé par une modification au niveau de la production. La capacité moyens de production à s'adapter à 
					la consomation est appelé 'la pilotabilité'.
          </v-card>
					<v-card class='mt-2 px-3' flat
          >Par exemple, du côté des énergies renouvelable, les panneaux photovoltaïques ne sont pas pilotables
					contrairement aux barrages hydroéléctriques, étant dotés de pales orientables, permetant d’ajuster
					la vitesse du rotor.
          </v-card>
        </v-card-text>
      </v-card>
      <v-card class='subheading ma-5 pa-3'>
        <v-card-title class='title'>L'impact sur l'environnement</v-card-title>
        <v-card-text>
					<v-card class='mt-2 px-3' flat
          >Le secteur de l'électricité est unique parmi les secteurs 
            industriels à cause de ses émissions qui contribuent largement 
            à la quasi-totalité des problèmes de qualité de l'air. La production 
            d'électricité est à l'origine d'une grande partie des émissions 
            d'oxydes d'azote et de dioxyde de soufre, qui contribuent au smog, aux pluies 
            acides et à la formation de particules fines. Les centrales électriques émettent aussi 
            du dioxyde de carbone, un gaz qui contribue à l'effet de serre. 
          </v-card>
					<v-card class='mt-2 px-3' flat
          >Nous résumons souvent l'impact de la production éléctrique sur l'environement à la polution et ses conséquences mais en réalité,
            même sans prendre en compte la polution liée à leur création, les moyens de production exploitant des énérgies durables
            ont aussi un impact sur l'environnement. Par exemple, les barrages 
            hydroélectriques et les lignes à haute tension ont une influence majeure sur les cours d'eau et la 
            biodiversité. 
          </v-card>
        </v-card-text>
      </v-card>
      <v-card class='subheading ma-5 pa-3'>
        <v-card-title class='title'>Un peu de vocabulaire</v-card-title>
      <v-card class='subheading ma-5 pa-3'>
        <v-card-title class='title'>La puissance installée</v-card-title>
        <v-card-text>
					<v-card class='mt-2 px-3' flat
          >Le terme « puissance installée » est utilisé pour définir la capacité 
          maximale théorique de production d'électricité de l'ensemble des centrales 
          d'un type donné, ou dans un pays donné.
          </v-card>
        </v-card-text>
      </v-card>
      <v-card class='subheading ma-5 pa-3'>
        <v-card-title class='title'>Le potentiel théorique</v-card-title>
        <v-card-text>
					<v-card class='mt-2 px-3' flat
          >La notion de potentiel désigne la quantité théorique d'énergie disponible pour un type
          de production sur un territoire (terrestre ou marin) donné.
          </v-card>
        </v-card-text>
      </v-card>
      </v-card>
    </v-flex>
  </v-layout>
</v-container>
</template>

<script>
export default {
  components: {}
}
</script>

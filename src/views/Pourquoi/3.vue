<template>
<v-container>
  <v-layout justify-center align-center fill-height>
    <v-flex xs11 md9 lg10 xl8>
	      <v-card class='subheading mx-3 px-3 transparent' flat>
	        <v-card-title class='headline white--text'>
						Pour produire de l'éléctricité, il faut donc trouver une énérgie exploitable mais il y a en réalité beaucoup d'aspects à prendre en compte lors de la création d'un moyen de production.
	        </v-card-title>
      </v-card>
      <v-card class='subheading mx-5 mt-4 pa-3'>
        <v-card-text>
          <v-card-title class='title'>Le rendement</v-card-title>
					<v-card class='mt-2 px-3' flat>
          Comme nous venons de le voir, nous ne créons pas de l'énérgie mais nous la transformons, 
					nous pouvons séparer les énérgies obtenue suite à cette transformation en deux catégories, 
					utile et inutile. La partie utile est l'énérgie éléctrique, et l'inutile est par exemple, la 
					chaleur que produit une bobine de cuivre à cause de sa résistance éléctrique suite à l'induction.
          </v-card>
					<v-card class='mt-2 px-3' flat>
          Le rendement d'un moyen de production éléctrique correspond donc à la part d'énérgie utile
					par rapport à l'énérgie consommé par la transformation, il peut être interpreté comme la
					 rentabilité d'un moyen de production éléctrique et est généralement éxprimé en pourcentage.
          </v-card>
        </v-card-text>
      </v-card>
      <v-card class='subheading ma-5 pa-3'>
        <v-card-text>
          <v-card-title class='title'>La pilotabilité</v-card-title>
					
					<v-card class='mt-2 px-3' flat>
						A tout instant, sur un réseau électrique, la production doit égaler la consommation.
          </v-card>
					<v-card class='mt-2 px-3' flat>
					L’électricité, actuellement, ne se stocke pas, sur une grande échelle.
					Donc tout écart faible entre la production et la consommation sera immédiatement 
					compensé par une modification automatique du niveau de production de centrales spécialement 
					équipées, ce sont des moyen de production pilotables.
          </v-card>
					<v-card class='mt-2 px-3' flat>
					Par exemple, du côté des énergies renouvelable, les panneaux photovoltaïques ne sont pas pilotables,
					contrairement au barrage, car dans ces dernières, les pales sont orientables ce qui permet d’ajuster
					la puissance de la turbine.
          </v-card>



        </v-card-text>
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

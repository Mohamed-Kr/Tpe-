<template>
  <v-card class='subheading mx-5 mt-4'>
    <v-img
      src="https://proxy.duckduckgo.com/iu/?u=http%3A%2F%2Fcdn.wonderfulengineering.com%2Fwp-content%2Fuploads%2F2014%2F07%2FWhat-is-a-Battery-14.jpg&f=1"
      aspect-ratio="2.75"
    ></v-img>
    <v-card-text class="pa-3">
      <v-card-title class='title'>Améliorer les moyens des stockages suffirait ?</v-card-title>
      <v-card class='px-3' flat>
        <p>
          Un problème auquel on se confronte souvent lorsque que l'on évoque un mix 100% renouvelable
          est le stockage de l'électricité.
          En effet, le fait que l'électricité se stocke encore assez mal fait que la production est obligée de s'adapter en permanence
          à la consommation.
          <br><br>
          Le problème du stockage à grande échelle prend de l'ampleur depuis que les énergies renouvelables ont fait leurs apparition.
          La production de ces nouveaux parcs n'étant ni constante ni totalement pilotable.
          Il existe aujourd'hui plusieurs techniques de stockage à grande échelle.
        </p>

        <div class="headline mb-3">Stockage à court terme</div>
        <p>
          Il existe de nombreux moyens particulièrement adaptés à la problématique de l'électricité produite par
          de l'énergie solaire, stockant d'assez grandes quantités sur de courtes durées (moins de 6h).
        </p>
        <ul class="mb-3">
          <li>Air comprimé : de l'air sous pression faisant tourner un alternateur afin de restituer
            l'énergie sous forme cinétique.
          </li>
          <li>Batterie chimique : batterie au lithium.</li>
          <li>Stockage à volant inertiel : de l'énergie sous forme mécanique est stockée en faisant tourner 
            un volant d'inertie (qui conserve très bien son énergie cinétique) lorsque l'on désire récupèrer 
            de l'électricité, un alternateur est connecté au volant.
          </li>
        </ul>

        <div class="headline mb-3">Les STEP</div>

        <p>
          Appellés STEP ou <b>S</b>tation de <b>T</b>ransfert d'<b>É</b>nergie par <b>P</b>ompage. 
          Elles utilisent l'énergie de position afin de stocker 
          l'électricité. Le principe est simple : pendant les heures ou la production dépasse la consommation, 
          de l'eau est pompée du bas d'un barrage hydroélectrique et est ainsi amenée dans un réservoir situé 
          au-dessus. Lorsque la production devient inférieure à la demande, l'eau est relâchée dans la turbine.
          <br>
          <br>
          Cette technique est généralement utilisée pour du stockage à moyen terme (environ 32h).
        </p>

        <div class="headline mb-3">Stockage inter-saisonnier</div>

        <p>
          En France, à cause de la forte consommation du chauffage électrique, la demande augmente considérablement
          pendant les périodes de froid.
          Pour suivre la consommation, nous disposons de systèmes permettant de stocker de l'énergie sur le long terme.
          <br>
          <br>
          Faire passer un courant électrique dans de l'eau créé du dihydrogène et de l'oxygène (électrolyse),
          la combinaison du dihydrogène et du dioxyde de carbone forme du méthane, ce procédé est 
          appelé "Power to gaz".
          <br><br>
          <pre>CO<sub>2</sub> + 4 H<sub>2</sub> → CH<sub>4</sub> + 2 H<sub>2</sub>O</pre>
          <br>
          <span>Equation de la réaction chimique de la méthanisation.</span>
          <br>
          Pour récupérer de l'électricité, le méthane produit est simplement amené dans une des centrales à méthane existantes (c'est le "Gaz to power").
          <br><br>
          Le méthane est facile à stocker et cette méthode ne nécessite pas la création de nouvelles centrales.
          Le "Power to gaz-Gaz to power" dispose de nombreux avantages mais n'est pas durable étant donné que la récupération de l'électricité se fait 
          par combustion.
          <br>
          En France cette méthode représente 17 GW de puissance.
        </p>
        <v-divider />
        <br>
        <p>
          D'autres moyens de stocker de l'énergie à grande échelle sont actuellement à l'étude.
        </p>

        <!-- MOyens futur et alternatifs -->
        <div class="headline mb-3">Les supraconducteurs</div>
        <p>
          Le déplacement des électrons dans la matière change lorsqu'elle est amenée à une certaine température (appelée température
          critique), arrivé à cette température, le déplacement des électrons devient tel que la résistance du matériau
          est nulle, l'électricité s'y déplace sans perte ni réchauffement du matériau.
          <br/><br/>
          Actuellement, un des matériaux ayant une des températures critiques les plus élevées est la céramique,
          de l'azote liquide suffit à le rendre supra-conducteur.
          <br/><br/>
          Ainsi, si on alimente un bobinage supraconducteur puis que l'on court-circuite ce dernier sur lui-même,
          le courant n'est pas dissipé par effet Joule et l'énergie magnétique est conservée quasiment
          indéfiniment. C’est le principe du stockage inductif supraconducteur.
        </p>

        <div class="headline mb-3">Voitures électriques</div>
        <p>
          Les voitures électriques sont dotées de batteries et se démocratisent, elles
          pourraient devenir acteurs au sein du réseau électrique en "prettant" de l'électricité durant les 
          périodes où elles sont peu utilisées, minimisant ainsi les différences entre la consommation et la production, 
          ce qui favorise grandement la mise en place des énergies renouvelables étant donné leurs faibles pilotabilités.
        </p>
      </v-card>
    </v-card-text>
  </v-card>
</template>

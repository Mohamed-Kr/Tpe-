<template>
  <v-card class='subheading mx-5 mt-4'>
    <v-img
      src="https://proxy.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.mediaterre.org%2Fusers%2FJFDD%2Fimages%2Ffonds-tunisien-energie-renouvelable---copie.jpg&f=1"
      aspect-ratio="2.75"
    ></v-img>
    <v-card-text class="pa-3">
      <v-card-title class='title'>Avec les centrales EnR éxistantes ?</v-card-title>
      <v-card class='px-3' flat>
        <v-card-text>
          Il faut tout d'abord regarder la puissance théorique en énergie renouvelable disponible sur le territoire Français, 
          car si il n'y a pas la production théorique nécessaire pour alimenter le pays, même dans les conditions optimales, le mix 
          électrique ne pourra pas être renouvelable à 100%. Mais bienheureusement, elle est de 1268 Twh (si l'on prend 2013 pour année météorologique 
          de référence), soit trois fois la demande qui est estimée à 422 Twh.
          <br/><br/>
          Maintenant que l'on est sûr que théoriquement, la puissance disponible est suffisante, il faut regarder les 
          autres aspects indispensables que doivent avoir les centrales pour assurer la viabilité du 
          réseau (avec les capacités de stockages actuels), par exemple la pilotabilité.
          <img src='../../../assets/pilotable.jpg' style='width: 100%; margin: 10px'/>
          Si on compare la puissance installée théorique des centrales pilotables et non pilotables, on voit qu'il 
          y a dix fois plus de non pilotables, c'est là le plus gros défaut des centrales Enr, souvent elles ne produisent que 
          dans des conditions sur lesquels nous n'avons pas la main.
          <img src='../../../assets/schema_conso.jpg' style='width: 100%; margin: 10px'/>
          On voit sur ces courbes que la production (les parties colorées) "n'en fait qu'à sa tête" et ne suit pas du tout la demande (le trait noir).
          <br/><br/>
          Mais il reste heureuseument un aspect à voir: le stockage.
          <img src='../../../assets/stockage.jpg' style='width: 100%; margin: 10px'/>
          Aujourd'hui, le stockage énergétique est composé de trois filières,
          on les voit ici de la plus courte capacité à la plus longue:
          <ul>
            <li>Le stockage sur 6h, qui peut être fait avec des batteries ou de l'air comprimé.</li>
            <li>Les step (station de transfert d'énergie par pompage), autrement dit, remplir des barrages en pompant
              puis faire tourner les turbines avec l'eau lorsqu'en vient le besoin (en moyenne sur 32h).
            </li>
            <li>Le stockage intersaisonnier, dont le principe est de synthétiser du gaz avec de l'électricité et de bruler ce gaz
                lorsqu'en vient le besoin.
            </li>
          </ul>
          <img src='../../../assets/prod.jpg' style='width: 100%; margin: 10px'/>
          Voilà la courbe que l'on obtient en prenant en compte le stockage (la partie en dessous de l'abscisse représente l'export),
          malgré l'aspect polluant (n'empêchant pas le bilan sur le plan environnemental de rester positif), le 
          stockage est donc indispensable à la mise en place d'un mix 100% EnR.
          <br/><br/>
          Mais un autre aspect est à prendre en compte: il va falloir plusieurs dizaines de milliers de panneaux solaires et d'éoliennes.
          Une estimation du nombre d'éolienne montre qu'il faudrait 60000 éoliennes terrestres et 5000 en mer.<br/>
          Nous sommes aujourd'hui à environ 10000 éoliennes au total.
          <br/><br/>
          Pour que le mix électrique soit à 100% renouvelable, il faudrait donc construire 55000 éoliennes et dix fois plus 
          de panneaux solaires que ce que nous avons actuellement, et pour ce qui est de l'hydroélectrique, la puissance installée 
          est déja suffisante.
          <br/><br/>
          Le coût de la mise en place de ce mix en 2050 est estimé à 50,4 milliards d'euros par an, de plus elle n'est 
          possible qu'en cas de baisse de la consommation, car elle n'est pas possible avec la consommation actuelle,
          or nous l'avons vu plus tôt, la consommation est en augmentation constante... Le pilotage de la consommation à grande
          échelle est donc lui aussi indispensable à la mise en place de ce mix.
        </v-card-text>
      </v-card>
    </v-card-text>
  </v-card>
</template>

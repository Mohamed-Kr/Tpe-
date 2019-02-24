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
          Il faut tout d'abord regarder la puissance théorique en énérgie renouvelable disponible sur le territoire Français,
          car si il n'y a pas la production théorique nécéssaire pour alimenter le pays, même dans les conditions optimales, le mix
          éléctrique ne pourra pas être renouvelable à 100%. Mais bienheuresement, elle est de 1268 TWh (si l'on prend 2013 pour année météorologique
          de référence), soit trois fois la demande qui est éstimée à 422 TWh.
          <br/><br/>
          Maintenant que l'on est sûr que théoriquement, la puissance disponible est suffisante, il faut regarder les
          autres aspects indisppensables que doivent avoir les centrales pour assurer la viabilité du
          réseau (avec les capacités de stockage actuels), par exemple la pilotabilité.
          <img src='../../../assets/pilotable.jpg' style='width: 100%; margin: 10px'/>
          Si on compare la puissance insallé théorique des cenrales pilotables et non pilotables, on voit qu'il
          y a dix fois plus de non pilotable, et c'est là le plus gros défaut des centrales Enr, souvent elle ne produise que
          dans des condition sur lequels nous n'avons pas la main.
          <img src='../../../assets/schema_conso.jpg' style='width: 100%; margin: 10px'/>
          On voit sur ces courbes que la production (les parties colorées) 'n'en fait qu'à sa tête'.
          <br/><br/>
          Mais pas de panique, il reste un aspect à voir: le stockage.
          <img src='../../../assets/stockage.jpg' style='width: 100%; margin: 10px'/>
          Aujourd'hui, le stockage énérgétique est composé de trois fillières,
          on les voit ici de la plus courte capacité à la plus longue:
          <ul>
            <li>Le stockage sur 6h, qui peut être fait avec des batteries où de l'air comprimé.</li>
            <li>Les step (station de transfer d'énérgie par pompage), autreent dis, remplir des barrages en pompant
              puis faire tourner les turbines avec l'eau lorsqu'en vient le besoin (en moyenne sur 32h).
            </li>
            <li>Le stockage intersaisonnier, dont le principe est de synthétiser du gaz avec de l'éléctricité et de bruler ce gaz
              lorsqu'en vient le besoin.
            </li>
          </ul>
          <img src='../../../assets/prod.jpg' style='width: 100%; margin: 10px'/>
          Voila la courbe que l'on obtient en prenant en compte le stockage (la partie en dessous de l'absice représente l'export),
          Malgré l'aspect polluant (n'empêchant pas le bilan sur le plan environnemental de rester positif), le
          stockage est donc indispensable à la mise en place d'un mix 100% EnR.
          <br/><br/>
          Mais un autre aspect est à prendre en compte: il va falloir plusieurs dixaines de milliers de panneaux solaires et d'éoliennes.
          une éstimation sur le nombre d'éolienne dis qu'il faudra 60000 éolienne terrestres et 5000 en mer.<br/>
          Nous sommes aujourd'hui à environ 10000 éoliennes au total.
          <br/><br/>
          Pour que le mix éléctrique soit à 100% renouvelable, il faudrait donc construire 55000 éoliennes et dix fois plus
          de panneau solaire que ce que nous avons actuellemnet, et pour ce qui est de l'hydroéléctrique, la puissance installé
          est déja suffisante.
          <br/><br/>
          Le coût de la mise en place de ce mix est éstimé à 50,4 milliards d'euros par ans, de plus elle n'est
          possible qu'en cas de baisse de la consommation, car elle n'est pas possible avec la consomation actuelle,
          or nous l'avons vu plus tôt, la consomation est en augmentation constante... Le pilotage de la consomation à grande
          échelle est donc lui aussi indispensable à la mise en place de ce mix.
        </v-card-text>
      </v-card>
    </v-card-text>
  </v-card>
</template>

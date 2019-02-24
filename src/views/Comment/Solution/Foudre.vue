<template>
  <v-card class='subheading mx-5 mt-4'>
    <v-img
      src="https://images.pexels.com/photos/1162251/pexels-photo-1162251.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
      aspect-ratio="2.75"
    ></v-img>
    <v-card-text class="pa-3">
      <v-card-title class='title'>Utiliser l'énergie des éclairs ?</v-card-title>
      <v-card class='px-3' flat>
        <div>
          <!--<v-img
            style="float: right;"
            class="ml-3 my-3"
            src="https://i.imgur.com/d8Nf0aB.gif"
            width="350"></v-img>-->

          <!--<video controls loop="true" autoplay="true">
            <source src="https://s.werobot.fr/flash.mp4" type="image/mp4">
          </video>-->

          Imaginez qu'on arrive à prévoir où la foudre tombe et que l'on arrive à récupérer toute cette grande quantité d'énergie et la stocker quelque part. On aurait résolu le problème énergétique ?<br>
          Avant de savoir si on peut utiliser cette énergie pour alimenter le réseau, on peut s'interroger sur la nature d'un éclair.
          Un éclair est une décharge électrostatique entre (le plus souvent) les nuages et le sol, cette décharge se produit car il y a une différence de potentiel entre les nuages et le sol.
          Cette différence de potentiel se créé pendant un orage à cause de tout les mouvements de masse d'airs et de frictions, mais ici nous n'allons pas nous y intéresser plus que ça.
          <br><br>
          Au final cela fait que le nuage est chargé positivement et le sol négativement par exemple, naturellement une décharge se produit, la différence de potentiel pouvant aller jusqu'a plus de 10 millions de volts. L'air qui n'est pas conducteur de base est ionisé et devient plasma et donc conducteur pendant un cours instant afin de faire passer cette décharge.
          La résistance ou plus précisément rigidité diélectrique de l'air sec étant de 36 000 V/cm cela signifie que si on a deux point séparé de 1 cm avec une différence de potentiel de 36 000 V, l'air s'ionise devient conducteur et le courant passe. La rigidité diélectrique varie très facilement en fonction de la composition de l'air. Pendant un orage par exemple, l'air étant humide on est au alentour de 10 000 V/cm.
          Quand, entre deux endroit la différence de potentiel est suffisament élevé pour dépaser la rigidité diélectrique de l'air, la foudre prend forme. L'air nétant pas uniforme, un éclair n'est pas une parfaite ligne droite et emprunte le chemin le moins coûteux en énergie afin d'effectuer la décharge électrostatique.

          <br><br>A partir de ce constat et pour savoir si oui ou non cette source d'énergie est intéréssante on peux quantifier l'énergie que la foudre représente.

          Si on prend pour exemple un impact de foudre positif (sol négatif et nuage positif) très puissant et qu'on veut calculer la quantité d'énergie théorique que l'on peut récupérer, il nous faut sa tension et son intensité.
          Un impact très puissant aura une tension de <i>20 000 000 V</i>
          <br><br>
          En général un impact de foudre dure 0.5 ms et l'intensité est répartie sur toute la durée de la décharge.
          Au maximum l'intensité est équivalente à 300 000 A (16 A 2 500 A)
          <br><br>
          Au maximum peut transférer 400 Coulomb (c'est la quantité d'électricité transmise), sachant qu'un ampère est égal à un ampère par seconde. C'est comme si on transfèrait 400 ampères pendant une seconde.
          <br><br>
          Comme la puissance est égal à la tension par l'intensité. On effectue ce calcul :
          <br><br>
          <v-layout justify-center>
            <v-card>
              <v-card-text>
                <pre>P = U x I</pre>
                <pre>P = 20 000 000 x 400</pre>
                <pre>P = 8 000 000 000 Ws</pre>
                ou <pre>P = 8 000 000 000 J</pre>
                <pre>8 000 000 000 Ws / 3 600 = 2 222 222 Wh</pre>
                <pre>2 222 222 Wh / 1 000 = 2 222 KWh</pre>
                <pre>2 222 Kh / 1 000 = 2,2 MWh</pre>
              </v-card-text>
            </v-card>
          </v-layout>
          <br>
          On en conclut donc qu'un éclair a une puissance de 2,2 MWh. Même si on peut dire que 2,2 MWh c'est très grand cela reste à nuancer.
          En effet si on considère qu'il tombe environ 1 millions d'impact de foudre en France métropolitaine chaque année (selon <a href="https://www.planetoscope.com/climat/921-nombre-d-impacts-de-foudre-enregistres-en-france.html">planetoscope.com</a> on peut calculer la puissance totale de tout ces éclairs.
          <br>
          <v-layout justify-center>
            <v-card>
              <v-card-text>
                <pre>P<sub>totale</sub> = 2,2 x 1 000 000</pre>
                <pre>P<sub>totale</sub> = 2200000.0 MWh</pre>
                <pre>P<sub>totale</sub> = 2200000.0 / 1 000 000</pre>
                <pre>P<sub>totale</sub> = 2,2 TWh/an</pre>
              </v-card-text>
            </v-card>
          </v-layout>
          <br>
          Cela signifie que si on arriverait à récupérer et à stocker avec un rendement parfait tout les impacts de foudres tombés en France métropolitaine on arriverait à récupérer au maximum 2,2 TWh par an.
          Or, en 2016 le réseau Français métropolitain à produit 531 TWh. La production à partir d'éclairs représenterait alors moins de 1% de l'énergie nécéssaire pour alimenter tout le réseau.
          Surtout que le calcul se base sur le fait que tout les éclairs serait très puissants, car un éclair de 2.2 MWh est en fait très rare, la puissance d'un éclair varie beaucoup en fonction des conditions métérologique. Dans la réalité une décharge moyenne délivre 280 KWh de puissance.

          <br>
          Sachant que les impacts sont très difficile à prévoir, qu'il faudrait un système de stockage très avancé ainsi qu'un réseau très développé. Ce moyen n'est pas du tout rentable même pour moins d'un 1% de la production.
          <br>
          Nous avons prit cette exemple car on pensait que c'était possible et on a donc cherché à savoir si c'était vraiment possible.
        </div>
      </v-card>
    </v-card-text>
  </v-card>
</template>

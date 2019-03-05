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
          Imaginez que l'on arrive à prévoir où la foudre va tomber et que l'on arrive à récupérer toute leur énergie. Aurait-on résolu le problème de l'électricité ?<br>
          Avant de savoir si nous pouvons utiliser cette énergie pour alimenter le réseau, nous pouvons nous interroger sur la nature d'un éclair.
          Un éclair est une décharge électrostatique, le plus souvent entre les nuages et le sol. Cette décharge a lieu sous l'effet d'une différence de potentiel entre ces deux derniers.
          Cette différence de potentiel est due à la friction qu'il y a au sein des nuages.
          <br><br>
          Une décharge a donc lieu, elle peut dépasser 10 millions de volts. L'air qui n'étant pas conducteur se retrouve ionisé 
          et devient plasma pendant un court instant, laissant ainsi passer cette décharge.
          La rigidité diélectrique de l'air sec étant de 36 000 V/cm fait que l'air s'ionise à partir de 36 000 V de différence de potentiel pour 
          deux points séparés d'un centimètre. La rigidité diélectrique varie très facilement en fonction de la composition de l'air. 
          Pendant un orage par exemple, l'air étant humide, elle est d'environ 10 000 V/cm.
          Quand entre deux endroits la différence de potentiel est suffisamment élevée pour dépasser la rigidité diélectrique de l'air, 
          la foudre prend forme. L'air n'étant pas uniforme, un éclair n'est pas une parfaite ligne droite et emprunte le chemin le 
          "moins coûteux" en énergie afin d'effectuer la décharge électrostatique.

          <br><br>
          Si nous prenons pour exemple un impact de foudre positif (sol négatif et nuage positif) très puissant et que l'on veut calculer la quantité d'énergie que l'on peut récupérer, il nous faut sa tension et son intensité.
          Un impact très puissant aura une tension de <i>20 000 000 V</i>.
          <br><br>
          En général un impact de foudre dure 0.5 ms et son intensité est répartie sur toute la durée de la décharge.
          Au maximum l'intensité est équivalente à 300 000 A (16 A 2 500 A).
          <br><br>
          Au maximum, elle peut transférer 400 Coulomb, sachant qu'un coulomb équivaut à un ampère par seconde. Cela revient à transfèrer 400 ampères pendant une seconde.
          <br><br>
          Comme la puissance est égale à la tension multipliée par l'intensité. Nous obtenons ce calcul :
          <br><br>
          <v-layout justify-center>
            <v-card>
              <v-card-text>
                <pre>P = U x I</pre>
                <pre>P = 20 000 000 x 400</pre>
                <pre>P = 8 000 000 000 Ws</pre>
                ou <pre>P = 8 000 000 000 J</pre>
                <pre>8 000 000 000 Ws / 3 600 = 2 222 222 wh</pre>
                <pre>2 222 222 Wh / 1 000 = 2 222 Kwh</pre>
                <pre>2 222 Kh / 1 000 = 2,2 Mwh</pre>
              </v-card-text>
            </v-card>
          </v-layout>
          <br>
          On en conclut qu'un éclair a une puissance de 2,2 Mwh. 
          
          <br><br>Même si 2,2 Mwh est une grande quantité d'énergie, 
          cela reste à nuancer.
          En effet, si on considère qu'il tombe environ 1 millions d'impacts de foudre en France métropolitaine chaque année (selon
           <a href="https://www.planetoscope.com/climat/921-nombre-d-impacts-de-foudre-enregistres-en-france.html">planetoscope.com</a>)
           nous pouvons calculer la puissance totale de tout ces éclairs.
          <br>
          <v-layout justify-center>
            <v-card>
              <v-card-text>
                <pre>P<sub>totale</sub> = 2,2 x 1 000 000</pre>
                <pre>P<sub>totale</sub> = 2200000.0 Mwh</pre>
                <pre>P<sub>totale</sub> = 2200000.0 / 1 000 000</pre>
                <pre>P<sub>totale</sub> = 2,2 Twh/an</pre>
              </v-card-text>
            </v-card>
          </v-layout>
          <br>
          Cela signifie que si on arriverait à récupérer et à stocker avec un rendement parfait tout les impacts de foudres tombés en 
          France métropolitaine, nous arriverions à récupérer au maximum 2,2 Twh par an.
          Or, en 2016 le réseau Français métropolitain à produit 531 Twh. La production à partir d'éclairs représenterait alors 
          moins qu'un pourcent de l'énergie nécessaire pour alimenter tout le réseau.
          Et cela malgré le fait que le calcul se base sur des éclairs très puissants, car un éclair de 2.2 Mwh est en fait très rare, 
          la puissance d'un éclair varie beaucoup selon les conditions météorologiques. 
          Une décharge moyenne délivre 280 kwh.
          <br>
          Contrairement à l'impression que donne cette solution aux premier abord, elle n'est pas en mesure de résoudre le problème 
          de la durabilité de la production életcrique.
        </div>
      </v-card>
    </v-card-text>
  </v-card>
</template>

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
          Un problème au quel on se confronte le plus souvent lorsque que l'ont veut passer à un mix 100% renouvelable, c'est le stockage de l'electricité.
          En effet, comme l'électricité se stocke très difficilement il faut alors faire en sorte que la consommation suive la production de l'électricité.
          Il existe cependant plusieurs techniques de stockage à grande échelle.
        </p>

        <div class="headline mb-3">Stockage à court terme</div>
        <p>
          Pour le stockage de grande quantité d'énergie sur de faibles durées (moins de 6h)
          il existe de nombreux moyens qui sont particulièrement adapté à la problématique de l'électricité produite par de l'énergie solaire donc disponible que le jour.
        </p>
        <ul class="mb-3">
          <li>Air comprimé : on met sous pression de l'air et on fait tourner un rotor et un alteur afin de restituer l'énergie sous forme cinétique.</li>
          <li>Batterie chimique : batterie au lithium</li>
          <li>Stockage à volant inertiel : on stocke de l'énergie sous forme mécanique en fesant tourner très vite avec un moteur un volant d'inertie qui conserve très bien son énergie cinétique jusqu'a sa récupération avec un système classique (rotor, alternateur)</li>
        </ul>

        <div class="headline mb-3">Les STEP</div>

        <p>
          Appellés STEP ou <b>S</b>tation de <b>T</b>ransfert d'<b>É</b>nergie par <b>P</b>ompage sont des infrascructure souvent présentent en montagne
          qui utilisent la gravité afin de stocker l'électricité. Le principe est simple : pendant les heures ou la production exède la demande on pompe de l'eau
          en contrebat d'un barage hydroélectrique et on l'amène dans un réservoir située au dessus. Lorsque la production n'arrive pas à combler la demande,
          on produit de l'electricité avec des turbines en utilisant l'eau stocké en contre haut du barrage.
          <br>
          <br>
          Cette technique est généralement utilisé pour du stockage à moyen terme (sur 32h environ). En France cela représente une puissance de 13 GW au maximum.
          (peut produire 13 GW d'énergie par heure)
        </p>

        <div class="headline mb-3">Stockage inter-saisonnier</div>

        <p>
          En France, à cause du chauffage électrique qui consomme beaucoup, la demande augemente fortement en Hiver pendant les périodes de froid.
          Pour suivre la consommation, on dispose de système afin de stocker l'énergie sur le long terme.
          <br>
          <br>
          Grâce à l'électrolyse on créé du dihydrogène et de l'oxygène qui peut être stocké dans des réservoir sous pression (Power to Gas).
          L'électrolyse consiste à faire passer un courant électrique dans l'eau.

          On peut combiner le dihydrogène à du dioxyde de carbone afin de créer du méthane : c'est la méthanisation.
          <br><br>
          <pre>CO<sub>2</sub> + 4 H<sub>2</sub> → CH<sub>4</sub> + 2 H<sub>2</sub>O</pre>
          <div>Equation de la réaction chimique de la méthanisation.</div>
          <br>
          Pour récupérer de l'électricité, on brule simplement le méthane afin de produire de la chaleur qui est ensuite convertit en électricité via les procédées classique.
          <br><br>
          Le méthane est facile à stocker et à bruler ce qui rend cette méthode pratique pour du stockage à long terme.
          Cette méthode dispose de nombreux avantage mais n'est pas propre car la combustion du méthane produit du CO<sub>2</sub> (on récupère le CO<sub>2</sub> utilisé pour créer le méthane).
          <br>
          En France cette méthode représente 17 GW de puissance.
        </p>
      </v-card>
    </v-card-text>
  </v-card>
</template>

<template>
  <v-container>
    <v-layout justify-center>
      <v-flex xs11 md12 lg10 xl8>
        <v-list two-line>
          <template
            v-for="(source, index) in sources">
            <v-divider
              :key="'divider_top_' + index" />
            <v-list-tile>
              <v-list-tile-avatar>
                <img :src="'https://logo.clearbit.com/' + source.domain">
              </v-list-tile-avatar>
              <v-list-tile-content>
                <v-list-tile-title>
                  {{ source.name }}
                </v-list-tile-title>
                <v-list-tile-sub-title v-if="source.sub === undefined || source.sub === null">
                  {{ source.link }}
                </v-list-tile-sub-title>
                <v-list-tile-sub-title v-else>
                  {{ source.link }}
                </v-list-tile-sub-title>
              </v-list-tile-content>
              <v-list-tile-action>
                <v-layout>
                  <v-tooltip bottom class="pr-3">
                    <template slot="activator">
                      <v-btn icon color="info" @click="copy(source.link)" outline>
                        <v-icon>file_copy</v-icon>
                      </v-btn>
                    </template>
                    <span>Copier le lien</span>
                  </v-tooltip>
                  <v-tooltip bottom class="pl-3 pr-3">
                    <template slot="activator">
                      <v-btn icon color="success" @click="goTo(source.link)" :loading="isGoToLoading">
                        <v-icon>open_in_new</v-icon>
                      </v-btn>
                    </template>
                    <span>Aller sur le lien</span>
                  </v-tooltip>
                </v-layout>
              </v-list-tile-action>
            </v-list-tile>
            <v-divider
              :key="'divider_bottom_' + index" v-if="index + 1 === sources.length"/>
          </template>
        </v-list>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
  export default {
    data: () => ({
      isGoToLoading: false,
      sources: [
        // exemple de source
        {
          link: 'https://www.notion.so/lefuturiste/Script-et-structure-de-la-vid-o-de-M-Bidouille-sur-la-transition-nerg-tique-f097413547c544e1b1f6642d57cea7cf',
          name: 'Script et structure de la vidéo de M.Bidouille sur la transition énergétique',
          sub: 'Dr Matthieu Bessat'
        },
        {
          link: 'https://www.youtube.com/watch?v=OZvcI5-HHSU',
          name: 'La transition énergétique - mix 100% ENR ?',
          sub: 'Monsieur Bidouille'
        },
        {
          link: 'https://www.connaissancedesenergies.org/une-page-pour-decider/reduire-de-50-la-consommation-energetique-d-ici-a-2050-est-ce-possible',
          name: 'Réduire de 50% la consommation énergétique d’ici à 2050 : est-ce possible ?',
          sub: 'Bruno Rebelle'
        },
        {
          link: 'https://bilan-electrique-2017.rte-france.com/',
          name: 'Bilan électrique 2017',
          sub: 'RTE france'
        }
      ]
    }),
    created () {
      this.sources = this.sources.map(source => {
        source.domain = source.link.replace('http://','').replace('https://','').split(/[/?#]/)[0];
        return source
      })
    },
    methods: {
      copy: function (value) {
        let textArea = document.createElement("textarea");
        textArea.value = value;
        document.body.appendChild(textArea);
        textArea.select();
        document.execCommand('copy');
        document.body.removeChild(textArea);
      },
      goTo: function (url) {
        window.open(url, '_blank').focus();
      }
    }
  }
</script>


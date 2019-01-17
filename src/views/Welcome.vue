<template>
  <v-container style='height:80vh;'>
    <v-layout align-space-beetween column fill-height>
      <v-layout align-center fill-height class="mb-2">
        <v-flex text-xs-center class="home">
          <v-fade-transition mode="out-in">
            <div class='white--text'>
              <div class="display-3 mb-4">Transition énergétique</div>
              <div class="headline mb-4">Vers un mix énergétique 100% renouvelable ?</div>
            </div>
          </v-fade-transition>
        </v-flex>
      </v-layout>
      <v-layout justify-center>
        <v-flex xs12 md10>
          <v-card>
            <v-card-text>
              <v-layout justify-center row wrap>
                <v-flex xs12 md4 v-for="(person, index) in persons" :key="index">
                  <v-layout justify-center align-center :mb-2="$vuetify.breakpoint.smAndDown">
                    <v-avatar class="">
                      <img :src="person.img"/>
                    </v-avatar>
                    <div class="ml-4">
                      {{ person.name }}
                    </div>
                  </v-layout>
                </v-flex>
              </v-layout>
            </v-card-text>
          </v-card>
        </v-flex>
      </v-layout>
    </v-layout>
  </v-container>
</template>

<script>
  export default {
    data: () => ({
      persons: [
        {name: "Kylian Buhot", img: "https://randomuser.me/api/portraits/men/85.jpg"},
        {name: "Matthieu Bessat", img: "https://static.werobot.fr/profiles/matthieu.jpg"},
        {name: "Mohamed-El-Hassan Krifa", img: "https://static.werobot.fr/profiles/mohamed.jpg"},
      ]
    }),
  }
</script>

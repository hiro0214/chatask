<template>
  <v-app>

    <v-card flat>
      <v-toolbar color="#296799" height="50px">
        <v-app-bar-nav-icon color="white" />

        <v-toolbar-title class="white--text headline font-weight-bold">Chatask</v-toolbar-title>

        <v-spacer>
        </v-spacer>

        <v-btn icon color="white">
            <v-icon>mdi-magnify</v-icon>
        </v-btn>
        <v-btn icon color="white">
          <v-icon>mdi-dots-vertical</v-icon>
        </v-btn>
      </v-toolbar>
    </v-card>

    <nuxt />
  </v-app>
</template>

<style scoped lang="scss">

</style>
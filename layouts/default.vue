<template>
  <v-app>

    <v-card flat>
      <v-toolbar color="#296799" height="50px" class="px-5">
        <v-app-bar-nav-icon color="white" />

        <nuxt-link to="/top">
          <v-toolbar-title class="white--text headline font-weight-bold">Chatask</v-toolbar-title>
        </nuxt-link>

        <v-spacer>
        </v-spacer>

        <v-btn icon color="white" to="/group">
            <v-icon>group_add</v-icon>
        </v-btn>
        <v-btn icon color="white" to="/user">
          <v-icon>house</v-icon>
        </v-btn>
      </v-toolbar>
    </v-card>

    <nuxt />
  </v-app>
</template>

<style lang="scss" scoped>

a {
  text-decoration:none;
}

</style>
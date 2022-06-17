<template>
  <v-app>
    <v-main>
      <Appbar/>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>

export default {
  name: 'App',
  components: {
    Appbar: () => import("@/components/Appbar"),
  },

  data: () => ({
    
  }),
};
</script>

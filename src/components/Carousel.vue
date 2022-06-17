<template>
  <v-container fluid>
    <v-card class="mx-auto" max-width="1250">
      <v-carousel v-model="model" hide-delimiters>
      <v-carousel-item
        v-for="(color, i) in this.colors"
        :key="color">
        <v-sheet :color="color" height="120%"  tile>
          <v-row class="fill-height" align="center" justify="center">
            <div class="text-h2">
              Slide {{ i + 1 }}
            </div>
          </v-row>
        </v-sheet>
      </v-carousel-item>
    </v-carousel>
    </v-card>
  </v-container>
</template>
<script>

export default {
  name: "carousel",
  props: [
  ],
  data() {
    return {
      model: 0,
      colors: [
        'primary',
        'secondary',
        'yellow darken-2',
        'red',
        'orange',
      ],
    }
  },
  async created() {
  },
  methods: {
    
  },
}
</script>

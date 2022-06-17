<template>
  <v-container >
    <v-sheet class="mx-auto" elevation="8" max-width="1250">
      <v-col>
        <v-row class="pa-3">
          <div >{{textHeader}}</div>
        </v-row>
      </v-col>
          <v-slide-group v-model="model" class="pa-2" show-arrows>
            <v-slide-item v-for="n in datas" :key="n.id">
              <v-hover v-slot="{ hover }">
                <v-card class="justify-center ma-4" height="350" width="260" :class="{ 'on-hover': hover }">
                  <div class="green--text"><v-icon class="green--text">mdi-checkbox-marked-circle</v-icon>มีสินค้า</div>
                  <v-row class="fill-height" align="center" justify="center">
                    <v-container class="ma-3">

                        <row class="center">
                          <v-img height="150" width="100" src="https://cdn.vuetifyjs.com/images/cards/cooking.png" ></v-img>
                        </row>
                        <div class="centerButton" v-if="hover">
                          <v-btn @click="goToDashboard()" :class="{ 'show-btns': hover }" rounded outlined color="indigo" small>เพิ่มลงในตะกร้า</v-btn>
                        </div>

                        <v-row style="margin-top: 10px;" class="ma-1">
                          <v-rating :value="n.rate" color="amber" dense half-increments readonly size="14"></v-rating>
                          <div class="grey--text ms-4">{{n.rate}}</div>
                        </v-row>
                        <v-row class="ma-auto">
                          <p class="subtitle-1">{{n.text}}</p>
                        </v-row>

                      <v-col>
                        <v-row>
                          <div class="text-decoration-line-through text-subtitle-2">THB{{n.price}}</div>
                        </v-row>
                        <v-row>
                          <div class="text-subtitle-1">THB{{n.priceDiscount}}</div>
                        </v-row>
                      </v-col>

                    </v-container>
                  </v-row>
                </v-card>
              </v-hover>
            </v-slide-item>
          </v-slide-group>
      </v-sheet>
    
  </v-container>
</template>

<script>
export default {
name: "CarouselItem",
  props: ['textHeader'],
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
      valuerate: 0,
      datas: [
        {
          id: 1,
          text: 'รสชาติของผลไม้ที่ยังไม่สุกงอม',
          img: "https://cdn.vuetifyjs.com/images/cards/cooking.png",
          price: 599,
          priceDiscount: 499,
          rate: 4
        },
        {
          id: 2,
          text: 'รสชาติของผลไม้ที่ยังไม่สุกงอม',
          img: "https://cdn.vuetifyjs.com/images/cards/cooking.png",
          price: 399,
          priceDiscount: 299,
          rate: 3.5
        },
        {
          id: 3,
          text: 'รสชาติของผลไม้ที่ยังไม่สุกงอม',
          img: "https://cdn.vuetifyjs.com/images/cards/cooking.png",
          price: 799,
          priceDiscount: 699,
          rate: 2
        },
        {
          id: 4,
          text: 'รสชาติของผลไม้ที่ยังไม่สุกงอม',
          img: "https://cdn.vuetifyjs.com/images/cards/cooking.png",
          price: 199,
          priceDiscount: 99,
          rate: 2.5
        },
        {
          id: 5,
          text: 'รสชาติของผลไม้ที่ยังไม่สุกงอม',
          img: "https://cdn.vuetifyjs.com/images/cards/cooking.png",
          price: 799,
          priceDiscount: 699,
          rate: 3
        },
        {
          id: 6,
          text: 'รสชาติของผลไม้ที่ยังไม่สุกงอม',
          img: "https://cdn.vuetifyjs.com/images/cards/cooking.png",
          price: 199,
          priceDiscount: 99,
          rate: 3.5
        },
      ]
    }
  },
  async created() {

  },
  methods: {
    goToDashboard() {
      this.$router.push('/item')

    },
  },
}
</script>

<style>
.center {
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 43%;
  position: relative;
}
.centerButton {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 7px;
}

</style>
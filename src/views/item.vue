<template>
  <v-container my-3>
      <!-- รูปและรายละเอียด -->
      <v-row>
        <v-col cols="4">
          <v-img
            max-height="500"
            max-width="300"
            src="https://cdn.pixabay.com/photo/2022/06/09/10/06/humantay-lake-7252174_960_720.jpg"
          ></v-img>
        </v-col>
        <!-- รายละเอียด -->
        <v-col cols="6" class="ma-2">
          <v-row>
            <h2>รสชาติของผลไม้ที่ยังไม่สุกงอม</h2>
          </v-row>
          <v-row>
            <h5>ผู้เขียน :</h5>
          </v-row>
          <v-row>
            <h5>สำนักพิมพ์ :</h5>
          </v-row>
          <v-row>
            <h5>หมวดหมู่ :</h5>
          </v-row>
          <v-row>
            <h5>ประเภทของสินค้า :</h5>
          </v-row>
          <v-row >
            <h5>บาร์โค้ด :</h5>
          </v-row>

          <v-row >
            <div class="text-Heading-5 font-weight-bold">ราคา THB 499.00</div>
            <div class="text-decoration-line-through align-self-center" >THB599.00</div>
          </v-row>
          <v-row>
            <v-col class="align-self-center" cols="3">
              <v-text-field class="btn" dense filled type="number" min="1" max="100"></v-text-field>
            </v-col>
            <v-col cols="4" class="align-self-center">
              <v-btn class="btn" rounded depressed color="primary">Add</v-btn>
            </v-col>
            <v-col cols="4" class="align-self-center">
              <v-btn class="btn" rounded depressed color="warning"><v-icon >mdi-heart</v-icon>wishlist</v-btn>
            </v-col>
          </v-row>
          
          <v-row>
            <v-col cols="12" md="1" class="align-self-center">
              <h5>แชร์:</h5>
            </v-col>
            <v-col cols="12" md="1">
              <v-icon color="green darken-2">mdi-email-outline</v-icon>
            </v-col>
            <v-col cols="12" md="1">
              <v-icon color="blue lighten-1">mdi-twitter</v-icon>
            </v-col>
            <v-col cols="12" md="1">
              <v-icon color="indigo darken-3">mdi-facebook</v-icon>
            </v-col>
            <v-col cols="12" md="1">
              <v-icon color="deep-orange accent-3">mdi-google-plus</v-icon>
            </v-col>
          </v-row>

        </v-col>
      </v-row>
      <!-- รูป 2 รูปเล็ก -->
      <v-row class="d-flex justify-start px-2" style="gap: 10px;">
        <v-img
          max-height="300"
          max-width="150"
          src="https://cdn.pixabay.com/photo/2022/05/20/01/07/nature-7208410_960_720.jpg"
        ></v-img>
        <v-img
          max-height="300"
          max-width="150"
          src="https://images.unsplash.com/photo-1655374357824-f51336c891ce?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
        ></v-img>
      </v-row>
      <!-- tab -->

      <v-row class="d-flex justify-star">
        <v-tabs v-model="tab">
          <v-tab>เกี่ยวกับสินค้า</v-tab>
          <v-tab>รายละเอียด</v-tab>
          <!-- <v-tab>Item Three</v-tab> -->
          <v-tabs-items v-model="tab">
            <v-tab-item v-for="item in dataTab" :key="item.id">
              <v-card color="basil" flat>
                <!-- <h4>รายละเอียด:</h4> -->
                <v-card-text class="text-subtitle-1">รายละเอียด: </v-card-text>
                <v-card-text>{{ textTest }}</v-card-text>
              </v-card>
            </v-tab-item>
          </v-tabs-items>
        </v-tabs>
        <v-divider></v-divider>
      </v-row>
      <v-row>
        <CarouselItem textHeader="สินค้าที่เกี่ยวข้อง"/>
      </v-row>

  </v-container>
</template>

<script>
export default {
  name: "Item",
  props: [
  ],
  components: {
    CarouselItem: () => import("@/components/CarouselItem"),
  },
  // computed: {
  //   ...sync("*"),
  // },
  data() {
    return {
      // headerBackgroundImage,
      time: null,
      searchItem: "",
      hideSearch: false,
      tab: null,
      items: ['Appetizers', 'Entrees'],
      textTest: `Lorem Ipsum is simply dummy text of the printing and typesetting industry.
       Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
        when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
        It has survived not only five centuries, but also the leap into electronic typesetting, 
        remaining essentially unchanged. 
        It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, 
        and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`,
      dataTab: [
        {
          id: 1,
          text: this.textTest,
          img: "https://cdn.vuetifyjs.com/images/cards/cooking.png",
          price: 599,
          priceDiscount: 499,
          rate: 4
        },
        {
          id: 2,
          text: this.textTest,
          img: "https://cdn.vuetifyjs.com/images/cards/cooking.png",
          price: 399,
          priceDiscount: 299,
          rate: 3.5
        },
      ]

    }
  },
  async created() {
    // console.log('item :>> ');
  },
  methods: {
    
  },
}
</script>

<style>
.btn {
  width: 100%;
  padding: 14px 28px;
  cursor: pointer;
  text-align: center;
}

</style>
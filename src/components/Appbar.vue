<template>
  <v-app-bar app height="85">
    <v-container class="fill-height">
      <v-row no-gutters style="flex-wrap: nowrap;">
        <v-col cols="1">
          <h1 @click="goToHome()" class="text-h4 align-center">Book</h1>
        </v-col>
        <v-col class="flex-grow-1 align-self-center justify-center">
          <v-row  outlined tile v-if="hideSearch == false">
            <v-btn text>สินค้าใหม่</v-btn>
            <v-btn text>สินค้าขายดี</v-btn>
            <v-btn text>สินค้าลดราคา</v-btn>
            <v-btn text>สินค้าแนะนำ</v-btn>
          </v-row>
          <row v-if="hideSearch == true">
              <v-responsive max-width="850">
                <v-text-field dense flat hide-details rounded solo-inverted clearable></v-text-field>
              </v-responsive>
          </row>
        </v-col>
        <v-col cols="2" class="flex-grow-0 flex-shrink-1 ">
          <row class="ma-6">
            <v-btn icon @click="hideSearch = !hideSearch">
              <v-icon>{{ !hideSearch ? 'mdi-magnify' : 'mdi-close' }}</v-icon>
            </v-btn>
              <v-menu offset-y transition="scale-transition" class="posutionMenu">
                <template v-slot:activator="{ on, attrs }">
                  <v-btn icon v-bind="attrs" v-on="on">
                    <v-row hidden-md-and-down style="max-width: fit-content">
                      <v-badge color="blue" content="2">
                        <v-icon>mdi-cart-minus</v-icon>
                      </v-badge>
                    </v-row>
                  </v-btn>
                </template>
                <v-list align-center justify-center class="cardMenu" >
                  <v-list-item-content>
                    <v-list-item-title class="text-h6 d-flex justify-center">ตะกร้าของฉัน</v-list-item-title>
                    <v-list-item-subtitle class="d-flex justify-center">สินค้าในตะกร้า</v-list-item-subtitle>
                  </v-list-item-content>
                  <v-list-item class="d-flex justify-center">
                    <v-btn
                      rounded
                      outlined
                      @click="goToBusket()"
                      color="indigo">
                      ดูหรือแก้ไขตะกร้าของฉัน
                    </v-btn>
                  </v-list-item>
                  <v-divider></v-divider>

                  <v-list-item-content>
                    <v-row class="justify-center">
                      <!-- จำนวน -->
                      <v-col class="align-self-center d-flex justify-end" md="2">
                        <h3>1 x</h3>
                      </v-col>
                      <!-- รุป -->
                      <v-col class="d-flex justify-center" md="2">
                          <v-list-item class="d-flex justify-start"><img height="100px" width="70px" src="../assets/logo.png" alt="#" /></v-list-item>
                      </v-col>
                      <v-col class="d-flex justify-center" md="3">
                          <v-list-item class="d-flex justify-end">รสชาติของผลไม้ที่ยังไม่สุกงอม</v-list-item>
                      </v-col>
                      <!-- ปุ่ม -->
                      <v-col md="2">
                          <v-col>
                            <v-btn class="mx-2" fab small color="primary">
                              <v-icon dark>
                                mdi-close
                              </v-icon>
                            </v-btn>
                          </v-col>
                          <v-col>
                            <v-btn class="mx-2" fab small color="primary">
                              <v-icon dark>
                                mdi-pencil
                              </v-icon>
                            </v-btn>
                          </v-col>
                        
                      </v-col>
                    </v-row>
                    
                  </v-list-item-content>

                  <v-divider></v-divider>
                  <v-list-item >
                    <v-list-item-title class="text-h6 d-flex justify-center">ยอดรวม:THB 499.00</v-list-item-title>
                  </v-list-item>
                  <v-list-item >
                    <v-btn class="btn" rounded color="primary" @click="goToCheckout()">ไปชำระเงิน</v-btn>
                  </v-list-item>
                </v-list>
              </v-menu>
            <v-btn icon>
              <v-avatar size="2.2rem">
                <img src="https://cdn.vuetifyjs.com/images/john.jpg" alt="John">
              </v-avatar>
            </v-btn>
          </row>
        </v-col>
      </v-row>
    </v-container>
  </v-app-bar>
</template>

<script>
import headerBackgroundImage from "../assets/logo.png"
export default {
  name: "Appbar",
  props: [
  ],
  data() {
    return {
      headerBackgroundImage,
      time: null,
      searchItem: "",
      hideSearch: false,
    }
  },
  async created() {

  },
  methods: {
    goToBusket(){
      this.$router.push('/busket')
    },
    goToCheckout(){
      this.$router.push('/checkout')
    },
    goToHome() {
      this.$router.push('/')
    }
  },
}


</script>

<style scoped>
.btn {
  /* display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin: 0;
  justify-items: center; */
  display: block;
  width: 100%;
  padding: 14px 28px;
  font-size: 16px;
  cursor: pointer;
  text-align: center;
  align-items: center;
  justify-content: center;
}
h1 {
  cursor: pointer;
}
.cardMenu {
  max-width: 340px
}
.posutionMenu {
  /* top: 65px;
  left: 850px; */
  min-width: 48px;
  top: 67px;
  left: 1060px;
  transform-origin: left top;
  z-index: 8;
}
</style>

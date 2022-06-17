<template>
  <v-container>
    <v-row>
      <!-- table -->
      <v-col cols="8">
        <h1 class="my-4">ตระกร้าสินค้า</h1>
        <v-row class="my-4">
          <v-simple-table dense >
            <template>
              <thead>
                <tr>
                  <th class="text-center">
                    สินค้า
                  </th>
                  <th class="text-center">
                  </th>
                  <th class="text-center">
                    ราคา
                  </th>
                  <th class="text-center">
                    จำนวน
                  </th>
                  <th class="text-center">
                    ยอดรวม
                  </th>
                  <th class="text-center">
                  </th>
                </tr>
              </thead>
              <tbody> 
                <tr v-for="item in desserts" :key="item.name" style="height:150px">
                  <td><v-img max-height="250" max-width="150" src="https://picsum.photos/510/300?random"></v-img></td>
                  <td>{{ item.name }}</td>
                  <td>THB{{ item.price }}</td>
                  <td>{{ item.number }}</td>
                  <td>THB{{ item.totolPrice }}</td>
                  <td><v-btn color="primary " fab small> <v-icon> mdi-pencil</v-icon> </v-btn></td>
                </tr>
              </tbody>
            </template>
          </v-simple-table>
        </v-row>
        <v-row class="my-4">
          <v-divider></v-divider>
        </v-row>
        <v-row >
          <v-col cols="3">
            <v-btn rounded outlined color="primary">ซื้อสินค้าต่อไป</v-btn>
          </v-col>
          <v-col cols="3">
            <v-btn rounded color="black white--text">ล้างตระกร้าสินค้า</v-btn>
          </v-col>
        </v-row>
      </v-col>
      <!-- card -->
      <v-col cols="4">
        <v-card class="mx-auto my-12 cyan lighten-5" max-width="374">
          <v-card-title class="my-4">สรุปคำสั่งซื้อ</v-card-title>
          <v-card-text class="d-flex justify-space-between ">
            <div class=" text-subtitle-1">ยอดรวม</div>
            <div class=" text-subtitle-1">THB 450.00</div>
          </v-card-text>
          <v-card-text class="d-flex justify-space-between ">
            <div class=" text-subtitle-1">ค่าส่ง</div>
            <div class=" text-subtitle-1">THB 5.00</div>
          </v-card-text>
          <v-divider class="mx-4"></v-divider>
          <v-card-text class="d-flex justify-space-between ">
            <div class=" text-subtitle-1">ยอดสุทธิ</div>
            <div class=" text-subtitle-1">THB 500.00</div>
          </v-card-text>
          <v-card-actions class="btn">
            <div >
              <v-btn rounded class="btn" color="primary" @click="goToCheckout()">
                ไปชำระเงิน
              </v-btn>
            </div>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>

export default {
  name: 'Busket',
  data() {
    return {
      desserts: [
          {
            name: 'รสชาติของผลไม้ที่ยังไม่สุกงอม',
            price: 499.00,
            number: 1,
            totolPrice: 499.00
          },
          
        ],
    }
  },
  async created() {
    console.log('Content :>> ');
  },
  methods: {
     goToCheckout(){
      this.$router.push('/checkout')
    }
  },
}
</script>

<style>
.btn {
  /* display: flex;
  justify-content: center;
  align-items: center;
  text-align: center; */
  display: block;
  width: 100%;
  padding: 14px 28px;
  font-size: 16px;
  cursor: pointer;
  text-align: center;
  align-items: center;
  justify-content: center;
}

</style>
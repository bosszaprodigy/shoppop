<template>
  <v-container>
    <!-- <h2>Checkout</h2> -->
    <v-row>
      <!-- from -->
      <v-col>
        <h1 class="my-4">ชำระเงิน</h1>
        <v-form v-model="form">
          <v-container>
            <h5 class="my-4">ที่อยู่ในการติดต่อ</h5>
            <v-divider class="my-4"></v-divider>
            <v-row>
              <v-col cols="12" md="6">
                <v-text-field
                  v-model="firstname"
                  label="ชื่อ"
                  outlined
                  dense
                  rounded
                ></v-text-field>
              </v-col>

              <v-col cols="12" md="6">
                <v-text-field
                  v-model="lname"
                  label="นามสกุล"
                  outlined
                  dense
                  rounded
                ></v-text-field>
              </v-col>

            </v-row>
            <v-row>
              <v-col cols="12" md="12" px-1>
                <v-autocomplete
                  v-model="country"
                  label="ประเทศ"
                  outlined
                  dense
                  rounded
                />
              </v-col>
            </v-row>
            <v-row>
              <v-col cols="12" md="12" px-1>
                <v-text-field
                  v-model="address"
                  outlined
                  label="ที่อยู่ (บ้านเลขที่ / หมู่บ้าน / หมู่ที่ / ซอย / ถนน)"
                  dense
                  rounded
                ></v-text-field>
              </v-col>
            </v-row>
            <v-row>
              <v-col cols="12" md="6" px-1>
                <v-text-field
                  outlined
                  v-model="tambol"
                  label="ตำบล/แขวง"
                  dense
                  rounded
                ></v-text-field>
              </v-col>
              <v-col cols="12" md="6" px-1>
                <v-text-field
                  outlined
                  v-model="amphor"
                  label="อำเภอ/เขต"
                  dense
                  rounded
                ></v-text-field>
              </v-col>
            </v-row>
            <v-row>
              <v-col cols="12" md="6" px-1>
                <v-text-field
                  outlined
                  v-model="province"
                  label="จังหวัด"
                  dense
                  rounded
                ></v-text-field>
              </v-col>
              <v-col cols="12" md="6" px-1>
                <v-text-field
                  outlined
                  v-model="code"
                  label="รหัสไปรษณีย์"
                  dense
                  rounded
                ></v-text-field>
              </v-col>
            </v-row>
            <v-row>
              <v-col cols="12" md="12" px-1>
                <v-text-field
                  outlined
                  v-model="phoneNumber"
                  label="เบอร์ติดต่อ (กรุณาระบุหมายเลขโทรศัทพ์ เฉพาะตัวเลขเท่านั้น)"
                  dense
                  rounded
                ></v-text-field>
              </v-col>
            </v-row>
            <v-row>
              <v-col>
                <h5 class="my-4">เลือกขนส่ง</h5>
                <v-divider class="my-4"></v-divider>
              </v-col>
            </v-row>
            <v-row class="pa-2 my-2 border">
                <v-radio-group v-model="transportRadio">
                  <div>
                    <v-radio
                      label="Free Shiping"
                      color="primary"
                      value="Free"
                    ></v-radio>
                  </div>
                </v-radio-group>
              <v-col class="align-self-center d-flex justify-end">
                <h5>THB 0.00</h5>
              </v-col>
            </v-row>
            <br/>
            <v-row class="pa-2 border">
                <v-radio-group v-model="transportRadio">
                  <div>
                    <v-radio
                      label="Kerry Express"
                      color="primary"
                      value="Kerry"
                    ></v-radio>
                  </div>
                </v-radio-group>
              <v-col class="align-self-center d-flex justify-end">
                <h5>THB 40.00</h5>
              </v-col>
            </v-row>
            

            <v-row>
              <v-col>
                <h5 class="my-4">วิธีชำระเงิน</h5>
                <v-divider class="my-4"></v-divider>
              </v-col>
            </v-row>

            <v-row class="pa-2 my-2 border">
              <v-radio-group v-model="transportRadio">
                <div>
                  <v-radio
                    label="Cash"
                    color="primary"
                    value="cash"
                  ></v-radio>
                </div>
              </v-radio-group>
            </v-row>
            <br/>
            <v-row class="pa-2 border">
                <v-radio-group v-model="transportRadio">
                  <div>
                    <v-radio
                      label="Credit/Debit"
                      color="primary"
                      value="Credit"
                    ></v-radio>
                  </div>
                </v-radio-group>
            </v-row>




          </v-container>
        </v-form>
      </v-col>
      <!-- card -->
      <v-col>
        <v-card class="mx-auto my-12 cyan lighten-5 pa-3" max-width="350">
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
            <v-card-actions>
                <v-btn class="btn" rounded color="primary" @click="goToCheckout()">
                  <v-icon dark left>mdi-lock</v-icon>
                    ไปชำระเงิน
                </v-btn>
            </v-card-actions>
          </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "Checkout",
  data() {
    return {
      time: null,
      searchItem: "",
      hideSearch: false,
      form:"",
      firstname:"",
      lname:"",
      country:"",
      address:"",
      tambol:"",
      amphor:"",
      province:"",
      code:"",
      phoneNumber:"",
      payRadio:"",
      transportRadio:"",
    }
  },
  async created() {

  },
  methods: {
    
    
  },

}
</script>

<style>
.btn {
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin: 0;
  justify-items: center;
}
.border {
  border: 1px solid gray;
  border-radius: 10px;
}
</style>
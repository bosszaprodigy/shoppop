<template>
  <v-container>
     <Carousel/>
     <CarouselItem textHeader="สินค้าขายดี"/>
     <CarouselItem textHeader="สินค้าแนะนำ"/>
  </v-container>
</template>

<script>

export default {
  name: "Content",
  components: {
   
    Carousel: () => import("@/components/Carousel"),
    CarouselItem: () => import("@/components/CarouselItem"),
  },
  props: [
  ],
  // computed: {
  //   ...sync("*"),
  // },
  data() {
    return {
    
    }
  },
  async created() {
  },
  methods: {
    
  },
}
</script>

<style>

</style>
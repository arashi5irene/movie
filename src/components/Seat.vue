<template>
  <div class="flex py-12 flex justify-center flex-wrap w-[472px]">
    <div class="w-full text-[19px]">請選擇觀看電影的座位</div>

    <div class="w-full flex justify-center items-center pt-12">
      <div class="btn-seat active mr-1"></div>
      <label class="pr-5">您的座位</label>
      <div class="btn-seat mr-1"></div>
      <label class="pr-5">未售出</label>
      <div class="btn-seat bg-myGray mr-1"></div>
      <label class="pr-5">已售出</label>
    </div>
    <div class="w-full border-2 h-8 my-8 border-myGray flex justify-center items-center">
      螢幕
    </div>
    <div class="w-full">
      <div v-for="row in 10" :key="`r${row}`" class="row flex justify-center">
        <button
          class="btn-seat"
          v-for="col in 16"
          :key="`c${col}`"
          :class="{ active: checkNowSeat(row, col) }"
          :disabled="checkReserved(row, col)"
          @click="setNowSeat(row, col)"
        ></button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
const nowSeat = ref("");
const setNowSeat = (r: number, c: number) => {
  nowSeat.value = `${r}-${c}`;
};
const checkNowSeat = (r: number, c: number) => {
  return `${r}-${c}` == nowSeat.value;
};
const reservedSeats = ref(['1-6', '2-4', '2-5', '2-6','10-4','10-5'])
const checkReserved = (r: number, c: number)=>{
  return reservedSeats.value.includes(`${r}-${c}`)
}
</script>

<style lang="css" scoped>
.btn-seat {
  @apply rounded-full border-2 border-myGray h-[18px] w-[18px];
}
.btn-seat:disabled {
  @apply bg-myGray cursor-no-drop;
}
.row>.btn-seat{
  @apply mr-2 mb-2;
}
.row>.btn-seat:nth-child(3), .row>.btn-seat:nth-child(13){
  @apply mr-12;
}
.row>.btn-seat:last-child{
  @apply mr-0;
}
.active {
  @apply bg-primary border-primary;
}
</style>

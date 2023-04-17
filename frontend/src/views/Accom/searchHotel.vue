<template>
  <div class="contents">
    <VCalendar
    :initial-page="{ month: 4, year: 2019 }"
    :color="selectedColor"
    :attributes="attrs"
    />
    
  </div>
</template>

<script>
import { ref } from 'vue';

export default {
  data(){
    return{
      selectedColor : ref('blue'),
      attrs : ref([{
        key : 'test',
        highlight: true,
        dates: { start: new Date(2019, 3, 15), end: new Date(2019, 3, 19) }
      }]),
    }
  }
}
</script>

<style>

</style>
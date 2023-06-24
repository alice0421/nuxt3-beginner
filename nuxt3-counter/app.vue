<script setup>
  // const counter = useCounterState()

  const counterStore = useCounterState()
  const { counter } = counterStore
</script>

<template>
  <div>
    <!-- <p>{{ counter }}</p>

    <button type="button" @click="counter++">+</button>
    <button type="button" @click="counter <= 0 ? counter = 0 : counter--">-</button>
    <button type="button" @click="counter = 0">Reset</button> -->



    <p>{{ counter }}</p>

    <button type="button" @click="counterStore.addCounter()">+</button>
    <button type="button" @click="counterStore.subtractCounter()">-</button>
    <button type="button" @click="counterStore.resetCounter()">Reset</button>
  </div>
</template>

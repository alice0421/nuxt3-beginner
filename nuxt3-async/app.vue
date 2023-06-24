<script setup>
  const { data: users, error } = await useFetch('https://jsonplaceholder.typicode.com/users')
  // console.log(error.value)
  if(error.value){
    throw createError({ statusCode: 404, statusMessage: "Page not Found!!!!!"})
  }
</script>

<template>
  <ul>
    <li v-for="user in users" :kye="user.id">
      {{ user.id }}, {{ user.name }}
    </li>
  </ul>
</template>

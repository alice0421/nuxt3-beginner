<script setup>
  const tasks = useCookie(
    'tasks',
    {
      default: () => []
    }
  )
  const newTask = ref('')

  function addTask(){
    if(newTask.value.length >= 1){
      tasks.value.push(newTask.value)
    }
    newTask.value = ''
  }

  function deleteTask(index){
    tasks.value.splice(index, 1)
  }

  function clearTask(){
    tasks.value = []
  }
</script>

<template>
  <NuxtLayout>
    <form @submit.prevent="addTask()">
      <input v-model="newTask" name="newTask" autocomplete="off" type="text">
      <button type="submit">Add</button>
    </form>

    <ul>
      <li v-for="(task, index) in tasks" :key="task">
        <span>{{ task }}</span>
        <button type="button" @click="deleteTask(index)">Delete</button>
      </li>
    </ul>

    <button type="button" @click="clearTask()">Clear</button>
  </NuxtLayout>
</template>

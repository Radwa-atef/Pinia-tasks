<script setup>
import TaskForm from '@/components/TaskForm.vue'
import TasksList from '@/components/TasksList.vue'
</script>
<template>
  <main>

    <!-- heading -->
    <header>
      <div class="title">
        <img src="https://pinia.vuejs.org/logo.svg" alt="pinia logo">
        <h1>Pinia Tasks</h1>
      </div>
      <div class="new-task-from">
        <TaskForm />
      </div>
    </header>
    <TasksList />

  </main>
</template>
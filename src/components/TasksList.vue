<script setup>
import TaskDetails from './TaskDetails.vue'
import {useTaskStore} from '../store/task'
import { storeToRefs } from 'pinia';
import { ref } from 'vue';
  const storedTasks = useTaskStore()
  const {tasks, favs, favCount, totalCount} = storeToRefs(storedTasks)
  const filter = ref('all')
  storedTasks.getTasks()

</script>
<template>
    <nav class="filter">
        <button
        :class="{active: filter=='all' }"
         @click="filter='all'">All Tasks</button>
        <button
        :class="{active: filter=='fav' }"
         @click="filter='fav'">Fav Tasks</button>
    </nav>
    <div class="task-list" v-if="filter==='all'">
        <p>You have {{ totalCount }} tasks left to do</p>
        <div v-for="task in tasks" :key="task.id"> 
            <TaskDetails :task="task"/>
        </div>
    </div>
    <div class="task-list" v-if="filter==='fav'">
        <p>You have {{ favCount }} fav tasks left to do</p>
        <div v-for="task in favs" :key="task.id"> 
            <TaskDetails :task="task"/>
        </div>
    </div>
</template>
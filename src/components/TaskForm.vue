<script setup>
import { useTaskStore } from '../store/task'
import { ref } from 'vue';
const taskStore = useTaskStore()
const title = ref('')

function addNewTask() {
    if (title.value.trim()) {
        taskStore.addTask({
            id: Math.floor(Math.random * 10000),
            title: title.value,
            isFav: false
        })
        title.value= ''
    }
}
</script>
<template>
    <form @submit.prevent="addNewTask">
        <input type="text" v-model="title" placeholder="I need to ..." required/>
        <button type="submit">Add</button>
    </form>
</template>
import { defineStore } from 'pinia'
export const useTaskStore = defineStore('taskStore', {
    state: () => {
        return {
            tasks: [],
        }
    },
    getters: {
        favs() {
            return this.tasks.filter(el => el.isFav)
        },
        favCount() {
           // return this.tasks.reduce((p, c) => c.isFav ? p + 1 : p)
           return this.favs.length
        },
        totalCount: (state) => {
            return state.tasks.length
        }
    },
    actions:{
        async getTasks()
        {
            const res = await fetch('http://localhost:3000/tasks')
            const data = await res.json()
            this.tasks = data
        },
        async addTask(newTask)
        {
            this.tasks.push(newTask)

            const res = await fetch('http://localhost:3000/tasks',{
                method: 'POST',
                body: JSON.stringify(newTask),
                headers: { 'Content-Type': 'application/json'}
            })
            if(res.error){
                console.log(res.error)
            }
        },
        async deleteTask(id)
        {
            this.tasks= this.tasks.filter(el=> el.id !== id)
            const res = await fetch(`http://localhost:3000/tasks/${id}`,{
                method: 'DELETE',
            })
            if(res.error){
                console.log(res.error)
            }
        },
        async toggleFav(id)
        {
          const task = this.tasks.find(el=> el.id === id)
          task.isFav = !task.isFav
          const res = await fetch(`http://localhost:3000/tasks/${id}`,{
            method: 'PATCH',
            body: JSON.stringify({isFav: task.isFav}),
            headers: { 'Content-Type': 'application/json'}
        })
        if(res.error){
            console.log(res.error)
        }
        }
    }
})

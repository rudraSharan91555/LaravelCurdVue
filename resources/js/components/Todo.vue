<template>
    <div class="container">
        <div class="row justify-content-center mt-5">
            <div class="col-md-8">
                <div class="card">
                    <div class="card-header">Todo</div>

                    <div class="card-body">
                        <div class="input-group">
                            <input type="text" placeholder="Todo.." class="form-control" v-model="newTodo"
                                aria-label="todo" aria-describedby="todo" />
                            <div class="input-group-append">
                                <button type="button" class="btn btn-info" @click="addTodo">Add</button>
                            </div>
                        </div>
                        {{ todos }}
                        <table class="table table-bordered mt-4">
                            <thead>
                                <th>S.no</th>
                                <th>Name</th>
                                <th>Action</th>
                            </thead>
                            <tbody>
                                <tr v-for="(todo, index) in todos" :key="todo.id">
                                    <td>{{ index + 1 }}</td>
                                    <td>{{ todo.name }}</td>
                                    <td>
                                    
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    data() {
        return {
            todos: [],
            newTodo: '',
            api: 'http://127.0.0.1:8000/api/todos'
        };
    },
    mounted() {
        this.fetchTodos();
    },
    methods: {
        fetchTodos() {
            axios.get(this.api)
                .then((response) => {
                    this.todos = response.data;
                })
                .catch((error) => {
                    console.error("Error fetching todos:", error);
                });
        },
        
    }
};
</script>

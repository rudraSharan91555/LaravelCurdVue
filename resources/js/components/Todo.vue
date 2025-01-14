<template>
    <div class="container mt-3">
        <div class="row justify-content-center mt-5">
            <div class="col-md-8">
                <div class="card">
                    <div class="card-header bg-info text-white text-center fs-4">Todo</div>
                    <div class="card-body">
                        <div class="input-group mb-3">
                            <input type="text" placeholder="Todo.." class="form-control mr-2" v-model="todo_input"
                                aria-label="todo" aria-describedby="todo" />

                            <div class="input-group-append">
                                <!-- Use the same method for Add and Update buttons -->
                                <button type="button" class="btn btn-info text-white ml-2 mr-2" 
                                        @click="saveTodo()">
                                    {{ todo_editing ? 'Update' : 'Add' }}
                                </button>
                            </div>

                        </div>
                        <button type="button" class="btn btn-sm text-danger float-right" 
                                @click="resetTodo()">Reset</button>
                        <table class="table table-bordered mt-4">
                            <thead>
                                <tr>
                                    <th>S.no</th>
                                    <th>Name</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="(todo, index) in todos" :key="todo.id">
                                    <td>{{ index + 1 }}</td>
                                    <td>{{ todo.name }}</td>
                                    <td>
                                        <button type="button" class="btn btn-sm btn-danger"
                                            @click="deleteTodo(todo.id)">Delete</button>

                                        <button type="button" class="btn btn-sm btn-info" @click="editTodo(todo)">
                                            Edit
                                        </button>
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
import axios from "axios";

export default {
    data() {
        return {
            todos: [],
            api: "http://127.0.0.1:8000/api/todos",
            todo_input: "",
            todo_editing: null,
        };
    },
    mounted() {
        this.fetchTodos();
    },
    methods: {
        fetchTodos() {
            axios
                .get(this.api)
                .then((response) => {
                    this.todos = response.data;
                })
                .catch((error) => {
                    console.error("Error fetching todos:", error);
                });
        },
        saveTodo() {
            const trimmedInput = this.todo_input.trim();
            if (trimmedInput) {
                if (this.todo_editing) {
                    // Update existing todo
                    axios
                        .put(`${this.api}/${this.todo_editing.id}`, { name: trimmedInput })
                        .then((response) => {
                            const index = this.todos.findIndex(todo => todo.id === this.todo_editing.id);
                            this.todos[index] = response.data;
                            this.todo_input = "";
                            this.todo_editing = null;
                        })
                        .catch((error) => {
                            console.error("Error saving todo:", error);
                        });
                } else {
                    // Add new todo
                    axios
                        .post(this.api, { name: trimmedInput })
                        .then((response) => {
                            this.todos.push(response.data);
                            this.todo_input = "";
                        })
                        .catch((error) => {
                            console.error("Error saving todo:", error);
                        });
                }
            } else {
                alert("Please enter a valid todo.");
            }
        },

        deleteTodo(id) {
            axios
                .delete(`${this.api}/${id}`)
                .then(() => {
                    this.todos = this.todos.filter((todo) => todo.id !== id);
                })
                .catch((error) => {
                    console.error("Error deleting todo:", error);
                });
        },

        editTodo(todo) {
            this.todo_input = todo.name;
            this.todo_editing = todo;
        },

        resetTodo() {
            this.todo_input = "";  
            this.todo_editing = null;  
        }
    },
};
</script>

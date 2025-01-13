<template>
    <div class="container">
        <div class="row justify-content-center mt-5">
            <div class="col-md-8">
                <div class="card">
                    <div class="card-header">Todo</div>

                    <div class="card-body">
                        <div class="input-group">
                            <input type="text" placeholder="Todo.." class="form-control" aria-label="todo"
                            aria-describedby="todo">
                            <div class="input-group-append">
                                <button type="button" class="btn btn-info" >Add</button>
                            </div>
                        </div>

                        <table class="table table-bordered mt-4" >
                            <thead>
                                <th>S.no</th>
                                <th>Name</th>
                                <th>Action</th>
                            </thead>
                            <tbody>
                                <tr>
                                    <td></td>
                                    <td></td>
                                    <td></td>
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
    export default {
        data(){
            return{
                todos:[],
                api: 'http://127.0.0.1:8000/api/todos'
            }
        },
        mounted() {
            console.log('Component mounted.')
        }
    }
</script>
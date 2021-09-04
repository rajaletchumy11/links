<template>
    <div>
        <h1>Sign In</h1>
        <form action="#" @submit.prevent="loginUser">
            <div class ="form-row">
                <label>Email:</label>
                <input v-model="email" type="email" class="form-control" placeholder="Email" required>
            </div>
            <div class ="form-row">
                <label>Password:</label>
                <input v-model="password" type="password" class="form-control" placeholder="Password" required>
            </div>
            <div class ="form-row">
                <input type="submit" class="btn btn-primary">
            </div>
                <p><a href="#">Forgot your password?</a></p>
        </form>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                email: "",
                password: "",
                login: ""
            }
        },
        methods: {
            loginUser() {
                var ldata = {
                    "email": this.email, 
                    "password": this.password
                };
                axios.post("/login", ldata).then(response => {
                    this.$emit('login', 1);
                })             
            }
        },
        mounted() {
            
        },
    }
</script>

<template>
    <div>
        <h1>Sign Up</h1>
        
        <form action="#" @submit.prevent="registerUser">
        <div class ="form-row">
            <label class="col-md-8">Name:</label>
            <input v-model="name" type="input" class="form-control col-md-4" placeholder="Name" required>
        </div>
        <div class ="form-row">
            <label>Email:</label>
            <input v-model="email" type="email" class="form-control" placeholder="Email" required>
        </div>
        <div class="form-row">
            <label>Password:</label>
            <input v-model="password" type="password" class="form-control" placeholder="Password" required>
        </div>
        <div>
            <input type="submit" class="btn btn-primary">
        </div>
        <!-- <p>Already have an account? <a href="#" @click="registerActive = !registerActive, emptyFields = false">Sign in here</a></p> -->
        </form>
    </div>
</template>

<script>

export default({
    data() {
        return {
            name: "",
            email: "",
            password: ""
        }
    },
    methods: {
        registerUser() {
            var rdata  = {
                "name"     : this.name,
                "email"    : this.email,
                "password" : this.password,
            };
            
            axios.post('/register', rdata).then(response => {
                this.$emit(1);
            })
        }
    }
})
</script>

<template>
    <div class="container">
        <div class="col-8">
         <b-form @submit.prevent="logUser">

            <b-form-group label="Email:">
                <b-form-input type="email" v-model="loginForm.email" placeholder="Enter email">
                </b-form-input>
            </b-form-group>
            <b-form-group label="Password:">
                <b-form-input type="password" v-model="loginForm.password" placeholder="Enter password">
                </b-form-input>
            </b-form-group>
            
            

            <b-button type="submit" variant="success">Submit</b-button>

        </b-form>

</div>

    </div>
</template>

<script>
 import AuthService from './../services/AuthService'
export default {
  name: 'AppLogin',
   data() {
            return {
                loginForm: {
                    email: '',
                    password: ''
                }
            }
        },
    //  methods: {
        //     logUser() {
        //         AuthService.login(this.loginForm)
        //             .then((success) => {
        //                 this.redirectToHome()
        //             }).catch((error) => {
        //                 console.log(error)
        //             })
        //     },
        // redirectToHome() {
        //            this.$router.push({
        //             name: 'home'
        //         })
        //     },
        // }
}
</script>

<style>

</style>

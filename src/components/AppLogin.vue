<template>
    <div class="container">
        <div class="col-8">
            <b-form @submit.prevent="login">

                <b-form-group label="Email:">
                    <b-form-input type="email" v-model="email" placeholder="Enter email">
                    </b-form-input>
                </b-form-group>
                <b-form-group label="Password:">
                    <b-form-input type="password" v-model="password" placeholder="Enter password">
                    </b-form-input>
                </b-form-group>
                <!-- error block -->
                <div v-for="(error, key) in errors" :key="key" v-if="error" class="alert alert-danger">
                    {{error}}
                </div>
                <!--  -->


                <b-button type="submit" variant="success">Submit</b-button>

            </b-form>

        </div>

    </div>
</template>

<script>
    import {
        authService
    } from '../services/AuthService'

    export default {
        name: 'AppLogin',
        data() {
            return {
                errors: [],
                email: '',
                password: '',
                  isAuthenticated: authService.isAuthenticated()
            }
        },
        methods: {
            login() {
                authService.login(this.email, this.password)
                    .then(() => {
                        this.$router.push({
                            name: 'movies'
                        })
                        this.isAuthenticated(true);

                    }).catch(errors => {
                        this.errors = errors.response.data;
                    })




            }
        }
    }
</script>

<style>
</style>
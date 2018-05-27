<template>
    <div class="container">

        <div class="col-8 mt4">
            <h4>Register</h4>
            <b-form @submit.prevent="register">
                <b-form-group label="Name:">
                    <b-form-input type="text" v-model="newUser.name" placeholder="Enter name">
                    </b-form-input>
                </b-form-group>


                <b-form-group label="Email:">
                    <b-form-input type="email" v-model="newUser.email" placeholder="Enter email">
                    </b-form-input>
                </b-form-group>
                <b-form-group label="Password:">
                    <b-form-input type="password" v-model="newUser.password" placeholder="Enter password">
                    </b-form-input>
                </b-form-group>
                <b-form-group label="Password_confirmation:">
                    <b-form-input type="password" v-model="newUser.password_confirmation" placeholder="Enter password_confirmation">
                    </b-form-input>
                </b-form-group>
 <!-- error block -->
            <div v-for="(error, key) in errors" :key="key" v-if="error" class="alert alert-danger">
                <ul v-for="(oneError, key) in error" :key="key">
                   <li >{{oneError}}</li> 
                </ul>
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
        name: "AppRegister",
        data() {
            return {
                errors:[],
                newUser: {
                    name: '',
                    email: '',
                    password: '',
                    password_confirmation: ''
                }

            }
        },
        methods: {
            register() {
                authService.register(this.newUser)
                    .then(() => {
                        this.$router.push({
                            name: 'login'
                        })
                        
                    }).catch(errors => {
                      this.errors = errors.response.data;
                      console.log('see',this.errors)
                       
                        
                    })
            }
        }
    }
</script>

<style>
</style>
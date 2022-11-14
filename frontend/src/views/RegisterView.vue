<script setup lang="ts">

    import {Register} from '../services/AuthenticationService';
    import {ref} from 'vue';

    const email = ref('');
    const password = ref('');
    const error = ref('');

    async function onClick_Register(){

        try{
            await Register({
                email: email.value,
                password: password.value
            });
        }
        catch(err: any){
            error.value = err.response.data.error;
        }
    }

</script>

<template>

    <h1>Register</h1>
    <input type="email" name="email" placeholder="yourEmail@gmail.com" v-model="email" />
    <input type="password" name="password" placeholder="Password" v-model="password" />
    <button @click="onClick_Register">Register</button>
    <div v-if="error != ''">{{error}}</div>

</template>
<script setup lang="ts">

    import Register from '../services/AuthenticationService';
    import {ref} from 'vue';

    const email = ref('');
    const password = ref('');

    function onClick_Register(){
        Register({
            email: email.value,
            password: password.value
        });
    }

</script>

<template>

    <h1>Register</h1>
    <input type="email" name="email" placeholder="yourEmail@gmail.com" v-model="email" />
    <input type="password" name="password" placeholder="Password" v-model="password" />
    <button @click="onClick_Register">Register</button>

</template>
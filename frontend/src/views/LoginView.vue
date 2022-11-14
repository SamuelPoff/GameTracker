<script setup lang="ts">

    import {Login} from '../services/AuthenticationService';
    import {nextTick, ref} from 'vue';
    import { useRouter } from 'vue-router';

    const email = ref('');
    const password = ref('');
    const error = ref('');

    const router = useRouter();

    async function onClick_Login(){

        try{

            Login({email: email.value, password: password.value}).then(()=>{
                //console.log(res);

                error.value = '';
                router.push({name: 'home'});
            });
            
            

        }
        catch(err: any){

            error.value = err.response.data.error;

        }

    }

</script>

<template>

    <h1>Login</h1>
    <input type="email" name="email" placeholder="yourEmail@gmail.com" v-model="email" />
    <input type="password" name="password" placeholder="Password" v-model="password" />
    <button @click="onClick_Login">Login</button>
    <div v-if="error != ''">{{error}}</div>

</template>
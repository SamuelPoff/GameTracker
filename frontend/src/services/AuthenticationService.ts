import Api from "./Api";

class UserCredentials{
    email: string = "";
    password: string = "";

}

export async function Register(credentials: UserCredentials){
    
    return Api.post('register', credentials);

}

export async function Login(credentials: UserCredentials){

    return Api.post('login', credentials);

}
import Api from "./Api";

class UserCredentials{
    email: string = "";
    password: string = "";

}

async function Register(credentials: UserCredentials){
    
    return Api.post('register', credentials);

}

export default Register;
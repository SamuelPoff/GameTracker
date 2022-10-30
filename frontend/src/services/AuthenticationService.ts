import Api from "./Api";

class UserCredentials{
    email: string = "";
    password: string = "";

}

function Register(credentials: UserCredentials){
    
    Api.post('register', credentials);

}

export default Register;
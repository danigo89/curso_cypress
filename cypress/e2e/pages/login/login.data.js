export class LoginData{
    static get validCredentials(){
        return{
            username: 'random01',
            password: 'random01',
        }
    }

    static get invalidCredentials(){
        return{
            username: 'abc',
            password: 'abc',
        }
    }
}
export class Login {
    constructor() {
        this.emailElement = document.getElementById('email');
        this.passwordElement = document.getElementById('password');

        document.getElementById('process-button').addEventListener('click', this.login.bind(this));
    }

    login() {
        if(this.emailElement.value && this.emailElement.value.match()) {

        }
    }
}
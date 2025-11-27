// import axios from "axios";
const endpoint = process.env.NEXT_PUBLIC_ENDPOINT

export const Register = async() => {
    
}

export const GoogleOauth = async() => {
    window.location.href = (`${endpoint}/auth/google/login`)
}

import { create } from "apisauce";
import base64 from "base-64";

const base = "http://127.0.0.1:5001"

export const apiClientNoAuth = (cancelToken) => create({
    baseURL:base,
    cancelToken:cancelToken
})

export const apiClientBasicAuth = (email, password, cancelToken) => create({
    baseURL:base,
    cancelToken:cancelToken,
    headers:{
        Authorization: 'Basic ' + base64.encode(email + ':' + password)
    }
})


export const apiClientTokenAuth = (token, cancelToken) => create({
    baseURL:base,
    cancelToken:cancelToken,
    headers:{
        Authorization: 'Bearer ' + token
    }
})

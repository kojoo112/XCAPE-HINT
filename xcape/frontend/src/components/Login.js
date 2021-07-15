import React, {useState} from "react";
import {Card, Col, FormControl, InputGroup, Row, Button} from "react-bootstrap";
import '../Login.css';
import {GoogleLogin, GoogleLogout} from "react-google-login";
import axios from "axios";

export default function Login(props){

    const clientId = "164344653512-o9cmcj2g320u721tg6qktj66fq6om77e.apps.googleusercontent.com"

    const onSuccess = async(response) => {
        const id_token = response.getAuthResponse().id_token;
        const params = new URLSearchParams();
        params.append('idtoken', id_token);
        axios.post(`/googleLogin`, params, {
            headers: {
                'Content-type': 'application/x-www-form-urlencoded'
            }
        })
            .then(res => props.handleUser(res.data))
            .catch(console.log)
    }

    const onFailure = (error) => {
        console.log(error);
    }

    const onLogoutSuccess = async(response) => {
        console.log(response);
    }

    return(
        <div>
            <GoogleLogin clientId={clientId}
                         onSuccess={onSuccess}
                         onFailure={onFailure}
                         cookiePolicy="single_host_origin"
                         buttonText="로그인"/>
            <GoogleLogout clientId={clientId}
                          onLogoutSuccess={onLogoutSuccess}
                          onFailure={onFailure}
                          buttonText="로그아웃" />
        </div>
    );
}
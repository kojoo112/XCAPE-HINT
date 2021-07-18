import React from "react";
import '../Login.css';
import {GoogleLogin, GoogleLogout} from "react-google-login";
import axios from "axios";
import KakaoLogin from "react-kakao-login";

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
            .catch(console.log);
    }

    const onFailure = (error) => {
        console.log(error);
    }

    const onLogoutSuccess = async(response) => {
        axios.get(`/logout`)
            .then(console.log);
    }

    const kakaoLogout = () => {
        // let data = {
        //     id: 'IdzJCrcpOJCV8FT9MVoIcDQ8YWhr7dykvK8LngopyNgAAAF6sCUcrg'
        // }
        // axios.post(`/v1/user/logout`, data, {
        //     headers: {
        //         'Autorization' : `Bearer${}`//
        //     }
        // })
        //     .then(console.log)
        //     .catch(console.log);
    }

    return(
        <div>
            <GoogleLogin clientId={clientId}
                         onSuccess={onSuccess}
                         onFailure={onFailure}
                         cookiePolicy="single_host_origin"
                         buttonText="로그인" />
            <GoogleLogout clientId={clientId}
                          onLogoutSuccess={onLogoutSuccess}
                          onFailure={onFailure}
                          buttonText="로그아웃" />
            <br />
            {/*<KakaoLogin token='bdbe33bf90efc9adc9f7ecce5dd724d5'*/}
            {/*            onSuccess={console.log}*/}
            {/*            onFail={console.log}*/}
            {/*            onLogout={kakaoLogout} />*/}
            {/*<button onClick={kakaoLogout} >logout</button>*/}

        </div>
    );
}
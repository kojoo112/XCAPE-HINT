import React, {Component} from "react";
import axios from "axios";

class Hint extends Component {
    constructor(props) {
        super(props)
        this.state = {
            merchant: "",
            index_of_theme: "",
            key: "",
            message1: "",
            message2: "",
            seq: "",
            use: ""
        }
    }

    componentDidMount() {
        this.getApi();
    }

    getApi = () => {
        axios.get("http://localhost:8080/hint")
            .then(res => {
                console.log(res);
                // this.setState({
                //     merchant: res.data.merchant,
                //     index_of_theme: res.data.index_of_theme,
                //     key: res.data.key,
                //     message1: res.data.message1,
                //     message2: res.data.message2,
                //     seq: res.data.seq,
                //     use: res.data.use
                // })
            })
            .catch(res => console.log(res))
    }

    render() {
        return (
            <div>
            </div>
        );
    }
}

export default Hint
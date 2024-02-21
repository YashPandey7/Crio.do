import React from "react";

class Count extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            count : 0,
        }
    }

    inputevent = (e) => {
        this.setState({
            count : e.target.value
        })
    }

    render(){
        return(
            <>
                <input type = "number" onChange={this.inputevent} value = {this.state.value}/>
                <p>
                    Your Selected No. is - {this.state.count}
                </p> 
            </>
        );
    };
};

export default Count;
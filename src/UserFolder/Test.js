import React, { Component } from 'react'

class Test extends Component {
    constructor (props){
        super (props);
        this.state = {
            a:10
        }
        // console.log("constructor");
        
    }

    componentDidMount() {
        // Her zaman en sonda çalıştırılır
        // Genelde API istekleri için kullanılır
        // Bu fonk dan sonra render tekrar çalıştırılır
        // console.log("componentDidMount");
        
        this.setState ({
            a:20
        })
    }
    

    render() {
        // console.log("render içi");
        
        return (
            <div>
                
            </div>
        )
    }
}
export default Test;
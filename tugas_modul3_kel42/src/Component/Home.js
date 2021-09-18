import { Component } from "react";
import React from "react";
import Makanan from "./Makanan";
import Minuman from "./Minuman";
import Cemilan from "./Cemilan";

class Home extends Component {
    state = {
        komponen1: false,
        komponen2: false,
        komponen3: false
    }

      componentDidUpdate(prevProps, prevState, snapshot) {
        alert('Anda Puas Kami Senang!')
    }

    changeKomponen1 = () => {
        this.setState((state) => {
            return { komponen1: !this.state.komponen1 }
        })
    }

    changeKomponen2 = () => {
        this.setState((state) => {
            return { komponen2: !this.state.komponen2 }
        })
    }

    changeKomponen3 = () => {
        this.setState((state) => {
            return { komponen3: !this.state.komponen3 }
        })
    }
    
    render() {
        return (
            <div style={{ marginLeft: "400px", marginRight: "400px", background: "rgba(255, 219, 77)" }}>                     
                <h1 style={{ paddingTop: "10px"}}>Food Order</h1>
                    <div>         
                        <div>
                            {this.state.komponen1 ? <Makanan /> : ''}
                            <button style={{ marginBottom: "10px" }} onClick={this.changeKomponen1}>{this.state.komponen1 ? 'HIDE' : 'SHOW'} Menu Makanan </button>
                            <br/>
                            {this.state.komponen2 ? <Minuman /> : ''}
                            <button style={{ marginTop: "10px", marginBottom: "10px" }} onClick={this.changeKomponen2}>{this.state.komponen2 ? 'HIDE' : 'SHOW'} Menu Minuman</button>
                            <br/>
                            {this.state.komponen3 ? <Cemilan /> : ''}
                            <button style={{ marginTop: "10px" }} onClick={this.changeKomponen3}>{this.state.komponen3 ? 'HIDE' : 'SHOW'} Menu Cemilan</button>
                        </div>
                    </div>
                    <h4 style={{ paddingBottom: "10px"}}>Kelompok 42</h4>
                </div>
            
        );
    }
}

export default Home;
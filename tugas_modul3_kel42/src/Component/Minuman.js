import React, { Component } from "react";
class Minuman extends Component {
    state = {
        minum1: 0,
        minum2: 0,
        totalMinum: 0
    }

    componentWillMount(){
        alert('Show Menu Minuman!')
    }

    componentDidMount(){
        alert('Silakan Pilih Minuman!')
    }

    componentWillUnmount(){
        alert('Hide Menu Minuman!')
    }
    
    tambahMinum1 = () => {
        this.setState((state) => { return { minum1: state.minum1 + 1, totalMinum: 2000*(state.minum1+1) + state.minum2*5000 } }) 
    }

    tambahMinum2 = () => {
        this.setState((state) => { return { minum2: state.minum2 + 1, totalMinum: 5000*(state.minum2+1) + state.minum1*2000 } }) 
    }

    resetMinum = () => {
        this.setState((state) => { return { minum1: 0, minum2: 0, totalMinum: 0 } })
    }
    
    render() {
        return (
            <div style={{ marginLeft: "50px", marginRight: "50px", background: "rgba(255, 240, 179)" }}>
                <h4 style={{ paddingTop: "10px"}}>Pilih Paket Minuman</h4>
                <p>Paket 1 (Es Teh) Rp. 2.000</p>
                <p>{this.state.minum1}</p>
                <button onClick={this.tambahMinum1}>+</button>
                <p>Paket 2 (Es Coklat) Rp. 5.000</p>
                <p>{this.state.minum2}</p>
                <button onClick={this.tambahMinum2}>+</button>
                <br/>
                <button style={{ marginTop: "20px"}} onClick={this.resetMinum}>Reset</button>
                <br/>
                <p style={{ paddingBottom: "10px"}}> Rp {this.state.totalMinum}</p>
            </div>
        );
    }
}

export default Minuman;
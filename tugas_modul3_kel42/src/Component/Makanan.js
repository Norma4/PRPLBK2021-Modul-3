import React, { Component } from "react";

class Makanan extends Component {
    state = {
        makan1: 0,
        makan2: 0,
        totalMakan: 0
    }

    componentWillMount(){
        alert('Show Menu Makanan!')
    }

    componentDidMount(){
        alert('Silakan Pilih Makanan!')
    }
    
    componentWillUnmount(){
        alert('Hide Menu Makanan!')
    }

    tambahMakan1 = () => {
        this.setState((state) => { return { makan1: state.makan1 + 1, totalMakan: 8000*(state.makan1+1) + state.makan2*10000 } }) 
    }

    tambahMakan2 = () => {
        this.setState((state) => { return { makan2: state.makan2 + 1, totalMakan: 10000*(state.makan2+1) + state.makan1*8000 } }) 
    }

    resetMakan = () => {
        this.setState((state) => { return { makan1: 0, makan2: 0, totalMakan: 0 } })
    }
    
    render() {
        return (
            <div style={{ marginLeft: "50px", marginRight: "50px", background: "rgba(255, 240, 179)" }}>
                <h4 style={{ paddingTop: "10px"}}>Pilih Paket Makanan</h4>
                <p>Paket 1 (Nasi + Ayam) Rp. 8.000</p>
                <p>{this.state.makan1}</p>
                <button onClick={this.tambahMakan1}>+</button>
                <p>Paket 2 (Nasi + Bebek) Rp. 10.000</p>
                <p>{this.state.makan2}</p>
                <button onClick={this.tambahMakan2}>+</button>
                <br/>
                <button style={{ marginTop: "20px"}} onClick={this.resetMakan}>Reset</button>
                <br/>
                <p style={{ paddingBottom: "10px"}}> Rp {this.state.totalMakan}</p>
            </div>
        );
    }
}

export default Makanan;
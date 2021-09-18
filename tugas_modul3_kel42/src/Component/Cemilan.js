import React, { Component } from "react";

class Cemilan extends Component {
    state = {
        cemil1: "Jasuke",
        cemil2: "Pie Susu",
        jenisCemil: "Cemilan Manis",
        cemilan1: 0,
        cemilan2: 0,
        totalCemil: 0
    }

    componentWillMount(){
        alert('Show Menu Cemilan!')
    }

    componentDidMount(){
        alert('Silakan Pilih Cemilan!')
    }
    
    componentWillUnmount(){
        alert('Hide Menu Cemilan!')
    }

    tambahCemil1 = () => {
        this.setState((state) => { return { cemilan1: state.cemilan1 + 1, totalCemil: 5000*(state.cemilan1+1) + state.cemilan2*5000 } }) 
    }

    tambahCemil2 = () => {
        this.setState((state) => { return { cemilan2: state.cemilan2 + 1, totalCemil: 5000*(state.cemilan2+1) + state.cemilan1*5000 } }) 
    }

    resetCemil = () => {
        this.setState((state) => { return { cemilan1: 0, cemilan2: 0, totalCemil: 0 } })
    }

    changeCemilan = () => {
        this.setState((state) => { 
            if (state.jenisCemil === "Cemilan Manis") {
                return {jenisCemil : "Cemilan Gurih", cemil1 : "Emping", cemil2 : "Makroni"}   
            } else if (state.jenisCemil === "Cemilan Gurih") {
                return {jenisCemil : "Cemilan Pedas", cemil1 : "Keripik Setan", cemil2 : "Pentol Pedas"}                 
            } else {
                return {jenisCemil : "Cemilan Manis", cemil1 : "Jasuke", cemil2 : "Pie Susu"}     
            }
        })
    }

    render() {
        return (
            <div style={{ marginLeft: "50px", marginRight: "50px", background: "rgba(255, 240, 179)" }}>  
                <h4 style={{ paddingTop: "10px"}}>Pilih Paket Cemilan</h4>
                <button onClick={this.changeCemilan}>{this.state.jenisCemil}</button>
                <br />
                <p>{this.state.cemil1}</p>
                <p>{this.state.cemilan1}</p>
                <button onClick={this.tambahCemil1}>+</button>
                <p>{this.state.cemil2}</p>
                <p>{this.state.cemilan2}</p>
                <button onClick={this.tambahCemil2}>+</button>
                <br/>
                <button style={{ marginTop: "20px"}} onClick={this.resetCemil}>Reset</button>
                <br/>
                <p style={{ paddingBottom: "10px"}}> Rp {this.state.totalCemil}</p>

                
            </div>
        );
    }
}

export default Cemilan;
import React from 'react'
import  { Component } from 'react';



class Listandkey extends Component {
    constructor () {
        super()
        this.state = {
            number : [100,200,300,400,500,600,700]
        }
    }
    plus =  () => {
        this.setState ({
            number : [0,100,200,300,400,500,600,700]
        })
    }
    render() {
        const numberlist = this.state.number.map((number)  =>  <li key={number.toString()}>{number}</li> )
        return (
            <>
            <ul className='mx-5'>{numberlist}</ul>
            <button className='mx-5' onClick={() => this.plus()}>Add</button>
            </>
        );
    }
}
 
export default Listandkey;
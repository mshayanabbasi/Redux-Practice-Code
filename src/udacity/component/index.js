import React, { Component } from 'react';


function Parent() {
    return (
        <div>
            <h1>Parent</h1>
            <Child />
        </div>
    )
}
function Child () {
   return (
    <div>
        <h1>Child</h1>
        <GrandChild />
    </div>
   )
}
function GrandChild({ name }) {
    return (
        <div>
            <h1>GrandChild</h1>
            <h3>Name: {name}</h3>
        </div>
    )
}

class Index extends Component {
    render() {
        const name = 'shayan'
        return (
            <div>
                <Parent />
            </div>
        )
    }
}
import React from "react";
class Menu extends React.Component {
    constructor() {
        super()


    }




    render() {

        const { generateDeck, changeInput, draw } = this.props
        return (
            <>
                <div>
                    <h1>Black Jack</h1>
                    <br></br>
                    <button onClick={() => { generateDeck() }}>Generate Deck</button>
                    <label>Input Existing Deck Id</label>
                    <input onChange={() => { changeInput() }}></input>
                    <button onClick={() => { draw() }}>Draw</button>
                </div>
            </>
        )
    }
}

export default Menu

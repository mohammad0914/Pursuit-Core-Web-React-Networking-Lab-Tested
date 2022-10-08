class App extends React.Component {
    constructor() {
        super()
        this.state = {
            deckId: "",
            images: []
        }
    }


    generateDeck = () => {
        fetch("")
            .then((response) => response.json())
            .then((json) => {
                this.setState({
                    deckId: json.x
                })
            })
            .catch((error) => {
                console.log(error);
            })
    }

    draw = (id) => {
        fetch("")
            .then((response) => response.json())
            .then((json) => {
                this.setState({
                    images: json.x
                })
            })
            .catch((error) => {
                console.log(error)
            })

    }

    changeInput = (event) => {
        const { value } = event.target
        this.setState({
            deckId: value
        })
    }

    render() {

        const { deckId, images } = this.state;
        <div>

            if(images.length==0)
            {
                <MenuScreen
                    changeInput={() => { this.changeInput }}
                    draw={() => { this.draw }}
                    generateDeck={() => { this.generateDeck }}
                />
            }
            else{
                <GameScreen
                    images={images}
                />
            }
        </div>
    }
}

export default App

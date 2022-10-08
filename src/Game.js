class Game extends React.Component {
    constructor() {
        super()
    }

    render() {

        const { images } = this.props
        return (<>{

            images.map(image => {
                <img />
            })

        }</>)
    }
}

export default Game;

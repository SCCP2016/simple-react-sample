class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = { list: this.props.list };
    }

    handleClick() {
        const {list} = this.state;
        const newList = list.push(Math.random().toString(36).slice(-8));
        
        this.setState({list: newList});
    }

    render() {
        const {name} = this.props;
        const {list} = this.state;

        const indexedList = list.map((x, idx) =>
            <li>{idx}: {x}</li>
        );

        return <div>
            <h1>Hello {name} ! Welcome to React World!</h1>
            <input
                value="push!"
                type="button"
                onClick={() => this.handleClick()}
                />
            <ul>
                {indexedList}
            </ul>
        </div>;
    }
}

const List = Immutable.List;
const list = List.of();
ReactDOM.render(<App name="abab" list={list} />, document.getElementById("app"));

class App extends React.Component {
    constructor(props) {
        super(props);
        // this.props == { name: "abab", list: List.of("aaa", "bbb", "ccc") };
    }

    render() {
        // Same mean.
        // const name = this.props.name;
        // const list = this.props.list;
        const {name, list} = this.props;
        // name = "hoge"; <- error.

        const indexedList = list.map((x, idx) =>
            <li>{idx}: {x}</li>
        );

        return <div>
                 <h1>Hello {name} !</h1>
                 <ul>
                   { indexedList }
                 </ul>
               </div>;
    }
}

const List = Immutable.List;
const list = List.of("aaa", "bbb", "ccc");
ReactDOM.render(<App name="abab" list={list} />, document.getElementById("app"));

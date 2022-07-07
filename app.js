const Header = () => {
    return(
        <div className = "header">
            <h1>Robotics Analytics Dashboard</h1>
        </div>

    )     
};

const Reviews = () => {
    return(
        <div className = "container">
            <h2>Reviews</h2>
            <p className = "para">lorem ipsum</p>
        </div>
    )
};

const AverageRating = () => {
    return(
        <div className = "container2">
            <h2>Most Popular Models</h2>
            <ul className = "list2">
                <li>The Ainur 2.0</li>
                <li>The Marcus 5.0</li>
                <li>The Donovan 10.0</li>
            </ul>
        </div>
    )
};

const WebsiteVisitors = () => {
    return(
        <div className = "container3">
            <h2>Clients visits Statistics</h2>
            <ul>
                <li>123</li>
                <li>321</li>
                <li>987</li>
            </ul>
            </div>
    )
}

const Menu = () => {
    return(
        <div className = "menubar">
            <h2>Menu</h2>
            <ul className = "list">
                <li>Dashboard</li>
                <br></br>
                <br></br>
                <li>Production</li>
                <br></br>
                <br></br>
                <li>Quality analysis</li>
                <br></br>
                <br></br>
                <li>Clients</li>
                <br></br>
                <br></br>
                <li>Followers</li>
                <br></br>
                <br></br>
                <li>Bonus</li>
            </ul>
        </div>
    )
};

const Analyis = () => {
    return(
        <div className = "container4">
            <h2>Robotics Analysis</h2>
            <ul className = "list2">
                <li>Parts: 120</li>
                <br></br>
                <li>Engine: 120</li>
                <br></br>
                <li>Tasks: 17</li>
                <br></br>
                <li>Malfunctions: 26</li>
            </ul>
        </div>
    )
}

class App extends React.Component {
    render() {
        return(
            <div>
                <Header />
                <Reviews />
                <AverageRating />
                <WebsiteVisitors />
                <Analyis />
                <Menu />
            </div>
        )
    }
};

ReactDOM.render(<App />, document.getElementById('root'))

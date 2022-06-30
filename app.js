const Header = () => {
    return (
        <h1 className="header">Commence Dashboard Creation!</h1>
    )
}

const Sidebar = () => {
    return (
        <div className="revratsen">
            <ul>
                <li>Dashboard</li>
                <br></br>
                <li>Reviews</li>
                <br></br>
                <li>Widget</li>
                <br></br>
                <li>Customers</li>
                <br></br>
                <li>Online Analysis</li>
                <br></br>
                <li>Settings</li>
            </ul>

        </div>
    )
}
const Reviews = () => {
    return (
        <div className="revratsen" id="reviews">
            <h3>Reviews</h3>
            <h2>1,281</h2>
        </div>
    )
}

const Averagerating =() => {
    return (
        <div className="revratsen">
        <h3>Average Rating</h3>
        <h2>4.6</h2>
        </div>
       
    )
}

const Sentimentanalysis = () => {
    return (
        <div className="revratsen">
            <h3>Sentiment Analysis</h3>
            <ul>
                <li>960</li>
                <br></br>
                <li>122</li>
                <br></br>
                <li>321</li>
                <br></br>
            </ul>
        </div>
    )
}

const Rectangular = () => {
    return (
        <div className="rectangular">
<h6>empty</h6>
        </div>
    )
}
const Websitevisitors = () => {
    return (
        <div className="webvisit">
            <h3>Website Visitors</h3>
            <h2>821</h2>
            <Rectangular />
        </div>
    )
}



// App component
class App extends React.Component {
    render() {
        return(
          
            <div className="container">
                <Header />
                <Sidebar />
                <Reviews />
                <Averagerating />
                <Sentimentanalysis />
                <Websitevisitors />
            </div>
        )
    }
}

ReactDOM.render(<App/>, document.getElementById('root'))

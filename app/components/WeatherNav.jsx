var React = require('react');
var {Link, IndexLink} = require('react-router');

// var WeatherNav = React.createClass({
//     render: function() {
//         return (
//             <div>
//                 <nav className="navbar navbar-default">
//                     <div className="container-fluid">
//                         <div className="navbar-header">
//                             <div className="navbar-brand">React Weather App</div>
//                         </div>
//                         <ul className="nav navbar-nav">
//                             <li><IndexLink to="/" activeClassName="active" activeStyle={{color: '#555', backgroundColor: '#e7e7e7'}}>Get Weather</IndexLink></li>
//                             <li><Link to="/about" activeClassName="active" activeStyle={{color: '#555', backgroundColor: '#e7e7e7'}}>About</Link></li>
//                             <li><Link to="/examples" activeClassName="active" activeStyle={{color: '#555', backgroundColor: '#e7e7e7'}}>Examples</Link></li>
//                         </ul>
//                     </div>
//                 </nav>
//             </div>
//         );
//     }
// });

var WeatherNav = React.createClass({
    onSearch: function(e) {
        e.preventDefault();
        alert('Not yet wired up!');
    },
    render: function() {
        return(
            <div>
                {/* bootstrap version */}
                {/* <nav className="navbar navbar-default">
                 <div className="container-fluid">
                 <div className="navbar-header">
                 <div className="navbar-brand">React Weather App</div>
                 </div>
                 <ul className="nav navbar-nav">
                 <li><IndexLink to="/" activeClassName="active" activeStyle={{color: '#555', backgroundColor: '#e7e7e7'}}>Get Weather</IndexLink></li>
                 <li><Link to="/about" activeClassName="active" activeStyle={{color: '#555', backgroundColor: '#e7e7e7'}}>About</Link></li>
                 <li><Link to="/examples" activeClassName="active" activeStyle={{color: '#555', backgroundColor: '#e7e7e7'}}>Examples</Link></li>
                 </ul>
                 </div>
                 </nav> */}

                <div className="top-bar">
                    <div className="top-bar-left">
                        <ul className="dropdown menu">
                            <li className="menu-text">React Weather App</li>
                            <li><IndexLink to="/" activeClassName="active" activeStyle={{color: '#555', backgroundColor: '#e7e7e7'}}>Get Weather</IndexLink></li>
                            <li><Link to="/about" activeClassName="active" activeStyle={{color: '#555', backgroundColor: '#e7e7e7'}}>About</Link></li>
                            <li><Link to="/examples" activeClassName="active" activeStyle={{color: '#555', backgroundColor: '#e7e7e7'}}>Examples</Link></li>
                        </ul>
                    </div>
                    <div className="top-bar-right">
                        <form onSubmit={this.onSearch}>
                            <ul className="menu">
                                <li>
                                    <input type="search" placeholder="Search weather" />
                                </li>
                                <li>
                                    <input type="submit" className="button" value="Get Weather" />
                                </li>
                            </ul>
                        </form>
                    </div>
                </div>

            </div>
        );
    }
});

module.exports = WeatherNav;
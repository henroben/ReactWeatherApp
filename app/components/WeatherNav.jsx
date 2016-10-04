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

var WeatherNav = (props) => {
    return (
        <div>
            <nav className="navbar navbar-default">
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
            </nav>
        </div>
    );
};

module.exports = WeatherNav;
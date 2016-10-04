var React = require('react');
var WeatherNav = require('WeatherNav');

// var Main = React.createClass({
//     render: function() {
//         return (
//             <div>
//                 <WeatherNav/>
//                 <div className="container-fluid">
//                     <div className="row">
//                         <div className="col-md-12">
//                             {this.props.children}
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         );
//     }
// });

var Main = (props) => {
    return (
        <div>
            <WeatherNav/>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-12">
                        {props.children}
                    </div>
                </div>
            </div>
        </div>
    );
};

module.exports = Main;
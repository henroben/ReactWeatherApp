var React = require('react');
var WeatherMap = require('WeatherMap');

// var WeatherMessage = React.createClass({
//     render: function() {
//         var {temp, location, description, lon, lat} = this.props;
//
//         return(
//             <div>
//                 <div className="panel panel-success">
//                     <div className="panel-heading">Weather Report</div>
//                     <div className="panel-body">
//                         <p>It's currently {temp}&deg;C and {description} in {location}</p>
//                         <WeatherMap lon={lon} lat={lat}></WeatherMap>
//                     </div>
//                 </div>
//             </div>
//         )
//     }
// });

var WeatherMessage = ({temp, location, description, lon, lat}) => {
    // var {temp, location, description, lon, lat} = props;

    return(
        <div>
            <div className="panel panel-success">
                <div className="panel-heading">Weather Report</div>
                <div className="panel-body">
                    <p>It's currently {temp}&deg;C and {description} in {location}</p>
                    <WeatherMap lon={lon} lat={lat}></WeatherMap>
                </div>
            </div>
        </div>
    )
};

module.exports = WeatherMessage;
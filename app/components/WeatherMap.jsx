var React = require('react');
//
// const EIFFEL_TOWER_POSITION = {
//     lat: 48.858608,
//     lng: 2.294471
// };

var WeatherMap = React.createClass({
    render: function() {

        const mapStyle = {
            width: '100%',
            height: 600,
            border: '0px solid black'
        };
        return(
            <div>
                <div ref="map" style={mapStyle} ref="map">Loading map data</div>
            </div>
        );
    },
    componentDidMount: function() {
        var {lon, lat} = this.props;
        this.map = new google.maps.Map(this.refs.map, {
            center: {
                lat: lat,
                lng: lon
            },
            zoom: 8
        });
    }
});

module.exports = WeatherMap;
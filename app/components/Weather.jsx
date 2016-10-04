var React = require('react');
var WeatherForm = require('WeatherForm');
var WeatherMessage = require('WeatherMessage');
var openWeatherMap = require('openWeatherMap');

var Weather = React.createClass({
    getInitialState: function() {
        return {
            isLoading: false
        }
    },
    handleSearch: function(location) {
        var that = this;

        that.setState({
            isLoading: true
        });

        openWeatherMap.getTemp(location).then(function(weatherDetails) {
            weatherDetails.temp = Math.round(parseInt(weatherDetails.temp));

            that.setState({
                location: weatherDetails.location,
                lon: weatherDetails.lon,
                lat: weatherDetails.lat,
                temp: weatherDetails.temp,
                description: weatherDetails.description,
                isLoading: false
            });
        }, function(errorMessage) {
            that.setState({
                location: null,
                lon: null,
                lat: null,
                temp: null,
                description: null,
                isLoading: false
            });
            alert(errorMessage);
        });
    },
    render: function() {
        var {isLoading, temp, location, description, lon, lat} = this.state;

        function renderMessage() {

            if(isLoading) {
                return <div>Getting weather...</div>;
            } else if(temp && location) {
                return <WeatherMessage location={location} temp={temp} description={description} lon={lon} lat={lat} />;
            }
        }

        return(
            <div>
                <div className="col-xs-hidden col-md-1"></div>
                <div className="col-xs-12 col-md-10">
                    <WeatherForm onSearch={this.handleSearch} />
                    {renderMessage()}
                </div>
                <div className="col-xs-hidden col-md-1"></div>
            </div>
        )
    }
});

module.exports = Weather;
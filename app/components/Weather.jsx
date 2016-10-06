var React = require('react');
var WeatherForm = require('WeatherForm');
var WeatherMessage = require('WeatherMessage');
var openWeatherMap = require('openWeatherMap');
var ErrorModal = require('ErrorModal');

var Weather = React.createClass({
    getInitialState: function() {
        return {
            isLoading: false,
        }
    },
    handleSearch: function(location) {
        var that = this;

        that.setState({
            isLoading: true,
            errorMessage: undefined
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
        }, function(e) {
            console.log(e);
            that.setState({
                location: null,
                lon: null,
                lat: null,
                temp: null,
                description: null,
                isLoading: false,
                errorMessage: e.message
            });
        });
    },
    render: function() {
        var {isLoading, temp, location, description, lon, lat, errorMessage} = this.state;

        function renderMessage() {

            if(isLoading) {
                return <div className="text-center">Getting weather...</div>;
            } else if(temp && location) {
                return <WeatherMessage location={location} temp={temp} description={description} lon={lon} lat={lat} />;
            }
        }

        function renderError() {
            if(typeof errorMessage === 'string') {
                return(
                    <ErrorModal message={errorMessage} />
                )
            }
        }

        return(
            <div>
                {/* bootstrap version */}
                {/* <div className="col-xs-hidden col-md-1"></div>
                <div className="col-xs-12 col-md-10">
                    <WeatherForm onSearch={this.handleSearch} />
                    {renderMessage()}
                </div>
                <div className="col-xs-hidden col-md-1"></div> */}
                <h1 className="text-center">Get Weather</h1>
                <WeatherForm onSearch={this.handleSearch} />
                {renderMessage()}
                {renderError()}
            </div>
        )
    }
});

module.exports = Weather;
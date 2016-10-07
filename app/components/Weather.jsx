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
            errorMessage: undefined,
            location: undefined,
            temp: undefined,
            lon: undefined,
            lat: undefined,
            description: undefined
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
            console.warn('error called');
            console.log(e);
            that.setState({
                location: null,
                isLoading: false,
                errorMessage: e.message
            });
        });
    },
    componentDidMount: function() {
        var location = this.props.location.query.location;

        if(location && location.length > 0) {
            this.handleSearch(location);
            window.location.hash = '#/';
        }
    },
    componentWillReceiveProps: function(newProps) {
        var location = newProps.location.query.location;

        if(location && location.length > 0) {
            this.handleSearch(location);
            window.location.hash = '#/';
        }
    },
    render: function() {
        var {isLoading, temp, location, description, lon, lat, errorMessage} = this.state;

        function renderMessage() {

            if(isLoading) {
                return <div className="text-center">Getting weather...</div>;
            } else if(temp && location) {
                return <WeatherMessage location={location} temp={temp} description={description} lon={lon} lat={lat}></WeatherMessage>;
            }
        }

        function renderError() {
            if(typeof errorMessage === 'string') {
                return(
                    <ErrorModal message={errorMessage}></ErrorModal>
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
                <h1 className="text-center page-title">Get Weather</h1>
                <WeatherForm onSearch={this.handleSearch}></WeatherForm>
                {renderMessage()}
                {renderError()}
            </div>
        )
    }
});

module.exports = Weather;
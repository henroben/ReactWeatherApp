var React = require('react');

var WeatherForm = React.createClass({
    onFormSubmit: function(e) {
        e.preventDefault();

        var location = this.refs.location.value;

        if(location.length > 0) {
            this.refs.location.value = '';
            this.props.onSearch(location);
        }
    },
    render: function() {
        return(
            <div>
                {/* bootstrap version */}
                {/* <div className="panel panel-default">
                    <div className="panel-heading">Get Weather</div>
                    <div className="panel-content">
                        <div className="row">
                            <div className="col-md-1"></div>
                            <div className="col-md-10">
                                <form onSubmit={this.onFormSubmit}>
                                    <div className="form-group" style={{paddingTop: 15 + 'px'}}>
                                        <input type="text" className="form-control" placeholder="Enter city name" ref="location"/>
                                    </div>
                                    <div className="form-group">
                                        <button className="btn btn-default">Get Weather</button>
                                    </div>
                                </form>
                            </div>
                            <div className="col-md-1"></div>
                        </div>
                    </div>
                </div> */}

                <form onSubmit={this.onFormSubmit}>
                    <input type="text" className="form-control" placeholder="Enter city name" ref="location"/>

                    <button className="hollow button expanded">Get Weather</button>
                </form>

            </div>
        )
    }
});

module.exports = WeatherForm;
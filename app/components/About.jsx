var React = require('react');

// var About = React.createClass({
//     render: function() {
//         return(
//             <div>
//                 <div className="col-xs-hidden col-md-1"></div>
//                 <div className="col-xs-12 col-md-10">
//                     <div className="panel panel-info">
//                         <div className="panel-heading">About React Weather App</div>
//                         <div className="panel-body">Text to go here</div>
//                     </div>
//                 </div>
//                 <div className="col-xs-hidden col-md-1"></div>
//             </div>
//         )
//     }
// });

// stateless functional component
var About = (props) => {
    return(
        <div>
            {/* bootstrap version */}
            {/* <div className="col-xs-hidden col-md-1"></div>
            <div className="col-xs-12 col-md-10">
                <div className="panel panel-info">
                    <div className="panel-heading">About React Weather App</div>
                    <div className="panel-body">Text to go here</div>
                </div>
            </div>
            <div className="col-xs-hidden col-md-1"></div> */}

            <h1 className="text-center">About</h1>
            <p>This is a weather application built on React, using open weather api.</p>
            <p>Here are some of the tools used:</p>
            <ul>
                <li><a href="https://facebook.github.io/react">React</a> framework.</li>
                <li><a href="http://openweathermap.org">Open Weather Map</a> api.</li>
            </ul>
        </div>
    );
};

module.exports = About;
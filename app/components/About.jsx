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
            <div className="col-xs-hidden col-md-1"></div>
            <div className="col-xs-12 col-md-10">
                <div className="panel panel-info">
                    <div className="panel-heading">About React Weather App</div>
                    <div className="panel-body">Text to go here</div>
                </div>
            </div>
            <div className="col-xs-hidden col-md-1"></div>
        </div>
    );
};

module.exports = About;
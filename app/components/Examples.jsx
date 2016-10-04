var React = require('react');

// var Examples = React.createClass({
//     render: function() {
//         return(
//             <div>
//                 <div className="panel panel-info">
//                     <div className="panel-heading">React Weather App Examples</div>
//                     <div className="panel-body">Examples to go here</div>
//                 </div>
//             </div>
//         )
//     }
// });

var Examples = (props) => {
    return(
        <div>
            <div className="panel panel-info">
                <div className="panel-heading">React Weather App Examples!</div>
                <div className="panel-body">Examples to go here</div>
            </div>
        </div>
    );
};

module.exports = Examples;
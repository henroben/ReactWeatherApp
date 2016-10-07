var React = require('react');
var {Link} = require('react-router');

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
            {/* bootstrap version */}
            {/* <div className="panel panel-info">
                <div className="panel-heading">Examples</div>
                <div className="panel-body">Examples to go here</div>
            </div> */}

            <h1 className="text-center page-title">Examples</h1>
            <p>Here are a few example locations to try out:</p>
            <ol>
                <li>
                    <Link to='/?location=Ipswich'>Ipswich, Suffolk</Link>
                </li>
                <li>
                    <Link to='/?location=Tokyo'>Tokyo, Japan</Link>
                </li>
            </ol>
        </div>
    );
};

module.exports = Examples;
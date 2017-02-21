var React = require('react');
var ReactDOM = require('react-dom');
var ReactDOMServer = require('react-dom/server')

var ErrorModal = React.createClass({

  getDefaultProps: function () {
    return {
      title: 'Error'
    };
  },

  propTypes: {
    title: React.PropTypes.string,
    errorMessage: React.PropTypes.string.isRequired
  },

  componentDidMount: function () {
    var {title, errorMessage, errorCode} = this.props;
    var modalMarkup = (
      <div id="error-modal" className="reveal tiny text-center" data-reveal="">
        <h5>{title}!!</h5>
        <p>Error Message:{errorMessage}</p>
        <p>Error Code: {errorCode}</p>
        <p>Stop being an asshole and type a real city</p>
        <p>
          <button className="button hollow" data-close="">You Right, My Bad!!</button>
        </p>
      </div>
    );

    var $modal = $(ReactDOMServer.renderToString(modalMarkup));
    $(ReactDOM.findDOMNode(this)).html($modal);

    var modal = new Foundation.Reveal($('#error-modal'));
    modal.open();
  },

  render: function () {
    return (
      <div>
      </div>
    );
  }

});

module.exports = ErrorModal;

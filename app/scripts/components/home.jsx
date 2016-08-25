var React = require('react');

var MenuComponent = require('./menu.jsx');

var HeaderComponent = React.createClass({
  render: function(){
    return (
      <nav id="home" className="navbar navbar-default navbar-fixed-top">
        <div className="nav-bar-contents container">
          <a className="nav-links" href="#home">Home</a>
          <a className="nav-links" href="#menu">Menu</a>
        </div>
      </nav>
    )
  }
});

var HomePageComponent = React.createClass({
  render: function(){
    return (
      <div>
        <HeaderComponent/>
        <div className="row">
          <div className="vics-sign-row col-md-4 col-xs-12">
            <p><img className="vics-sign" src='./images/vics_sign.jpg'/></p>
          </div>
          <div className="vics-title-picture col-md-8 hidden-xs">
          </div>
        </div>
        <div className="row">
          <MenuComponent/>
        </div>
      </div>
    )
  }
});

module.exports = {
  'HomePageComponent': HomePageComponent,
};

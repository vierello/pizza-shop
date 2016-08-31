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
            <div className="vics-sign">
              <div className="vics-logo-circle">
                <div className="vics-circle-1">
                  <div className="vics-circle-2">
                    <span className="vics-logo">Vic&#8217;s</span>
                  </div>
                </div>
              </div>
              <div className="pizza">PIZZA</div>
              <div className="brooklyn">BROOKLYN, SC</div>
            </div>
          </div>
          <div className="col-md-8 hidden-xs">
            <div className="vics-title-picture">
            </div>
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

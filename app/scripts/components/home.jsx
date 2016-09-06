var React = require('react');

var MenuComponent = require('./menu.jsx');

var PrintableMenuComponent = React.createClass({
  render: function(){
    return (
      <div className="menu-pdf-container">
        <embed className="menu-image" src="./images/1402_Menu.pdf" type='application/pdf' height="100%" width="100%"></embed>
      </div>
    )
  }
})

var HeaderComponent = React.createClass({
  render: function(){
    return (
      <nav id="home" className="navbar navbar-default navbar-fixed-top">
        <div className="nav-bar-contents container">
          <a className="nav-links" href="#home">Home</a>
          <a className="nav-links" href="#menu">Menu</a>
          <a className="nav-links" href="#printablemenu/">Printable Menu</a>
          <p className="nav-links phone-number">Call To Order: 864-232-9191</p>
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
              <div className="p">P</div>
              <div className="i">I</div>
              <div className="z1">Z</div>
              <div className="z2">Z</div>
              <div className="a">A</div>
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
  'PrintableMenuComponent': PrintableMenuComponent
};

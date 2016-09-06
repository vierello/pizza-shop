var React = require('react');

var MenuComponent = React.createClass({
  render: function(){
    return (
      <div className="col-md-offset-1 col-md-10 col-xs-12">
        <ul className="nav nav-tabs" data-tabs="tabs">
          <li role="presentation"><a data-toggle="tab" href="#appetizers">Appetizers &amp; Desserts</a></li>
          <li role="presentation"><a data-toggle="tab" href="#pizza">Pizza</a></li>
          <li role="presentation"><a data-toggle="tab" href="#strombolis-calzones">Calzones &amp; Stromboli</a></li>
          <li role="presentation"><a data-toggle="tab" href="#subs">Signature Subs</a></li>
        </ul>
        <div id="my-tab-content" className="tab-content">
          <div className="tab-pane active" id="appetizers">
            <h2 className="menu-tab-title">Appetizers</h2>
            <ul>
              <li><b>Vic&#39;s Garlic Knots:</b> Like garlic? You&#39;ll love
                our garlic knots! Comes with (1) serving of delicious Marinara
                sauce. <br />
                <b><span className="price">$2.75</span> (4) or
                <span className="price"> $5.00</span> (8)</b><br />
                <b>Extra sauce .50 cents</b>
              </li>
              <li><b>Vic&#39;s Italian Baked Wings</b> Our delicious, Italian
                seasoned, baked wings are available in Hot, Mild, Garlic Parmesan,
                or Homestyle BBQ. <br />
                <b><span className="price">$5.50</span> (6) or
                <span className="price"> $9.50</span> (12)</b><br/>
              </li>
            </ul>
            <h2 className="menu-tab-title">Desserts</h2>
            <ul>
              <li><b>Vic&#39;s Super Canolis:</b> Don&#39;t even ask about it.
                Just get some!<br />
                <b><span className="price">$3.75</span> each</b></li>
            </ul>
          </div>
          <div className="tab-pane" id="pizza">
            <h2 className="menu-tab-title">Pizza</h2>
            <ul>
              <li>
                <b>Vic&#39;s Signature:</b>
                  As &#34;Authentic New York Style&#34;
                  as it gets! A beautiful round 16&#34; thin crust (8 slices),
                  layered with Mama Vic&#39;s homemade Marinara sauce and topped
                  with Italy&#39;s decadent &#34;Bacio&#34; cheese.
                <br />
                <b>16&#34; Pizza: <span className="price">$14</span></b>
                <br/>
                <b>Pizza Slice: <span className="price">$3</span></b>
                <br/>
                <div>
                  <p className="toppings">Additional toppings <span className="price">$2</span> each, choose from:</p>
                  <div className="columns">
                    <ul >
                      <li>pepperoni</li>
                      <li>sausage</li>
                      <li>beef</li>
                      <li>bacon</li>
                      <li>ham</li>
                      <li>mushrooms</li>
                      <li>onions</li>
                      <li>green peppers</li>
                    </ul>
                    <ul>
                      <li>black olives</li>
                      <li>tomatoes</li>
                      <li>banana peppers</li>
                      <li>spinach</li>
                      <li>garlic</li>
                      <li>jalapeño peppers</li>
                      <li>roasted red peppers</li>
                      <li>chicken: <span className="price">$3</span></li>
                    </ul>
                  </div>
                </div>
              </li>
              <li><b>Margherita:</b> Vic&#39;s Margherita pizza pie not only
                looks incredible but, tastes amazing. A gorgeous thin crust
                topped with the perfect balance of our made from scratch white
                sauce, succulent ripe Roma tomatoes, and fresh basil.<br />
                <b>16&#34; Pizza: <span className="price">$20</span></b>
              </li>
              <br/>
              <li><b>Buffalo Chicken:</b> Vic&#39;s Buffalo Chicken pizza pie
                packs a punch like cousin Vinny from Brooklyn! Topped with
                slices of tender white chicken breast and our own &#34;Scicilian&#34;
                Buffalo sauce.<br />
                <b>16&#34; Pizza: <span className="price">$20</span></b>
              </li>
              <br/>
              <li><b>Carnivore:</b> Vic&#39;s is all about the family business
                with this awesome stuffed pizza pie! Comes with (4) &#34;Heavy
                Hitters&#34; that would make the New York Yankees jealous.
                Topped with beef, ham, pepperoni, and sausage plus (2) sides
                of Mama Vic&#39;s secret Marinara sauce. You better be hungry
                when ordering this one.<br />
                <b>16&#34; Pizza: <span className="price">$25</span></b>
              </li>
              <br/>
              <li><b>Mexicano:</b> Vic&#39;s Mexicano pizza pie will will have
                your taste buds dancing! A wonderful blend of our own Mexican
                meat sauce, onions, diced tomatoes, black olives, and jalapeño
                peppers. Everybody dance!<br />
                <b>16&#34; Pizza: <span className="price">$20</span></b>
              </li>
              <br/>
              <li><b>Hawaiian:</b> Vic&#39;s Hawaiian pizza pie has always been
                a fan favorite. This is what you get when Brooklyn meets Waikiki.
                A fabulous 16&#34; thin crust generously garnished with succulent
                Scicilian ham and sweet pineapple from the South Pacific.
                Surf&#39;s Up!<br />
                <b>16&#34; Pizza: <span className="price">$20</span></b>
              </li>
              <br/>
              <li><b>Veggie Pizza:</b> Vic&#39;s Veggie pizza pie is
                &#34;Delicioso!&#34; Choose either of our homemade red or white
                sauce, black olives, green peppers, mushrooms, spinach, and
                diced tomatoes.<br />
                <b>16&#34; Pizza: <span className="price">$20</span></b>
              </li>
              <br/>
              <li><b>Sicilian Supremo:</b> Vic&#39;s Sicilian Supremo is a
                favorite from the old country! A fabulous blend of pepperoni,
                sausage, mushrooms, onions, and black olives. Always a
                &#34;Big Hit!&#34;<br />
                <b>16&#34; Pizza: <span className="price">$20</span></b>
              </li>
              <br/>
              <li><b>&#34;5&#34; Boroughs:</b> Vic&#39;s &#34;5&#34; Boroughs
                pizza pie is appropriately named after the &#34;5&#34; boroughs
                of NYC, where rumor has it, Grandfather Vic was a well respected
                man. Capiche? This mouth watering pie has 5 meats with each one
                representing it&#39;s own borough. Pepperoni, sausage, chicken,
                bacon, and ham. Grab one and make Grandfather Vic proud!<br />
                <b>16&#34; Pizza: <span className="price">$22</span></b>
              </li>
              <br/>
              <li><b>Bronx Bomber:</b> Vic&#39;s Bronx Bomber is the &#34;Biggest&#34;
                Pizza pie in Greenville, South Carolina! 28&#34; of, you gotta
                see it, to believe it pizza! This custom, &#34;Made to order pie&#34;
                is topped with Italy&#39;s famous Bacio cheese and will strike
                fear in the hearts of most men! Great for birthday parties,
                office get togethers, or any special occasion. Add $3 for extra
                toppings. Please call at least (1) hour in advance when ordering.<br />
                <b>28&#34; Pizza: <span className="price">$40</span></b>
              </li>
            </ul>
          </div>
          <div className="tab-pane" id="strombolis-calzones">
            <h2 className="menu-tab-title">Calzones &amp; Stromboli</h2>
            <ul>
              <li><b>Vic&#39;s Calzones:</b> One of Uncle Luigi&#39;s favorites
                is our 10&#34; Calzone. Comes loaded with Ricotta and Mozzarella
                cheese plus your choice of (4) toppings and a side of Marinara
                sauce.<br />
                <b><span className="price">$14.00</span></b><br />
                <b>Extra sauce .50 cents</b>
              </li>
              <li><b>Vic&#39;s Stromboli:</b> Our 10&#34; Stromboli doesn&#39;t play games! Stuffed
                with delicious Mozzarella cheese, your choice of (4) Toppings,
                and (1) side of Mama Vic&#39;s Marinara sauce!<br />
                <b><span className="price">$14.00</span></b>
              </li>
            </ul>
          </div>
          <div className="tab-pane" id="subs">
            <h2 className="menu-tab-title">Signature Subs</h2>
            <ul>
              <li><b>Vic&#39;s Signature Subs:</b> Vic&#39;s Italian subs are amazing!
                All Subs are on a 10&#34; Italian roll with choice of meatballs
                or sausage. Both are topped with Mama Vic&#39;s Marinara sauce and
                Italy&#39;s decadent Bacio cheese blend. &#34;Squisito!&#34;
                <br />
                <b><span className="price">$9.00</span></b><br />
              </li>
              <li><b>Vic&#39;s &#34;Philly&#34; Cheese Steak:</b> It will rock your
                world! Highest quality beef, Bacio cheese, and all the goodies.
                Amazing Flavor!<br />
                <b><span className="price">$9.00</span></b>
              </li>
              <li><b>Vic&#39;s Delicious Gyros:</b> Want the &#34;Best&#34; GYRO
                in Greenville? Try our authentic Gyros straight from the old Brooklyn
                neighborhood in NYC. Homemade with the highest quality gyro meat
                on pita bread with Mama Vic&#39;s Tzatziki Sauce and Vic&#39;s
                special garnishing&#39;s. <br />
                <b><span className="price">$9.00</span></b>
              </li>
            </ul>
          </div>
          {// <div className="tab-pane" id="blue">
          //     <h1>Blue</h1>
          //     <p>blue blue blue blue blue</p>
          // </div>
          }
        </div>
      </div>
    )
  }
});

module.exports = MenuComponent;

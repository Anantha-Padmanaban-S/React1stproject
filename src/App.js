import logo from './logo.svg';
import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import Navbar from './navbar';
import Pricing from './PricingInfo';
import Card from './card';

function App() {
  let details = [
    {
      subs: "FREE",
      price: 0,
      benefits: [
        {
          type: "Single User",
          enabled: true
        },
        {
          type: "5GB Storage",
          enabled: true
        },
        {
          type: "Unlimited Public Projects",
          enabled: true
        },
        {
          type: "Community Access",
          enabled: true
        },
        {
          type: "Unlimited Private Projects",
          enabled: false
        },
        {
          type: "Dedicated Phone Support",
          enabled: false
        },

        {
          type: "Free Subdomain",
          enabled: false
        },
        {
          type: "Monthly Status Reports",
          enabled: false
        }
      ]
    },

    {
      subs: "PLUS",
      price: 9,
      benefits: [
        {
          type: "5 Users",
          enabled: true
        },
        {
          type: "50GB Storage",
          enabled: true
        },
        {
          type: "Unlimited Public Projects",
          enabled: true
        },
        {
          type: "Community Access",
          enabled: true
        },
        {
          type: "Unlimited Private Projects",
          enabled: true
        },
        {
          type: "Dedicated Phone Support",
          enabled: true
        },
       {
          type: "Free Subdomain",
          enabled: true
        },
        {
          type: "Monthly Status Reports",
          enabled: false
        }


      ]


    },

    {
      subs: "PRO",
      price: 49,
      benefits: [
        {
          type: "Unlimited Users",
          enabled: true
        },
        {
          type: "150GB Storage",
          enabled: true
        },
        {
          type: "Unlimited Public Projects",
          enabled: true
        },
        {
          type: "Community Access",
          enabled: true
        },
        {
          type: "Unlimited Private Projects",
          enabled: true
        },
        {
          type: "Dedicated Phone Support",
          enabled: true
        },

        {
          type: "Unlimited Free Subdomain",
          enabled: true
        },
        {
          type: "Monthly Status Reports",
          enabled: true
        }


      ]


    }
  ]

  return (

    <div className="container py3">
      <header>
        <Navbar></Navbar>
        <Pricing></Pricing>
      </header>
      <main>
        <section className="pricing py-5">
          <div className="container">
            <div className="row">


              {details.map((items) => {
                return (
                  <Card
                    items={items}
                  ></Card>
                )
              })
              }

            </div>
          </div>
        </section>
      </main>

    </div>
  );
}

export default App;







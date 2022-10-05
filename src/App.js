import logo from './logo.svg';
import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import Navbar from './navbar';
import Pricing from './PricingInfo';
import Card from './card';

function App() {
  

  return (
    <div className="container py3">
      <header>
        <Navbar></Navbar>
        <Pricing></Pricing>
      </header>
      <main>     
      <Card></Card>
      </main>

    </div>
  );
}

export default App;

 
// // let details = [
//   //   {
//   //     subs: "FREE",
//   //     price: 0,
//   //     benefits: [
//   //       {
//   //         type: "Single User"
//   //       },
//   //       {
//   //         type: "5GB Storage"
//   //       },
//   //       {
//   //         type: "Unlimited Public Projects"
//   //       },
//   //       {
//   //         type: "Community Access"
//   //       },
//   //       {
//   //         type: "Unlimited Private Projects"
//   //       },
//   //       {
//   //         type: "Dedicated Phone Support"
//   //       },

//   //       {
//   //         type: "Free Subdomain"
//   //       },
//   //       {
//   //         type: "Monthly Status Reports"
//   //       }
//   //     ]
//   //   },

//   //   {
//   //     subs: "PLUS",
//   //     price: 9,
//   //     benefits: [
//   //       {
//   //         type: "5 Users"
//   //       },
//   //       {
//   //         type: "50GB Storage"
//   //       },
//   //       {
//   //         type: "Unlimited Public Projects"
//   //       },
//   //       {
//   //         type: "Community Access"
//   //       },
//   //       {
//   //         type: "Unlimited Private Projects"
//   //       },
//   //       {
//   //         type: "Dedicated Phone Support"
//   //       },

//   //       {
//   //         type: "Free Subdomain"
//   //       },
//   //       {
//   //         type: "Monthly Status Reports"
//   //       }


//   //     ]


//   //   },

//   //   {
//   //     subs: "PRO",
//   //     price: 49,
//   //     benefits: [
//   //       {
//   //         type: "Unlimited Users"
//   //       },
//   //       {
//   //         type: "150GB Storage"
//   //       },
//   //       {
//   //         type: "Unlimited Public Projects"
//   //       },
//   //       {
//   //         type: "Community Access"
//   //       },
//   //       {
//   //         type: "Unlimited Private Projects"
//   //       },
//   //       {
//   //         type: "Dedicated Phone Support"
//   //       },

//   //       {
//   //         type: "Free Subdomain"
//   //       },
//   //       {
//   //         type: "Monthly Status Reports"
//   //       }


//   //     ]


//   //   }
//   // ]



// {/* <section className="pricing py-5">
//           <div className="container">
            

//               {details.map((items) => {
//                 return (
//                   <Card
//                     items={items}
//                   ></Card>
//                 )
//               })
//               }
            
//           </div>
//         </section> */}
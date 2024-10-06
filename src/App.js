import React from 'react';
import './App.css';
import './css/main.css';

/*class ShopItemFunc extends React.Component{
  constructor(props){
    super();
    this.props = props;
  }
  render(){
    return (
      <div className="main-content">
        <h2> {this.props.brand} </h2>
        <h1>{this.props.title}</h1>
        <h3>{this.props.description}</h3>
        <div className="description">
          {this.props.descriptionFull}
          </div>
          <div className="highlight-window mobile">
            <div className="highlight-overlay"></div>
          </div>
          <div className="divider"></div>
          <div className="purchase-info">
            <div className="price">{this.props.currency} {this.props.price}</div>
            <button>Добавить в корзину</button>
            </div>
          </div>
    )
  }
}*/

const ShopItemFunc = ({item}) => {
  return (
    <div className="main-content">
      <h2> {item.brand} </h2>
      <h1>{item.title}</h1>
      <h3>{item.description}</h3>
      <div className="description">
        {item.descriptionFull}
        </div>
        <div className="highlight-window mobile">
          <div className="highlight-overlay"></div>
        </div>
        <div className="divider"></div>
        <div className="purchase-info">
          <div className="price">{item.currency} {item.price}</div>
          <button>Добавить в корзину</button>
          </div>
        </div>
  )
}

/*let item1 = {
  brand: 'Tiger of Sweden',
  title: 'Leonard coat',
  description: 'Minimalistic coat in cotton-blend',
  descriptionFull: 'Men\'s minimalistic overcoat in cotton-blend. Features a stand-up collar, concealed front closure and single back vent. Slim fit with clean, straight shape. Above-knee length.',
  price: 399,
  currency: '£'
}*/

function App() {
  return (
    <div className="container">
      <div className="background-element">
      </div>
      <div className="highlight-window">
        <div className='highlight-overlay'></div>
      </div>
      <div className="window">
      <ShopItemFunc item={{
          brand: "Tiger of Sweden",
          title: 'Leonard coat',
          description: 'Minimalistic coat in cotton-blend',
          descriptionFull: 'Men\'s minimalistic overcoat in cotton-blend. Features a stand-up collar, concealed front closure and single back vent. Slim fit with clean, straight shape. Above-knee length.',
          price: 399,
          currency: '£'
        }} />
      </div>
    </div>
  )
}

export default App;

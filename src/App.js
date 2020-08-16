import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Badge from '@material-ui/core/Badge';
import { withStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import Nav from 'react-bootstrap/Nav';
import Product from './components/product';

const StyledBadge = withStyles((theme) => ({
  badge: {
    right: -3,
    top: 13,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: '0 4px',
  },
}))(Badge);

class App extends React.Component{
  constructor(props) {
   super(props);
   this.state = {
     products : [0,0,0,0],
     totalProducts:0
   };
 }
  increase(index) {
    this.setState((state) => {
      let value = state.products;
      value[index] = value[index]+1;
      return {
        products : value,
        totalProducts:value.reduce((a, b) => a + b, 0)
      };
    });
  }
   decrease(index) {
     if(this.state.products[index]!== 0){
       this.setState((state) => {
         let value = state.products;
         value[index] = value[index]-1;
         return {
           products : value,
           totalProducts:value.reduce((a, b) => a + b, 0)
         };
       });
     }else {
       console.log("already zero elements");
     }
  }
   deleteNote(id) {
     this.setState((state) => {
       let value = state.products;
       value.splice(id, 1);
       return {
         products : value,
         totalProducts:value.reduce((a, b) => a + b, 0)
       };
     });
  }
  render() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
          <Navbar.Brand href="#home">Counter</Navbar.Brand>
          <Nav className="ml-auto">
            <IconButton aria-label="cart">
              <StyledBadge badgeContent={this.state.totalProducts} color="secondary">
                 <ShoppingCartIcon />
              </StyledBadge>
           </IconButton>
        </Nav>
      </Navbar>
      </header>
      {
        this.state.products.map((product,index) => {
          return (<Product quantity={product} key={index} id={index} Delete={() => this.deleteNote(index)} Increase={() => this.increase(index)} Decrease={() => this.decrease(index)} />);
        })
      }
    </div>
  );
}
}

export default App;

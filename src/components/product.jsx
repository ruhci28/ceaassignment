import React from "react";
import Button from 'react-bootstrap/Button';
const style1 = {backgroundColor:"yellow"};
const style2 = {backgroundColor:"#7fdbda"};
class Product extends React.Component {
  constructor(props) {
   super(props);
   this.state = {};
 }
  handleincreaseClick() {
    this.props.Increase(this.props.id);
    console.log(this.props);
  }
  handledecreaseClick() {
    this.props.Decrease(this.props.id);
  }
  handledeleteClick() {
    this.props.Delete(this.props.id);
  }
  render() {
  return (
    <div>
        <label style={(this.props.quantity === 0)? style1:style2} className="quantity">{(this.props.quantity === 0) ? 'zero' : this.props.quantity}</label>
        <Button variant="secondary" size="sm"  className="btns" onClick={() => this.handleincreaseClick()}>
          Increase
        </Button>
        <Button variant="secondary" size="sm" className="btns" onClick={() => this.handledecreaseClick()}>
          Decrease
        </Button>
        <Button variant="danger" size="sm" className="btns" onClick={() => this.handledeleteClick()}>
          Delete
       </Button>
    </div>
  );
}
}
export default Product;

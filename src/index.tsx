import * as React from 'react';
import * as ReactDOM from 'react-dom';

interface IndexProps {
  hello: string;
}
interface IndexState {
  inputValue: string;
  outputValue: string;
}
class Index extends React.Component<IndexProps, IndexState> {
  constructor(props: IndexProps) {
    super(props);
    this.state = {
      inputValue: '',
      outputValue: '',
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }
  handleChange(e: any): void {
    this.setState({
      inputValue: e.target.value,
    });
  }
  handleClick(): void {
    this.setState({
      inputValue: '',
      outputValue: this.state.inputValue,
    });
  }
  render() {
    return (
      <div>
        <Input value={this.state.inputValue} handleChange={this.handleChange} />
        <Button handleClick={this.handleClick} />
        <Output hello="Hello" value={this.state.outputValue} />
      </div>
    );
  }
}

interface InputProps {
  value: string;
  handleChange(e: any): void;
}
const Input: React.StatelessComponent<InputProps> = (props) => {
  return (
    <input type="text" placeholder="Input Name" value={props.value} onChange={props.handleChange} />
  );
}

interface ButtonProps {
  handleClick(): void;
}
const Button: React.StatelessComponent<ButtonProps> = (props) => {
  return (
    <button onClick={props.handleClick}>Send</button>
  );
}

interface OutputProps {
  hello: string;
  value: string;
}
const Output: React.StatelessComponent<OutputProps> = (props) => {
  const value = (props.value !== '') ? <h1>{props.hello} {props.value} !</h1> : '';
  return (
    <div>{value}</div>
  );
}

ReactDOM.render(
  <Index hello="Hello" />,
  document.querySelector('.content')
);

import * as React from 'react';
import * as ReactDOM from 'react-dom';

/** Helloコンポーネントで取得するpropsの型定義 */
interface HelloProps {
  greeting: string;
}
/** Helloコンポーネントのstateの型定義 */
interface HelloState {
  inputName: string;
  outputName: string;
}
/** Helloコンポーネント */
class Hello extends React.Component<HelloProps, HelloState> {
  constructor(props: HelloProps) {
    super(props);
    this.state = {
      inputName: '',
      outputName: '',
    } as HelloState;
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }
  handleChange(event: React.FormEvent<HTMLInputElement>): void {
    this.setState({
      inputName: event.currentTarget.value,
    });
  }
  handleClick(): void {
    this.setState({
      inputName: '',
      outputName: this.state.inputName,
    });
  }
  render(): JSX.Element {
    const { greeting } = this.props;
    return (
      <div>
        <Input name={this.state.inputName} handleChange={this.handleChange} />
        <Button handleClick={this.handleClick} />
        <Output greeting={greeting} name={this.state.outputName} />
      </div>
    );
  }
}

/** Inputコンポーネントで取得するpropsの型定義 */
interface InputProps {
  name: string;
  handleChange: (event: React.FormEvent<HTMLInputElement>) => void;
}
/** Inputコンポーネント */
const Input: React.SFC<InputProps> = props => {
  const { name, handleChange }: InputProps = props;
  return <input type="text" placeholder="Input any name." value={name} onChange={handleChange} />;
};

/** Buttonコンポーネントで取得するpropsの型定義 */
interface ButtonProps {
  handleClick: () => void;
}
/** Buttonコンポーネント */
const Button: React.SFC<ButtonProps> = props => {
  const { handleClick }: ButtonProps = props;
  return <button onClick={handleClick}>Say Hello</button>;
};

/** Outputコンポーネントで取得するpropsの型定義 */
interface OutputProps {
  greeting: string;
  name: string;
}
/** Outputコンポーネント */
const Output: React.SFC<OutputProps> = props => {
  const { greeting, name }: OutputProps = props;
  const hasName: boolean = name !== '';
  const result: JSX.Element | '' = hasName ? (
    <h1>
      {greeting} {name}!
    </h1>
  ) : (
    ''
  );
  return <div>{result}</div>;
};

/** Bootstraping */
ReactDOM.render(<Hello greeting="Hello!!" />, document.querySelector('.content'));

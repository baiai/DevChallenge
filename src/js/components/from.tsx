import React, { Component } from 'react';

interface IState {
  value: string
}

interface IProps {}

class Form extends Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);

    this.state = {
      value: '',
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event: any) {
    const { value } = event.target;
    this.setState(() => ({
      value,
    }));
  }

  render() {
    return (
      <form>
        <input
          type='text'
          value={this.state.value}
          onChange={this.handleChange}
        />
      </form>
    );
  }
}

export default Form;

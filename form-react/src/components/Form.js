import React from "react";

export default class Form extends React.Component {
  constructor() {
    super()
    this.state = {
      friends: [{
        name: 'Patatin',
        last_name: 'Patatan',
        phone: '234234234'
      }]
    }
    this.handleChange = this.handleChange.bind(this)
    this.submit = this.submit.bind(this)
  }

  handleChange(evt) {
    this.setState({ [evt.target.name]: evt.target.value })
  }

  submit(evt) {
    evt.preventDefault();
    const { name, last_name, phone } = this.state;
    this.setState(({ friends }) => ({ friends: [...friends, { name, last_name, phone }] }));
  }

  render() {
    return (
      <div>
        <h2>Form => add Friend</h2>
        <form onSubmit={this.submit}>
          <div>
            <label>Name</label>
            <input type="text" name='name' onChange={this.handleChange} />
          </div>
          <div>
            <label>Last name</label>
            <input type="text" name='last_name' onChange={this.handleChange} />
          </div>
          <div>
            <label>Phone</label>
            <input type="text" name='phone' onChange={this.handleChange} />
          </div>
          <button>Send</button>
        </form>

        <div>
          {this.state.friends.map((f, i) =>
            <div key={i}>
              <p>Name: {f.name}</p>
              <p>Last name: {f.last_name}</p>
              <p>Phone: {f.phone}</p>
            </div>
          )}
        </div>
      </div>
    )
  }
}

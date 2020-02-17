import React, {Component} from 'react'
import {Input, Button, Form} from 'antd'
import {connect} from 'react-redux'
import {sendOrder} from '../../store/action-creators'
import {Consumer} from '../../contexts/user'
import I18nContext from '../../contexts/i18n'

class OrderForm extends Component {
  state = {
    userName: '',
  }

  renderForm(__) {
    return (
      <Form
        layout={'inline'}
        style={{padding: '24px'}}
        onSubmit={this.handleSubmit}
      >
        <h1 ref={this.setRefForSomeHTMLElement}>{__('Form')}</h1>
        <Form.Item>
          <Consumer>
            {({name, handleUserChange}) => {
              return (
                <Input
                  ref={this.setInput}
                  placeholder={__('User name')}
                  value={name}
                  onChange={event => {
                    handleUserChange({
                      name: event.target.value,
                    })
                    this.handleUserNameInputChange(event)
                  }}
                  style={{width: '120px'}}
                />
              )
            }}
          </Consumer>
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit">
            {__('Send order')}
          </Button>
        </Form.Item>
      </Form>
    )
  }

  render() {
    return (
      <I18nContext.Consumer>
        {({translate}) => this.renderForm(translate)}
      </I18nContext.Consumer>
    )
  }

  handleUserNameInputChange = ({target: {value}}) => {
    this.setState({
      userName: value,
    })
  }

  setRefForSomeHTMLElement = ref => {
    this.someHTMLElement = ref
  }

  setInput = ref => {
    this.userNameInput = ref
  }

  handleSubmit = event => {
    event.preventDefault()
    this.props.sendOrder(this.state)
  }
}

export default connect(null, {sendOrder})(OrderForm)

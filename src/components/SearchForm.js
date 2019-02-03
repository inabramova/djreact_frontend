import React from 'react';
import { Form, Icon, Input, Button } from 'antd';
  
  class HorizontalForm extends React.Component {
  
    handleSubmit = (e) => {
      e.preventDefault();
      this.props.getItems(this.props.form.getFieldValue('query'))
    }
  
    render() {
      const {
        getFieldDecorator
      } = this.props.form;
      return (
        <Form layout="inline" onSubmit={this.handleSubmit}>
          <Form.Item>
            {getFieldDecorator('query')(
              <Input prefix={<Icon type="search" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Query" />
            )}
          </Form.Item>
          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
            >
              Search
            </Button>
          </Form.Item>
        </Form>
      );
    }
  }
  
  const SearchForm = Form.create({ name: 'horizontal_search' })(HorizontalForm);
  export default SearchForm;
  
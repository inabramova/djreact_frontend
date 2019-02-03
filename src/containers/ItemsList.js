import React, { Component } from 'react';
import axios from 'axios';
import Items from '../components/Items';
import SearchForm from '../components/SearchForm';
import {endpoint, prodEndpoint} from '../config';

const url = process.env.NODE_ENV === 'development' ? endpoint : prodEndpoint;

export default class ItemsList extends Component {
  state = {
    items:[],
    loading:true
  }
  getItems = (q="") =>{
    return axios.get(url, {params: {q}})
      .then(res=>{
        var items = Object.keys(res.data)
          .map(k=> ({...res.data[k],'title':k}));
        this.setState({items:items, loading:false});
      }).catch(reas=> this.setState({loading:false}));
  }

  componentDidMount(){
    this.getItems();
  }
  render() {
    return (
      <React.Fragment>
        <SearchForm getItems={this.getItems}/>
        <Items data={this.state.items} loading={this.state.loading}/>
      </React.Fragment>
        
    )
  }
}

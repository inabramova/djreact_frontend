import React from 'react';
import { Tag, Tooltip } from 'antd';
import styled from 'styled-components';

const ListDiv = styled.div`
    span + span{
        margin-left: 20px;
    }
    span.date + span.date::before{
        content:'to';
        margin-right: 20px;
    }
`

function formatDate(str) {
    var parsed = parseInt(str);
    if (isNaN(parsed)|| parsed!= str) return str;
    var date = new Date(parsed);
    var monthNames = [
      "January", "February", "March",
      "April", "May", "June", "July",
      "August", "September", "October",
      "November", "December"
    ];
  
    var day = date.getDate();
    var monthIndex = date.getMonth();
    var year = date.getFullYear();
  
    return `${day} ${monthNames[monthIndex]} ${year}`;
  }

const FindError = (props)=> {
   let val = props.val;
   if (props.date) {
       val = formatDate(val);
   }
   const className = props.date? 'date':'';
   const hasError = props.item.field_errors && props.item.field_errors[props.itemKey];
   if (hasError && props.item.field_errors[props.itemKey].find(x=>{
    return x.invalid.indexOf(val)>-1;
   })) return (<Tooltip placement="top" title={"Invalid "+props.itemKey}><Tag color="red">{val}</Tag></Tooltip>);
   else return <span className={className}>{val}</span>;
}

const ItemVal = (props) => {
    const {item, itemKey, itemVal=item[itemKey]} = props;
    return(
        <div>
            { Array.isArray(itemVal) ? itemVal.map((entry,i)=>{
                return (<div key={i}>
                    {Array.isArray(entry) ? 
                        <ListDiv>
                            {entry.map((subentry,ii)=><FindError key={ii} {...props} val={subentry}/>)}
                        </ListDiv> : 
                        <FindError {...props} val={entry}/>}
                </div>);
                }) : <FindError {...props} val={itemVal}/>
            }
        </div>
    )
}

export default ItemVal;
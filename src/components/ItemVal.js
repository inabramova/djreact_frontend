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

const FindError = (props)=> {
   const val = props.val;
   const className = props.date? 'date':'';
   const hasError = props.item.field_errors && props.item.field_errors[props.itemKey];
   if (hasError && props.item.field_errors[props.itemKey].find(x=>{
    return x.invalid.indexOf(val)>-1;
   })) return (<Tooltip placement="top" title={"Invalid "+props.itemKey}><Tag color="red">{props.val}</Tag></Tooltip>);
   else return <span className={className}>{props.val}</span>;
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
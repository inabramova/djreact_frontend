import React from 'react';
import ItemVal from './ItemVal';
import styled from 'styled-components';

const MediaWrapper = styled.div`
    display: flex;
    margin-bottom: 5px;
    .nested .label{
       background-color: #eeeeee;
    }
    .nested + .nested{
        margin-bottom: 0;
        margin-top: 5px;
    }
`

const MediaLabel = styled.div`
    width: 150px;
    padding: 5px 10px;
    color:rgba(0, 0, 0, 0.85);
    background-color: #dddddd;
    text-align: right;
`

const MediaVal = styled.div`
    text-align: left;
    padding-left: 30px;
`

const NestedItem = (props)=>{
    const {item, itemKey, nestedLabel, nestedVal} = props;
    return (
        typeof nestedVal!=='undefined'?
        <MediaWrapper className="nested">
            <MediaLabel className="label">
                {nestedLabel}
                {typeof nestedVal.and !=='undefined' ? <span>&nbsp;[AND]</span>:''}
            </MediaLabel>
            <MediaVal>
                {Array.isArray(nestedVal)?
                    <ItemVal item={item} itemKey={itemKey} itemVal={nestedVal} /> : 
                    nestedVal.values ? <ItemVal item={item} itemKey={itemKey} itemVal={nestedVal.values} /> : 
                    JSON.stringify(nestedVal)
                }
            </MediaVal>
        </MediaWrapper> : ''
    )
}



const Media = (props) => {
    const {item, itemKey, itemLabel, nested=false} = props;
    return ( typeof item[itemKey] !=='undefined' ?
            (<MediaWrapper>
                <MediaLabel>{itemLabel}</MediaLabel>
                <MediaVal>
                    {nested ? 
                        <React.Fragment>
                            <NestedItem item={item} itemKey={itemKey} nestedLabel="Location" nestedVal={item[itemKey]["location"]} />
                            <NestedItem item={item} itemKey={itemKey} nestedLabel="Source" nestedVal={item[itemKey]["src"]} />
                            <NestedItem item={item} itemKey={itemKey} nestedLabel="Other" nestedVal={item[itemKey]["other"]} />
                        </React.Fragment>
                         : 
                        <ItemVal {...props} />
                    }
                </MediaVal>
            </MediaWrapper>) : ''
    )
};

export default Media;
import React from 'react';
import { Card } from 'antd';
import Media from './Media';


const ItemCard = (props) => {
    const {item} = props;
    return (
        <Card>
            <p>{item.title}</p>
            <Media item={item} itemKey="datamodels" itemLabel="Datamodels"/>
            <Media item={item} itemKey="date_filters" date={true} itemLabel="Date Range"/>
            <Media item={item} itemKey="sourcetypes_filter" itemLabel="Sourcetype"/>
            <Media item={item} itemKey="filters" nested={true} itemLabel="Filters"/>
        </Card>
    )
}

export default ItemCard;
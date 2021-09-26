import React, { useState } from "react";
import { DataView, DataViewLayoutOptions } from 'primereact/dataview';
import { Button } from 'primereact/button';
import { Dropdown } from 'primereact/dropdown';
import { Rating } from 'primereact/rating';
import {useHistory} from "react-router";

const ItemPanel = (props) => {
    const history = useHistory();
    const products = props.products;
    const [layout, setLayout] = useState('grid');
    const [sortKey, setSortKey] = useState(null);
    const [sortOrder, setSortOrder] = useState(null);
    const [sortField, setSortField] = useState(null);
    const sortOptions = [
        {label: 'De mayor a menor precio', value: '!price'},
        {label: 'De menor a mayor precio', value: 'price'},
    ];

    const onSortChange = (event) => {
        const value = event.value;

        if (value.indexOf('!') === 0) {
            setSortOrder(-1);
            setSortField(value.substring(1, value.length));
            setSortKey(value);
        }
        else {
            setSortOrder(1);
            setSortField(value);
            setSortKey(value);
        }
    }

    const redirect = (id) => {
        history.push(`/producto/${id}`);
    }

    const renderListItem = (data) => {
        return (
            <div className="p-col-12">
                <div className="product-list-item">
                    <img src={`${data.image}`} alt={data.name} />
                    <div className="product-list-detail">
                        <div className="product-name">{data.name}</div>
                        <div className="product-description">{data.description}</div>
                        <Rating value={data.rating} readOnly cancel={false}/>
                        <div className={"product-list-item-category-content"}><i className="pi pi-tag product-category-icon"/><span className="product-category">{data.category}</span></div>
                    </div>
                    <div className="product-list-action">
                        <span className="product-price">${data.price}</span>
                        <Button icon="pi pi-search" label="Ver detalle" onClick={() => redirect(data.id)}/>
                        <span className={`product-badge status-${data.inventoryStatus.toLowerCase()}`}>{data.inventoryStatus}</span>
                    </div>
                </div>
            </div>
        );
    }

    const renderGridItem = (data) => {
        return (
            <div className="p-col-12 p-md-4">
                <div className="product-grid-item card">
                    <div className="product-grid-item-top"/>
                    <div className="product-grid-item-content">
                        <div className={"product-grid-item-image-container"}>
                            <img src={`${data.image}`} onError={(e) => e.target.src='https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png'} alt={data.name} />
                        </div>
                        <div className="product-name">{data.name}</div>
                        <div className="product-description">{data.description}</div>
                    </div>
                    <div className="product-grid-item-bottom">
                        <span className="product-price">${data.price}</span>
                        <Button icon="pi pi-search" label="Ver detalle" onClick={() => redirect(data.id)}/>
                    </div>
                </div>
            </div>
        );
    }

    const itemTemplate = (product, layout) => {
        if (!product) {
            return;
        }

        if (layout === 'list')
            return renderListItem(product);
        else if (layout === 'grid')
            return renderGridItem(product);
    }

    const renderHeader = () => {
        return (
            <div className="p-grid p-nogutter">
                <div className="p-col-3" style={{textAlign: 'left'}}>
                    <Dropdown options={sortOptions} value={sortKey} optionLabel="label" placeholder="Ordenar por precio" onChange={onSortChange}/>
                </div>
                <div className={"p-col-6"} style={{textAlign: 'center'}}>
                    <p className={"featured-panel-title"}>{props.title}</p>
                </div>
                <div className="p-col-3" style={{textAlign: 'right'}}>
                    <DataViewLayoutOptions layout={layout} onChange={(e) => setLayout(e.value)} />
                </div>
            </div>
        );
    }

    const header = renderHeader();

    return(
        <div className={"featured"}>
            <DataView value={products} layout={layout} header={header}
                      itemTemplate={itemTemplate} paginator rows={9}
                      sortOrder={sortOrder} sortField={sortField} />

        </div>
    )
}

export default ItemPanel;
import './cart.css'

import React, { useState, useRef, useContext } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Toast } from 'primereact/toast';
import { Button } from 'primereact/button';
import { Dialog } from 'primereact/dialog';
import { Link } from 'react-router-dom'

import { CartContext } from '../../../contexts/CartContext';

const Carrito = () => {

    let articuloVacio = {
        id: null,
        name: '',
        image: null,
        description: '',
        category: null,
        price: 0,
        quantity: 0,
        rating: 0,
        inventoryStatus: 'INSTOCK'
    };

    const [products, setProducts] = useContext(CartContext)

  

    const [deleteProductDialog, setMensajeDeleteArticulo] = useState(false);
    const [deleteProductsDialog, setMensajeDeleteArticulos] = useState(false);
    const [product, setProduct] = useState(articuloVacio);
    const [selectedProducts, setArticulosSeleccionados] = useState(null);
    const [globalFilter] = useState(null);
    const toast = useRef(null);
    const datatable = useRef(null);




    const formatCurrency = (value) => {
        return value.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
    }

    const ocultarMensajeDeleteArticulo = () => {
        setMensajeDeleteArticulo(false);
    }

    const ocultarMensajeDeleteArticulos = () => {
        setMensajeDeleteArticulos(false);
    }


    const confirmarDelete = (product) => {
        setProduct(product);
        setMensajeDeleteArticulo(true);
    }

    const eliminarArticulo = () => {
        let _products = products.filter(val => val.id !== product.id);
        setProducts(_products);
        setMensajeDeleteArticulo(false);
        setProduct(articuloVacio);
        toast.current.show({ severity: 'success', summary: 'Éxito', detail: 'Artículo eliminado', life: 3000 });
    }

    const confirmarDeleteSeleccionado = () => {
        setMensajeDeleteArticulos(true);
    }


    const eliminarArticulosSeleccionados = () => {
        let _products = products.filter(val => !selectedProducts.includes(val));
        setProducts(_products);
        setMensajeDeleteArticulos(false);
        setArticulosSeleccionados(null);
        toast.current.show({ severity: 'success', summary: 'Éxito', detail: 'Artículos eliminados', life: 3000 });
    }

    const nameBodyTemplate = (rowData) => {
        return (
            <div>
                <span className="p-column-title"></span>
                {rowData.name}
            </div>
        );
    }

    const priceBodyTemplate = (rowData) => {
        return (
            <div>
                <span className="p-column-title"></span>
                {formatCurrency(rowData.price)}
            </div>
        );
    }

    const categoryBodyTemplate = (rowData) => {
        return (
            <div>
                <span className="p-column-title"></span>
                {rowData.category}
            </div>
        );
    }

    const actionBodyTemplate = (rowData) => {
        return (
            <div className="actions">
                <Button icon="pi pi-trash" className="p-button-rounded p-button-warning" onClick={() => confirmarDelete(rowData)} />
            </div>
        );
    }

    const header = (
        <div className="table-header">
            <Button label="Vaciar carrito" icon="pi pi-trash" className="p-button-danger" onClick={confirmarDeleteSeleccionado} disabled={!selectedProducts || !selectedProducts.length} />
            <Link to="/checkout" className="p-button-rounded p-mr-2 carrito-button" >
                <Button label={"Confirmar carrito"} icon="pi pi-save" className=" p-mr-2"/>
            </Link>
        </div>
    );

    const deleteProductDialogFooter = (
        <div>
            <Button label="No" icon="pi pi-times" className="p-button-text" onClick={ocultarMensajeDeleteArticulo} />
            <Button label="Si" icon="pi pi-check" className="p-button-text" onClick={eliminarArticulo} />
        </div>
    );
    const deleteProductsDialogFooter = (
        <div>
            <Button label="No" icon="pi pi-times" className="p-button-text" onClick={ocultarMensajeDeleteArticulos} />
            <Button label="Si" icon="pi pi-check" className="p-button-text" onClick={eliminarArticulosSeleccionados} />
        </div>
    );

    return (
        <div className="p-grid crud-demo">
            <div className="p-col-12">
                <div className="card carrito-table">
                    <Toast ref={toast} />
                    <DataTable ref={datatable} value={products} selection={selectedProducts} onSelectionChange={(e) => setArticulosSeleccionados(e.value)}
                        globalFilter={globalFilter} emptyMessage="No se encontraron artículos" header={header}>
                        <Column selectionMode="multiple" headerStyle={{ width: '3rem' }}/>
                        <Column field="name" header="Name" sortable body={nameBodyTemplate}/>
                        <Column field="price" header="Price" body={priceBodyTemplate} sortable/>
                        <Column field="category" header="Category" sortable body={categoryBodyTemplate}/>
                        <Column body={actionBodyTemplate}/>
                    </DataTable>

                    <Dialog visible={deleteProductDialog} style={{ width: '450px' }} header="Confirmar" modal footer={deleteProductDialogFooter} onHide={ocultarMensajeDeleteArticulo}>
                        <div className="confirmation-content">
                            <i className="pi pi-exclamation-triangle p-mr-3" style={{ fontSize: '2rem' }} />
                            {product && <span>¿Está seguro de eliminar el artículo <b>{product.name}</b>?</span>}
                        </div>
                    </Dialog>

                    <Dialog visible={deleteProductsDialog} style={{ width: '450px' }} header="Confirm" modal footer={deleteProductsDialogFooter} onHide={ocultarMensajeDeleteArticulos}>
                        <div className="confirmation-content">
                            <i className="pi pi-exclamation-triangle p-mr-3" style={{ fontSize: '2rem' }} />
                            {product && <span>¿Está seguro de eliminar los artículos?</span>}
                        </div>
                    </Dialog>
                </div>
            </div>
        </div>
    );
}
export default Carrito;
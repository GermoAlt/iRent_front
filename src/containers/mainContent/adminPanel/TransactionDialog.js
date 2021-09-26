import React from "react";
import { Dialog } from 'primereact/dialog';
import { Button } from 'primereact/button';
import TransactionDetails from "./TransactionDetails";
import {useState} from "react";

const TransactionDialog = (props) => {
    const [displayDialog, setDisplayDialog] = useState(false);
    const transactionDetails = props.transaction
    return (
        <div>
            <Button icon="pi pi-search" className={"p-button-rounded p-mr-2"} onClick={() => setDisplayDialog(true)} />

            <Dialog header="Detalle de la compra" visible={displayDialog} style={{ width: '50vw' }}  onHide={() => setDisplayDialog(false)}>
                <TransactionDetails transaction={transactionDetails}/>
            </Dialog>
        </div>
    )
}

export default TransactionDialog;
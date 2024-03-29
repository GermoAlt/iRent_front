import React, {useState} from "react";
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import TransactionDialog from "./TransactionDialog";
import Transactions from "../../../resources/json/transactions.json";
import useUser from "../../../hooks/useUser";
import {useNavigate} from "react-router-dom";

const detailsBodyTemplate = (rowdata) => {
    return (
        <div>
            <TransactionDialog transaction={rowdata.items}/>
        </div>
    )
}

export default function TransactionLog(props) {
    const [transactions] = useState(Transactions.data);
    const {user, changeUser} = useUser();
    const navigate = useNavigate()
    if(user.tipo !== "admin"){
        navigate("/")
    }
    return (
        <div className={"transaction-log"}>
            <DataTable value={transactions} dataKey="idTransaction" paginator rows={10} rowsPerPageOptions={[5, 10, 25]} className="datatable-responsive">
                <Column field={"date"} header={"Fecha"} body={""} sortable/>
                <Column field={"idTransaction"} header={"Id"} body={""} sortable/>
                <Column field={"total"} header={"Total"} body={""} sortable/>
                <Column header={"Detalle"} body={detailsBodyTemplate} />
            </DataTable>
        </div>
    );
}

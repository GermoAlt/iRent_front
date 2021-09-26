import {InputText} from "primereact/inputtext";
import {Button} from "primereact/button";
import useUser from "../../../hooks/useUser";

const UserInformationPanel = () => {

    const {user, changeUser} = useUser();

    let nombre = user.nombre;
    let apellido = user.apellido;
    let domicilio = user.domicilio;
    let du = user.du;
    let telefono = user.telefono;

    const guardarCambios = () => {

    }

    return(
        <div className={"user-information-panel"}>
            <div className="p-fluid p-formgrid user-profile-field-container p-card">
                <div className="p-field p-col">
                    <label htmlFor="nombre">Nombre</label>
                    <InputText className={"user-input-text"} value={nombre} id="nombre" type="text"/>
                </div>
                <div className="p-field p-col">
                    <label htmlFor="apellido">Apellido</label>
                    <InputText id="apellido" type="text" value={apellido}/>
                </div>
                <div className="p-field p-col">
                    <label htmlFor="domicilio">Domicilio</label>
                    <InputText id="domicilio" type="text" value={domicilio}/>
                </div>
                <div className="p-field p-col">
                    <label htmlFor="du">Documento</label>
                    <InputText id="du" type="text" value={du}/>
                </div>
                <div className="p-field p-col">
                    <label htmlFor="telefono">Telefono</label>
                    <InputText id="telefono" type="text" value={telefono}/>
                </div>
            </div>

            <Button label={"Guardar"} icon={"pi pi-save"} onClick={() => guardarCambios()}/>
        </div>
    )

}

export default UserInformationPanel;
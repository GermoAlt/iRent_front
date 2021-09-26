import React from "react";
const Step3 = (props) => {
    return (
        <div className={`${props.visible !== 2 ? "hidden" : ""}`}>
            <h5>¡Su compra ha sido realizada con éxito!</h5>

            <h4>Su número de orden es 00053287</h4>

            <h5>¡Muchas gracias!</h5>
        </div>
    )
}

export default Step3;
import './footer.css'
import {Image, Transformation} from "cloudinary-react";

const Footer = () => {

    const image_size = 40

    return (
        <div className={"app-footer"}>
            <div className={"footer-content"}>
                <div className={"footer-content-column"}>
                    <Image publicId={"Seminario/facebook"}>
                        <Transformation width={image_size} height={image_size} crop={"scale"}/>
                        <Transformation effect="replace_color:white" />
                    </Image>
                    <Image publicId={"Seminario/twitter"}>
                        <Transformation width={image_size} height={image_size} crop={"scale"}/>
                        <Transformation effect="replace_color:white" />
                    </Image>
                    <Image publicId={"Seminario/instagram"}>
                        <Transformation width={image_size} height={image_size} crop={"scale"}/>
                        <Transformation effect="replace_color:white" />
                    </Image>
                </div>
                <div className={"separator"}/>
                <div className={"footer-content-column"}>
                    Copyright © 2021 SPORTX<br/>
                    Todos los derechos reservados.
                </div>
            </div>
        </div>
    )
}

export default Footer;
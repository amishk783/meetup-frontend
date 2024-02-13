import React from "react";
import { Fragment } from "react";
import { ReactDOM } from "react";

const Backdrop = (props) => {
    return <div className=" fixed top-0 left-0 w-screen h-screen z-20 bg-gray-500"></div>
}

const ModelOverlay = props => {
    return (<div className="">
        <div className="">{ props.children}</div>
    </div>)
}
const portalElement = document.getElementById("create-portal");

const Modal = props => {
    return (
        <Fragment>
            {ReactDOM.createPortal(<Backdrop onClose={props.onClose} />, portalElement)}
            {ReactDOM.createPortal(<ModelOverlay>{props.children }</ModelOverlay>,portalElement) }
        </Fragment>
    )
}
export default Modal;
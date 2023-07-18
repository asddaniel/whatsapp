import React, {ReactNode} from "react";
import rlogo from "../assets/react.svg";
import filese from "../assets/file.jpg"

export default class Conversation extends React.Component {
    render(): ReactNode {
        return (
            <div className="container-fluid h-full bg-white p-1">
                <div className="row p-2">
                    <div className="col-lg-2 col-3 d-flex justify-content-center align-items-center p-2">
                         <img src={rlogo} alt="" className="img-fluid    aspect-carre round-carre" />
                    </div>
                    <div className="col-7 col-lg-8">
                        <div className="row justify-content-start ">
                            <div className="fw-bold text-start h5">React dev</div>
                        </div>
                        <div className="row justify-content-start ">
                            <div className="fw-light text-start ">Bonjour trucmashing</div>
                        </div>

                    </div>
                    <div className="col-lg-2 col-2 p-1">
                        <div className="row">
                            <div className="fw-bold text-green text-center">20:53</div>
                        </div>
                        <div className="row p-1">
                            <div className="d-flex justify-content-center align-items-center">
                            <div className="fw-bold text-white bg-green rounded-circle aspect-carre p-2 px-3">2</div>
                            </div>
                           
                        </div>
                    </div>
                </div>
                <div className="row p-2">
                    <div className="col-lg-2 col-3 d-flex justify-content-center p-2">
                         <img src={filese} alt="" className="img-fluid    aspect-carre round-carre" />
                    </div>
                    <div className="col-7 col-lg-8 d-flex flex-column justify-content-center">
                        <div className="row justify-content-start ">
                            <div className="fw-bold text-start h5">Cercle MATH</div>
                        </div>
                        <div className="row justify-content-start ">
                            <div className="fw-light text-start ">Bonjour trucmashing</div>
                        </div>

                    </div>
                    <div className="col-2 p-1 ">
                        <div className="row">
                            <div className="fw-bold text-green text-center">20:53</div>
                        </div>
                        <div className="row p-1">
                            <div className="d-flex justify-content-center align-items-center ">
                            <div className="fw-bold text-white bg-green rounded-circle aspect-carre p-status">8</div>
                            </div>
                           
                        </div>
                    </div>
                </div>
                
            </div>
        );
    }
}
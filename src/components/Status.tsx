import React, {ReactNode} from "react";
import rlogo from "../assets/react.svg";
import filese from "../assets/file.jpg"

export default class Status extends React.Component {
    render(): ReactNode {
        return (
            <div className="container-fluid h-full bg-white p-1">
                <div className="row p-2">
                    <div className="col-lg-2 col-3 d-flex justify-content-center">
                         <img src={rlogo} alt="" className="img-fluid rounded-circle border border-3 border-green aspect-carre round-carre" />
                    </div>
                    <div className="col-7 col-lg-8">
                        <div className="row justify-content-start ">
                            <div className="fw-bold text-start h5">Bernice Kapinga</div>
                        </div>
                        <div className="row justify-content-start ">
                            <div className="fw-light text-start ">aujourd'hui 14:53</div>
                        </div>

                    </div>
                    <div className="col-lg-2 col-2 p-1">
                        
                    </div>
                </div>
                <div className="row p-2">
                    <div className="col-lg-2 col-3 d-flex justify-content-center">
                         <img src={filese} alt="" className="img-fluid   border-3 border-green  aspect-carre round-carre" />
                    </div>
                    <div className="col-7 col-lg-8">
                        <div className="row justify-content-start ">
                            <div className="fw-bold text-start h5">Corneille</div>
                        </div>
                        <div className="row justify-content-start ">
                            <div className="fw-light text-start ">aujourd'hui 12:50</div>
                        </div>

                    </div>
                    <div className="col-2 p-1">
                        
                    </div>
                </div>
                
            </div>
        );
    }
}
import React, {ReactNode} from "react";
import rlogo from "../assets/react.svg";
import filese from "../assets/file.jpg"
import elvin from "../assets/elvin.jpg"
import marden from "../assets/marden.jpg"
import raissa from "../assets/raissa.jpg"

export default class Conversation extends React.Component {
    constructor(props: any){
        super(props)
        this.state = {
            conversation: [{
                name: "Elvin",
                content:"bonjour", 
                image:elvin, 
                nombre:3, 
                date: "19:53",
            }, 
            {
                name: "Raissa",
                content:"Comment tu va ? ", 
                image:raissa,
                nombre:2, 
                date: "18:26",
            }, 
            {
                name: "Marden",
                content:"le programme est fini", 
                image:marden, 
                nombre:6, 
                date: "18:03",
            }, 
            {
                name: "CERCLE MATH",
                content:"Elvin: Le lien vers...", 
                image:filese,
                nombre:7, 
                date: "17:53",
            }, 
            {
                name: "Joseph dev",
                content:"bonjour, les props ...", 
                image:rlogo, 
                nombre:9, 
                date: "16:38",
            }]
        }
    }
    render(): ReactNode {
        return (
            <div className="container-fluid h-full bg-white p-1">
                <div className="row p-2">
                    <div className="col-lg-2 col-3 d-flex justify-content-center align-items-center p-2">
                         <img src={rlogo} alt="" className="img-fluid    aspect-carre round-carre" />
                    </div>
                    <div className="col-7 col-lg-8 d-flex flex-column justify-content-center">
                        <div className="row justify-content-start ">
                            <div className="fw-bold text-start h5">React dev</div>
                        </div>
                        <div className="row justify-content-start ">
                            <div className="fw-light text-start ">Bonjour trucmashing</div>
                        </div>

                    </div>
                    <div className="col-lg-2 col-2 p-1">
                        
                    </div>
                </div>
                {this.state?.conversation?.map((conv: any) => (
                    <div className="row p-2">
                    <div className="col-lg-2 col-3 d-flex justify-content-center p-2">
                         <img src={conv.image} alt="" className="img-fluid    aspect-carre round-carre" />
                    </div>
                    <div className="col-7 col-lg-8 d-flex flex-column justify-content-center">
                        <div className="row justify-content-start ">
                            <div className="fw-bold text-start h5">{conv.name}</div>
                        </div>
                        <div className="row justify-content-start ">
                            <div className="fw-light text-start ">{conv.content}</div>
                        </div>

                    </div>
                    <div className="col-2 p-1 ">
                        <div className="row">
                            <div className="fw-bold text-green text-center size-small">{conv.date}</div>
                        </div>
                        <div className="row p-1">
                            <div className="d-flex justify-content-center align-items-center ">
                            <div className="fw-bold text-white bg-green rounded-circle aspect-carre p-status">{conv.nombre}</div>
                            </div>
                           
                        </div>
                    </div>
                </div>
                
                ))}
                
            </div>
        );
    }
}
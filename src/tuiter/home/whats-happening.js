import React, {useState} from "react";
import {useDispatch} from "react-redux";
import { createTuit } from "../tuits/tuits-reducer";

const WhatsHappening = () => {
    let [whatsHappening, setWhatsHappening] = useState('');
    const dispatch = useDispatch();

    const tuitClickHandler = () => {
        const newTuit = {
            tuit: whatsHappening
        }
        dispatch(createTuit(newTuit))
    }

    return(
        <div className="row">
            <div className="col-2">
                <img src={'images/starship.webp'}
                     style={{width: '55px', margin: '10px'}} alt="profile pic"/>
            </div>

            <div className="col-10">
                <textarea value={whatsHappening}
                          onChange={(event) => setWhatsHappening(event.target.value)}
                          className="form-control ps-2"
                          style={{width: "100%", color: "black",
                              padding: "0px",
                              paddingTop: "15px"}}
                          placeholder="What's happening?">
                </textarea>
                <div className="pt-2 pb-2">
                    <button onClick={tuitClickHandler} className="btn btn-primary rounded-pill float-end">
                        tuit
                    </button>
                    <span className="float-start">
                        <a name={"foo"} href={"#foo"} ><i className="bi bi-card-image me-4"></i></a>
                        <a href={"#foo"}><i className="bi bi-filetype-gif me-4"></i></a>
                        <a href={"#foo"}><i className="bi bi-bar-chart me-4"></i></a>
                        <a href={"#foo"}><i className="bi bi-emoji-smile me-3"></i></a>
                        <a href={"#foo"}><i className="bi bi-pin-map me-3"></i></a>
                    </span>
                </div>
            </div>

            <div>
                <hr/>
            </div>
        </div>
    );
}

export default WhatsHappening;
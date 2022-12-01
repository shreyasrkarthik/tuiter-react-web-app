import React, {useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import TuitItem from "./tuit-item";
import {findTuitsThunk} from "../../services/tuits-thunks";

const TuitsList = () => {
    const {tuits, loading} = useSelector(state => state.tuitsData);
    const dispatch = useDispatch();
    useEffect(() => {
        console.log(tuits)
        dispatch(findTuitsThunk())
    }, [])

    return (
        <ul className="list-group">
            {
                loading &&
                <li className="list-group-item">
                    Loading...
                </li>
            }

            {
                tuits.map((tuit) => (

                    <div>
                        <TuitItem tuit={tuit} key={tuit.id} />
                    </div>
                ))}
        </ul>
    );
};

export default TuitsList;
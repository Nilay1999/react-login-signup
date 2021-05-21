import React from "react";
import { FaTimesCircle } from "react-icons/fa";

export default function ErrorNotice(props) {
    return (
        <small className="text-danger">
            {props.message}
            <FaTimesCircle
                style={{ marginLeft: "4px" }}
                onClick={props.clearError}
            />
        </small>
    );
}

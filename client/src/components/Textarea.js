import React from "react"
import { Input } from "reactstrap";

const Textarea = ({ valid, loader, invalid, onChange, type }) => {
    return (
        <Input
            placeholder="Type here ..."
            name="text"
            type={type}
            valid={valid}
            disabled={loader}
            invalid={invalid}
            onChange={(e) => onChange(e.target.value)}
        />
    )
};

export default Textarea;

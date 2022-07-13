import axios from "axios";
import { useState, useEffect } from "react";
import { Label } from "reactstrap";

import "../App.css";
import Textarea from "../components/Textarea";
import CustomButton from "../components/CustomButton";

const Main = () => {
    const [message, setMessage] = useState(null);
    const [words, setWords] = useState([]);
    const [loader, setLoader] = useState(false);
    const [valid, setValid] = useState(false);
    const [invalid, setInvalid] = useState(false);

    useEffect(() => {
        document.body.style.backgroundColor = "#ccc";
    }, []);

    const checkCorrectNess = async () => {
        try {
            setLoader(true);
            const response = await axios.post("/api/v1/check-correctness", { message });
            const { data } = response;
            setWords(data?.words || []);
            setInvalid(data?.words?.length > 0 || false);
            setValid(data?.words?.length === 0);
            setLoader(false);
        } catch (error) {
            console.log("🚀 ~ file: Main.js ~ error", error);
            setLoader(false);
            message.error("Something went wrong while checking!");
        }
    };
    return (
        <div className="">
            <Label for="exampleText">Type sentence here</Label>
            <Textarea
                type="textarea"
                valid={valid}
                disabled={loader}
                invalid={invalid}
                onChange={(value) => setMessage(value)} />
            <div className="mt-4 d-flex align-items-center justify-content-start">
                <p>Non English words: {words.join(", ")}</p>
            </div>
            <CustomButton
                onClick={checkCorrectNess}
                loading={loader}
                disabled={loader || !message}
            />
        </div>
    );
};

export default Main;

import React, { useState } from 'react';
import { Container, Form, Input, Button, Label} from 'reactstrap'


const Question4 = () => {

    const [userInput, setUserInput] = useState('')
    const [result, setResult] = useState('')
    const [error, setError] = useState(false)


    const handleUserInput = (event) => {

        event.preventDefault();
        setUserInput(event.target.value)

    }

    const openBrackets = ["{", "[", "("];
    const closingBrackets = ["}", "]", ")"];
    const match = {
        "{": "}",
        "[": "]",
        "(": ")"
    };

    const validate = (str) => {

        const keepOpeners = []

        for (const ch of str) {

            if (openBrackets.includes(ch)) { // open brackets
                keepOpeners.push(ch)
            }
            if (closingBrackets.includes(ch)) { // closing brackets
                //If keepOpeners is empty return false
                if (keepOpeners.length === 0) return false
                //pop last element from keepOpeners
                const popped_ch = keepOpeners.pop();

                // console.log(popped_ch, "-", ch)
                // popped_ch should match with ch
                if (ch !== match[popped_ch]) {
                    return false;
                }
            }
        }
        return keepOpeners.length === 0;

    }

    const handleValidate = (event) => {
        event.preventDefault();

        // console.log("Validate", validate(userInput))

        if (validate(userInput)) {
            setResult('Valid')
        } else {
            setResult('Not Valid')
        }

    }

    return (
        <div>
            <Container>
                <Form>
                    <Label>Please type a brackets</Label>
                    <Input
                        type="text"
                        value={userInput}
                        onChange={handleUserInput}
                    />
                    <Label>
                        Validation Result is {result}
                    </Label>
                    <br></br>
                    <Button color="primary" onClick={handleValidate}>Validate Brackets</Button>
                </Form>
            </Container>

        </div>
    );
}

export default Question4;

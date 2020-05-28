import React, { useState, useEffect } from 'react'
import { Form, Input, Label, Button } from 'reactstrap'

const Question2 = () => {

    //['a','b','c','d'] a 1 sec  > b 2 sec >  c 3 sec > d 8 sec
    // setTimeout should run on index of array

    const [userInput, setUserInput] = useState('')
    const [arr, setArr] = useState([])
    const [currentValue, setCurrentValue] = useState('')

    useEffect(() => {

        if (arr.length > 0) {

            for (const [index, el] of arr.entries()) {
                setTimeout(() => {
                    setCurrentValue(el)
                }, 1000 * (2 ** index))
            }
        }
        return clearTimeout();

    }, [arr])

    const handleSubmit = () => {
        let data = userInput.split(',')
        setArr(data)

    }

    const handleInput = (event) => {
        event.preventDefault()

        setUserInput(event.target.value);

    }

    return (
        <div>
            <Form>
                <Label>Print in Seconds App</Label>
                <Input
                    type="text"
                    value={userInput}
                    onChange={handleInput}
                    placeholder="Please type items with comma"
                />
            </Form>
            <Button onClick={handleSubmit} color="primary">Print</Button> <br />
            {currentValue}
        </div>
    )
}

export default Question2;
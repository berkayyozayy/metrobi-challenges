import React, { useState } from 'react';
import { Container, Form, Input, Label } from 'reactstrap'


const Question1 = () => {

  const [duplicates, setDuplicates] = useState([])

  const duplicatesItems = (arr) => {

    //@params arr : Array

    let sortedArr = [...arr].sort();
    let result = [];

    for (const [index, value] of sortedArr.entries()) {
      if (index !== sortedArr.length - 1 && sortedArr[index] === sortedArr[index + 1]) {
        if (!result.includes(value)) {
          result.push(sortedArr[index])
        }
      }
    }

    return result;
    // console.log(`Duplicates items in array : ${result}`);
  }


  const handleInput = (e) => {
    e.preventDefault();

    let data = e.target.value.split(',');
    let dups = duplicatesItems(data);

    setDuplicates(dups)

  }

  return (
    <div>
      <Container>
        <Form>
          <Label>Duplicates Items App</Label>
          <Input
            type="text"
            onChange={handleInput}
            placeholder="Please type items with comma"
          />
          <Label>Duplicates Items</Label> <br></br> {duplicates.length > 0 && duplicates.join(' ')} 
        </Form>
      </Container>
    </div>
  );
}

export default Question1;

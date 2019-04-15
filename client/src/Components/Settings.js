import React, { useState, useEffect } from "react";
import Paper from "@material-ui/core/Paper";
import Creation from "./CreationForm";
import Inputs from "./Inputs";
import TextField from "@material-ui/core/TextField";
import styled from "styled-components";
import { Button } from "@material-ui/core";

const Wrapper = styled.div`
  position: absolute;
  width: 80%;
  height: 90vh;
  > div {
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
  }
`;

export default function settings({ names, colors }) {
  const [isCreation, setIsCreation] = useState(typeof names !== undefined);
  const [value, setValue] = useState();

  function handleChange(event) {
    console.log(event.target.value);
    setValue(event.target.value);
  }

  return (
    <Wrapper>
      <Paper>
        {isCreation ? (
          <>
            <Creation
              change={handleChange}
              currentValue={value}
              save={setIsCreation}
            />
          </>
        ) : (
          <>
            <h2>Number of particiant is {value}</h2>
            <Button onClick={() => setIsCreation(true)}>Change</Button>
            <Inputs currentValue={value} />
          </>
        )}
      </Paper>
    </Wrapper>
  );
}

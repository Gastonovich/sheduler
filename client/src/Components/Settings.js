import React, { useState, useEffect } from "react";
import Paper from "@material-ui/core/Paper";
import Creation from "./CreationForm";
import Inputs from "./Inputs";
import styled from "styled-components";
import { Button } from "@material-ui/core";
import axios from 'axios';
import { withRouter } from 'react-router-dom';


const Wrapper = styled.div`
  position: absolute;
  width: 80%;
  height: 90vh;
  z-index: 10;
  > div {
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
  }
`;

function settings({ participants = ["Rick", "Morty"] , close, location}) {
  const [isCreation, setIsCreation] = useState(checkCreation(participants));
  const [value, setValue] = useState(participants.length);
  const [users, setUsers] = useState(participants);

  function checkCreation(arr) {
    for (let k in arr) {
      if (arr[k].length > 0) return true;
    }
    return false;
  }
  async function update(){
    close(false)
    let id = location.pathname.slice(9)
    await axios.post(`/api/shedule/${id}`, {params:{'id': id , 'participants': users}});
  }

  useEffect(() => {
    if (!isCreation) {
      setUsers(Array(+value).fill(""));
    }
  }, [value]);

  return (
    <Wrapper>
      <Paper>
        {!isCreation ? (
          <>
            <Creation
              changeValue={setValue}
              currentValue={value}
              save={setIsCreation}
            />
          </>
        ) : (
          <>
            <h2>Number of particiant is {value}</h2>
            <Button onClick={() => setIsCreation(false)}>Change</Button>
            <Inputs
              currentValue={value}
              users={users}
              setUsers={setUsers}
              isCreation={isCreation}
            />
          </>
        )}
      <Button onClick={()=> update()}>Save</Button>
      </Paper>
    </Wrapper>
  );
}

export default withRouter(settings)

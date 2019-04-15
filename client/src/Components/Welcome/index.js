import React from 'react';
import styled from 'styled-components';
import Button from '@material-ui/core/Button';
import axios from 'axios';
import { withRouter } from 'react-router-dom';

const Page = styled.section`
  font-size: 2em;
  width: 80%;
  height: 60%;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
`

function welcome(props) {

  async function createSheduler(){
    await axios.get('/api/create')
      .then((res)=> props.history.push(`./shedule/${res.data.id}`))
  }

  return(
    <Page>
      <h1>Welcome</h1>      
        <Button onClick={createSheduler}>
          Create Sheduler
        </Button>
    </Page>
  )
}

export default withRouter(welcome)
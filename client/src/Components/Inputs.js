import React from "react";
import TextField from "@material-ui/core/TextField";

export default function inputs({ currentValue, users = [], setUsers }) {
  const handleChangeInputs = index => event => {
    let arr = [...users];
    arr[index] = event.target.value;
    setUsers(arr);
  };

  let items = () => { 
    return users.map((el, index) => (
      <TextField
        id="outlined-name"
        label="Name"
        margin="normal"
        variant="outlined"
        value={el}
        key={index}
        onChange={handleChangeInputs(index)}
      />
    ));
  };

  return <>{items(currentValue)}</>;
}

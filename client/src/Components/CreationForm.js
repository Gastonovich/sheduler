import React from "react";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import Button from "@material-ui/core/Button";

export default function creationForm({ changeValue, currentValue, save }) {

  function handleChange(event) {
    changeValue(event.target.value);
  }
  return (
    <>
      <FormControl component="fieldset">
        <h1>Number of participants:</h1>
        <RadioGroup
          aria-label="position"
          name="position"
          value={currentValue}
          onChange={handleChange}
          row
        >
          <FormControlLabel
            value="2"
            control={<Radio />}
            label="2"
            labelPlacement="top"
          />
          <FormControlLabel
            value="3"
            control={<Radio color="primary" />}
            label="3"
            labelPlacement="top"
          />
          <FormControlLabel
            value="4"
            control={<Radio />}
            label="4"
            labelPlacement="top"
          />
          <FormControlLabel
            value="5"
            control={<Radio color="primary" />}
            label="5"
            labelPlacement="top"
          />
          <FormControlLabel
            value="6"
            control={<Radio />}
            label="6"
            labelPlacement="top"
          />
        </RadioGroup>
      </FormControl>
      {currentValue > 1 ? (
        <Button onClick={() => save(true)}>Save</Button>
      ) : (
        <h2>Choose number</h2>
      )}
    </>
  );
}

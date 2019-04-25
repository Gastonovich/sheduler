import React, { useState } from "react";
import Dialog from "../Dialog";
import Settings from "../Settings";
import { Button } from "@material-ui/core";

export default function shedule() {
  const [isEditing, setIsEditing] = useState(false);



  return (
    <>
      <Dialog />
      {isEditing ? <Settings close={setIsEditing} /> : null}
      <Button onClick={()=> setIsEditing(!isEditing)}>
        Edit
      </Button>
    </>
  );
}

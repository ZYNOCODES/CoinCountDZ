import { Checkbox } from '@mui/material';
import React from 'react'

export default function GoalItemOnlyOne({id, Name, Amount}) {
  return (
    <div className="GoalItemOnlyOne flex items-center gap-2">
      <Checkbox defaultChecked />
      <h4>{Name} : + {Amount} DA</h4>
    </div>
  );
}

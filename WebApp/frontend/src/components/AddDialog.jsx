import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { AiOutlinePlus } from "react-icons/ai";

export default function FormDialog() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button variant="outlined" onClick={handleClickOpen}>
        <div className="add-goal-btn flex items-center justify-center">
          <AiOutlinePlus className="icon" />
        </div>
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Add goal</DialogTitle>
        <DialogContent>
          <DialogContentText>
            To subscribe to this website, please enter your email address here.
            We will send updates occasionally.
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="goalname"
            label="Goal Description"
            type="text"
            fullWidth
          />
          <TextField
            autoFocus
            margin="dense"
            id="goalamount"
            label="Goal Amount"
            type="text"
            fullWidth
          />
          <TextField
            autoFocus
            margin="dense"
            id="deadline"
            type="date"
            fullWidth
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleClose}>Subscribe</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

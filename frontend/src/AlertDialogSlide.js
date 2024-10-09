import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent'
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import InfoIcon from '@mui/icons-material/Info';
import Typography from '@mui/material/Typography';
import SuccessDialog from './SuccessDialog';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function AlertDialogSlide({ open, handleClose, price }) {
  const [successOpen, setSuccessOpen] = React.useState(false);

  const handleConfirm = () => {
    handleClose();
    setSuccessOpen(true);
  };

  const handleSuccessClose = () => {
    setSuccessOpen(false);
  };

  return (
    <React.Fragment>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogContent sx={{ textAlign: 'center' }}>
          <InfoIcon sx={{ fontSize: 50, color: '#ff9800' }} />
          <Typography variant="h6" sx={{ mt: 2 }}>
            Piazza Offerta per {price}?
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="secondary">
            NO
          </Button>
          <Button onClick={handleConfirm} variant="contained">
            SI
          </Button>
        </DialogActions>
      </Dialog>

      {/* Success Dialog */}
      <SuccessDialog
        open={successOpen}
        handleClose={handleSuccessClose}
        message="Offerta piazzata con successo"
      />
    </React.Fragment>
  );
}

import * as React from 'react';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

export default function SuccessDialog({ open, handleClose, message }) {
  React.useEffect(() => {
    if (open) {
      const timer = setTimeout(() => {
        handleClose();
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [open, handleClose]);

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      aria-labelledby="success-dialog-title"
      aria-describedby="success-dialog-description"
    >
      <DialogContent sx={{ textAlign: 'center', py: 5 }}>
        <CheckCircleIcon sx={{ fontSize: 50, color: 'green' }} />
        <Typography variant="h6" sx={{ mt: 2 }}>
          {message}
        </Typography>
      </DialogContent>
    </Dialog>
  );
}

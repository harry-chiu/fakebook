import { useState, useEffect } from 'react';

export default (value, ref) => {
  const [open, setOpen] = useState(value);

  const handleOpen = (event) => {
    event.stopPropagation();
    setOpen(true);
  };

  const handleClose = (event) => setOpen(false);

  useEffect(() => {
    window.addEventListener('click', handleClose);

    return () => window.removeEventListener('click', handleClose);
  }, []);

  return [open, handleOpen, handleClose];
};

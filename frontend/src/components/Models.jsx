import React, { useContext, useState } from 'react';
import Button from '@mui/material/Button';
import { predictAda, predictKNN, predictRF, predictSVC, predictVotingHard, predictVotingSoft } from '../context/ModelActions';
import { Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Stack } from '@mui/material';
import ModelContext from '../context/ModelContext';

export default function Models() {
  const [result, setResult] = useState(null);
  const {location, num_attribs, cat_attribs, binary_columns} = useContext(ModelContext);

  const handleSubmit = async (callback) => {
    const res = await callback([{...location, ...num_attribs, ...cat_attribs, ...binary_columns}]);
    setResult(res);
  };

  const handleClose = () => {
    setResult(null);
  };

  return (
    <Stack
      direction="column"
      justifyContent="center"
      alignItems="center"
      spacing={2}
      padding={"25px"}
    >
      <Button fullWidth variant="contained" onClick={() => handleSubmit(predictSVC)}>SVC</Button>
      <Button fullWidth variant="contained" onClick={() => handleSubmit(predictRF)}>RF</Button>
      <Button fullWidth variant="contained" onClick={() => handleSubmit(predictKNN)}>KNN</Button>
      <Button fullWidth variant="contained" onClick={() => handleSubmit(predictAda)}>Ada</Button>
      <Button fullWidth variant="contained" onClick={() => handleSubmit(predictVotingHard)}>Voting Hard</Button>
      <Button fullWidth variant="contained" onClick={() => handleSubmit(predictVotingSoft)}>Voting Soft</Button>
      <Dialog open={result !== null} onClose={handleClose}>
        <DialogTitle>Prediction</DialogTitle>
        <DialogContent>
          <DialogContentText>
            {result !== null
              ? `Prediction: ${result}`
              : ""}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Close</Button>
        </DialogActions>
      </Dialog>
    </Stack>
  );
}

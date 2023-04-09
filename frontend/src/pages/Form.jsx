import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import StepContent from '@mui/material/StepContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Map from '../components/Map';
import Categorical from '../components/Categorical';
import Numerical from '../components/Numerical';
import Binary from '../components/Binary';
import Models from '../components/Models';
//components


const steps = [
  {
    label: 'Select your desired location',
    description: 'Click on the approximate location you will be traveling to',
    Component: Map,
  },
  {
    label: 'Categorical features',
    description: `Select a value for each of the following categorical fields.`,
    Component: Categorical,
  },
  {
    label: 'Numerical features',
    description:
      'Select a value for each of the following numerical fields.',
    Component: Numerical,
  },
  {
    label: 'Yes/No',
    description: `Select all the values that apply.`,
    Component: Binary,
  },
  {
    label: 'Select a Model',
    Component: Models,
  }
];

export default function Form() {
  const [activeStep, setActiveStep] = React.useState(0);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };


  return (
    <Box sx={{ width: '100%', minHeight: '90vh' }}>
      <Stepper activeStep={activeStep} orientation="vertical">
        {steps.map((step, index) => (
          <Step key={step.label}>
            <StepLabel
              optional={
                index === 3 ? (
                  <Typography variant="caption">Last step</Typography>
                ) : null
              }
            >
              {step.label}
            </StepLabel>
            <StepContent>
              <Typography>{step.description}</Typography>
              <step.Component/>
              <Box sx={{ mb: 2 }}>
                <div>
                  <Button
                    variant="contained"
                    onClick={handleNext}
                    sx={{ mt: 1, mr: 1 }}
                  >
                    {index === steps.length - 1 ? 'Finish' : 'Continue'}
                  </Button>
                  <Button
                    disabled={index === 0}
                    onClick={handleBack}
                    sx={{ mt: 1, mr: 1 }}
                  >
                    Back
                  </Button>
                </div>
              </Box>
            </StepContent>
          </Step>
        ))}
      </Stepper>
    </Box>
  );
}


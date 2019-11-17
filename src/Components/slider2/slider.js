import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';
import Input from '@material-ui/core/Input';
import Style from './style'

const useStyles = makeStyles({
  root: {
    width: 700,
    
},
  input: {
    width: 42,
  },
});

export default function InputSlider() {
  const classes = useStyles();
  const [value, setValue] = React.useState(300);

  const handleSliderChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleInputChange = event => {
    setValue(event.target.value === '' ? '' : Number(event.target.value));
  };

  const handleBlur = () => {
    if (value < 1000) {
      setValue(0);
    } else if (value > 1000) {
      setValue(1000);
    }
  };

  return (
    <div className={classes.root}>
      
      <div className="input d-flex justify-content-around">
      <Grid item>
          <Input
            className={classes.input}
            value={value}
            margin="dense"
            onChange={handleInputChange}
            onBlur={handleBlur}
            inputProps={{
              step: 100,
              min: 500,
              max: 1000,
              type: 'number',
            }}
          />
        </Grid>
      </div>


      <Grid container spacing={2} alignItems="center">
        <Grid item xs>
          <Slider 
            value={typeof value === 'number' ? value : 0}
            onChange={handleSliderChange}
            aria-labelledby="input-slider"
          />
        </Grid>

      
      </Grid>
    <Style/>
    </div>
  );
}


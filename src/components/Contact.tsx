import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import '../App.scss';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      '& .MuiTextField-root': {
        margin: theme.spacing(4),
        width: '800px',
      
      },
    },
  }),
);

export default function MultilineTextFields() {
  const classes = useStyles();
  const [value, setValue] = React.useState('');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  return (
    <div className="contact-box">
      <h2>Contact</h2>
      <form className={classes.root} noValidate autoComplete="off">
        <div >
          <TextField
            id="standard-multiline-flexible"
            label="お名前"
            multiline
            rowsMax={4}
            value={value}
            onChange={handleChange}
          />
          <TextField
            id="standard-textarea"
            label="メールアドレス"
            placeholder=""
            multiline
          />
          <TextField
            id="standard-multiline-static"
            label="お問い合わせ内容"
            multiline
            rows={4}
            defaultValue=""
          />
          <div className="contact-button-box">
            <Button variant="contained" color="secondary" className="contact-button">
              送信
            </Button>
          </div>
        </div>
      </form>
    </div>
  );
}

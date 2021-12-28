import React, { useRef } from "react";
import emailjs from "emailjs-com";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import TextField from "@mui/material/TextField";
import { makeStyles } from "@mui/styles";
import { Grid, Typography } from "@mui/material";

const useStyles = makeStyles({
  root: {
    width: "100%",
    backgroundColor: "#4df1aa0e",
    marginTop: "2rem",
    "& .MuiOutlinedInput-root": {
      "&.Mui-focused fieldset": {
        borderColor: "#4df1aa",
      },
    },
  },
});

const ContactForm = () => {
  const classes = useStyles();

  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_vchygrf",
        "template_9mmp12q",
        form.current,
        "user_6CdI1dLaTNoyiBjafhSHl"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <Box id="contact" sx={{ flexGrow: 1, mt: "10rem" }}>
      <Typography
        variant="h3"
        component="div"
        sx={{
          flexGrow: 1,
          textAlign: { xs: "center", sm: "center", md: "left" },
          mb: 1,
        }}
        className="neon-text"
      >
        Contact
      </Typography>
      <Paper
        elevation={24}
        sx={{
          backgroundColor: "inherit",
          p: 2,
          m: "auto",
          width: { md: "80%" },
        }}
      >
        <Typography
          variant="h5"
          component="div"
          sx={{ flexGrow: 1, mt: 2 }}
          className="light-text"
          align="center"
        >
          Would you like to work with me? Awesome!
        </Typography>
        <form ref={form} onSubmit={sendEmail}>
          <TextField
            label="Murad"
            name="to_name"
            value="Murad"
            sx={{ display: "none" }}
            className={classes.root}
            InputProps={{ style: { color: "#4df1aa" } }}
            InputLabelProps={{ style: { color: "#4df1aa" } }}
            variant="outlined"
            required
          />
          <TextField
            label="Your Name"
            name="from_name"
            className={classes.root}
            InputProps={{ style: { color: "#4df1aa" } }}
            InputLabelProps={{ style: { color: "#4df1aa" } }}
            variant="outlined"
            required
          />
          <TextField
            label="Your Email"
            name="reply_to"
            className={classes.root}
            InputProps={{ style: { color: "#4df1aa" } }}
            InputLabelProps={{ style: { color: "#4df1aa" } }}
            variant="outlined"
            type="email"
            required
          />
          <TextField
            label="Message"
            name="message"
            className={classes.root}
            InputProps={{ style: { color: "#4df1aa" } }}
            InputLabelProps={{ style: { color: "#4df1aa" } }}
            variant="outlined"
            multiline
            rows={4}
            required
          />
          <Grid sx={{ fontWeight: "bold", mt: 4, textAlign: "center" }}>
            <button type="submit" className="hovered-btn">
              Let's Talk
            </button>
          </Grid>
        </form>
      </Paper>
    </Box>
  );
};

export default ContactForm;

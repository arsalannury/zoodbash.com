import { useState } from "react";
import {
  Backdrop,
  Box,
  Modal,
  Fade,
  Button,
  Typography,
  Grid,
  Rating,
} from "@mui/material";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const DetailSeler = ({ seler, open, handleClose }) => {
  return (
    <>
      <div>
        <Modal
          aria-labelledby="transition-modal-title"
          aria-describedby="transition-modal-description"
          open={open}
          onClose={handleClose}
          closeAfterTransition
          BackdropComponent={Backdrop}
          BackdropProps={{
            timeout: 500,
          }}
        >
          <Fade in={open}>
          <p>{seler.seler}</p>
          <Rating name="read-only" value={seler.score} readOnly />

          <Grid>
            <Grid>
              <p>ارسال به موقع</p>
              <p>{seler.send}</p>
            </Grid>
            <Grid>
              <p>تاخیر در ارسال</p>
              <p>{seler.referral}</p>
            </Grid>
            <Grid>
              <p>لغو سفارش</p>
              <p>{seler.cancellation}</p>
            </Grid>
          </Grid>
          </Fade>
        </Modal>
      </div>
    </>
  );
};

export default DetailSeler;

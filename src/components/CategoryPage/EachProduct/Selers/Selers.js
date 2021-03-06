import {
  Div,
  SelerBox,
  Title,
  Shop,
  Delivery,
  DetailSeler,
  More,
  Span,
  Percents,
} from "./SelersStyle";
import React from "react";
import { Grid, Rating, Button, Typography, Divider, Box } from "@mui/material";
import { useEffect, useState } from "react";
import { createClient } from "@supabase/supabase-js";
import shop from "../../../../images/shop.png";
import AddShoppingCartOutlinedIcon from "@mui/icons-material/AddShoppingCartOutlined";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import SelersListLoading from "../../../Loading/SelersListLoading";

const Selers = () => {
  const [selersList, getSelersList] = useState([]);
  const [isLoading,setLoading] = useState(false);

  const supabase = createClient(
    "https://hzsqceossbxbfhtyrkme.supabase.co",
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imh6c3FjZW9zc2J4YmZodHlya21lIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NTM0MTQ0MjUsImV4cCI6MTk2ODk5MDQyNX0.UU4r4sSVB2aN87UiivJlJHXy0rRRKgSmDLksonMSlOk"
  );
  useEffect(() => {
    setLoading(true);
    (async function getData() {
      try {
        const { data: selers, error } = await supabase
          .from("selers")
          .select("*");
        getSelersList(selers);
        setLoading(false);
      } catch (error) {
        console.log(error);
        setLoading(true);
      }
    })();
  }, []);
  return (
    <>
    {isLoading ? (
      <SelersListLoading />
    ) : (
<Grid container alignItems={"center"} justifyContent={"center"}>
        {selersList && selersList.map((seler) => (
          <React.Fragment key={seler.id}>
            <Div p={1} m={2} key={seler.id}>
              <SelerBox
                container
                alignItems={"center"}
                justifyContent={"space-between"}
                rowGap={3}
                position={"relative"}
              >
                <DetailSeler
                  className="detail"
                  container
                  alignItems={"center"}
                  justifyContent={"space-around"}
                  flexDirection={"column"}
                >
                  <Typography> ?????????????? {seler.seler}</Typography>
                  <Divider sx={{ width: "100%", margin: "10px 0 " }} />
                  <More
                    container
                    alignItems={"flex-start"}
                    justifyContent={"space-around"}
                    flexDirection={"column"}
                  >
                    <Typography sx={{ alignSelf: "center" }}>
                      {" "}
                      ?????????? ???? {seler.status} ??????
                    </Typography>
                    <Typography sx={{ color: seler.situation === "????????" ? "#38b000" : "#fca311", margin: "15px 0" }}>
                      {" "}
                      <Span>????????????</Span> {seler.situation}
                    </Typography>
                  </More>
                  <Divider sx={{ width: "100%", margin: "10px 0 " }} />
                  <Percents
                    container
                    alignItems={"center"}
                    justifyContent={"space-around"}
                    flexWrap={"nowrap"}
                  >
                    <Grid
                      container
                      alignItems={"center"}
                      justifyContent={"space-evenly"}
                      flexDirection={"column"}
                    >
                      <Typography sx={{ fontSize: ".7em",color: "#999" }}>
                        ???????????? ????????{" "}
                      </Typography>
                     <Box sx={{width:"70%",margin:"5px 0 0 0"}}>
                     <CircularProgressbar
                        styles={buildStyles({
                          pathColor: seler.cancellation === 100 ? "#38b000" : "#fca311",
                          textColor: seler.cancellation === 100 ? "#38b000" : "#fca311",
                        })}
                        strokeWidth={5}
                        text={seler.cancellation}
                        value={seler.cancellation}
                      />
                     </Box>
                    </Grid>
                    <Grid
                      container
                      alignItems={"center"}
                      justifyContent={"space-evenly"}
                      flexDirection={"column"}
                    >
                      <Typography sx={{ fontSize: ".7em",color: "#999" }}>
                        ?????? ??????????
                      </Typography>
                      <Box sx={{width:"70%",margin:"5px 0 0 0"}}>
                      <CircularProgressbar
                        styles={buildStyles({
                          pathColor: seler.referral === 100 ? "#38b000" : "#fca311",
                          textColor: seler.referral === 100 ? "#38b000" : "#fca311",
                        })}
                        strokeWidth={5}
                        text={seler.referral}
                        value={seler.referral}
                      />
                      </Box>
                    </Grid>
                    <Grid
                      container
                      alignItems={"center"}
                      justifyContent={"space-evenly"}
                      flexDirection={"column"}
                    >
                      <Typography sx={{ fontSize: ".7em",color: "#999" }}>
                        ?????????? ???? ????????
                      </Typography>
                      <Box sx={{width:"70%",margin:"5px 0 0 0"}}>
                      <CircularProgressbar
                        styles={buildStyles({
                          pathColor: seler.send === 100 ? "#38b000" : "#fca311",
                          textColor: seler.send === 100 ? "#38b000" : "#fca311",
                        })}
                        strokeWidth={5}
                        text={seler.send}
                        value={seler.send}
                      />
                      </Box>
                    </Grid>
                  </Percents>
                </DetailSeler>

                <Grid
                  container
                  alignItems={"flex-start"}
                  justifyContent={"flex-start"}
                  item
                  sx={12}
                  sm={12}
                  md={6}
                  lg={6}
                  xl={6}
                >
                  <Shop src={shop} />
                  <Grid mr={2}>
                    <Title>{seler.seler}</Title>
                    <Delivery>{seler.delivery}</Delivery>
                  </Grid>
                </Grid>

                <Grid>
                  <Title>?????????? ???? {seler.status} ?????? </Title>
                  <Rating name="read-only" value={seler.score} readOnly />
                </Grid>

                <Button
                  startIcon={<AddShoppingCartOutlinedIcon />}
                  size={"small"}
                  sx={{
                    marginTop: "0",
                    "& .MuiButton-startIcon": { margin: "5px" },
                    "@media screen and (max-width:432px)" : {
                      margin: "auto"
                    }
                  }}
                  variant="outlined"
                  color="success"
                >
                  ???????????? ???? ?????? ????????
                </Button>
              </SelerBox>
            </Div>
          </React.Fragment>
        ))}
      </Grid>
    )}
      
    </>
  );
};

export default Selers;

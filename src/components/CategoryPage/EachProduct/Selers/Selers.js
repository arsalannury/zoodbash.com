import { Div, SelerBox, Title, Shop, Delivery } from "./SelersStyle";
import React from "react";
import { Grid, Rating, Button } from "@mui/material";
import { useEffect, useState } from "react";
import { createClient } from "@supabase/supabase-js";
import shop from "../../../../images/shop.png";
import AddShoppingCartOutlinedIcon from "@mui/icons-material/AddShoppingCartOutlined";

const Selers = () => {
  const [selersList, getSelersList] = useState([]);

  const supabase = createClient(
    "https://hzsqceossbxbfhtyrkme.supabase.co",
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imh6c3FjZW9zc2J4YmZodHlya21lIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NTM0MTQ0MjUsImV4cCI6MTk2ODk5MDQyNX0.UU4r4sSVB2aN87UiivJlJHXy0rRRKgSmDLksonMSlOk"
  );
  useEffect(() => {
    (async function getData() {
      try {
        const { data: selers, error } = await supabase
          .from("selers")
          .select("*");
        getSelersList(selers);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);
  return (
    <>
      <Grid m={6}>
        {selersList.map((seler) => (
          <Div p={1} m={2} key={seler.id}
          // item
          // sx={12}
          // sm={12}
          // md={6}
          // lg={6}
          // xl={6}
          >
            <SelerBox
              container
              alignItems={"center"}
              justifyContent={"space-between"}
            >
              <Grid 
              container
              alignItems={'flex-start'}
              justifyContent={'flex-start'}
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

              {/* <Grid> */}
                <Grid>
                  <Title>{seler.status}</Title>
                  <Rating name="read-only" value={seler.score} readOnly />
                </Grid>
              {/* </Grid> */}

              <Button
                startIcon={<AddShoppingCartOutlinedIcon />}
                size={"small"}
                sx={{
                  marginTop: "0",
                  "& .MuiButton-startIcon": { margin: "5px" },
                }}
                variant="contained"
                color="success"
              >
                افزودن به سبد خرید
              </Button>
            </SelerBox>
          </Div>
        ))}
      </Grid>
    </>
  );
};

export const MemoSelers = React.memo(Selers);

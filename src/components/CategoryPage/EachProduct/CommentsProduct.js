import React, { useState } from "react";
import PropTypes from "prop-types";
import {
  Box,
  Tab,
  Tabs,
  Typography,
  Avatar,
  ListItemAvatar,
  ListItemText,
  Divider,
  ListItem,
  List,
  Button,
} from "@mui/material";
import CommentsTheme from "../../../Theme/CommentsTheme";
import {
  TabPanel,
  a11yProps,
} from "../../../Theme/ConfigMuiComponents/ConfigTabsComponent";
import Questions from "./Questions";

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

export default function CommentsProduct() {
  const [value, setValue] = useState(0);
  const [showComment, setShowComment] = useState(10);
  let CommentIndex = 0;
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const changePageComments = () => {
    setShowComment(showComment === 10 ? 20 : 10);
  };

  return (
    <>
      <CommentsTheme>
        <Box sx={{ width: "100%",marginTop: "50px" }}>
          <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
            <Tabs
              value={value}
              onChange={handleChange}
              aria-label="basic tabs example"
            >
              <Tab label="دیدگاه کاربران" {...a11yProps(0)} />
              <Tab label="پرسش و پاسخ" {...a11yProps(1)} />
              <Tab label="فروشندگان کالا" {...a11yProps(2)} />
            </Tabs>
          </Box>
          <TabPanel value={value} index={0}>
            <List
              sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
            >
              {Array(showComment)
                .fill({})
                .map(() => (
                  <>
                    {/* {++CommentIndex} */}

                    <ListItem alignItems="flex-start">
                      <ListItemAvatar>
                        <Avatar
                          alt="Cindy Baker"
                          src="/static/images/avatar/3.jpg"
                        />
                      </ListItemAvatar>
                      <ListItemText
                        primary="خوشم اومد"
                        secondary={
                          <React.Fragment>
                            <Typography
                              sx={{ display: "inline" }}
                              component="span"
                              variant="body2"
                              color="#0288d1"
                            >
                              کاربر زودباش
                            </Typography>
                            {" -- بنظرم نسبت به قیمتش ارزش خرید بالایی داره"}
                          </React.Fragment>
                        }
                      />
                    </ListItem>
                    <Divider variant="inset" component="li" />
                  </>
                ))}
            </List>
            <Button
              onClick={changePageComments}
              variant="outlined"
            >
              {showComment === 10 ? "نمایش بیشتر" : "نمایش کمتر"}
            </Button>
          </TabPanel>
          <TabPanel value={value} index={1}>
            <Questions />
          </TabPanel>
          <TabPanel value={value} index={2}>
            Item Three
          </TabPanel>
        </Box>
      </CommentsTheme>
    </>
  );
}

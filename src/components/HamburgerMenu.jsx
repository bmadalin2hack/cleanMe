import {
  Drawer,
  List,
  ListItemButton,
  ListItemText,
  IconButton,
} from "@mui/material";
import React, { useState } from "react";
import MenuOpenIcon from "@mui/icons-material/MenuOpen";
import { HEADER_COPY } from "../utils/copy";

const HamburgerComp = () => {
  const [openDrawer, setOpenDrawer] = useState(false);
  return (
    <React.Fragment>
      <Drawer
        sx={{
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            boxSizing: "border-box",
          },
        }}
        anchor="right"
        open={openDrawer}
        onClose={() => setOpenDrawer(false)}
      >
        <List>
          {HEADER_COPY.NAV_ITEMS.map((page, index) => (
            <ListItemButton key={index}>
              <ListItemText>{page}</ListItemText>
            </ListItemButton>
          ))}
        </List>
      </Drawer>
      <IconButton
        sx={{ color: "white", marginLeft: "auto" }}
        onClick={() => setOpenDrawer(!openDrawer)}
      >
        <MenuOpenIcon />
      </IconButton>
    </React.Fragment>
  );
};

export default HamburgerComp;

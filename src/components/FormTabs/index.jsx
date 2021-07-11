import React from "react";
import PropTypes from "prop-types";
import Box from "@material-ui/core/Box";
import Formulario from "pages/Formulario";

function TabPanel(props) {
  const { children, value, index, ...other } = props;
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`wrapped-tabpanel-${index}`}
      aria-labelledby={`wrapped-tab-${index}`}
      {...other}
      style={{height: "100%"}}
    >
      {value === index && (
        <Box p={3} style={{height: "100%"}}>
          {children}
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired
};

export default function TabsWrappedLabel({tabState}) {
  console.log('render formtabs')
  return (
    <div>
      <TabPanel value={tabState} index="one">
        <Formulario/>
      </TabPanel>
      <TabPanel value={tabState} index="two">
        Item Two
      </TabPanel>
      <TabPanel value={tabState} index="three">
        Item Three
      </TabPanel>
    </div>
  );
}

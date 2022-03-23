import React from "react";
import PropTypes from "prop-types";
import TypographyComponent from "../../atoms/BlinkTypography";
import { Box, Input, InputAdornment } from "@mui/material";

const InputField = ({ url, alt, text, onUpdateValue  }) => {
  return (
    <Input
      data-testid="input"
      sx={{ pb: 2 }}
      startAdornment={
        <InputAdornment position="start">
          <Box sx={{ width: "25px", mr: 2 }}>
            <img src={url} alt={alt} />
          </Box>
          <TypographyComponent
            variant="subtitle1"
            color="textColors.mediumEmphasis"
            children={text}
          />
        </InputAdornment>
      }
      onChange={onUpdateValue}
    />
  );
};

InputField.propTypes = {
  text: PropTypes.string.isRequired,
  alt: PropTypes.string,
  url: PropTypes.string,
  onUpdateValue: PropTypes.string,
};

export default InputField;

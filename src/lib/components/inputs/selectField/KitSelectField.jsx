import React, { useState, useEffect } from 'react';
import { useMinimalSelectStyles } from '@mui-treasury/styles/select/minimal';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

// Original design here: https://github.com/siriwatknp/mui-treasury/issues/540

const KitSelectField = (props) => {
  const { options, onChange } = props;
  const [val, setVal] = useState(null);

  useEffect(() => {
    if (options[0]) {
      setVal(options[0].value);
    }
  }, []);

  const handleChange = (event) => {
    setVal(event.target.value);
    onChange(event.target.value);
  };

  const minimalSelectClasses = useMinimalSelectStyles();

  const iconComponent = (p) => (
    <ExpandMoreIcon className={`${p.className} ${minimalSelectClasses.icon}`} />
  );

  // moves the menu below the select input
  const menuProps = {
    classes: {
      paper: minimalSelectClasses.paper,
      list: minimalSelectClasses.list,
    },
    anchorOrigin: {
      vertical: 'bottom',
      horizontal: 'left',
    },
    transformOrigin: {
      vertical: 'top',
      horizontal: 'left',
    },
    getContentAnchorEl: null,
  };

  const renderChild = () => options.map((option) => (
    <MenuItem value={option.value}>{option.text}</MenuItem>
  ));

  return (
    <FormControl>
      <Select
        disableUnderline
        classes={{ root: minimalSelectClasses.select }}
        MenuProps={menuProps}
        IconComponent={iconComponent}
        value={val}
        onChange={handleChange}
      >
        {renderChild()}
      </Select>
    </FormControl>
  );
};

export default KitSelectField;

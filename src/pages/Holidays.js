import { Routes, useNavigate } from 'react-router-dom';
import { Box, Menu, MenuItem, Button } from '@mui/material';
import PublicIcon from '@mui/icons-material/Public';
import HolidayVillageIcon from '@mui/icons-material/HolidayVillage';
import React from 'react';

function Holidays() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const navigate = useNavigate();
  return (
    <Box>
      <Button onClick={e => setAnchorEl(e.currentTarget)} startIcon={<PublicIcon />}>
        Holidays
      </Button>
      <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={() => setAnchorEl(null)}>
        <MenuItem onClick={() => { setAnchorEl(null); navigate('international'); }}>
          <PublicIcon/> International Packages
        </MenuItem>
        <MenuItem onClick={() => { setAnchorEl(null); navigate('domestic'); }}>
          <HolidayVillageIcon/> Domestic Packages
        </MenuItem>
      </Menu>
      <Routes>
        {/* Define subroutes if needed */}
      </Routes>
    </Box>
  );
}
export default Holidays;
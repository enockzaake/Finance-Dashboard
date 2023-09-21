
import { Link } from 'react-router-dom';
import { Box, Typography,useTheme } from '@mui/material';
import PixIcon from '@mui/icons-material/Pix';

import FlexBetween from '@/components/FlexBetween';
import { useState } from 'react';


const Navbar = () => {
    const {palette} = useTheme();  
    const [selected,setSelected] = useState("dashboard");

  return (
    <FlexBetween mb="0.25rem" p="0.5rem 0rem" color={palette.grey[300]} >
      {/* Left side */}
      <FlexBetween gap="0.75rem">
        <PixIcon sx={{fontSize:"40px"}}/>
        <Typography variant='h4' fontSize="16px">Financeer</Typography>
      </FlexBetween>

      {/* Right side */}
      <FlexBetween gap="2rem">
        <Box sx={{"&:hover":{color:palette.primary[100]}}}>
          <Link to='/' onClick={()=>setSelected("dashboard")}
          style={{
            color:selected === "dashboard"? "inherit" :palette.grey[700],
            textDecoration:"inherit"
          }}
          
          >Dashboard</Link>
        </Box>
        <Box sx={{"&:hover":{color:palette.primary[100]}}}>
          <Link to='/predictions' onClick={()=>setSelected("dashboard")}
          style={{
            color:selected === "dashboard"? "inherit" :palette.grey[700],
            textDecoration:"inherit"
          }}
          
          >Predictions</Link>
        </Box>
      </FlexBetween>
    </FlexBetween>
  )
}

export default Navbar
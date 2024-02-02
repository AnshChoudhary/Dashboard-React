import { Box,IconButton, useTheme } from "@mui/material";
import { useContext } from "react";
import { ColorModeContext, tokens } from "../../themes";
import InputBase from "@mui/material/InputBase";
import { LightModeOutlinedIcon } from "@mui/icons-material/LightModeOutlined";
import { DarkModeOutlinedIcon } from "@mui/icons-material/LightModeOutlined";
import { NotificationsOutlinedIcon } from "@mui/icons-material/LightModeOutlined";
import { SettingsOutlinedIcon } from "@mui/icons-material/LightModeOutlined";
import { PersonOutlinedIcon } from "@mui/icons-material/LightModeOutlined";
import { SearchOutlinedIcon } from "@mui/icons-material/LightModeOutlined";

const Topbar = () => {
    const theme = useTheme();
    const colors = tokens(theme.paletter.mode);
    const colorMode = useContext(ColorModeContext);

    return <Box display="flex" justifyContent="space-between" p={2}>
        {}
        <Box 
            display='flex' 
            backgroundColor={colors.primary[400]}
            borderRadius= "3px"
        >
            <InputBase sx={{ml:2, fl:1}} placeholder="Search" />
            <IconButton>
                <SearchIcon />
            </IconButton>
        </Box>

        {/* ICONS */}
        <Box display='flex'>
            <IconButton onClick={colorMode.toggleColorMode}>
                {theme.palette.mode === 'dark' ? (
                    <DarkModeOutlinedIcon />
                    ) : (<LightModeOutlinedIcon />)
                }
            </IconButton>
            <IconButton>
                <NotificationsOutlinedIcon />
            </IconButton>
            <IconButton>
                <SettingsOutlinedIcon />
            </IconButton>
            <IconButton>
                <PersonOutlinedIcon />
            </IconButton>
        </Box>
    </Box>;
};

export default Topbar; 
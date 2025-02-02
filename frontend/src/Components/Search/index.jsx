import React from 'react'
import { styled, alpha } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";

import InputBase from "@mui/material/InputBase";

import SearchIcon from "@mui/icons-material/Search";

const SearchIconWrapper = styled("div")(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: "inherit",
    "& .MuiInputBase-input": {
        padding: theme.spacing(1, 1, 1, 0),
        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        transition: theme.transitions.create("width"),
        width: "100%",
        [theme.breakpoints.up("md")]: {
            width: "20ch"
        }
    }
}));

const Search = () => {
    return (
        <AppBar position="static">
            <Toolbar>
                <Search>
                    <SearchIconWrapper>
                        <SearchIcon />
                    </SearchIconWrapper>
                    <StyledInputBase
                        placeholder="Search…"
                        inputProps={{ "aria-label": "search" }}
                    />
                </Search>

                {/* <Box sx={{ display: { xs: "flex", md: "none" } }}></Box> */}
            </Toolbar>
        </AppBar>
    )
}

export default Search
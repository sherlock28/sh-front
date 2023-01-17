import React from "react"
import { Menu, MenuButton, MenuItem, MenuList, Avatar } from "@chakra-ui/react";
import { useDispatch } from "react-redux";
import { useLocation } from "wouter";
import { paths } from "config/paths";
import { signOutAction } from "store/slices/authSlice";

export function AccountNav({ username }) {
    // eslint-disable-next-line
    const [_, setLocation] = useLocation();
    const dispatch = useDispatch();

    const goToMyAccount = () => {
        setLocation(`/cuenta/${username}`);
    };

    const handleSubmit = () => {
        dispatch(signOutAction());
        setLocation(paths.landing);
    };

    return (
        <Menu>
            <MenuButton>
                <Avatar name={username} />
            </MenuButton>
            <MenuList color="black">
                <MenuItem onClick={goToMyAccount}>Mi Cuenta</MenuItem>
                <MenuItem onClick={handleSubmit}>Cerrar sesión</MenuItem>
            </MenuList>
        </Menu>
    );
}

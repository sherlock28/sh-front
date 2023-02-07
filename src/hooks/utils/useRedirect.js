import { paths } from "config/paths";
import { useSelector } from "react-redux";
import { useLocation } from "wouter";
import { authSelector } from "store/slices/authSlice";

export function useRedirect() {

    const [_, setLocation] = useLocation();

    const { isAuthenticated } = useSelector(authSelector);

    if (isAuthenticated) {
        setLocation(paths.search);
    }

    return { isAuthenticated }
}

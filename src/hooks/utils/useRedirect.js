import { useSelector } from "react-redux";
import { authSelector } from "store/slices/authSlice";

export function useRedirect() {

    const { isAuthenticated, user_category } = useSelector(authSelector);

    return { isAuthenticated, user_category }
}

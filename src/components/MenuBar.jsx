import {NavigationMenu, NavigationMenuList,} from "@/components/ui/navigation-menu"
import CustomLink from "@/components/CustomLink";

function MenuBar() {
    return (
        <NavigationMenu>
            <NavigationMenuList>
                <CustomLink href="/login">
                    Login
                </CustomLink>
                <CustomLink href="/logout">
                    Logout
                </CustomLink>
                <CustomLink href="/register">
                    Register
                </CustomLink>
            </NavigationMenuList>
        </NavigationMenu>
    );
}

export default MenuBar;
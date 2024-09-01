import {NavigationMenu, NavigationMenuList,} from "@/components/ui/navigation-menu"
import CustomLink from "@/components/CustomLink";

function MenuBar() {
    return (
        <NavigationMenu>
            <NavigationMenuList>
                <CustomLink href="/settings">
                    Settings
                </CustomLink>
                <CustomLink href="/profile">
                    Profile
                </CustomLink>
            </NavigationMenuList>
        </NavigationMenu>
    );
}

export default MenuBar;
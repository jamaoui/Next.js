import {NavigationMenuLink, navigationMenuTriggerStyle} from "@/components/ui/navigation-menu";
import Link from "next/link";

export default function CustomLink({children, ...props}) {
    return <Link {...props} legacyBehavior passHref>
        <NavigationMenuLink className={navigationMenuTriggerStyle()}>
            {children}
        </NavigationMenuLink>
    </Link>
}

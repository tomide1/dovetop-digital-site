import { cookies } from "next/headers";

const NAME = "sidebar-collapsed";

export interface SidebarCookie {
  isCollapsed: boolean;
}

export const sidebarCookie = {
  get(): SidebarCookie {
    const cookie = cookies().get(NAME);
    const isCollapsed = cookie?.value === "true";

    return { isCollapsed };
  },
  set(value: SidebarCookie) {
    cookies().set(NAME, String(value.isCollapsed));
  },
};

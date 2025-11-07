"use client";

import Logo from "@/components/ui/logo";
import { useSidebarContext } from "@/contexts/sidebar-context";
import { useMediaQuery } from "@/hooks/use-media-query";
import { useGlobal } from "@/lib/context/GlobalContext";
import { createSPASassClient } from "@/lib/supabase/client";
import {
  Dropdown,
  Navbar,
} from "flowbite-react";
import Image from "next/image";
import Link from "next/link";
import {
  HiMenuAlt1,
  HiSearch,
  HiX,
} from "react-icons/hi";

export function DashboardNavbar() {
  const sidebar = useSidebarContext();
  const { user } = useGlobal();
  const isDesktop = useMediaQuery("(min-width: 1024px)");

  function handleToggleSidebar() {
    if (isDesktop) {
      sidebar.desktop.toggle();
    } else {
      sidebar.mobile.toggle();
    }
  }

  const handleLogout = async () => {
      try {
          const client = await createSPASassClient();
          await client.logout();
      } catch (error) {
          console.error('Error logging out:', error);
      }
  };

  const getInitials = (email: string) => {
      const parts = email.split('@')[0].split(/[._-]/);
      return parts.length > 1
          ? (parts[0][0] + parts[1][0]).toUpperCase()
          : parts[0].slice(0, 2).toUpperCase();
  };

  return (
    <Navbar
      fluid
      className="fixed top-0 z-30 w-full border-b border-gray-200 bg-white p-0 sm:p-0 dark:border-gray-700 dark:bg-gray-800"
    >
      <div className="w-full p-3 pr-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <button
              onClick={handleToggleSidebar}
              className="mr-3 cursor-pointer rounded p-2 text-gray-600 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
            >
              <span className="sr-only">Toggle sidebar</span>
              {/* mobile */}
              <div className="lg:hidden">
                {sidebar.mobile.isOpen ? (
                  <HiX className="h-6 w-6" />
                ) : (
                  <HiMenuAlt1 className="h-6 w-6" />
                )}
              </div>
              {/* desktop */}
              <div className="hidden lg:block">
                <HiMenuAlt1 className="h-6 w-6" />
              </div>
            </button>
            <Navbar.Brand as={Link} href="/" className="mr-14">
              <Logo/>
              <span className="pl-2 self-center whitespace-nowrap text-2xl font-semibold dark:text-white">
                Dovetop Digital
              </span>
            </Navbar.Brand>
          </div>
          <div className="flex items-center lg:gap-3">
            <div className="flex items-center">
              <button className="cursor-pointer rounded p-2 text-gray-500 hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:ring-2 focus:ring-gray-100 lg:hidden dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:bg-gray-700 dark:focus:ring-gray-700">
                <span className="sr-only">Search</span>
                <HiSearch className="h-6 w-6" />
              </button>
              <div className="ml-3 flex items-center">
                 <Dropdown
                    className="rounded"
                    arrowIcon={false}
                    inline
                    label={
                      <div >
                        <div className="w-10 h-10 border border-white rounded-full flex items-center justify-center">
                          <span className="text-white text-primary-700 font-medium">
                              {user ? getInitials(user.email) : '??'}
                          </span>
                        </div>
                      </div>
                    }
                  >
                    <Dropdown.Header className="px-4 py-3">
                        <span className="block text-sm">Admin</span>
                        <span className="block truncate text-sm font-medium">
                          {user?.email}
                        </span>
                      </Dropdown.Header>
                      <Dropdown.Divider />
                      <Dropdown.Item onClick={handleLogout}>Sign out</Dropdown.Item>
                    </Dropdown>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Navbar>
  );
}
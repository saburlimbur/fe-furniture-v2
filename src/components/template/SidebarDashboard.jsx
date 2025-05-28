import React, { useState } from 'react';
import toast from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';
import {
  Bell,
  Building2,
  ChevronUp,
  CreditCard,
  FileText,
  HelpCircle,
  Home,
  Inbox,
  LogOut,
  Package,
  PieChart,
  Plus,
  Search,
  Settings,
  Shield,
  ShoppingCart,
  TrendingUp,
  UserCheck,
  Users,
  Zap,
} from 'lucide-react';

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
} from '@/components/ui/sidebar';
import useListUsers from '@/hooks/users/useListUsers';

const navigationItems = [
  {
    title: 'Dashboard',
    url: '/dashboard',
    icon: Home,
    badge: null,
    isActive: true,
  },
  {
    title: 'Analytics',
    url: '/analytics',
    icon: TrendingUp,
    badge: null,
    isActive: false,
  },
];

const managementItems = [
  {
    title: 'Users',
    url: '/dashboard/users',
    icon: Users,
    badge: null,
    isActive: false,
  },
  {
    title: 'Products',
    url: '/dashboard/products',
    icon: Package,
    badge: null,
    isActive: false,
  },
  {
    title: 'Category',
    url: '/dashboard/category',
    icon: PieChart,
    badge: null,
    isActive: false,
  },
  {
    title: 'Orders',
    url: '/dashboard/orders',
    icon: FileText,
    badge: '5',
    isActive: false,
  },
  {
    title: 'Payments',
    url: '/dashboard/payments',
    icon: CreditCard,
    badge: null,
    isActive: false,
  },
];

const systemItems = [
  {
    title: 'Settings',
    url: '/settings',
    icon: Settings,
    badge: null,
    isActive: false,
  },
];

function SidebarDashboard() {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem('furniture_user'));

  const handleLogout = () => {
    localStorage.removeItem('furniture_token');
    localStorage.removeItem('furniture_user');

    setTimeout(() => {
      navigate('/login');
    }, 100);
    toast.success('Logout Successfully');
  };

  return (
    <Sidebar className="border-r bg-sidebar">
      <SidebarHeader className="border-b border-sidebar-border bg-sidebar">
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton
              size="lg"
              asChild
              className="hover:bg-sidebar-accent"
            >
              <a
                href="/dashboard"
                className="flex items-center gap-3 py-12 px-3"
              >
                <div className="">
                  <img
                    src="/logo.png"
                    className="w-[60px] h-24 object-cover z-10"
                  />
                </div>
                <div className="flex flex-col gap-0.5 leading-none">
                  <span className="font-bold text-lg">Simulacra</span>
                  <span className="text-xs text-muted-foreground font-medium">
                    Admin
                  </span>
                </div>
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>

        <div className="px-3 pb-3">
          <Button
            variant="outline"
            className="w-full justify-start text-sm font-normal h-9 bg-background/50 hover:bg-background/80"
          >
            <Search className="mr-2 h-4 w-4" />
            <span className="flex-1 text-left">Search...</span>
            <kbd className="pointer-events-none inline-flex h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium text-muted-foreground opacity-100">
              <span className="text-xs">⌘</span>K
            </kbd>
          </Button>
        </div>
      </SidebarHeader>

      <SidebarContent className="gap-2 p-2">
        {/* Main Navigation */}
        <SidebarGroup>
          <SidebarGroupLabel className="text-xs font-semibold text-sidebar-foreground/70 uppercase tracking-wider px-3 py-2">
            Overview
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu className="gap-1">
              {navigationItems.map(item => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton
                    asChild
                    className="h-10 px-3 font-medium hover:bg-sidebar-accent hover:text-sidebar-accent-foreground transition-colors"
                    isActive={item.isActive}
                  >
                    <Link to={item.url} className="flex items-center gap-3">
                      <item.icon className="size-4 shrink-0" />
                      <span className="flex-1 truncate">{item.title}</span>
                      {item.badge && (
                        <Badge
                          variant={
                            item.badge === '24' ? 'default' : 'secondary'
                          }
                          className="h-5 px-2 text-xs font-medium"
                        >
                          {item.badge}
                        </Badge>
                      )}
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        {/* Management */}
        <SidebarGroup>
          <SidebarGroupLabel className="text-xs font-semibold text-sidebar-foreground/70 uppercase tracking-wider px-3 py-2 flex items-center justify-between">
            Management
            <Button
              variant="ghost"
              size="sm"
              className="h-5 w-5 p-0 hover:bg-sidebar-accent"
            >
              <Plus className="h-3 w-3" />
            </Button>
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu className="gap-1">
              {managementItems.map(item => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton
                    asChild
                    className="h-10 px-3 font-medium hover:bg-sidebar-accent hover:text-sidebar-accent-foreground transition-colors"
                    isActive={item.isActive}
                  >
                    <a href={item.url} className="flex items-center gap-3">
                      <item.icon className="size-4 shrink-0" />
                      <span className="flex-1 truncate">{item.title}</span>
                      {item.badge && (
                        <Badge
                          variant={
                            item.badge === '5' ? 'destructive' : 'secondary'
                          }
                          className="h-5 px-2 text-xs font-medium"
                        >
                          {item.badge}
                        </Badge>
                      )}
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        {/* System */}
        <SidebarGroup>
          <SidebarGroupLabel className="text-xs font-semibold text-sidebar-foreground/70 uppercase tracking-wider px-3 py-2">
            System
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu className="gap-1">
              {systemItems.map(item => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton
                    asChild
                    className="h-10 px-3 font-medium hover:bg-sidebar-accent hover:text-sidebar-accent-foreground transition-colors"
                    isActive={item.isActive}
                  >
                    <a href={item.url} className="flex items-center gap-3">
                      <item.icon className="size-4 shrink-0" />
                      <span className="flex-1 truncate">{item.title}</span>
                      {item.badge && (
                        <Badge
                          variant="outline"
                          className="h-5 px-2 text-xs font-medium border-sidebar-border"
                        >
                          {item.badge}
                        </Badge>
                      )}
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter className="border-t border-sidebar-border bg-sidebar p-2">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <button className="flex items-center gap-2 p-2 rounded hover:bg-gray-100 justify-between">
              <Avatar className="h-8 w-8 rounded-lg border border-gray-300">
                <AvatarImage
                  src="https://github.com/shadcn.png"
                  alt="@shadcn"
                />
                <AvatarFallback>JD</AvatarFallback>
              </Avatar>
              <div className="font-medium text-gray-900 flex flex-col gap-0">
                <h3 className="text-sm font-semibold">{user.name}</h3>
                <small className="text-gray-500 text-xs">{user.email}</small>
              </div>
              <ChevronUp className="text-gray-500" />
            </button>
          </DropdownMenuTrigger>

          <DropdownMenuContent
            className="w-56"
            side="bottom"
            align="end"
            sideOffset={4}
          >
            <DropdownMenuItem>
              <UserCheck className="mr-2 h-4 w-4" />
              Profile
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Settings className="mr-2 h-4 w-4" />
              Account Settings
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Bell className="mr-2 h-4 w-4" />
              Notifications
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem className="text-red-600">
              <Button variant="ghost" onClick={handleLogout}>
                <LogOut className="mr-2 h-4 w-4" />
                Sign out
              </Button>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </SidebarFooter>

      <SidebarRail />
    </Sidebar>
  );
}

export default SidebarDashboard;

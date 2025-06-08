/* eslint-disable react/no-array-index-key */
import React from 'react';
import {
  Bell,
  Building2,
  CreditCard,
  Settings,
  Truck,
  Wallet,
} from 'lucide-react';

import PaymentsList from '@/components/fragments/Admin/PaymentsList';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from '@/components/ui/pagination';
import { Separator } from '@/components/ui/separator';
import { SidebarInset, SidebarTrigger } from '@/components/ui/sidebar';
import { formatRp } from '@/utils/Formatted';

const paymentStats = [
  {
    method: 'Credit Card',
    icon: CreditCard,
    totalTransactions: 1247,
    totalAmount: 145750000,
    gradient: 'bg-gradient-to-br from-blue-600 to-blue-800',
    iconBg: 'bg-blue-500/20',
    iconColor: 'text-blue-600',
  },
  {
    method: 'Bank Transfer',
    icon: Building2,
    totalTransactions: 892,
    totalAmount: 98420000,
    gradient: 'bg-gradient-to-br from-emerald-600 to-green-700',
    iconBg: 'bg-emerald-500/20',
    iconColor: 'text-emerald-600',
  },
  {
    method: 'E-Wallet',
    icon: Wallet,
    totalTransactions: 2156,
    totalAmount: 187650000,
    gradient: 'bg-gradient-to-br from-purple-600 to-violet-700',
    iconBg: 'bg-purple-500/20',
    iconColor: 'text-purple-600',
  },
  {
    method: 'Cash on Delivery',
    icon: Truck,
    totalTransactions: 634,
    totalAmount: 45230000,
    gradient: 'bg-gradient-to-br from-orange-600 to-amber-700',
    iconBg: 'bg-orange-500/20',
    iconColor: 'text-orange-600',
  },
];

function PaymentsPage() {
  return (
    <section>
      <SidebarInset>
        <header className="flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
          <div className="flex items-center gap-2 px-4 w-full">
            <SidebarTrigger className="-ml-1" />
            <Separator orientation="vertical" className="mr-2 h-4" />
            <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem className="hidden md:block">
                  <BreadcrumbLink href="#" className="text-muted-foreground">
                    Dashboard
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator className="hidden md:block" />
                <BreadcrumbItem>
                  <BreadcrumbPage className="font-medium">
                    Payments List
                  </BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>

            <div className="ml-auto flex items-center gap-2">
              <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                <Bell className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                <Settings className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </header>

        <div className="pt-5 px-3">
          <Card>
            <div className="flex flex-col gap-1.5 px-6">
              <CardTitle className="text-2xl font-bold">Payment List</CardTitle>
              <CardDescription className="text-muted-foreground">
                Manage your users and their roles here.
              </CardDescription>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 px-6 h-full">
              {paymentStats.map((stat, index) => {
                const IconComponent = stat.icon;
                return (
                  <Card
                    key={index}
                    className="relative overflow-hidden border-0 shadow-lg h-[180px]"
                  >
                    <div
                      className={`absolute inset-0 ${stat.gradient} opacity-90`}
                    />
                    <div className="relative z-10">
                      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium text-white/90">
                          {stat.method}
                        </CardTitle>
                        <div
                          className={`p-2 rounded-full ${stat.iconBg} backdrop-blur-sm`}
                        >
                          <IconComponent className="h-4 w-4 text-white" />
                        </div>
                      </CardHeader>
                      <CardContent className="pt-2">
                        <div className="text-3xl font-bold text-white">
                          {stat.totalTransactions.toLocaleString('id-ID')}
                        </div>
                        <p className="text-sm text-white/80 mt-2">
                          Total: {formatRp(stat.totalAmount)}
                        </p>
                      </CardContent>
                    </div>

                    <div className="absolute top-0 right-0 w-24 h-24 bg-white/10 rounded-full -translate-y-12 translate-x-12" />
                    <div className="absolute bottom-0 left-0 w-20 h-20 bg-white/5 rounded-full translate-y-10 -translate-x-10" />
                  </Card>
                );
              })}
            </div>

            <div className="border rounded-lg mx-6 p-2">
              <PaymentsList />
            </div>

            <Pagination>
              <PaginationContent>
                <PaginationItem>
                  <PaginationPrevious href="#" />
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink href="#" isActive>
                    1
                  </PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink href="#">2</PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink href="#">3</PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationEllipsis />
                </PaginationItem>
                <PaginationItem>
                  <PaginationNext href="#" />
                </PaginationItem>
              </PaginationContent>
            </Pagination>
          </Card>
        </div>
      </SidebarInset>
    </section>
  );
}

export default PaymentsPage;

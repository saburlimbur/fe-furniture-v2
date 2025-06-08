/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unescaped-entities */
import React, { useState } from 'react';
import { Bell, Filter, Package, Settings } from 'lucide-react';

import CategoryLists from '@/components/fragments/Admin/CategoryLists';
import FormCreateCategory from '@/components/fragments/Admin/FormCreateCategory';
import OrderLists from '@/components/fragments/Admin/OrderLists';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Dialog, DialogTrigger } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '../../components/ui/breadcrumb';
import { Button } from '../../components/ui/button';
import { Separator } from '../../components/ui/separator';
import { SidebarInset, SidebarTrigger } from '../../components/ui/sidebar';
import useGetAllCategorys from '../../hooks/category/useGetAllCategorys';

function CategoryPage() {
  const [open, setOpen] = useState(false);
  const { allCategorys, isError, isLoading } = useGetAllCategorys();
  const categories = allCategorys?.query ?? [];

  console.log('categories', categories);

  const categoryImage = {
    Chair: '/Chair.png',
    Table: '/Table.png',
    Bed: '/Bed.png',
    Sofa: '/Sofa.png',
    Wardrobe: '/Wardrobe.png',
  };

  const categoryDesc = {
    Chair: 'Comfortable and stylish chairs for every room.',
    Table: 'Durable tables perfect for dining or workspaces.',
    Bed: 'Cozy beds to ensure a good night’s sleep.',
    Sofa: 'Modern sofas to relax and entertain guests.',
    Wardrobe: 'Spacious wardrobes to organize your clothes neatly.',
  };

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
                    Dashboard
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

        {/* main page */}
        <div className="flex flex-1 flex-col gap-6 pt-5 px-3">
          <div className="border rounded-lg shadow-md p-6 flex flex-col gap-14">
            <div className="flex items-center justify-between">
              <div className="flex flex-col gap-1.5">
                <h1 className="text-2xl font-bold">Category</h1>
                <p className="text-muted-foreground">
                  Welcome back! Here's what's happening with your business
                  today.
                </p>
              </div>

              <div className="flex gap-2">
                <Dialog open={open} onOpenChange={setOpen}>
                  <DialogTrigger asChild>
                    <Button className="cursor-pointer">
                      <Package className="h-4 w-4" />
                      Add Category
                    </Button>
                  </DialogTrigger>
                  <FormCreateCategory onSuccess={() => setOpen(false)} />
                </Dialog>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-6">
              {categories?.map(item => (
                <Card
                  key={item?.id}
                  className="flex items-center p-4 rounded-2xl border border-gray-50 bg-white transition-all duration-300 group cursor-pointer"
                >
                  <div className="flex items-center gap-1">
                    <CardTitle className="w-1/2 h-full rounded-xl overflow-hidden">
                      <img
                        src={categoryImage[item.category_name]}
                        alt={item.category_name}
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                    </CardTitle>

                    <CardContent className="w-1/2 flex flex-col justify-center gap-3 pl-4">
                      <h2 className="text-xl font-semibold text-gray-900">
                        {item.category_name}
                      </h2>
                      <p className="text-sm text-muted-foreground leading-snug">
                        {categoryDesc[item.category_name]}
                      </p>
                    </CardContent>
                  </div>
                </Card>
              ))}
            </div>

            <div>
              <CardHeader className="px-6 mb-4">
                <div className="flex items-center gap-4">
                  <div className="flex-1">
                    <Input
                      placeholder="Filter users..."
                      className="max-w-sm h-6 py-5"
                    />
                  </div>
                  <div className="flex items-center gap-2">
                    <Filter className="h-4 w-4 text-muted-foreground" />
                    <Select>
                      <SelectTrigger className="w-[120px]">
                        <SelectValue placeholder="Status" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">All Status</SelectItem>
                        <SelectItem value="Active">Active</SelectItem>
                        <SelectItem value="Invited">Invited</SelectItem>
                        <SelectItem value="Inactive">Inactive</SelectItem>
                        <SelectItem value="Suspended">Suspended</SelectItem>
                      </SelectContent>
                    </Select>
                    <Select>
                      <SelectTrigger className="w-[160px]">
                        <SelectValue placeholder="Category" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">All Category</SelectItem>
                        {categories?.map(category => (
                          <SelectItem
                            key={category?.id}
                            value={category?.category_name}
                          >
                            {category?.category_name}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </CardHeader>

              <div className="border rounded-lg mx-6 p-2 overflow-visible">
                <CategoryLists />
              </div>
            </div>
          </div>
        </div>
      </SidebarInset>
    </section>
  );
}

export default CategoryPage;

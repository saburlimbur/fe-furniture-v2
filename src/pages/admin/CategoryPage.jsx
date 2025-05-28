import React from 'react';
import { Badge, Bell, DollarSign, Settings } from 'lucide-react';

import Card from '../../components/fragments/Card';
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
                    Admin Panel
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
        <div className="flex flex-1 flex-col gap-6 p-6">
          <div className="flex items-center justify-between">
            <div className="flex flex-col gap-1.5">
              <h1 className="text-3xl font-bold tracking-tight">Category</h1>
              <p className="text-muted-foreground">
                Welcome back! Here's what's happening with your business today.
              </p>
            </div>
            <Badge variant="secondary" className="px-3 py-1">
              Live Data
            </Badge>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {categories?.map(item => (
              <Card
                key={item?.id}
                className="flex items-center p-4 rounded-2xl border border-gray-50 bg-white shadow-sm hover:shadow-md transition-all duration-300 group"
              >
                <Card.Header className="w-1/2 h-full rounded-xl overflow-hidden">
                  <img
                    src={categoryImage[item.category_name]}
                    alt={item.category_name}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </Card.Header>

                <Card.Body className="w-1/2 flex flex-col justify-center gap-3 pl-4">
                  <h2 className="text-xl font-semibold text-gray-900">
                    {item.category_name}
                  </h2>
                  <p className="text-sm text-muted-foreground leading-snug">
                    {categoryDesc[item.category_name]}
                  </p>

                  <Button
                    variant="outline"
                    className="mt-2 w-fit text-sm hover:bg-primary hover:text-white transition cursor-pointer"
                  >
                    View Details
                  </Button>
                </Card.Body>
              </Card>
            ))}
          </div>
        </div>
      </SidebarInset>
    </section>
  );
}

export default CategoryPage;

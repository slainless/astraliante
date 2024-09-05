import {
  Bell,
  CircleUser,
  Home,
  LineChart,
  Menu,
  Package,
  Package2,
  Search,
  ShoppingCart,
  Users,
} from "lucide-react"

import { Badge } from "~/components/ui/badge"
import { Button } from "~/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "~/components/ui/card"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "~/components/ui/dropdown-menu"
import { Input } from "~/components/ui/input"
import { Sheet, SheetContent, SheetTrigger } from "~/components/ui/sheet"

export function Dashboard02() {
  return (
    <div className="grid min-h-screen w-full md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr]">
      <div className="bg-bgc hidden border-r md:block">
        <div className="flex h-full max-h-screen flex-col gap-2 bg-bgc-elevated">
          <div className="flex h-14 items-center border-b px-4 lg:h-[60px] lg:px-6">
            <a href="/" className="flex items-center gap-2 font-semibold">
              <Package2 className="size-6" />
              <span className="">Acme Inc</span>
            </a>
            <Button variant="outline" size="icon" className="ml-auto size-8">
              <Bell className="size-4" />
              <span className="sr-only">Toggle notifications</span>
            </Button>
          </div>
          <div className="flex-1">
            <nav className="grid items-start px-2 text-sm font-medium lg:px-4">
              <a
                href="#"
                className="text-fgc hover:text-fgc-primary flex items-center gap-3 rounded-lg px-3 py-2 transition-all"
              >
                <Home className="size-4" />
                Dashboard
              </a>
              <a
                href="#"
                className="text-fgc hover:text-fgc-primary flex items-center gap-3 rounded-lg px-3 py-2 transition-all"
              >
                <ShoppingCart className="size-4" />
                Orders
                <Badge className="ml-auto flex size-6 shrink-0 items-center justify-center rounded-full">
                  6
                </Badge>
              </a>
              <a
                href="#"
                className="bg-bgc-muted text-fgc-primary hover:text-fgc-primary flex items-center gap-3 rounded-lg px-3 py-2 transition-all"
              >
                <Package className="size-4" />
                Products{" "}
              </a>
              <a
                href="#"
                className="text-fgc hover:text-fgc-primary flex items-center gap-3 rounded-lg px-3 py-2 transition-all"
              >
                <Users className="size-4" />
                Customers
              </a>
              <a
                href="#"
                className="text-fgc hover:text-fgc-primary flex items-center gap-3 rounded-lg px-3 py-2 transition-all"
              >
                <LineChart className="size-4" />
                Analytics
              </a>
            </nav>
          </div>
          <div className="mt-auto p-4">
            <Card
              x-chunk="dashboard-02-chunk-0"
              className="border-border-strong"
            >
              <CardHeader className="p-2 pt-0 md:p-4">
                <CardTitle>Upgrade to Pro</CardTitle>
                <CardDescription>
                  Unlock all features and get unlimited access to our support
                  team.
                </CardDescription>
              </CardHeader>
              <CardContent className="p-2 pt-0 md:p-4 md:pt-0">
                <Button size="sm" className="w-full">
                  Upgrade
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
      <div className="flex flex-col">
        <header className="bg-bgc-elevated flex h-14 items-center gap-4 border-b px-4 lg:h-[60px] lg:px-6">
          <Sheet>
            <SheetTrigger asChild>
              <Button
                variant="outline"
                size="icon"
                className="shrink-0 md:hidden"
              >
                <Menu className="size-5" />
                <span className="sr-only">Toggle navigation menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="flex flex-col">
              <nav className="grid gap-2 text-lg font-medium">
                <a
                  href="#"
                  className="flex items-center gap-2 text-lg font-semibold"
                >
                  <Package2 className="size-6" />
                  <span className="sr-only">Acme Inc</span>
                </a>
                <a
                  href="#"
                  className="text-fgc hover:text-fgc mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2"
                >
                  <Home className="size-5" />
                  Dashboard
                </a>
                <a
                  href="#"
                  className="bg-bgc-muted text-fgc hover:text-fgc mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2"
                >
                  <ShoppingCart className="size-5" />
                  Orders
                  <Badge className="ml-auto flex size-6 shrink-0 items-center justify-center rounded-full">
                    6
                  </Badge>
                </a>
                <a
                  href="#"
                  className="text-fgc hover:text-fgc mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2"
                >
                  <Package className="size-5" />
                  Products
                </a>
                <a
                  href="#"
                  className="text-fgc hover:text-fgc mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2"
                >
                  <Users className="size-5" />
                  Customers
                </a>
                <a
                  href="#"
                  className="text-fgc hover:text-fgc mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2"
                >
                  <LineChart className="size-5" />
                  Analytics
                </a>
              </nav>
              <div className="mt-auto">
                <Card className="border-border-strong">
                  <CardHeader>
                    <CardTitle>Upgrade to Pro</CardTitle>
                    <CardDescription>
                      Unlock all features and get unlimited access to our
                      support team.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button size="sm" className="w-full">
                      Upgrade
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </SheetContent>
          </Sheet>
          <div className="w-full flex-1">
            <form>
              <div className="relative">
                <Search className="text-fgc absolute left-2.5 top-2.5 size-4" />
                <Input
                  type="search"
                  placeholder="Search products..."
                  className="border-bdc-subtle w-full appearance-none pl-8 shadow-none md:w-2/3 lg:w-1/3"
                />
              </div>
            </form>
          </div>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="secondary" size="icon" className="rounded-full">
                <CircleUser className="size-5" />
                <span className="sr-only">Toggle user menu</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Settings</DropdownMenuItem>
              <DropdownMenuItem>Support</DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Logout</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </header>
        <main className="flex flex-1 flex-col gap-4 p-4 lg:gap-6 lg:p-6">
          <div className="flex items-center">
            <h1 className="text-lg font-semibold md:text-2xl">Inventory</h1>
          </div>
          <div
            className="flex flex-1 items-center justify-center rounded-lg border border-dashed shadow-sm"
            x-chunk="dashboard-02-chunk-1"
          >
            <div className="flex flex-col items-center gap-1 text-center">
              <h3 className="text-2xl font-bold tracking-tight">
                You have no products
              </h3>
              <p className="text-fgc text-sm">
                You can start selling as soon as you add a product.
              </p>
              <Button className="mt-4">Add Product</Button>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}

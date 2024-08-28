import Image from 'next/image';
import Link from 'next/link';
import * as React from "react";
import {components} from '@/lib/constants/navigationBarConstans';
import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars} from '@fortawesome/free-solid-svg-icons'

const HomeNavbar = () => {

  return (
    <div className='home-navbar'>
        
        <div className='home-navbar-elements'>
            <Link href='/'>
                <Image 
                    src='/logo-hidro.png'
                    width={110}
                    height={110}
                    alt='Logo de hidrobolivar'
                />
            </Link>
        </div>


        <div className='w-full'>
            <div className='home-navbar-elements justify-center'>
                <Link href='/nosotros'>
                    <div className='flex w-30 p-2'>
                        <button className='btn-primary btn-primary-right'>Nosotros</button>
                    </div>
                </Link>
                
                <Link href='/noticias'>
                    <div className='flex w-30 p-2'>
                        <button className='btn-primary btn-primary-right'>Noticias</button>
                    </div>
                </Link>

                <Link href='acueductos'>
                    <div className='flex w-30 p-2'>
                        <button className='btn-primary btn-primary-right'>Acueductos</button>
                    </div>
                </Link>     

                <Link href='atencion'>
                    <div className='flex w-30 p-2'>
                        <button className='btn-primary btn-primary-right'>Atencion</button>
                    </div>
                </Link>                     
            </div>
        </div>
    </div>
  );
}

export default HomeNavbar







export function NavigationMenuDemo() {
  return (
    <NavigationMenu>
      <NavigationMenuList>

        <NavigationMenuItem>
          <NavigationMenuTrigger>Getting started</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
              <li className="row-span-3">
                <NavigationMenuLink asChild>
                  <a
                    className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                    href="/"
                  >
                    <FontAwesomeIcon icon={faBars} size='xl'/>
                    <div className="mb-2 mt-4 text-lg font-medium">
                      Organigrama
                    </div>
                    <p className="text-sm leading-tight text-muted-foreground">
                      Hidrobolivar trabajando para ti, agua siempre sin agua nunca.
                    </p>
                  </a>
                </NavigationMenuLink>
              </li>
              <ListItem href="/" title="Mision">
                Mision.
              </ListItem>
              <ListItem href="/" title="Vision">
                Vision.
              </ListItem>
              <ListItem href="/" title="Objetivos">
                Objetivos.
              </ListItem>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuTrigger>Components</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
              {components.map((component) => (
                <ListItem
                  key={component.title}
                  title={component.title}
                  href={component.href}
                >
                  {component.description}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <Link href="/" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              Acueductos
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  )
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  )
})
ListItem.displayName = "ListItem"

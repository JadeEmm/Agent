import HeaderHost from '@/components/header-host'
import MaxWContainer from '@/components/max-w-container'
import { authOptions } from '@/app/api/auth/[...nextauth]/route'
import { cn } from '@/lib/utils'
import { getServerSession } from 'next-auth'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator, DropdownMenuTrigger } from '../../components/ui/dropdown-menu'
import { Menu } from 'lucide-react'
import SignInButton from '../../components/signin-button'
import SignOutButton from '../../components/signout-button'

async function DashboardLayout({
    children
}: {children: React.ReactNode}) {
  
    const session = await getServerSession(authOptions)

    return (

    <>
        <header className='fixed w-full z-50'>
            <nav className="bg-primary flex items-center justify-between p-4 lg:px-8">
                {/* logo */}
                <div className="flex flex-1">
                    <Link href="/">
                        <span className='sr-only'>Logo</span>
                        <Image
                            width={40}
                            height={40}
                            className='w-auto h-auto'
                            src='/logo.png' alt='logo'
                        />
                    </Link>
                </div>

                {/* drop down menu*/}
                <DropdownMenu>
                    <DropdownMenuTrigger>
                        <div className="flex text-white">
                            <Menu />
                            {
                                session?.user &&
                                <p>{session.user.name?.split(' ')[0]}</p>
                            }
                        </div>
                    </DropdownMenuTrigger>

                    <DropdownMenuContent>
                        <DropdownMenuItem className='flex text-left py-0'>
                            {
                                session ? <SignOutButton /> : <SignInButton />
                            }
                        </DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            </nav>
        </header>
        <div 
            // add some padding to the top to prevent the content from being hidden by the header
            className={cn('pt-20 flex h-dvh w-full border border-blue-900')}>
            {children}
        </div>
        
    </>
  )
}

export default DashboardLayout
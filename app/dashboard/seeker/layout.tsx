import React from 'react';
import { Button, buttonVariants } from '@/components/ui/button';
import Link from 'next/link';
import { cn } from '@/lib/utils'

function SeekerLayout({
    children
}: {children: React.ReactNode}) {

    // side bar
    // top bar

    return (
        <div className='h-full w-full flex flex-row'>
            <div className="border-r-2 border-grey-200 w-1/5 py-4 px-2">
                {/* padding at top */}
                <Link href='/dashboard/seeker' className={cn(buttonVariants({variant: 'secondary'}),"w-full mt-2")} >
                    Dashboard
                </Link>
                <Link href='/dashboard/seeker/profile' className={cn(buttonVariants({variant: 'secondary'}),"w-full mt-2")} >
                    Profile
                </Link>
                <Link href='/dashboard/seeker/jobs' className={cn(buttonVariants({variant: 'secondary'}),"w-full mt-2")} >
                    Jobs
                </Link>
            </div>
            <div 
                // full height
                className='w-4/5 overflow-y-auto'
            >
                {children}
            </div>
        </div>
    )

}

export default SeekerLayout;
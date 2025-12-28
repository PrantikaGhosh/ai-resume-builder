import React from 'react'
import { Button } from "@/components/ui/button"
import { useUser } from "@clerk/clerk-react"
import { Link } from 'react-router-dom'
import { User } from 'lucide-react';
import { UserButton } from '@clerk/clerk-react';

function Header() {
    const { user, isSignedIn } = useUser();
    return (
        <div className='p-3 px-5 flex justify-between shadow-md' >
            <img src='./logo.svg' height={100} width={100} />

            {isSignedIn ?
                <div className='flex gap-2 items-center'>
                    <Link to={'/dashboard'}>
                        <Button variant="outline">Dashboard</Button>
                    </Link>
                    <UserButton />
                </div> :
                <Link to={'/auth/sign-in'}>
                    <Button>Get Started</Button>
                </Link>
            }

        </div>
    )
}

export default Header
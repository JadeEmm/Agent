// components/Footer.tsx
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

function Footer() {
  return (
    <div className="bg-gray-200 pt-4 mt-8 px-4 sm:px-0">
      <div className="mx-auto py-8 max-w-2xl">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-8 sm:gap-x-32">
          {/* Left Section */}
          <div className="mb-4">
            <div className="flex items-center mb-6">
              <Image alt='Agent Logo' src='/logo.png' width={40} height={40} />
              <h2 className="ml-2 text-lg font-bold">Agent</h2>
            </div>
            <div className="flex flex-col gap-1 py-2">
              <Link href='/about' className='text-sm'>About Us</Link>
              <Link href='/terms-conditions' className='text-sm'>Terms & Conditions</Link>
              <Link href='/contact-us' className='text-sm'>Contact Us</Link>
            </div>
            <p className='text-sm'>&copy; {new Date().getFullYear()} Agent. All rights reserved.</p>
          </div>

          {/* Right Section */}
          <div className="mb-4">
            <p className="font-bold">For Job Seekers</p>
            <div className="flex flex-col gap-1 py-2">
              <Link href='/services-pricing' className='text-sm'>Services & Pricing</Link>
              
            </div>
            <p className="font-bold mt-4">For Agents</p>
            <div className="flex flex-col gap-1 py-2">
              <Link href='/become-an-agent' className='text-sm'>Become an Agent</Link>
              <Link href='/agent-resources' className='text-sm'>Agent Policies & Resources</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
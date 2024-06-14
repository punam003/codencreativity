"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const DashboardSideBar = () => {
  return (
    <div>
      <aside>
        <div>
          <Link href='/'>
            <Image
              src='/logo-dark.png'
              alt='logo'
              width={640}
              height={360}
              className='max-w-[5vmax]'
            />
          </Link>
        </div>
      </aside>
    </div>
  );
};

export default DashboardSideBar;

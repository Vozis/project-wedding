import Logo from '@/components/logo';
import React from 'react';
import HeaderMenu from '@/components/menu';
import PlayButton from '@/components/player/controls/play-button';

export default function Header() {
  return (
    <header
      className={
        'sticky left-0 right-0 top-0 z-10 flex h-12 items-center justify-between border-b border-black bg-white px-2.5'
      }
    >
      <Logo />
      <div className={'flex items-center gap-2'}>
        <PlayButton
          className={
            'mr-12 h-8 w-8 after:h-8 after:w-8 after:border after:border-black md:mr-0'
          }
          itemClassName={'text-sm'}
          itemPlayClass={'text-[12px] ml-0.5'}
        />
        <HeaderMenu />
      </div>
    </header>
  );
}

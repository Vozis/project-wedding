'use client';

import SuperTitle from '@/components/typography/super-title';
import Player from '@/components/player';
import Description from '@/components/typography/description';
import Image from 'next/image';

import arrow from '@/public/img/Arrow.svg';
import { useSectionInView } from '@/hooks/useSectionInView';
import { useActiveSectionContext } from '@/providers/action-section-context';
import AnimateSection from '@/components/animate/section';

export default function StartSection() {
  const { ref } = useSectionInView('startSection');

  return (
    <section
      ref={ref}
      id={'startSection'}
      className={'relative flex pb-5 sm:justify-center'}
      style={{
        minHeight: 'calc(100vh - 3rem)',
      }}
    >
      <div
        className={'absolute bottom-0 left-0 right-0 top-0 -z-2 md:hidden'}
        style={{
          background: "url('/img/start/mobile.jpg')",
          backgroundPositionY: '3rem',
          backgroundPositionX: '90%',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          borderRadius: '500px 0 0 0',
        }}
      />
      <div
        className={'absolute bottom-0 left-0 right-0 top-0 -z-1 md:hidden'}
        style={{
          background:
            'linear-gradient(to bottom, rgba(0,0,0, 0.00) 30%, rgba(0, 0, 0, 0.60) 60%, rgba(0, 0, 0, 0.9) 80%, #000 100%)',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          borderRadius: '500px 0 0 0',
        }}
      />
      <div
        className={
          'absolute bottom-0 left-0 right-0 top-0 -z-1 hidden grid-cols-4 before:absolute before:bottom-0 before:left-0 before:right-0 before:top-0 before:z-1 before:bg-gradient-to-t before:from-black/100 before:to-black/30  sm:grid'
        }
      >
        <div className={'relative'}>
          <Image
            src={'/img/start/1.jpg'}
            alt={'image'}
            fill
            priority
            style={{
              objectFit: 'cover',
              objectPosition: '80%',
            }}
            sizes={'100vw, (max-width: 768px) 25vw'}
          />
        </div>
        <div className={'relative'}>
          <Image
            src={'/img/start/2.jpg'}
            alt={'image'}
            fill
            priority
            style={{
              objectFit: 'cover',
              objectPosition: '90%',
            }}
            sizes={'100vw, (max-width: 768px) 25vw'}
          />
        </div>
        <div className={'relative'}>
          <Image
            src={'/img/start/3.jpg'}
            alt={'image'}
            fill
            priority
            style={{
              objectFit: 'cover',
              objectPosition: '10%',
            }}
            sizes={'100vw, (max-width: 768px) 25vw'}
          />
        </div>
        <div className={'relative'}>
          <Image
            src={'/img/start/4.jpg'}
            alt={'image'}
            fill
            priority
            style={{
              objectFit: 'cover',
              objectPosition: '20%',
            }}
            sizes={'100vw, (max-width: 768px) 25vw'}
          />
        </div>
      </div>

      <div
        className={'mx-auto flex flex-col items-center justify-between px-5'}
      >
        <div className={'pt-2'}>
          <SuperTitle
            title={'Илья'}
            className={
              'text-right text-[8rem] leading-[4rem] s:text-[9rem] s:leading-[5rem] sm:text-white'
            }
          />
          <SuperTitle
            title={'Анастасия'}
            className={
              'block text-center text-[8rem] leading-[4rem] s:text-[9rem] s:leading-[5rem] sm:text-white '
            }
          />
        </div>
        <div className={'flex flex-col items-center gap-5'}>
          <Player className={'flex flex-col items-center gap-5'} />
          <Description className={'text-center text-white'}>
            Нажмите на Play и листайте ниже погрузитесь в настроение нашего
            торжества
          </Description>
          <Image src={arrow} alt={'arrow down'} className={'animate-bounce'} />
        </div>
      </div>
    </section>
  );
}

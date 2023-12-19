import image1 from '@/public/img/image-1.jpg';
import Image from 'next/image';
import ImageBlock from '@/components/image';
import AnimateSection from '@/components/animate/section';

export default function ImagesSection() {
  return (
    <AnimateSection
      id={'imageSection'}
      className={'mt-12 flex flex-col px-5 md:hidden '}
    >
      <ImageBlock
        className={'self-start'}
        direction={'left'}
        path={'/img/image-1.jpg'}
      />
      <ImageBlock
        className={'-mt-12 self-end'}
        direction={'right'}
        path={'/img/image-1.jpg'}
      />
    </AnimateSection>
  );
}

import Spline from '@splinetool/react-spline/next';

export default function MouseChecker() {
  return (
    <main  className='absolute top-0 right-0 left-0 z-0 invisible lg:visible'>
      <Spline
        scene="https://prod.spline.design/uxNmdU3c2oelNzBV/scene.splinecode" 
      />
    </main>
  );
}
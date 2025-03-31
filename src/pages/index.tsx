import { useRouter } from 'next/router';

import { Button } from '@/components/ui/button';

const HomePage = () => {
  const router = useRouter();
  return (
    <>
      <div className="text-neutral-100 flex flex-col items-center justify-center">
        <p>THIS IS HOME PAGE</p>
        <Button
          onClick={() => {
            router.push('/auth');
          }}
          size={'lg'}
          rounded={'md'}
          className="w-[300px]"
        >
          Login
        </Button>
      </div>
    </>
  );
};

export default HomePage;

import { Link } from 'react-router-dom';
import firstImage from '@assets/img/face.png';
import secondImage from '@assets/img/mac/mac-yellow.png';
import InfoPanel from '@components/InfoPanel/InfoPanel';

const Home: React.FC = () => {
  return (
    <section className="mx-auto flex flex-col px-4 pb-8">
      <h2 className="invisible text-sm">Home Page</h2>
      <div className="w-full max-w-1312 mx-auto flex pad-home">
        <div className="w-full max-w-720 mr-6 rounded-30 px-16 py-98 pad-box-w bg-pinkBg">
          <h1 className="text-5xl font-medium tracking-m2 leading-56 mb-4 max-w-548 w-full">
            Unlock your potential with the best{' '}
            <span className="relative inline-block">
              <span className="absolute inset-0 bg-yellowLight rounded-lg top-3 h-9 z-10"></span>
              <span className="font-normal italic rounded-lg px-1 relative z-20">language</span>
            </span>
          </h1>
          <p className="mt-8 mb-16 w-full max-w-471">
            Embark on an Exciting Language Journey with Expert Language Tutors: Elevate your language
            proficiency to new heights by connecting with highly qualified and experienced tutors.
          </p>
          <Link
            to="/teachers"
            className="inline-flex bg-btnColorY hover:bg-btnColorYh text-mainBlack text-lg font-bold py-4 px-88 rounded-xl"
          >
            Get Started
          </Link>
        </div>
        <div
          className="max-w-568 pad-box-w w-full rounded-30 bg-yellowLight"
          style={{
            backgroundImage: `url(${secondImage}), url(${firstImage})`,
            backgroundPosition: 'bottom center, center calc(100% - 110px)',
            backgroundRepeat: 'no-repeat',
            minHeight: '530px',
          }}
        ></div>
      </div>
      <InfoPanel />
    </section>
  );
};

export default Home;

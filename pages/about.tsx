import Image from 'next/future/image';
import FoundersImg from '../images/founders.jpg';

function About() {
  return (
    <div id='founders_container' className='container'>
      <div className='header'>
        <h1>THE FOUNDING TEAM</h1>
      </div>
      <div className='subcontainer'>
        <div className='text_container'>
          <h3>Meet Gabby, Beryl and Owl</h3>
          <p>
            The story of Yield Guild Games tracks back to 2018, when gaming
            industry veteran Gabby Dizon began to lend his own Axies to other
            Axie Infinity players who couldn’t afford to buy their own. By
            October 2020, it was clear how this was helping Filipinos create
            another source of income during the pandemic while doing something
            they enjoyed.
          </p>
          <p>
            It sparked the idea to create a global network of players and
            investors who would help each other get started with NFT games. With
            fintech entrepreneur Beryl Li and developer Owl of Moistness joining
            Gabby as co-founders, YGG was brought to life with the mission of
            onboarding millions of people into the play-to-earn revolution.
          </p>
        </div>
        <div className='photo_container'>
          <Image
            src={FoundersImg}
            alt={`Founders Gabby and Beryl sitting with a stuffed owl on Beryl's lap`}
            className='fi_img'
          />
        </div>
      </div>
    </div>
  );
}

export default About;

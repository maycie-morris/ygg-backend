import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/future/image';

const games = [
  {
    id: 1,
    alt: 'Media kit image of Axie Infinity with logo',
    background: '/axie.png',
    logo: '/axie_logo.png',
    name: 'Axie Infinity',
    description:
      'Axie Infinity is a player-versus-player (or player-versus-computer) game where players breed, battle, and trade digital pets known as Axies. The YGG DAO treasury holds more than 26,000 Axies, worth an estimated US$3.9 million. This is in addition to 235 parcels of Axie Infinity land, worth around US$2.3 million.',
  },
  {
    id: 2,
    alt: 'Media kit image of Ember Sword with logo',
    background: '/ember_sword.png',
    logo: '/ember_logo.webp',
    name: 'Ember Sword',
    description:
      'Ember Sword is a free-to-play massively multiplayer online role-playing game (MMORPG) that takes place in a dystopian fantasy universe where players can defeat monsters, bosses, and other players, or explore the world as a peaceful forager of goods and rares. The YGG DAO treasury holds 16 NFTs, worth more than US$5.7 million, representing land parcels in Ember Sword.',
  },
  {
    id: 3,
    background: '/guild_of_guardians.png',
    alt: 'Media kit image of Guild of Guardians with logo',
    logo: '/guardians_logo.png',
    name: 'Guild of Guardians',
    description:
      'Guild of Guardians is a mobile multiplayer fantasy-action role-playing game (RPG) where players build their teams of Guardians, contribute to their guild, and strategize to win in the game and earn rewards. YGG owns 121 Guilds, worth approximately US$3 million.',
  },
  {
    id: 4,
    alt: 'Media kit image of Illuvium with logo',
    background: '/illuvium.png',
    logo: '/illuvium_logo.png',
    name: 'Illuvium',
    description:
      'Illuvium is a fantasy battle game with an explorable world where players can capture NFT creatures, known as illuvials. Players can simply explore the landscape consisting of seven unique and stylized regions, build a team of powerful illuvials, or do both. YGG has a SAFT with Illuvium worth around US$3.5 million.',
  },
  {
    id: 5,
    alt: 'Media kit image of Civitas with logo',
    background: '/civitas.jpg',
    logo: '/civitas_logo.png',
    name: 'Civitas',
    description:
      'Civitas is a Play & Earn community-driven 4X strategy game. Collaborate with thousands of like-minded individuals to craft the best society possible and carve out your place in the community to compete or cooperate with other player controlled cities. Powered by the blockchain, it provides fully decentralized NFT asset ownership and DAO governance. As a citizen you will own one or more plots of land located within a large city. Harvest, mine, and gather different resources available on your land. NFT structures are able to process these resources into other goods needed for crafting and upgrading. Go out on real world adventures through our Augmented Reality experience. Find resources, play minigames, and discover rare NFTs.',
  },
  {
    id: 6,
    alt: 'Media kit image of My Pet Hooligan with logo',
    background: '/pet_hooligan.jpg',
    logo: '/hooligan_logo.png',
    name: 'My Pet Hooligan',
    description:
      'My Pet Hooligan and AMGI Studios bring together blockchain technology, gaming, and animation to create innovative products and provide fun digital experiences. My Pet Hooligan is a project and a brand driven by some of the most decorated individuals in animation, gaming, and DeFi.',
  },
  {
    id: 7,
    alt: 'Media kit image of Crypto Unicorns with logo',
    background: '/crypto_unicorns.webp',
    logo: '/unicorns_logo.png',
    name: 'Crypto Unicorns',
    description:
      'A digital pet collecting and farming game, built on blockchain. In Crypto Unicorns, gameplay centers around awesomely unique Unicorn NFTs which players utilize in a fun farming simulation, as well as other gameplay including Jousting, Racing, and Team RPG.',
  },
  {
    id: 8,
    alt: 'Media kit image of Thetan Arena with logo',
    background: '/thetan_arena.png',
    logo: '/thetan_logo.png',
    name: 'Thetan Arena',
    description: `Thetan Arena is an esport game based on blockchain technology, that puts to the test your personal skills and the teamwork with your friends. The higher you climb on the leaderboard, the better the rewards the player gets, along with many hot and groundbreaking updates in the gaming blockchain space. YGG treasury currently owns 400 NFT Thetan Arena Heroes of various varieties, for it's upcoming scholarship program and e-sports program the coming months.`,
  },
  {
    id: 9,
    background: '/influence.png',
    logo: '/influence_logo.png',
    name: 'Influence',
    description:
      'Influence is shooting for a Summer Release 2022 Mine - Build - Explore - Fight - Earn Influence is a play + earn, space strategy sandbox MMO in which you steer the fate of the remnants of humankind in a hostile solar system. Players will settle on asteroids, where you can mine, refine, manufacture, and build your empire. Each player can control up to five crewmates per crew, each crewmate can have a different class: Miner, Scientist, Engineer, Pilot, Merchant. It is your decision whether you invest your time mining for resources, building infrastructure, participating in the economic  development of the system, researching advanced technology, or engaging in conflict with other players.',
  },
];

export const GameCard = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [elementId, setElementId] = useState(0);

  return (
    <div id='card_wrapper'>
      {games.map((game) => (
        <motion.div
          transition={{ layout: { duration: 1, type: 'spring' } }}
          layout
          onClick={() => {
            setIsOpen(!isOpen);
            setElementId(game.id);
          }}
          key={game.id}
          className='card'
          style={{
            backgroundImage: `url(${game.background})`,
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
          }}
        >
          <motion.h2 layout='position'>
            {' '}
            <Image src={game.logo} alt={game.alt} height={500} width={300} />
          </motion.h2>
          {isOpen && game.id === elementId && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
              className='expand'
            >
              <p> {game.description} </p>
            </motion.div>
          )}
        </motion.div>
      ))}
    </div>
  );
};

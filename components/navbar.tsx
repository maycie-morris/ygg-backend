import Image from 'next/image';
import Link from 'next/link';
import { ReactNode } from 'react';
import {
  Box,
  Flex,
  Avatar,
  HStack,
  IconButton,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  useColorModeValue,
  Stack,
} from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon, AddIcon } from '@chakra-ui/icons';
import { ConnectButton } from '@rainbow-me/rainbowkit';
import YGGLogo from '../images/ygg_shield.png';

const Links = [
  {
    name: 'Home',
    path: '/',
  },
  {
    name: 'About',
    path: '/about',
  },
  {
    name: 'Games',
    path: '/games',
  },
  {
    name: 'Founders',
    path: '/founders',
  },
  {
    name: 'FAQ',
    path: '/faq',
  },
];

const NavLink = ({ children, path }: { children: ReactNode; path: string }) => (
  <Box>
    <Link href={path}>{children}</Link>
  </Box>
);

export const Navbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  //WEB3 CONNECT

  return (
    <>
      <Box bg='#9ca4cb35' padding={'0 3%'}>
        <Flex
          h={16}
          alignItems={'center'}
          justifyContent={'space-between'}
          height='8vh'
        >
          <IconButton
            size={'md'}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={'Open Menu'}
            display={{ md: 'none' }}
            onClick={isOpen ? onClose : onOpen}
          />
          <HStack spacing={8} alignItems={'center'}>
            <Box>
              {' '}
              <Image
                src={YGGLogo}
                alt='YGG Shield Logo'
                height={'60px'}
                width={'50px'}
              />{' '}
            </Box>
            <HStack
              as={'nav'}
              spacing={4}
              display={{ base: 'none', md: 'flex' }}
            >
              {Links.map(({ name, path }) => (
                <NavLink key={path} path={path}>
                  {name}
                </NavLink>
              ))}
            </HStack>
          </HStack>
          <Flex alignItems={'center'}>
            <div className='connect_btn_container'>
              <ConnectButton />
            </div>
            {/* <Button variant={'solid'} size={'sm'} mr={4} id='connect_btn'>
              Connect Wallet
            </Button> */}
            <Menu>
              <MenuButton
                as={Button}
                rounded={'full'}
                variant={'link'}
                cursor={'pointer'}
                minW={0}
              >
                <Avatar
                  size={'sm'}
                  src={
                    'https://images.unsplash.com/photo-1493666438817-866a91353ca9?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=b616b2c5b373a80ffc9636ba24f7a4a9'
                  }
                />
              </MenuButton>
              {/* <MenuList>
                <MenuItem>News</MenuItem>
                <MenuItem>FAQ</MenuItem>
                <MenuItem>Partnership</MenuItem>
                <MenuItem>Investment</MenuItem>
                <MenuItem>Careers</MenuItem>
              </MenuList> */}
            </Menu>
          </Flex>
        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ md: 'none' }}>
            <Stack as={'nav'} spacing={4}>
              {Links.map(({ name, path }) => (
                <NavLink key={path} path={path}>
                  {name}
                </NavLink>
              ))}
            </Stack>
          </Box>
        ) : null}
      </Box>
    </>
  );
};

export const userStatus = {
  ACTIVE: 1,
  PENDING: 2,
  BAN: 3,
};

export const userRole = {
  ADMIN: 1,
  MOD: 2,
  USER: 3,
};
export const isMobile = () => {
  const mobiles = [
    /Android/i,
    /webOS/i,
    /iPhone/i,
    /iPad/i,
    /iPod/i,
    /BlackBerry/i,
    /Windows Phone/i,
  ];
  return mobiles.some((matches) => {
    return navigator.userAgent.match(matches);
  });
};
export const BSC_MAINNET = {
  chainName: 'BSC Testnet',
  chainId: '0x61',
  rpcUrls: ['https://data-seed-prebsc-1-s1.binance.org:8545/'],
};

export const creator = [
  {
    id: 1,
    avatar: '/avatar.png',
    imageCard: '/cardCreator.png',
    name: 'Ralph Edwards',
    userName: '@ralphedwards',
    created: '117',
    sold: '260ETH',
    followers: '612',
  },
  {
    id: 2,
    avatar: '/avatar.png',
    imageCard: '/cardCreator.png',
    name: 'Ralph Edwards',
    userName: '@ralphedwards',
    created: '117',
    sold: '260ETH',
    followers: '612',
  },
  {
    id: 3,
    avatar: '/avatar.png',
    imageCard: '/cardCreator.png',
    name: 'Ralph Edwards',
    userName: '@ralphedwards',
    created: '117',
    sold: '260ETH',
    followers: '612',
  },
  {
    id: 4,
    avatar: '/avatar.png',
    imageCard: '/cardCreator.png',
    name: 'Ralph Edwards',
    userName: '@ralphedwards',
    created: '117',
    sold: '260ETH',
    followers: '612',
  },
  {
    id: 5,
    avatar: '/avatar.png',
    imageCard: '/cardCreator.png',
    name: 'Ralph Edwards',
    userName: '@ralphedwards',
    created: '117',
    sold: '260ETH',
    followers: '612',
  },
  {
    id: 6,
    avatar: '/avatar.png',
    imageCard: '/cardCreator.png',
    name: 'Ralph Edwards',
    userName: '@ralphedwards',
    created: '117',
    sold: '260ETH',
    followers: '612',
  },
  {
    id: 7,
    avatar: '/avatar.png',
    imageCard: '/cardCreator.png',
    name: 'Ralph Edwards',
    userName: '@ralphedwards',
    created: '117',
    sold: '260ETH',
    followers: '612',
  },
  {
    id: 8,
    avatar: '/avatar.png',
    imageCard: '/cardCreator.png',
    name: 'Ralph Edwards',
    userName: '@ralphedwards',
    created: '117',
    sold: '260ETH',
    followers: '612',
  },
];

import member0 from './img/team_member_1.jpg';
import member1 from './img/team_member_2.jpg';
import member2 from './img/team_member_3.jpg';
import member3 from './img/team_member_4.jpg';

import card0 from './img/green_1.png';
import card1 from './img/green_2.png';

import { StakingCardContent }from '../views/Staking/components/StakingCard';

const projects = [
    {
        picture: member0,
        name: 'TheForce.Trade',
        status: 'Coming',
        progress: 0,
        swap_rate: 10,
        cap: 7000, access: 'Public', message: 'A data aggregation platform that simplifies DeFi and NFT'
    }, {
        picture: member1,
        name: 'Greenheart (Blue Diamond Private)',
        status: 'Open',
        progress: 30,
        swap_rate: 13.3,
        cap: 3000,
        access: 'Private',
        message: 'Greenheart is a sustainable DeFi token led by Greenheart CBD - one of Europe\'s leading seed to shelf producers of CBD oil'
    }, {
        picture: member2,
        name: 'TradeStars (Gold+)',
        status: 'Open',
        progress: 60,
        swap_rate: 20,
        cap: 3000,
        access: 'Private',
        message: 'First DEX for Fantasy Stocks Trading on the blockchain using Fractional NFTs + DeFi Gamification'
    }, {
        picture: member3,
        name: 'Kryptobellion',
        status: 'Closed',
        progress: 100,
        swap_rate: 30,
        cap: 3000,
        access: 'Private',
        message: 'Speed Card Game Powered by NFTs & Blockchain'
    }
];

const rounds = [
    {
        name: 'Bronze',
        requirement: 1000,
        length: '3 hours before Allocation Round opens',
        whitelist: 'Like, Comment & Retweet',
        allocation: 'Yes',
        pool_weight: '10'
    }, {
        name: 'Silver',
        requirement: 2500,
        length: '3 hours before Allocation Round opens',
        whitelist: 'Like, Comment & Retweet',
        allocation: 'Yes',
        pool_weight: '30'
    }, {
        name: 'Gold',
        requirement: 5000,
        length: '3 hours before Allocation Round opens',
        whitelist: 'None',
        allocation: 'Yes',
        pool_weight: '65'
    }, {
        name: 'Platinum',
        requirement: 10000,
        length: '3 hours before Allocation Round opens',
        whitelist: 'None',
        allocation: 'Yes',
        pool_weight: '145'
    }, {
        name: 'Bronze',
        requirement: 25000,
        length: '3 hours before Allocation Round opens',
        whitelist: 'None',
        allocation: 'Yes',
        pool_weight: '400'
    }, {
        name: 'Bronze',
        requirement: 75000,
        length: '3 hours before Allocation Round opens',
        whitelist: 'None',
        allocation: 'Yes',
        pool_weight: '500+ Private allocations'
    }
];

const advisors = [
    {
        picture: member0,
        name: 'Jasper Byun',
        position: 'Founder',
        company: 'Blocksync Ventures'
    }, {
        picture: member1,
        name: 'Lester Lim',
        position: 'Founder',
        company: 'X21 Digital'
    }, {
        picture: member2,
        name: 'Ian Friend',
        position: 'Co-Founder and COO',
        company: 'Ferrum Network'
    }, {
        picture: member3,
        name: 'Danish Chaudhry',
        position: 'CEO',
        company: 'Bitcoin.com Exchange – Entrepreneur, Startup Advisor, Mentor and Investor'
    }, {
        picture: member0,
        name: 'EXNETWORK CAPITAL',
        position: '',
        company: 'Exnetwork Capital is an investment firm focused on funding and incubating blockchain projects.'
    }, {
        picture: member1,
        name: 'Tim Frost',
        position: 'CEO and co-founder',
        company: 'IELD App'
    }, {
        picture: member2,
        name: 'INNOVION',
        position: '',
        company: 'Innovion has built a prestigious reputation with a unique approach to guerilla marketing, collaborating with over 200 blockchain projects.'
    },
];

const stakings: Array<StakingCardContent> = [
  {
    name: 'Number of Stakers',
    value: '5133'
  }, 
  {
    name: 'Total SERA Staked',
    value: '31957734.60'
  }, 
  {
    name: 'APY',
    value: '0.00'
  }, 
  {
    name: 'Staked',
    value: '0.0000'
  }, 
  {
    name: 'Unstaked',
    value: '0.0000'
  }, 
  {
    name: 'Rewards',
    value: '0.0000'
  }, 
  {
    name: 'Connected with MetaMask',
    value: 'If not connected, click the "Connect Wallet" button in the top right corner'
  }, 
  {
    name: 'SERA available to deposit',
    prefix: 'Current Balance'
  },
  {
    name: 'MATIC available in wallet',
    value: 'MATIC is required to pay transaction fees on the Polygon network.',
    prefix: 'MATIC Balance',
  },
  {
    name: 'Eligible to stake',
    value: 'You cannot stake if you have an active SERA unstake/withdrawal request'
  },
  {
    name: 'Have an active SERA stake',
    prefix: 'Current Balance'
  },
  {
    name: 'Eligible to initiate unstake',
    value: 'You cannot unstake if you already have an active SERA unstake/withdrawal request'
  },
  {
    name: '7 day waiting period elapsed',
  },
  {
    name: 'You have Unstaked your SERA',
  },
];

const cards = [
    {
        name: 'Greenpeace',
        picture: card0,
        env: 0,
        progress: 50,
        stake: true,
        type: 'project',
    }, {
        name: 'OceanCleanup',
        picture: card1,
        env: 6513,
        progress: 90,
        stake: false,
        type: 'project',
    }, {
        name: 'OceanCleanup',
        picture: card1,
        env: 6513,
        progress: 90,
        stake: false,
        type: 'organisation',
    }, {
        name: 'Greenpeace',
        picture: card0,
        env: 0,
        progress: 50,
        stake: true,
        type: 'organisation',
    }, {
        name: 'Greenpeace',
        picture: card0,
        env: 0,
        progress: 50,
        stake: true,
        type: 'project',
    }, {
        name: 'OceanCleanup',
        picture: card1,
        env: 6513,
        progress: 90,
        stake: false,
        type: 'project',
    }, {
        name: 'OceanCleanup',
        picture: card1,
        env: 6513,
        progress: 90,
        stake: false,
        type: 'organisation',
    }, {
        name: 'Greenpeace',
        picture: card0,
        env: 0,
        progress: 50,
        stake: true,
        type: 'organisation',
    }
]

export { projects, rounds, advisors, stakings, cards };
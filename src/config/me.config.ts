export interface IMeConfig {
  email: string;
  gender: string;
  country: string;
  dob: string | undefined;
  socials: {
    linkedin: string;
    github: string;
    x: string;
  },
  name: {
    full: string;
    last: string;
    first: string;
    middle: string;
    nickname: string;
    username: string;
  };
};

const meConfig: IMeConfig = {
  gender: 'Male',
  country: 'Nigeria',
  dob: process.env.NEXT_PUBLIC_JET_DOB,
  email: process.env.NEXT_PUBLIC_JET_EMAIL || 'hello@emmanueljet.com',
  socials: {
    linkedin: 'https://linkedin.com/in/emmanuelJet',
    github: 'https://github.com/emmanuelJet',
    x: 'https://x.com/emmanuelJet_',
  },
  name: {
    full: 'Emmanuel Joseph (JET)',
    username: 'emmanueljet',
    middle: 'Temitayo',
    first: 'Emmanuel',
    nickname: 'JET',
    last: 'Joseph',
  },
};

export default meConfig;
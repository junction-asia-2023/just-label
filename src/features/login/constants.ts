import { DummyUser } from './type';

export const DUMMY_USER: DummyUser = {
  name: 'Yulim',
  email: '1ilsang@naver.com',
  companyNo: 'JS1234',
  password: 'just',
  department: 'Social Dev1',
  position: 'Software Engineer',
  special: false,
};

const jobs = ['Developer', 'Designer', 'Entrepreneur'];
const createTeamUser = () => {
  const result = [DUMMY_USER];
  let gift = false;
  for (let i = 2; i < 55; i++) {
    if (i === 11 || i === 34 || i === 45) {
      gift = true;
    }
    const user = {
      name: `Table${i}`,
      email: `${i}@naver.com`,
      companyNo: 'JS1234',
      password: 'just',
      department: `Social Platform${i}`,
      position: jobs[Math.floor(Math.random() * 3)],
      special: gift,
    };
    result.push(user);
    gift = false;
  }
  return result;
};
export const DUMMY_USERS: DummyUser[] = createTeamUser();

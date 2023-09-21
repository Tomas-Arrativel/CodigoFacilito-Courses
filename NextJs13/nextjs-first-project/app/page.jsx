import Users from '@/components/Users';

const fetchUsers = async () => {
  const res = await fetch('https://reqres.in/api/users');
  const data = await res.json();
  return data.data;
};

const HomePage = async () => {
  const users = await fetchUsers();
  return <Users users={users} />;
};

export default HomePage;

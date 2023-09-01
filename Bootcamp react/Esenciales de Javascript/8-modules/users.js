async function getUsers() {
  return {
    name: 'Tomás',
    balance: 10300,
  };
}

const users = { getUsers };

/**
 * Único punto de entrada.
 */
export default users;

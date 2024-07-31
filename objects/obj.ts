function createUser({ name, isPaid }: { name: string; isPaid: boolean }): {
  name: string;
  isPaid: boolean;
} {
  return {
    name,
    isPaid,
  };
}

createUser({ name: "krishna", isPaid: true });

const create = ({
  name,
  isPaid,
}: {
  name: string;
  isPaid: boolean;
}): { name: string; isPaid: boolean } => {
  return {
    name,
    isPaid,
  };
};
create({ name: "krishna", isPaid: false });

// type alias
type User = {
  name: string;
  username: string;
  email: string;
  isVerified: boolean;
};

const createNewUser = (user: User): {} => {
  return {};
};

export {};

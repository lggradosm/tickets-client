export const LoginService = () => {
  const API_URL = `${import.meta.env.VITE_API_URL}/users`;

  const login = async (user) => {
    const options = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(user),
    };
    const res = await fetch(API_URL + "/login", options);
    const data = (await res.json()) || null;
    return data;
  };

  const verify = async (token) => {
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ token: token }),
    };
    const res = await fetch(API_URL + "/verify", options);
    const data = await res.json();

    return data;
  };

  return { login, verify };
};

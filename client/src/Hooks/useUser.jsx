import { createContext, useContext, useEffect, useState } from "react";

const UserContext = createContext(null);

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const logout = () => {
    if (confirm("Are you sure you want to log out")) {
      localStorage.removeItem("userData");
      localStorage.removeItem("expiresIn");
      setUser(null);
    }
  };

  useEffect(() => {
    const storedUser = localStorage.getItem("userData");
    const storedExpiresIn = localStorage.getItem("expiresIn");

    if (storedUser && storedExpiresIn) {
      const currentTime = new Date().getTime();

      if (currentTime) {
        setUser(JSON.parse(storedUser));
      } else {
        logout();
      }
    }
  }, []);

  const login = (userData, expiresIn) => {
    const expireTime = new Date().getTime() + expiresIn * 1000;
    localStorage.setItem("expiresIn", expireTime.toString());
    localStorage.setItem("userData", JSON.stringify(userData));

    setUser(userData);
  };

  return (
    <UserContext.Provider value={{ user, setUser, login, logout }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => {
  return useContext(UserContext);
};

export default UserContext;

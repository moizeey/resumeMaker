import React, { createContext, useContext, useState } from "react";

interface AppContextType {
  linkedInActive: boolean;
  setLinkedInActive: React.Dispatch<React.SetStateAction<boolean>>;
  twitterActive: boolean;
  setTwitterActive: React.Dispatch<React.SetStateAction<boolean>>;
  githubActive: boolean;
  setGithubActive: React.Dispatch<React.SetStateAction<boolean>>;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppActiveProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [linkedInActive, setLinkedInActive] = useState(false);
  const [twitterActive, setTwitterActive] = useState(false);
  const [githubActive, setGithubActive] = useState(false);

  return (
    <AppContext.Provider
      value={{
        linkedInActive,
        setLinkedInActive,
        githubActive,
        twitterActive,
        setGithubActive,
        setTwitterActive,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useActiveContext = () => {
  const context = useContext(AppContext);
  if (!context) {
    console.error("useAppcontext accessed outside AppProvider");
    throw new Error("useAppcontext must be used inside an AppProvider");
  }

  return context;
};

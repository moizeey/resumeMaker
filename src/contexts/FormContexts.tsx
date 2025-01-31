import { createContext, ReactNode, useContext, useState } from "react";

interface Experience {
  expfrom: Date | null;
  expto: Date | null;
  companyName: string;
  jobPosition: string;
  companyAddress: string;
  yourExperience: string;
}

interface Education {
  edufrom: Date | null;
  eduto: Date | null;
  degree: string;
  institute: string;
}

interface Sections {
  name: string;
  id: number;
  path: string;
  active: boolean;
}

interface AppState {
  phoneNumber: string;
  fullName: string;
  email: string;
  address: string;
  jobPositionBasic: string;
  summary: string;
  linkedIn: string;
  github: string;
  twitter: string;
  skills: string[];
  experience: Experience[];
  education: Education[];
  sections: Sections[];
}

interface AppContextType {
  state: AppState;
  setState: (key: keyof AppState, value: any) => void;
  addSkill: (skill: string) => void;
  deleteSkill: (index: number) => void;
  addExperience: (experience: Experience) => void;
  removeExperience: (index: number) => void;
  addEducation: (education: Education) => void;
  removeEducation: (index: number) => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

interface AppProviderProps {
  children: ReactNode;
}

export const AppProvider: React.FC<AppProviderProps> = ({ children }) => {
  const [state, setStateInternal] = useState<AppState>({
    phoneNumber: "",
    fullName: "",
    email: "",
    address: "",
    jobPositionBasic: "",
    summary: "",
    linkedIn: "",
    github: "",
    twitter: "",
    skills: [],
    experience: [],
    education: [],
    sections: [
      { name: "Basic Info", id: 1, path: "/", active: true },
      { name: "Experience", id: 2, path: "/experience", active: true },
      { name: "Education", id: 3, path: "/education", active: true },
      { name: "Skills", id: 4, path: "/skills", active: true },
      { name: "Download", id: 5, path: "/download", active: true },
    ],
  });

  const setState = (key: keyof AppState, value: any) => {
    setStateInternal((prevState) => ({ ...prevState, [key]: value }));
  };

  const addSkill = (skill: string) => {
    if (skill.trim() !== "") {
      setStateInternal((prevState) => ({
        ...prevState,
        skills: [...prevState.skills, skill],
      }));
    }
  };

  const deleteSkill = (index: number) => {
    setStateInternal((prevState) => ({
      ...prevState,
      skills: prevState.skills.filter((_, i) => i !== index),
    }));
  };

  const addExperience = (experience: Experience) => {
    setStateInternal((prevState) => ({
      ...prevState,
      experience: [...prevState.experience, experience],
    }));
  };

  const removeExperience = (index: number) => {
    setStateInternal((prevState) => ({
      ...prevState,
      experience: prevState.experience.filter((_, i) => i !== index),
    }));
  };

  const addEducation = (education: Education) => {
    setStateInternal((prevState) => ({
      ...prevState,
      education: [...prevState.education, education],
    }));
  };

  const removeEducation = (index: number) => {
    setStateInternal((prevState) => ({
      ...prevState,
      education: prevState.education.filter((_, i) => i !== index),
    }));
  };

  return (
    <AppContext.Provider
      value={{
        state,
        setState,
        deleteSkill,
        addSkill,
        addExperience,
        removeExperience,
        addEducation,
        removeEducation,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useAppState = (): AppContextType => {
  const context = useContext(AppContext);
  if (!context) {
    console.error("useAppState accessed outside AppProvider");
    throw new Error("useAppState must be used inside an AppProvider");
  }
  return context;
};

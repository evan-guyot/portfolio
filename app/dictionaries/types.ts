export type LangDictionary = {
  hero: {
    title: string;
    subtitle: string;
  };

  sections: {
    projects: string;
    courses: string;
    languages: string;
  };

  common: {
    noLink: string;
    github: string;
    live: string;
    comingSoon: string;
  };

  courses: Record<
    string,
    {
      name: string;
      provider: string;
    }
  >;

  projects: Record<
    string,
    {
      title: string;
      description: string;
    }
  >;

  languages: Record<
    string,
    {
      title: string;

      skills: Record<string, string>;
    }
  >;
};

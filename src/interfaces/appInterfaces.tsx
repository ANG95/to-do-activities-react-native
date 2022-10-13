export interface User {
    name:   string;
    photo:  string;
}

export type NavigationPropsType = {
    navigation: NavigationType;
    route: {
      params: any;
      key: string;
      name: string;
    };
  };

export type NavigationType = {
    navigate: Function;
    goBack: Function;
    dispatch: Function;
  };
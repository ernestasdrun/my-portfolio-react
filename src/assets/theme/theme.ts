export interface ITheme {
    whiteBg: string;
    blueBg: string;
    skillBg: string;
    skillShadow: string;
}

const lightTheme: ITheme = {
  whiteBg: "rgb(255, 255, 255)",
  blueBg: "rgb(225, 241, 255);",

  skillBg: "rgb(248, 248, 248)",
  skillShadow: "rgb(226, 226, 226);",
};

const darkTheme: ITheme = {
  whiteBg: "rgb(88, 88, 88)",
  blueBg: "rgb(225, 241, 255);",

  skillBg: "rgb(248, 248, 248)",
  skillShadow: "rgb(226, 226, 226);",
};

export default { lightTheme, darkTheme };

const colors = {
  //font
  title: "#111",
  subTitle: "#666",
  blueTitle: "#718AFF",
  blueBanner: "#B9EAFF",
  borderColor: "#e1e1e1",
};

const fontSizes = {
  titleSize: "24px",
  xxlg: "20px",
  xlg: "18px",
  large: "16px",
};
const deviceSizes = {
  mobile: "375px",
  tablet: "768px",
  laptop: "920px",
};

const device = {
  mobile: `screen and (max-width: ${deviceSizes.mobile})`,
  tablet: `screen and (max-width: ${deviceSizes.tablet})`,
  laptop: `screen and (max-width: ${deviceSizes.laptop})`,
};
const theme = {
  colors,
  fontSizes,
  device,
};

export default theme;

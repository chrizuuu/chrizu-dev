import "@fontsource/space-grotesk";
import "./src/styles/global.css";

export const shouldUpdateScroll = (): boolean => {
  window.scrollTo(0, 0);
  return false;
};

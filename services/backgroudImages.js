import appConfig from "../config.json";

export default function DefineBackgroudImage() {
  const num = Math.floor(Math.random() * (appConfig.backgroudImages.length));
  var url = appConfig.backgroudImages[num];
  return url;
};
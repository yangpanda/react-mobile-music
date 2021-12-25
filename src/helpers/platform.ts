export default function getPlatform() {
  let platform = 0;
  const platformMap = new Map([
    ['Android', 1],
    ['iPhone', 2],
    ['iPad', 3]
  ]);

  for (let [key, value] of platformMap) {
    if (navigator.userAgent.indexOf(key) > 0) {
      platform = value;
      break;
    }
  }
  return platform;
}

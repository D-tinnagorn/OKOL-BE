import { flutterColors } from "./flutter-color";


/**
 * Random color จาก fix list
 */
export function randomFlutterColor(): number {
  const index = Math.floor(Math.random() * flutterColors.length);
  return flutterColors[index];
}

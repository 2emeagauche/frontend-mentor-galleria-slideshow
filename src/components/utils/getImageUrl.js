export function getImageUrl(folder, name){
  return new URL(`../../assets/images/${folder}/${name}`, import.meta.url).href
}
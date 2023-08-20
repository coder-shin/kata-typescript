// https://www.codewars.com/kata/5266876b8f4bf2da9b000362/train/typescript
export const likes = (names: string[]): string => {
  const likeTarget = getLikeTarget(names);

  if(needPlural(names)) {
    return `${likeTarget} like this`;
  } else {
    return `${likeTarget} likes this`;
  }
}

const needPlural = (names: string[]): boolean => {
  return names.length > 1;
}

const getLikeTarget = (names: string[]): string => {
  switch (names.length) {
    case 0:
      return 'no one'
      break;
    case 1:
      return names[0]
      break;
    case 2:
      return `${names[0]} and ${names[1]}`
      break;
    case 3:
      return `${names[0]}, ${names[1]} and ${names[2]}`
      break;
    default:
      return `${names[0]}, ${names[1]} and ${names.length - 2} others`
  }
}


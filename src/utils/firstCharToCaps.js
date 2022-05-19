export const firstCharToCaps = (string) => {
   if (!string) {
      return "enter a string";
   }
   if (string.length === 1) {
      return string[0].toUpperCase();
   }
   return `${string[0].toUpperCase()}${string.slice(1)}`;
};

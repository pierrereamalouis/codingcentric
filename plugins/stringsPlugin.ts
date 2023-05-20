export default defineNuxtPlugin(() => {
  return {
    provide: {
      capitalizeFirstWord: (str: string) => {
        return str.charAt(0).toUpperCase() + str.slice(1);
      },
    },
  };
});

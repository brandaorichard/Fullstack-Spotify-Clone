declare module 'use-sound' {
  const useSound: (url: string, options?: any) => [() => void, { pause: () => void; sound: any }];
  export default useSound;
}

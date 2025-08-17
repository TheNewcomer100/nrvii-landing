
declare global {
  interface Window {
    ml: (action: string, type?: string, value?: string | number) => void;
  }
}

export {};

declare function UseBootstrapSelect(target: HTMLSelectElement): {
    setValue: (value: string) => void;
    getValue: () => string | string[];
    removeValue: (value: string) => void;
};

export { UseBootstrapSelect };

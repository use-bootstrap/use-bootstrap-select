declare function UseBootstrapSelect(target: HTMLSelectElement, bootstrapInstance?: object): {
    setValue: (value: string) => void;
    getValue: () => string | string[];
    removeValue: (value: string) => void;
};

export { UseBootstrapSelect };

type Descripted<T> = {
  [K in keyof T]: {
    readonly key: T[K];
    readonly value: string;
  };
}[keyof T];

export function enumToArray<T>(
  enumeration: any,
  separatorRegex: RegExp = /_/g
): Descripted<T>[] {
  return (Object.keys(enumeration) as Array<keyof T>)
    .filter((key) => isNaN(Number(key)))
    .filter(
      (key) =>
        typeof enumeration[key] === "number" ||
        typeof enumeration[key] === "string"
    )
    .map((key) => ({
      key: enumeration[key],
      value: String(key).replace(separatorRegex, " "),
    }));
}

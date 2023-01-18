type PercentageParser<T> = T extends `${infer F}${infer R}`
  ? F extends "+" | "-"
    ? [F, ...(R extends `${infer X}%` ? [X, "%"] : [R, ""])]
    : ["", ...(T extends `${infer Y}%` ? [Y, "%"] : [T, ""])]
  : ["", "", ""];

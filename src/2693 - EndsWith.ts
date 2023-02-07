type EndsWith<
  T extends string,
  U extends string
> = T extends `${infer prev}${U}` ? true : false;

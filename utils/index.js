import snarkdown from 'snarkdown';

export const _s = (s, data, md) => {
  const string = data.content.strings[s][data.lang];

  return md ? { __html: snarkdown(string) } : string;
};

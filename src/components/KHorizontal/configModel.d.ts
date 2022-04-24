export interface ConfigModel {
  size: {
    width: number;
    height: number;
  };
  text: {
    color: string;
  };
  params: {
    color: string;
    progress: number;
  }[];
}

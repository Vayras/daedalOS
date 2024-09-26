export interface TerminalData {
  children?: TerminalData[];
  content?: React.JSX.Element | string;
  id: string;
  title: string;
  type: string;
}

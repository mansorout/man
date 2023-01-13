type addUpi = (newTodo: string) => void;
type RemoveUpi = (todoToRemove: upi) => void;


type upi = {
  text: string;
  complete: boolean;
}

type ToggleSelect = (selectedTodo: upi) => void;

type Option = {
  value: string;
  onClick: () => void;
  color?: string;
}
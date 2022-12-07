type addUpi = (newTodo: string) => void;
type RemoveUpi = (todoToRemove: upi) => void;
type EditUpi = (editUpi: upi) => void;

type upi = {
  text: string;
  complete: boolean;
}

type ToggleComplete = (selectedTodo: upi) => void;

type Option = {
  value: string;
  onClick: () => void;
  color?: string;
}
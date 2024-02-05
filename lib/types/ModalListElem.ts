export interface ModalListElem {
  noCount: number; // the no count we should show this modal
  modalGenerator: (
    incrementNoCount: () => void,
    modalDisplayed: boolean
  ) => JSX.Element;
}

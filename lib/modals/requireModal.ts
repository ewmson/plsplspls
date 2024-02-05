interface RequireModalProps {
  incrementNoCount: () => void;
  showModal: () => void;
  modalToUse?: JSX.Element;
}
export function requireModal({
  incrementNoCount,
  showModal,
  modalToUse,
}: RequireModalProps) {
  if (modalToUse) {
    showModal();
  } else {
    incrementNoCount();
  }
}

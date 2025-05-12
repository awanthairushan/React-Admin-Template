// components/Confirmation.tsx
import { useDispatch, useSelector } from "react-redux";
import { closeConfirmation } from "../../redux/slices/confirmationSlice";
import { RootState } from "../../redux/store";

const Confirmation = () => {
  const dispatch = useDispatch();
  const {
    isOpen,
    header,
    message,
    confirmText = "Confirm",
    cancelText = "Cancel",
    onResolve,
  } = useSelector((state: RootState) => state.confirmation);

  const handleClose = (confirmed: boolean) => {
    dispatch(closeConfirmation());
    onResolve?.(confirmed);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/40 flex items-center justify-center">
      <div className="bg-white rounded-2xl p-6 w-full max-w-lg shadow-xl">
        <div className="flex justify-between items-start">
          <h2 className="text-xl font-bold text-gray-900">{header}</h2>
          <button
            className="text-gray-400 hover:text-gray-600"
            onClick={() => handleClose(false)}
          >
            ✕
          </button>
        </div>
        <p className="mt-4 text-gray-600">{message}</p>

        <div className="mt-6 flex justify-end gap-3">
          <button
            onClick={() => handleClose(false)}
            className="border border-gray-300 rounded px-4 py-2 hover:bg-gray-100"
          >
            {cancelText}
          </button>
          <button
            onClick={() => handleClose(true)}
            className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700"
          >
            {confirmText}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Confirmation;

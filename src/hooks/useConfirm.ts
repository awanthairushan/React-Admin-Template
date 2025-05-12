// hooks/useConfirm.ts
import { useDispatch } from "react-redux";
import { openConfirmation } from "../redux/slices/confirmationSlice";
export const useConfirm = () => {
  const dispatch = useDispatch();

  return (params: {
    header: string;
    message: string;
    confirmText?: string;
    cancelText?: string;
  }): Promise<boolean> => {
    return new Promise((resolve) => {
      dispatch(openConfirmation({ ...params, onResolve: resolve }));
    });
  };
};

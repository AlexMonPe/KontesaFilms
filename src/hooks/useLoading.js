import { useDispatch } from "react-redux";
import actionCreator from "../store/actionTypes";
import { SHOW_LOADING} from "../store/typesVar";

const useLoading = () => {
    const dispatch = useDispatch()
      return () => {
      dispatch(actionCreator(SHOW_LOADING))
  };
};
export default useLoading;
import callApi from "../services/callApi";
import { GET_LIST_JOB} from "../constansts/apiConstants";
export  const getListJob = (params,onSuccess,onFail) => {
    return () => callApi(GET_LIST_JOB,"GET", params, onSuccess, onFail)
}


import axios from 'axios';
import { updateStart, updateError, updateSuccess } from './userSlice';

export const updateUser = async (user, dispatch) => {
    dispatch(updateStart());
    try {
        const res = await axios.post("/v1/update", user);
        if (res.status === 200)
            dispatch(updateSuccess(res.data));
        else
            dispatch(updateError());
    } catch (error) {
        console.log(error);
        dispatch(updateError());
    }
}
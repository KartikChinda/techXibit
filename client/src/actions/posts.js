import * as api from '../../api'

export const getPosts = () => async (dispatch) => {
    const { data } = await api.fetchPosts();
    const action = { type: 'FETCH_ALL', payload: data }
    dispatch(action);
}


export const createPost = (post) => async (dispatch) => {
    try {
        const { data } = api.createPost(post);
        const action = { type: 'CREATE', payload: data };
        dispatch(action);
    } catch (error) {
        console.log(error);
    }
}
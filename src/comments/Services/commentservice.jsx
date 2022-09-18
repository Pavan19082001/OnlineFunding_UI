import axios from 'axios'

const COMMENT_BASE_API_URL='http://localhost:8080/commentapi/v1/comments';
 
class commentservice{
    getAllComments(){
        return axios.get(COMMENT_BASE_API_URL)
    }
}
export default new commentservice();
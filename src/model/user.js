import axios from 'axios'
import md5 from 'md5'

class User {
    static authenticate({
        username,
        password
    }) {
        return axios.post('/api/admin/authenticate', {
            password: md5(password),
            username: username
        })

    }
    static async createUser({
        username,
        password,
        friendly_name
    }) {
        let data = await axios.post('/api/user/add', {
            friendly_name,
            username,
            password: md5(password),

        })
        console.log(data);

    }
    constructor({
        id,
        create_time,
        update_time,
        name,
        friendly_name,
        parent_id,
        groups
    }) {
        this['_id'] = id;
        this['_create_time'] = create_time;
        this['_update_time'] = update_time;
        this['_name'] = name;
        this['friendly_name '] = friendly_name;
        this['parent_id'] = parent_id;
        this['groups'] = groups;
    }
}
export default User
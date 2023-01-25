import axios from "axios";

const host = 'http://localhost:5000/api/'

export const create = async (port) => {
    return await axios.post(host + 'task', port)
}

export const update = async (port, id) => {
    return await axios.post(host + 'task/' + id, port)
}

export const deleteOne = async (id) => {
    return await axios.delete(host + 'task/' + id)
}

export const viewAll = async () => {
    const allPromise = await axios.get(host + 'task')
    const data = allPromise.data
    return data
}

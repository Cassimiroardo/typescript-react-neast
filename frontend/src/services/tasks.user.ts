import api from './api'

export const getTasks = async () => {
    return await api.get('/tasks', { 
        headers: { 
            'Authorization': `Bearer ${localStorage.getItem('token')}`
        } 
    })
        .then(res => {
            return res.data
        })
        .catch(err => {
            console.log(err)
        })
}

export const createTask = async (title:string, description: string) => {
    return await api.post('/tasks', {
        title,
        description
        },{
        headers: {
            'Authorization': `Bearer ${localStorage.getItem('token')}`
        }
    })
}

export const deleteTask = async (id: number) => {
    return await api.delete(`/tasks/${id}`,{
        headers: {
            'Authorization': `Bearer ${localStorage.getItem('token')}`
        }
    })
}
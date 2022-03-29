import axios from 'axios';

const api_url = 'http://127.0.0.1:8000/api/';


class TaskService {

    getTasks(){
        return axios.get(api_url + 'tasks');
    }

    getTaskById(task_id){
        return axios.get(api_url + 'task/' + task_id);
    }

    addTask(task){
        return axios.post(api_url + 'task', task);
    }

    updateTask(task_id, task){
        return axios.put(api_url + 'task/'+task_id , task);
    }

    strikeTask(task_id, task){
        return axios.put(api_url + 'task/completed/'+task_id , task);
    }

    deleteTask(task_id){
        return axios.delete(api_url + 'task/' + task_id);
    }
}

export default new TaskService()
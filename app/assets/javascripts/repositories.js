import Ajax from 'qwest';

let Repository = {
  create: (path, objName) => {
    return {
      perform: (objParams) => {
        let params = {};
        params[objName] = objParams;
        return Ajax.post(path, params);
      }
    };
  },
  load: (path) => {
    return {
      perform: () => {
        return Ajax.get(path);
      }
    }
  }
};

export default {
  Todos: {
    create: Repository.create('/todos.json', 'todo'),
    load: Repository.load('/todos.json')
  }
};

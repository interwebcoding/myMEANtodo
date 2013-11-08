exports.create = function(Todo) {
  return function(req, res) {
    Todo.find({}, function(error, todos) {
      res.render('create', {
        title: 'Express',
        todos : todos
      });
    });
  };
};

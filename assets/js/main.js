// ----------------- Main js.
(function() {
    var myApp = {
        vars: {
            mainListUL: document.querySelector('#main-list-ul'),
            taskListData: []
        },

        logAListItemForDev: function(arg, message) {
            console.log('----------------------------------------');
            console.log(message);
            console.log(arg);
            console.log('----------------------------------------');
        },

        // 2. READ data
        populateToDoList: function(listArray, callback) {
            var list_count = 0;

            // Loop through the list data and insert into the task list ul.
            for (var a = 0; a < listArray.length; a++) {
                var the_item = listArray[a];
                var edit_id = 'edit-task-'+the_item.id;
                var remove_id = 'remove-task-'+the_item.id;

                this.vars.mainListUL.insertAdjacentHTML('beforeend', '<li class="todo-task-li">' +
                    '<span class="todo-task-name">'+ the_item.name +'</span>' +
                    '    <button id="'+edit_id+'" data-task-id="'+the_item.id+'" class="btn btn-sm btn-primary edit-task">edit</button>' +
                    '    <button id="'+remove_id+'" data-task-id="'+the_item.id+'" class="btn btn-sm btn-danger remove-task">remove</button>' +
                    '</li>');

                list_count += 1;
            }

            if (list_count === listArray.length) {
                callback('finished');
            } else {
                console.log('Still waiting...');
            }
        },

        // Function to populate edit a task form.
        editListItem: function(arg) {
            this.logAListItemForDev(arg, 'I will edit this.');
        },

        onPrepASetOfButtons: function(buttonsArray, setType) {
            var self = this;

            for (var i = 0; i < buttonsArray.length; i++) {
                var task_button = buttonsArray[i];

                // Handle click event.
                task_button.onclick = function() {
                    var taskId = this.dataset.taskId;

                    if (setType === 'edit') {
                        self.editListItem(taskId);
                    } else if (setType === 'remove') {
                        self.removeListItem(taskId);
                    }
                };
            }
        },

        onInitOnClickFunctions: function() {
            var editTaskButton = document.querySelectorAll('.edit-task');
            var deleteTaskButton = document.querySelectorAll('.remove-task');

            this.onPrepASetOfButtons(editTaskButton, 'edit');
            this.onPrepASetOfButtons(deleteTaskButton, 'remove');
        },

        // ------------------------
        // 1. CREATE data

        // ------------------------
        // 3. UPDATE data

        // ------------------------
        // 4. DELETE data
        // Function to remove a task item.
        removeListItem: function(arg) {
            this.logAListItemForDev(arg, 'I will remove this.');
            var new_list_array = [];

            // Remove the list item from the array.
            for (var k = 0; k < this.vars.taskListData.length; k++) {
                var listItem = this.vars.taskListData[k];

                if (Number(arg) !== listItem.id) {
                    new_list_array.push(listItem);
                }
            }

            this.onSetNewListIntoLocalStorage(new_list_array);
        },

        // ------------------------
        // 4. STORE data
        onSetNewListIntoLocalStorage: function(listData) {
            localStorage.setItem('my_todo_task_list_data', JSON.stringify(listData));

            window.location.reload();
        },

        initializeApp: function() {
            var self = this;
            var list_data_to_use = [];
            var localStorageListData = JSON.parse(localStorage.getItem('my_todo_task_list_data'));

            // Populate the list with static data from the vars object.
            if (localStorageListData) {
                list_data_to_use = localStorageListData;
            } else {
                list_data_to_use = [
                    { id: 0, name: 'Take out trash.' },
                    { id: 1, name: 'Cook food tonite.' },
                    { id: 2, name: 'Take kids to school.' },
                    { id: 3, name: 'Go to bed.' }
                ];
            }

            // Set the global task list array now that we have something to use.
            this.vars.taskListData = list_data_to_use;

            this.populateToDoList(this.vars.taskListData, function(data) {
                if (data === 'finished') {
                    self.onInitOnClickFunctions();
                }
            });
        }
    };

    myApp.initializeApp();
})();


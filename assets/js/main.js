// ----------------- Main js.
(function() {
    var myApp = {};

    myApp.initializeApp = function() {
        console.log('The project is ready yep!');

    };

    myApp.initializeApp();

    // var taskListUl = document.querySelector('#main-list-ul');
    // // console.log(taskListUl);
    // var myList = [
    //     { id: 0, name: 'Take out trash' },
    //     { id: 1, name: 'Cook food' },
    //     { id: 2, name: 'Take kids to school.' },
    //     { id: 3, name: 'Go to bed.' }
    // ];
    // // console.log(myList);
    //
    // // Function to remove a task item.
    // function removeItem(arg) {
    //     console.log('I will remove this. ----------------------');
    //     console.log(arg);
    //     console.log('----------------------------------------');
    // }
    //
    // // Function to populate edit a task form.
    // function editItem(arg) {
    //     console.log('I will edit this. ----------------------');
    //     console.log(arg);
    //     console.log('----------------------------------------');
    // }
    //
    // function initializeOnclicks() {
    //     console.log('go');
    //     var editTaskButton = document.querySelectorAll('.edit-task');
    //     var deleteTaskButton = document.querySelectorAll('.edit-task');
    //
    //     // Handle click events.
    //     editTaskButton.onclick = function() {
    //         console.log(this);
    //     };
    // }

    // ------------------------
    // 1. CREATE data
    // ------------------------
    // 2. READ data
    // Loop through the list data and insert into the task list.
    // for (var a = 0; a < myList.length; a++) {
    //     var the_item = myList[a];
    //     // console.log(the_item);
    //     var edit_id = 'edit-task-'+the_item.id;
    //     var remove_id = 'remove-task-'+the_item.id;
    //
    //     taskListUl.insertAdjacentHTML('afterend', '<li class="todo-task-li">\n' +
    //         '                <span class="todo-task-name">'+ the_item.name +'</span>\n' +
    //         '                <button ' +
    //         '                   id="'+edit_id+'" ' +
    //         '                   class="btn btn-sm btn-primary edit-task">edit</button>\n' +
    //         '                <button ' +
    //         '                   id="'+remove_id+'" ' +
    //         '                   class="btn btn-sm btn-danger remove-task">remove</button>\n' +
    //         '            </li>');
    //
    //     var editTaskButton = document.getElementsByClassName('.edit-task');
    //     console.log('-----------');
    //     console.log(editTaskButton);
    //         // Handle click events.
    //         editTaskButton.onclick = function() {
    //             console.log('Yep.');
    //             console.log(this);
    //         };
    // }

    // setTimeout(function() {
    //     console.log('buttons are ready.');
    //     // var editTaskButton = document.querySelectorAll('.edit-task');
    //     var editTaskButton = document.getElementsByClassName('.edit-task');
    //     // var editTaskButton = document.querySelector('#edit-task-2');
    //     // console.log(editTaskButton);
    //     // var deleteTaskButton = document.querySelectorAll('.remove-task');
    //
    //     // Handle click events.
    //     editTaskButton.onclick = function() {
    //         console.log('Yep.');
    //         console.log(this);
    //     };
    // }, 3000);

    // 3. UPDATE data
    // ------------------------
    // 4. DELETE data

    // ------------------------
    // 4. STORE data
    // ------------------------

})();


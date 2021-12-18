console.log('To do list !');
let todo = [];
let i = null;
let input = 0;
input = prompt('What would you like to do?');
while (input !== 'quit') {
    if (input === 'add') {
        i = prompt('Enter new todo: ');
        todo.push(i);
        console.log(`${i} added to the list`);
        // console.log('***********');
    }
    else if (input === 'list') {
        console.log('List is as follows:');
        let j = 0;
        for (const iterator of todo) {
            j++;
            console.log(`[${j}] : ${iterator}`);
        }
        console.log('***********');
    }
    else if (input === 'delete') {
        i = prompt('Enter the index for deleting the elements[only the index range]:')
        if (i > (todo.length - 1) || i < 0) {
            continue;
        }
        todo.splice(i, 1);
        console.log('Todo Deleted!');
        console.log('***********');
    }
    input = prompt('What would you like to do?');
}
console.log('Ok quitting the application!');
console.log('***********');
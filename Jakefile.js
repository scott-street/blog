const {task, desc} = require('jake')
const {exec} = require('child_process')

function execute(command, callback){
    exec(command, function(error, stdout, stderr){ callback(stdout); });
};

desc('This is the default task')
task('default', function() {
    console.log('this is the default task')
    console.log('jake will run this task if you run `jake` with no task specified')
})

desc('deploy to github pages. usage `jake deploy[<GITHUB_USERNAME>]`')
task('deploy', function(githubUsername) {
    execute(`GIT_USER=${githubUsername} yarn deploy`, console.log)
})

desc('create new blog file. usage `jake create[<POST_NAME>]`')
task('create', function(name){
    const date = new Date()
    const filename = `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}-${name}.md`
    exec(`touch blog/${filename}`) 
})
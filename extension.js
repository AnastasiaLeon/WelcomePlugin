const vscode = require('vscode');

function activate(context) {
    console.log('Congratulations, your extension "welcome-plugin" is now active!');

    // команда для приветствия
    let disposable = vscode.commands.registerCommand('welcome-plugin.sayHello', function () {
        vscode.window.showInformationMessage('Hello, VS Code user >:D! Have a nice and productuve day!');
    });

    context.subscriptions.push(disposable);
}

function deactivate() {}

module.exports = {
    activate,
    deactivate
};

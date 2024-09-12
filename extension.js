const vscode = require('vscode');

const activate = (context) => {
	const cycleCommand = vscode.commands.registerTextEditorCommand('checkbox-cycle.cycle', (textEditor, edit, ...args) => {
		if (!textEditor.selection.isSingleLine) {
			vscode.window.showInformationMessage('Can only cycle one line');
			return;
		}

		const { c: lineNumber } = textEditor.selection.anchor
		const { b: lineContents } = textEditor.document.lineAt(lineNumber)

		const regex = /^(\s*)([\-\+\*]) \[([x~\s])\] (.*)$/;
		const results = lineContents.match(regex);

		if (results == null) {
			vscode.window.showInformationMessage('No checkbox on this line');
			return;
		}

		const [match, indent, bullet, status, body] = results

		const newStatus = {
			' ': '~',
			'~': 'x',
			'x': ' ',
		}[status]

		edit.replace(new vscode.Range(
			new vscode.Position(lineNumber, 0),
			new vscode.Position(lineNumber, match.length)
		), `${indent}${bullet} [${newStatus}] ${body}`)
	})
	context.subscriptions.push(cycleCommand);
}

const deactivate = () => { }

module.exports = {
	activate,
	deactivate
}

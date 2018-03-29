"use strict";
// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from "vscode";

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {
  let showCommands = vscode.commands.registerCommand(
    "extension.touchbarShortcuts.showCommands",
    () => {
      vscode.commands.executeCommand("workbench.action.showCommands");
    }
  );

  let terminalNew = vscode.commands.registerCommand(
    "extension.touchbarShortcuts.openTerminal",
    () => {
      vscode.commands.executeCommand("workbench.action.terminal.new");
    }
  );

  context.subscriptions.push(showCommands, terminalNew);
}

// this method is called when your extension is deactivated
export function deactivate() {}

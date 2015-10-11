A simple webpack workspace showing:

- React with TypeScript 1.6 integration and autocomplete
- Automatic refresh via webpack-dev-server

It's set up as VS Code workspace, but VS Code is only used for autocomplete, not for building. All the heavy work is done by webpack.

You'll need to change the VS Code settings file to point to your TypeScript 1.6 lib folder. It seems that this needs to be an absolute filepath, rather than a project-relative one.

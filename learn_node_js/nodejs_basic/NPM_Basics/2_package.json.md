The package.json is the project manifest file. It has all the meta data about the project such as the descriptions, license, location, dependencies, scripts to build, launch and run. Consider this example which has a few dependencies:

```json
{
  "name": "my-cool-app",
  "version": "0.1.0",
  "description": "A great new application",
  "main": "server.js",
  "dependencies": {
    "express": "~4.2.0",
    "ws": "~0.4.25"
  },
  "devDependencies": {
    "grunt": "~0.4.0"
  }
}
```
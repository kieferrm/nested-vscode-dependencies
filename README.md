Run  `./setup.sh`


### Configuration

- `program` depends on `vscode` and `library`
- `library` depends on `vscode`

Layout:
```
 node_modules
      library -> ../library-source
 program
      node_modules
          vscode
 library-source
      node_modules
          vscode
 ```

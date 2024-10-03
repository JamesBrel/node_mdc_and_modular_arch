# Node Server : MDC and Modular Architecture

### Author : James Brel

### Contact : thecoder38@gmail.com 
---

<img src="img/typescript.png" alt="logo" width="200" height="200">

---

## Architecture 
   the architecture of each feature is based on the MDC which is constituted mainly of 3 layers :
   - Data
   - Models
   - Controllers  
```
📦features
 ┗ 📂say_hello_to_world
 ┃ ┣ 📂controllers
 ┃ ┣ 📂data
 ┃ ┗ 📂models
```  

## General Folder Structure Tree 
```
📦project
 ┣ 📂.vscode
 ┃ ┗ 📜settings.json
 ┣ 📂envs
 ┃ ┣ 📜dev.env
 ┃ ┣ 📜prod.env
 ┃ ┗ 📜staging.env
 ┣ 📂lib
 ┃ ┣ 📂src
 ┃ ┃ ┣ 📂core
 ┃ ┃ ┃ ┣ 📂configs
 ┃ ┃ ┃ ┃ ┣ 📜inversify_config.ts
 ┃ ┃ ┃ ┃ ┣ 📜middle_config.ts
 ┃ ┃ ┃ ┃ ┗ 📜server_config.ts
 ┃ ┃ ┃ ┗ 📜init.ts
 ┃ ┃ ┣ 📂features
 ┃ ┃ ┃ ┣ 📂app_feats
 ┃ ┃ ┃ ┃ ┗ 📂say_hello_to_world
 ┃ ┃ ┃ ┃ ┃ ┣ 📂controllers
 ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜say_hello_to_world_controller.ts
 ┃ ┃ ┃ ┃ ┃ ┣ 📂data
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📂impls
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜hello_to_world_impl.ts
 ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📂interfaces
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜hello_to_world_inter.ts
 ┃ ┃ ┃ ┃ ┃ ┗ 📂models
 ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜.gitkeep
 ┃ ┃ ┃ ┗ 📂users_feats
 ┃ ┃ ┃ ┃ ┗ 📂feature_name
 ┃ ┃ ┃ ┃ ┃ ┣ 📂controllers
 ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜.gitkeep
 ┃ ┃ ┃ ┃ ┃ ┣ 📂data
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📂impls
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜.gitkeep
 ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📂interfaces
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜.gitkeep
 ┃ ┃ ┃ ┃ ┃ ┗ 📂models
 ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜.gitkeep
 ┃ ┃ ┗ 📂shared
 ┃ ┃ ┃ ┣ 📂constants
 ┃ ┃ ┃ ┃ ┣ 📜api_const.ts
 ┃ ┃ ┃ ┃ ┣ 📜number_const.ts
 ┃ ┃ ┃ ┃ ┗ 📜string_const.ts
 ┃ ┃ ┃ ┣ 📂extensions
 ┃ ┃ ┃ ┃ ┗ 📜express.d.ts
 ┃ ┃ ┃ ┣ 📂global
 ┃ ┃ ┃ ┃ ┗ 📜string_variable.ts
 ┃ ┃ ┃ ┣ 📂helpers
 ┃ ┃ ┃ ┃ ┗ 📜.gitkeep
 ┃ ┃ ┃ ┣ 📂logs
 ┃ ┃ ┃ ┃ ┗ 📜logger.ts
 ┃ ┃ ┃ ┣ 📂middlewares
 ┃ ┃ ┃ ┃ ┣ 📜token_middle.ts
 ┃ ┃ ┃ ┃ ┗ 📜uploder_middle.ts
 ┃ ┃ ┃ ┣ 📂results
 ┃ ┃ ┃ ┃ ┣ 📜result_failure.ts
 ┃ ┃ ┃ ┃ ┣ 📜result_success.ts
 ┃ ┃ ┃ ┃ ┗ 📜type.ts
 ┃ ┃ ┃ ┗ 📂services
 ┃ ┃ ┃ ┃ ┣ 📂jwt
 ┃ ┃ ┃ ┃ ┃ ┗ 📂requests
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜create_token_request.ts
 ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜verify_token_request.ts
 ┃ ┃ ┃ ┃ ┣ 📂mongoose
 ┃ ┃ ┃ ┃ ┃ ┣ 📂configs
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜index_config.ts
 ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜mongoose_config.ts
 ┃ ┃ ┃ ┃ ┃ ┣ 📂requests
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜mongoose_delete_request.ts
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜mongoose_get_request.ts
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜mongoose_insert_request.ts
 ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜mongoose_update_request.ts
 ┃ ┃ ┃ ┃ ┃ ┣ 📂schemas
 ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜user_schema.ts
 ┃ ┃ ┃ ┃ ┃ ┗ 📂utils
 ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜root_util.ts
 ┃ ┃ ┃ ┃ ┣ 📂security
 ┃ ┃ ┃ ┃ ┃ ┗ 📂requests
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜crypt_request.ts
 ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜verify_request.ts
 ┃ ┃ ┃ ┃ ┗ 📂sequelize
 ┃ ┃ ┃ ┃ ┃ ┣ 📂configs
 ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜.gitkeep
 ┃ ┃ ┃ ┃ ┃ ┣ 📂schemas
 ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜.gitkeep
 ┃ ┃ ┃ ┃ ┃ ┗ 📂utils
 ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜.gitkeep
 ┃ ┗ 📜index.ts
 ┣ 📂test
 ┃ ┗ 📜.gitkeep
 ┣ 📜.eslintignore
 ┣ 📜.eslintrc
 ┣ 📜.gitignore
 ┣ 📜.prettierignore
 ┣ 📜.prettierrc
 ┣ 📜babel.config.json
 ┣ 📜ecosystem.config.cjs
 ┣ 📜jest.config.json
 ┣ 📜nodemon.json
 ┣ 📜package.json
 ┣ 📜readme.md
 ┣ 📜tsconfig.json
 ┗ 📜typedoc.json
```

## Usage and Configuration

After downloading or cloning the Git Repository

  1. go to the **project** folder and copy all the content in your server's project
   
  2. go into your **package.json file**, fill the following points:
   
     - "name" : Specify the Project Name
     - "description" : Specify the Project Description
     - "url" : "git+url" (complete the url line with the git url of your repository)
     - "author" : Specify the Project Author (Organisation name)
  
  3. and type ***npm install*** to install all packages of Dependencies and Dev_Dependencies 

---
<p style="text-align: center"> Copyright &copy; 2024 James Brel All Rights Reserved</p>

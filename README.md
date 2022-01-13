# now-component-template

Template to create a Now Experience Component

## Features

- shows how to pass data for sample data
- shows how to style

## Prerequisites
1. Install Node version 12.16
    * https://nodejs.org/ru/blog/release/v12.16.1/ 
    * It's the version supported by the ServiceNow CLI

2. Install ServiceNow CLI
    * Download from the [ServiceNow App Store](https://store.servicenow.com/sn_appstore_store.do#!/store/application/9085854adbb52810122156a8dc961910/1.1.0?referer=%2Fstore%2Fsearch%3Flistingtype%3Dallintegrations%25253Bancillary_app%25253Bcertified_apps%25253Bcontent%25253Bindustry_solution%25253Boem%25253Butility%25253Btemplate%26q%3DServiceNow%2520CLI&sl=sh)

3. Configure the ServiceNow CLI to communicate with a ServiceNow instance
    ```
    snc configure profile set
    ```

4. Add ServiceNow CLI UI Component
    ```
    snc extension add --name ui-component
    ```

5.  You may need to run this command if you get disconnected from your instance
    ```
    snc ui-component login {instance_url} basic {user_name} {password}
    ```

## Installation 

1. Fork this repo into your GitHub account.
    * You can fork any repo by clicking the fork button in the upper right hand corner of a repo page.
2. Clone the fork of your repo, so you can edit the contents locally
    ```
    git clone <repo url>
    ```
3. Install the required components
    ```
    npm install
    ```
3. Test the component locally 
    ```
    snc ui-component develop --open
    ```
4. Deploy the component to a ServiceNow instance
    ``` 
    snc ui-component deploy --force 
    ```
5. Make edits to your local cloned copy of the repo on your computer

6. Add, commit and push those edits back to your fork on GitHub

7. Suggest the changes that you made, to be added to the origianl repo using a pull request



## Notes
Encountered an error : "Uncaught ReferenceError: process is not defined." 
Fixed it by adding react-error-overlay with the following command:
```
npm i -D react-error-overlay@6.0.9
```
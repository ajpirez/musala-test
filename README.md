[[[# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `yarn build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
](https://app-test-musala.herokuapp.com/

https://app-test-musala.herokuapp.com/api-docs/



the application has a user registry, it works as follows. There are system users and these have roles, the roles can be Admin or Client, where an administrator can add roles, delete roles, delete gateways, add devices to these etc, while a user with a client role can only see the gateways and the devices associated with them. Security JWT.

the app address is as follows on github ---- https://github.com/ajpirez/musala-test

inside the application you will find you should do the following execute in case of linux

sudo ./create_replic.sh --fork  

or equivalent on windows then 

mongo --port 27018 < init_replic.js

to lift the replicas of mongoDB since it implements transactions in the test for greater security.

You can also find a Dockerfile and another docker-compose file which generates the api with the replicas and the initial configuration of mongo to run our server application in docker

docker-compose up --build

I have developed a very basic application in react for this test in git is the code and you can also access it in a heroku where you make your deployment.

https://app-test-musala.herokuapp.com/

You can access the api documentation from heroku at this route

https://app-test-musala.herokuapp.com/api-docs/

This is the swagger documentation

In the application inside the backend-section there is a test folder in which to implement unit tests with jest to the repositories and services.

I hope you like it)](https://app-test-musala.herokuapp.com/

https://app-test-musala.herokuapp.com/api-docs/



the application has a user registry, it works as follows. There are system users and these have roles, the roles can be Admin or Client, where an administrator can add roles, delete roles, delete gateways, add devices to these etc, while a user with a client role can only see the gateways and the devices associated with them. Security JWT.

the app address is as follows on github ---- https://github.com/ajpirez/musala-test

inside the application you will find you should do the following execute in case of linux

sudo ./create_replic.sh --fork  

or equivalent on windows then 

mongo --port 27018 < init_replic.js

to lift the replicas of mongoDB since it implements transactions in the test for greater security.

You can also find a Dockerfile and another docker-compose file which generates the api with the replicas and the initial configuration of mongo to run our server application in docker

docker-compose up --build

I have developed a very basic application in react for this test in git is the code and you can also access it in a heroku where you make your deployment.

https://app-test-musala.herokuapp.com/

You can access the api documentation from heroku at this route

https://app-test-musala.herokuapp.com/api-docs/

This is the swagger documentation

In the application inside the backend-section there is a test folder in which to implement unit tests with jest to the repositories and services.

I hope you like it)
](https://app-test-musala.herokuapp.com/

https://app-test-musala.herokuapp.com/api-docs/



the application has a user registry, it works as follows. There are system users and these have roles, the roles can be Admin or Client, where an administrator can add roles, delete roles, delete gateways, add devices to these etc, while a user with a client role can only see the gateways and the devices associated with them. Security JWT.

the app address is as follows on github ---- https://github.com/ajpirez/musala-test

inside the application you will find you should do the following execute in case of linux

sudo ./create_replic.sh --fork  

or equivalent on windows then 

mongo --port 27018 < init_replic.js

to lift the replicas of mongoDB since it implements transactions in the test for greater security.

You can also find a Dockerfile and another docker-compose file which generates the api with the replicas and the initial configuration of mongo to run our server application in docker

docker-compose up --build

I have developed a very basic application in react for this test in git is the code and you can also access it in a heroku where you make your deployment.

https://app-test-musala.herokuapp.com/

You can access the api documentation from heroku at this route

https://app-test-musala.herokuapp.com/api-docs/

This is the swagger documentation

There are commented paths and files such as cache in requests, etc. I did it to add more things to the project, but then I commented them out because I didn't really need them.

You cannot delete the admin user with admin role from the front only in bd , in case you lose it you can execute the following route
in this case heroku https://app-test-musala.herokuapp.com/v1/api/auth/seed
but in your local api it is only to change the address for yours, this generates the seeders and creates two users admin and client with role admin and client respectively.


In the application inside the backend-section there is a test folder in which to implement unit tests with jest to the repositories and services.

I hope you like it

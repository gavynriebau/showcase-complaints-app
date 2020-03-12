
# Demo complaints app

[https://showcase-complaints-app.azurewebsites.net/](https://showcase-complaints-app.azurewebsites.net/)

This is a demo app I created to practice building React apps and hosting them on Azure.

There is some information below about how the app was built including which technologies were used.
I chose to make a fake complaints form because I wanted to build a solution similar in nature to apps that I've previously built for clients.

**Hosted on Microsoft Azure**

Azure is Microsoft's a cloud platform that allows companies to build, deploy and manage applications in the cloud.

**Built using React**

React is a javascript library for building user interfaces that was created by Facebook, it enables developers to easily and quickly create applications.

**Built using Material UI**

Material UI is a component library which provides out-of-the-box components with styling based on Google's material design framework.

**Containerized**

The application is built into containerized Docker image which are stored in the Azure container registry.
Containerization ensures apps behave the same across any machine where it's deployed and enables fast rollback to previous versions.

**Continuous deployment**

The source code for this application is hosted on Github, every code commit triggers an automatic build of a new Docker image.
The latest image is then automatically deployed to the Azure container app where it's hosted.
Continuous deployment offers productivity benefits to organizations by allowing developers to rapidly evolve and deploy software.
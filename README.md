Before you begin:

Make sure you have a "free" account in a one of the major cloud providers.

Make sure you have a "free" account in a one of the major SCM providers.



Preparations: Install and Configure Jenkins

Create a Linux Instance on your cloud providers

Setup the LTS release of Jenkins on it

Make Jenkins available on SSL (port 443) using Nginx or a different web server.



NodeJS/Python service

First, create a public repository and checkout a new branch ( don’t work on master branch )



You need to develop a service called "counter-service". It should just maintain a web page with a counter of the amount of POST requests it served, and return it on every GET request it gets.

Your code should be as simple as possible, yet well documented and robust.



The counter service needs to be exposed on port 80.



Deployment

Create a Jenkins Pipeline Job for the service. It should get the Pipeline script from this repository.



The job should get branch name as a parameter, deploy the service (using the branch name), run it and make sure it's ready to be used in production (see General Guidelines).



We understand there might be a short service downtime when re-deploying a service, that’s fine.



Docker

Create a Dockerfile for building your counter-service into a docker image.

Add a "build" stage into your pipeline script and deploy the counter-service as a docker container.



Bonus: Connect a jnlp docker Jenkins agent to the Jenkins master.



Bonus: Make sure your pipeline script runs on the agent and not on the master.



Deliverables

·       The url to your "counter-service", exposed on port 80.



·       A working Jenkins system with a Pipeline deployment job for the counter-service. exposed On port 443



·       Upon commit & push, code should pass CI/CD and reach the "prod".

o   for example: changing something on the get, commit & push, the get web page should change.



·       Send to me ( achisolomon)  for code review via A SCM Merge / pull - Request from your branch to master, containing all of the code for this exercise.

The Merge-Request should contain a short description of your changes, and any other comment you’d like us to know of.



General Guidelines



Spend some time on designing your solution.

Think about operational use cases from the real world. What happens if a service crashes? How much effort will it take to create a new service?



Good Luck!

Achi


#!groovy

pipeline {
    agent agent1
    stages {
        stage('Checkout'){
            steps {
                /* checkout scm */
                git branch: '${env.BRANCH_NAME}', url: 'git@github.com:thehouk/test-exercise.git'
                }
              }
        stage('Build Docker'){
            steps {
                /* build image on remote machine */
                sh '''alias dockerexercise="docker -H=172.31.39.174:2375"
                      dockerexercise build -t backend:${env.BRANCH_NAME} -f Dockerfile .
                '''
                }
              }
        stage('Deploy'){
            steps {
                /* run container on remote machine */
                sh '''alias dockerexercise="docker -H=172.31.39.174:2375"
                      dockerexercise run --name checkpoint-exercise -p 80:3000 --restart unless-stopped -d backend:${env.BRANCH_NAME}
                      '''
                  }
                }
              }
    post{
        success {
              mail body: 'project build successful',
                   from: 'xxxx@yyyyy.com',
                   replyTo: 'xxxx@yyyy.com',
                   subject: 'project build successful',
                   to: 'yyyyy@yyyy.com'
                  }
        failure {
              mail body: "project build error is here: ${env.BUILD_URL}" ,
                   from: 'xxxx@yyyy.com',
                   replyTo: 'yyyy@yyyy.com',
                   subject: 'project build failed',
                   to: 'zzzz@yyyyy.com'
                   }
        }

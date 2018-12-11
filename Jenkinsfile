pipeline {
    agent {
        node {
            label 'agent1'
            sh '''alias dockerexercise="docker -H=10.250.2.237:2375"'''
            }
          }
    stages {
        stage('Checkout'){
            steps {
                /* checkout scm */
                git branch: '${BRANCH_NAME}', credentialsId: '7b8f5335-2f83-4e06-a80d-6b739328acfd', url: 'https://github.com/thehouk/test-exercise.git'
                }
              }
        stage('Build Docker'){
            steps {
                /* build image on remote machine */
<<<<<<< HEAD
                sh '''alias dockerexercise="docker -H=10.250.2.237:2375"'''
                sh "dockerexercise build -t backend:${BRANCH_NAME} -f Dockerfile ."
=======
                sh '''dockerexercise build -t backend:${BRANCH_NAME} -f Dockerfile .'''
>>>>>>> aa200022c127ae8c69b7290ae0aa4d521befd909
                }
              }
        stage('Deploy'){
            steps {
                /* run container on remote machine */
<<<<<<< HEAD
                sh '''alias dockerexercise="docker -H=10.250.2.237:2375"'''
                sh "dockerexercise run --name checkpoint-exercise -p 80:3000 --restart unless-stopped -d backend:${BRANCH_NAME} "   
=======
                sh '''dockerexercise run --name checkpoint-exercise -p 80:3000 --restart unless-stopped -d backend:${BRANCH_NAME}
                      '''
>>>>>>> aa200022c127ae8c69b7290ae0aa4d521befd909
                  }
                }
              }
    post{
        success {
              echo 'whole pipeline successful'
                  }
        failure {
              echo 'pipeline failed, at least one step failed'
                   }
        }
}

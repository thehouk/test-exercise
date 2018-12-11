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
                sh '''dockerexercise build -t backend:${BRANCH_NAME} -f Dockerfile .'''
                }
              }
        stage('Deploy'){
            steps {
                /* run container on remote machine */
                sh '''dockerexercise run --name checkpoint-exercise -p 80:3000 --restart unless-stopped -d backend:${BRANCH_NAME}
                      '''
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

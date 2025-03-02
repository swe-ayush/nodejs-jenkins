pipeline {
    agent {
        dockerfile true
    }
    stages {
        stage('Clean and Install Dependencies') {
            steps {
                script {
                    sh 'npm install'
                }
            }
        }
        stage('Run Tests') {
            steps {
                sh 'npm test'
            }
        }
        stage('Build Docker Image') {
            steps {
                script {
                    def imageName = "my-node-app:${BUILD_NUMBER}"
                    docker.build(imageName)
                }
            }
        }
        stage('Run Docker Container') {
            steps {
                script {
                    def imageName = "my-node-app:${BUILD_NUMBER}"
                    sh "docker run -d -p 3000:3000 ${imageName}"
                }
            }
        }
    }
}
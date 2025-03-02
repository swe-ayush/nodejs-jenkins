pipeline {
    agent {
        dockerfile true
    }
    stages {
        stage('Clean and Install Dependencies') {
            steps {
                script {
                    // Remove existing node_modules
                    sh 'rm -rf node_modules'

                    // Install only the dependencies listed in package.json
                    sh 'npm install --package-lock-only' // Install based on package-lock.json (if present)
                    sh 'npm install' // Install dependencies from lock file, or package.json
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
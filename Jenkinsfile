pipeline {
    agent any  // Use any available Jenkins agent

    tools {
        nodejs 'node 22'  // Refer to the NodeJS version configured in Jenkins (installed via NodeJS plugin)
    }

    environment {
        APP_NAME = 'node-app'
        DOCKER_IMAGE = 'node-app-image'  // Base name for the image
        BUILD_NUMBER = env.BUILD_NUMBER  // Jenkins build number
    }
    
    stages {
        stage('Checkout Code') {
            steps {
                script {
                    // Clone the public Git repository
                    git branch: 'main', url: 'https://github.com/swe-ayush/nodejs-jenkins.git'  // Replace with your actual public Git repo
                }
            }
        }

        stage('Install Dependencies') {
            steps {
                script {
                    // Run npm install directly on the Jenkins agent (no Docker container)
                    sh 'npm install'
                }
            }
        }

        stage('Run Tests') {
            steps {
                script {
                    // Run tests using npm
                    sh 'npm test'
                }
            }
        }

        stage('Build Docker Image') {
            steps {
                script {
                    // Build Docker image (this step can still use Docker to build the image)
                    sh 'docker build -t ${DOCKER_IMAGE}:${BUILD_NUMBER} .'
                }
            }
        }

        stage('Run Docker Container') {
            steps {
                script {
                    // Run Docker container (this step can still use Docker to run the container)
                    sh 'docker run -d --name ${APP_NAME}-${BUILD_NUMBER} -p 3000:3000 ${DOCKER_IMAGE}:${BUILD_NUMBER}'
                }
            }
        }
    }

    post {
        success {
            echo "Build and deployment succeeded!"
        }
        failure {
            echo "Build or deployment failed!"
        }
    }
}

pipeline {
    agent any  // Use any available executor

    environment {
        // Define environment variables
        APP_NAME = 'node-app'
        DOCKER_IMAGE = 'node-app-image'
    }

    stages {
        stage('Checkout Code') {
            steps {
                script {
                    // Clone the public Git repository
                    git branch: 'main', url: 'https://github.com/swe-ayush/nodejs-jenkins.git'
                }
            }
        }

        stage('Install Dependencies') {
            steps {
                script {
                    // Install Node.js dependencies
                    sh 'npm install'
                }
            }
        }

        stage('Run Tests') {
            steps {
                script {
                    // Run the tests using npm
                    sh 'npm test'
                }
            }
        }

        stage('Build Docker Image') {
            steps {
                script {
                    // Build the Docker image
                    sh 'docker build -t ${DOCKER_IMAGE}:${BUILD_NUMBER} .'
                }
            }
        }

        stage('Run Docker Container') {
            steps {
                script {
                    // Run the app in a Docker container locally (no registry)
                    sh """
                    docker run -d --name ${APP_NAME}-${BUILD_NUMBER} -p 3000:3000 ${DOCKER_IMAGE}:${BUILD_NUMBER}
                    """
                }
            }
        }
    }

    post {
        success {
            // Notify on success (e.g., via Slack, Email, etc.)
            echo "Build and deployment succeeded!"
        }
        failure {
            // Notify on failure
            echo "Build or deployment failed!"
        }
        always {
            // Clean up Docker container after deployment
            sh 'docker system prune -f'
        }
    }
}

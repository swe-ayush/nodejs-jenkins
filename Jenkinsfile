pipeline {
    agent {
        dockerfile true  // This will automatically build the Docker image based on the Dockerfile
    }
    stages {
        stage('Run Tests') {
            steps {
                // No need to build the image again, just run tests inside the prebuilt image
                sh 'npm test'
            }
        }
        stage('Run Docker Container') {
            steps {
                script {
                    // Use the already built image from the previous step
                    def imageName = "my-node-app:${BUILD_NUMBER}"
                    sh "docker run -d -p 3000:3000 ${imageName}"
                }
            }
        }
    }
}

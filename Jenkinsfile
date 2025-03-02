pipeline {
    agent {
        dockerfile true  // This tells Jenkins to automatically build the Docker image using the Dockerfile
    }
    environment {
        NODE_ENV = 'development'  // Ensure dev dependencies are available for testing
    }
    stages {
        stage('Run Tests') {
            steps {
                script {
                    // Since the image is already built from the Dockerfile in the agent block,
                    // there's no need to build it again.
                    // Just run the tests inside the container.
                    def imageName = "my-node-app:${BUILD_NUMBER}"  // This uses the automatically built image
                    sh "docker run --rm ${imageName} npm test"  // Run tests in the already built image
                }
            }
        }
        stage('Run Docker Container') {
            steps {
                script {
                    // Run the container after tests are successful
                    def imageName = "my-node-app:${BUILD_NUMBER}"
                    sh "docker run -d -p 3000:3000 ${imageName}"  // Run the container with the built image
                }
            }
        }
    }
}
